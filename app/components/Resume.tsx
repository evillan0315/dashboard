// pages/index.tsx

import React from "react";
import { Button, Container } from "@mui/material";
import { resumeData } from "../../pages/data/data";
import AvatarSection from "../components/AvatarSection";
import SkillsSection from "../components/SkillsSection";
import WorkSection from "../components/WorkSection";
import ProjectsSection from "./ProjectsSection";


const Resume = () => {
  const { basics, work, skills, projects } = resumeData;

  return (
    <Container maxWidth="md">
      <AvatarSection
        name={basics.name}
        image={basics.image}
        label={basics.label}
        summary={basics.summary}
        url={basics.url}
        phone={basics.phone}
        email={basics.email}
      />
      
      <SkillsSection skills={skills} />

      <WorkSection work={work} />
      <ProjectsSection projects={projects} />
    </Container>
  );
};

export default Resume;
