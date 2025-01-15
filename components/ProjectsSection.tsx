// components/ProjectsSection.tsx

import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import Project from "./ProjectComponent";
import Projects from "../types/projects";

interface ProjectsSectionProps {
  projects: Projects[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h3"
        gutterBottom
        align="left"
        sx={{ fontWeight: "300" }}
      >
        Projects
      </Typography>

      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
        {projects?.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Grid2>
    </Box>
  );
};

export default ProjectsSection;
