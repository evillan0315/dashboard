import { useSession } from 'next-auth/react';
import * as React from 'react';
import ResumeData from "../../data/resume";
import { Data } from "../../types/models";
import ResumeSection from '../../app/components/Resume';

export default function ResumePage() {
  const rSData = ResumeData;
  const { data: session } = useSession();
  return (
    <ResumeSection basics={rSData.basics} skills={rSData.skills} work={rSData.work} projects={rSData.projects} />
  );
}
ResumePage.getLayout = (page: React.ReactNode) => page;
ResumePage.requireAuth = false;
