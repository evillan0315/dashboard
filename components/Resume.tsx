// pages/index.tsx

import React from "react";
import { Box, Container } from "@mui/material";
import SkillsSection from "./SkillsSection";
import WorkSection from "./WorkSection";
import ProjectsSection from "./ProjectsSection";

import { Basics, Skills, Work } from "../types/models";
import Project from "../types/projects";

interface ResumeSectionProps {
  basics: Basics;
  skills: Skills[];
  work: Work[];
}
const ResumeSection: React.FC<ResumeSectionProps> = ({
  basics,
  skills,
  work,
}) => {
  return (
    <Box>
      <SkillsSection skills={skills} />
      <Container className="py-10">
        <WorkSection work={work} />
      </Container>
    </Box>
  );
};

export default ResumeSection;
