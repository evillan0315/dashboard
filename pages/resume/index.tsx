"use client";
import * as React from "react";
import ResumeData from "../../data/resume";

import ResumeSection from "../../components/Resume";

export default function ResumePage() {
  const rSData = ResumeData;
  return (
    <ResumeSection
      basics={rSData.basics}
      skills={rSData.skills}
      work={rSData.work}
      projects={rSData.projects}
    />
  );
}
