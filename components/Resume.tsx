// pages/index.tsx

import React from "react";
import { Box, Container } from "@mui/material";
import AvatarSection from "./AvatarSection";
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
  console.log(skills);
  return (
    <Box display={"-ms-flexbox"}>
      <Container>
        <AvatarSection basics={basics} />
      </Container>
      <Container>
        <SkillsSection skills={skills} />
      </Container>
      <Container>
        <WorkSection work={work} />
      </Container>
      <Container>
        <ProjectsSection projects={projects} />
      </Container>
    </Box>
  );
};

export default ResumeSection;
