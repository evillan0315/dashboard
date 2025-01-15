import { GetServerSideProps } from "next";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  Grid2,
} from "@mui/material";
import Project from "../../types/projects";
import { useRouter } from "next/router";
const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await prisma.project.findMany();
  await prisma.$disconnect();

  // Serialize dates to ISO strings for JSON compatibility
  const serializedProjects = projects.map((project) => ({
    ...project,
    startDate: project.startDate.toISOString(),
    endDate: project.endDate.toISOString(),
  }));

  return {
    props: { projects: serializedProjects },
  };
};

const ProjectsPage = ({ projects }: { projects: Project[] }) => {
  const router = useRouter();

  const handleAddNewProject = () => {
    router.push("/projects/new");
  };
  return (
    <Box className="p-6">
      <Grid2
        container
        alignItems="center"
        spacing={3}
        justifyContent="space-between"
      >
        <Typography
          variant="h4"
          className="mb-4 text-gray-800 dark:text-gray-200"
        >
          Projects
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddNewProject}
        >
          Add New Project
        </Button>
      </Grid2>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card className="shadow-lg hover:shadow-xl dark:bg-gray-800">
              <CardContent>
                <Typography
                  variant="h6"
                  className="text-gray-800 dark:text-gray-200"
                >
                  {project.name}
                </Typography>
                <Typography
                  variant="body2"
                  className="text-gray-500 dark:text-gray-400"
                >
                  {new Date(project.startDate).toLocaleDateString()} -{" "}
                  {new Date(project.endDate).toLocaleDateString()}
                </Typography>
                <Typography
                  variant="body2"
                  className="mt-2 text-gray-600 dark:text-gray-300"
                >
                  {project.description}
                </Typography>
                <Link href={`/projects/${project.id}`} passHref>
                  <Button
                    variant="contained"
                    color="primary"
                    className="mt-4 w-full"
                    component="a"
                  >
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
ProjectsPage.requireAuth = true;
export default ProjectsPage;
