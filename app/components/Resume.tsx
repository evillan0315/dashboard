// pages/index.tsx

import React from "react";
import { Container } from "@mui/material";
import AvatarSection from "../components/AvatarSection";
import SkillsSection from "../components/SkillsSection";
import WorkSection from "../components/WorkSection";
import ProjectsSection from "./ProjectsSection";
import resumeData from '../../data/resume.json'
const ResumeSection = () => {
  const {basics, skills, work, projects} = resumeData as any;
  return (
    <Container maxWidth="md">
      <AvatarSection basics={basics} />

      <SkillsSection skills={skills} />

      <WorkSection work={work} />
      <ProjectsSection projects={projects} />
    </Container>
  );
};

export default ResumeSection;
