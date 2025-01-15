import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { ArrowRight, Link } from "@mui/icons-material";
import { Button, CardContent, Grid2, Icon } from "@mui/material";
import Project from "../types/projects";

interface ProjectProps {
  project: Project;
}

const ProjectComponent: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Grid2 width={"100%"} marginBottom={4}>
      <Card
        variant="outlined"
        className=" dark:bg-neutral-900 text-white light:bg-black max-w-lg"
      >
        <CardContent>
          <Box sx={{ p: 2 }}>
            <Stack
              direction={"row"}
              sx={{
                justifyContent: "space-between",
                alignItems: "left",
                marginBottom: "-.5em",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography>
                <ArrowRight />
              </Typography>
            </Stack>
            <Typography gutterBottom variant="body2">
              {String(project.startDate)} / {String(project.endDate)}
            </Typography>
          </Box>
          <Divider />
          <Stack>
            <Box sx={{ p: 2 }}>
              <Typography gutterBottom variant="body2">
                {project.description}
              </Typography>
              <Box>
                <Typography gutterBottom variant="h5">
                  Key Highlights
                </Typography>
                {project.frontend?.features?.map((feature, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    lineHeight="1.3em"
                    fontSize={12}
                  >
                    {feature}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Stack>
          <Divider />
          <Grid2 direction={"row"} gap={2}>
            <Box sx={{ p: 2 }}>
              <Typography gutterBottom variant="h5">
                Frontend
              </Typography>
              <Grid2 marginBottom={2}>
                {project.frontend.features?.map((feature, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    lineHeight="1.3em"
                    fontSize={12}
                  >
                    {feature}
                  </Typography>
                ))}
              </Grid2>
              <Stack
                direction="row"
                spacing={1}
                sx={{ color: "text.secondary" }}
              >
                {project.frontend.technologies?.map((feature, idx) => (
                  <Chip
                    key={idx}
                    color="primary"
                    label={feature}
                    size="small"
                  />
                ))}
              </Stack>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography gutterBottom variant="h5">
                Backend
              </Typography>
              <Stack marginBottom={2}>
                {project.backend.features?.map((feature, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    lineHeight="1.4em"
                    fontSize={12}
                  >
                    {feature}
                  </Typography>
                ))}
              </Stack>
              <Stack direction="row" spacing={1}>
                {project.backend.technologies?.map((feature, idx) => (
                  <Chip
                    key={idx}
                    color="secondary"
                    label={feature}
                    size="small"
                  />
                ))}
              </Stack>
            </Box>

            <Box sx={{ p: 2 }}>
              <Typography gutterBottom variant="h5">
                Database
              </Typography>
              <Stack marginBottom={2}>
                {project.database.features?.map((feature, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    lineHeight="1.4em"
                    fontSize={12}
                  >
                    {feature}
                  </Typography>
                ))}
              </Stack>
              <Stack direction="row" spacing={1}>
                {project.database.technologies?.map((feature, idx) => (
                  <Chip
                    key={idx}
                    color="secondary"
                    label={feature}
                    size="small"
                  />
                ))}
              </Stack>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography gutterBottom variant="h5">
                Api Integration
              </Typography>
              <Stack marginBottom={2}>
                {project.api.features?.map((feature, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    lineHeight="1.4em"
                    fontSize={12}
                  >
                    {feature}
                  </Typography>
                ))}
              </Stack>
              <Stack direction="row" spacing={1}>
                {project.api.technologies?.map((feature, idx) => (
                  <Chip
                    key={idx}
                    color="secondary"
                    label={feature}
                    size="small"
                  />
                ))}
              </Stack>
            </Box>
            <Box sx={{ p: 2 }}>
              <Typography gutterBottom variant="h5">
                Deployment
              </Typography>
              <Stack marginBottom={2}>
                {project.deployment.features?.map((feature, idx) => (
                  <Typography
                    key={idx}
                    variant="body2"
                    lineHeight="1.4em"
                    fontSize={12}
                  >
                    {feature}
                  </Typography>
                ))}
              </Stack>
              <Stack direction="row" spacing={1}>
                {project.deployment.technologies?.map((feature, idx) => (
                  <Chip
                    key={idx}
                    color="secondary"
                    label={feature}
                    size="small"
                  />
                ))}
              </Stack>
            </Box>
          </Grid2>
        </CardContent>
      </Card>
    </Grid2>
  );
};
export default ProjectComponent;
