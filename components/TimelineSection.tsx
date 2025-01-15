import React from "react";
import Image from "next/image";
import { ProjectPin } from "./ProjectPin";
import { Timeline } from "./ui/timeline";
import Project from "../types/projects";
import ProjectComponent from "./ProjectComponent";

interface TimelineEntry {
  title: string;
  startDate: string;
  endDate: string;
  content: React.ReactNode;
}

interface TimelineSectionProps {
  projects: Project[];
}

export function TimelineSection({ projects }: TimelineSectionProps) {
  // Map through the projects array and create TimelineEntry objects
  const projectLoop: TimelineEntry[] = projects.map((project) => ({
    title: project.name,
    startDate: String(project.startDate),
    endDate: String(project.endDate),
    content: <ProjectComponent project={project} />,
  }));
  /*   const projectLoop: TimelineEntry[] =
    projects?.map((project) => ({
      title: project.name,
      startDate: project.startDate,
      endDate: project.endDate,
      content: <ProjectPin project={project} />,
    })) || []; */

  // Placeholder for a custom timeline rendering

  return (
    <div>
      <Timeline data={projectLoop} />
    </div>
  );
}
