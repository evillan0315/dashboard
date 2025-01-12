// pages/index.tsx

import React from "react";
import { Box, Container } from "@mui/material";
import AvatarSection from "./AvatarSection";
import SkillsSection from "./SkillsSection";
import WorkSection from "./WorkSection";
import ProjectsSection from "./ProjectsSection";

import { Basics, Data, Projects, Skills, Work } from "../types/models";

interface ResumeSectionProps {
  jobTech: any;
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
  jobTech,
}) => {
  console.log(skills);
  return (
    <Box>
      <AvatarSection basics={basics} />

      <SkillsSection skills={skills} />
      <div className="py-20">
        <WorkSection work={work} jobTech={jobTech} />
      </div>
      <ProjectsSection projects={projects} />
    </Box>
  );
};

export default ResumeSection;
