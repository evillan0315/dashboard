"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

interface Projects {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  url: string;
  frontend: {
    technologies: string[];
    features: string[];
  };
  backend: {
    technologies: string[];
    features: string[];
  };
  database: {
    technologies: string[];
    features: string[];
  };
  api: {
    technologies: string[];
    features: string[];
  };
  deployment: {
    tools: string[];
    features: string[];
  };
}

interface ProjectPinProps {
  project: Projects;
}

export function ProjectPin({ project }: ProjectPinProps) {
  // Destructure and type the project parameter
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title={project?.name} href={project.url}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {project?.name}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">{project?.description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
