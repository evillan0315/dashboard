// components/ProjectsSection.tsx

import React from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Card,
  CardContent,
  Chip,
  Grid,
  Grid2,
} from "@mui/material";
import Project from "./Project";

interface FeatureSectionProps {
  label: string;
  features: string[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ label, features }) => (
  <>
    <Typography
      variant="body2"
      color="textSecondary"
      sx={{ fontWeight: "bold", mt: 1, mb: 0.5 }}
    >
      {label}
    </Typography>
    {label.toLowerCase().includes("technologies") ? (
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
        {features.map((feature, idx) => (
          <Chip key={idx} label={feature} size="small" color="primary" />
        ))}
      </Box>
    ) : (
      <List sx={{ padding: 0, margin: 0 }}>
        {features.map((feature, idx) => (
          <ListItem key={idx} sx={{ padding: 0, marginBottom: 0.5 }}>
            <ListItemText primary={feature} sx={{ margin: 0 }} />
          </ListItem>
        ))}
      </List>
    )}
  </>
);

interface ProjectsSectionProps {
  projects: any[];
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
        {projects.map((project, index) => (
          <>
            <Project
              key={index}
              project={project}
            />
          </>
        ))}
      </Grid2>
    </Box>
  );
};

export default ProjectsSection;
