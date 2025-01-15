// pages/projects/[id].tsx
import { PrismaClient, Project } from "@prisma/client";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import ProjectType from "../../types/projects";
import { ToastContainer, toast } from "react-toastify"; // Optional for notifications
import "react-toastify/dist/ReactToastify.css";

const prisma = new PrismaClient();

interface Props {
  project: ProjectType | null;
}

const EditProjectPage = ({ project }: Props) => {
  const [formData, setFormData] = useState<Project>({
    id: project?.id || 0,
    name: project?.name || "",
    //startDate: new Date(project?.startDate || "").toISOString().split("T")[0],
    //endDate: new Date(project?.endDate || "").toISOString().split("T")[0],
    startDate: new Date(project?.startDate || new Date()),
    endDate: new Date(project?.endDate || new Date()),
    description: project?.description || "",
    url: project?.url || "",
    frontendId: project?.frontendId || 0,
    backendId: project?.backendId || 0,
    databaseId: project?.databaseId || 0,
    apiId: project?.apiId || 0,
    deploymentId: project?.deploymentId || 0,
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!project) {
      router.push("/404");
    }
  }, [project]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev!,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/projects`, {
        method: "PUT",
        body: JSON.stringify({
          ...formData,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const updatedProject = await res.json();

      if (res.status === 200) {
        toast.success("Project updated successfully!");
        router.push("/projects"); // Redirect after success
      } else {
        console.log(res, formData);
        toast.error(updatedProject.error || "Failed to update project");
      }
    } catch (error) {
      toast.error("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (!formData || loading) {
    return (
      <Container className="flex justify-center items-center h-screen">
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" className="my-8">
      <Typography variant="h4" className="mb-4">
        Edit Project
      </Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Project Name"
          variant="outlined"
          fullWidth
          name="name"
          value={formData?.name || ""}
          onChange={handleChange}
        />
        <TextField
          label="Start Date"
          type="date"
          name="startDate"
          value={formData.startDate.toISOString().split("T")[0]} // Format for display
          onChange={(e) => {
            const dateValue = new Date(e.target.value); // Convert string to Date
            setFormData({ ...formData, startDate: dateValue }); // Update formData
          }}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="End Date"
          type="date"
          name="endDate"
          value={formData.endDate.toISOString().split("T")[0]} // Format for display
          onChange={(e) => {
            const dateValue = new Date(e.target.value); // Convert string to Date
            setFormData({ ...formData, endDate: dateValue }); // Update formData
          }}
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          name="description"
          value={formData?.description || ""}
          onChange={handleChange}
        />
        <TextField
          label="URL"
          variant="outlined"
          fullWidth
          name="url"
          value={formData?.url || ""}
          onChange={handleChange}
        />
        <Box className="flex justify-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Project"}
          </Button>
        </Box>
      </form>
      <ToastContainer />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    const project = await prisma.project.findUnique({
      where: { id: Number(id) },
      include: {
        frontend: true,
        backend: true,
        database: true,
        api: true,
        deployment: true,
      },
    });

    if (!project) {
      return { notFound: true };
    }

    const serializedProject = {
      ...project,
      startDate: project.startDate.toISOString(),
      endDate: project.endDate.toISOString(),
    };

    return {
      props: {
        project: serializedProject,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  } finally {
    await prisma.$disconnect();
  }
};

EditProjectPage.requireAuth = true;
export default EditProjectPage;
