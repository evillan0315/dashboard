// pages/index.tsx

import React from "react";
import { Box, Container } from "@mui/material";
import SkillsSection from "./SkillsSection";
import WorkSection from "./WorkSection";
import ProjectsSection from "./ProjectsSection";

import { Basics, Data, Projects, Skills, Work } from "../types/models";

interface ResumeSectionProps {
  basics: Basics;
  skills: Skills[];
  work: Work[];
  projects: Projects[];
}
const ResumeSection: React.FC<ResumeSectionProps> = ({
  basics,
  skills,
  work,
  projects,
}) => {
  return (
    <Box>
      <SkillsSection skills={skills} />
      <Container className="py-10">
        <WorkSection work={work} />
      </Container>
      <Container className="py-20">
        <ProjectsSection projects={projects} />
      </Container>
    </Box>
  );
};

export default ResumeSection;
