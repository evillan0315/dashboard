// pages/index.tsx

import React from "react";
import { Container } from "@mui/material";
import AvatarSection from "../components/AvatarSection";
import SkillsSection from "../components/SkillsSection";
import WorkSection from "../components/WorkSection";
import ProjectsSection from "./ProjectsSection";

import { Basics, Data, Projects, Skills, Work } from "../../types/models";

interface ResumeSectionProps {
  basics: Basics;
  skills: Skills[];
  work: Work[];
  projects: Projects[];
}
const ResumeSection: React.FC<ResumeSectionProps> = ({ basics,  skills, work, projects}) => {
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
