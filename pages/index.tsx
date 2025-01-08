
import * as React from "react";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";
import { useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { auth, providerMap } from "../auth";
import Link from "next/link";
import Dashboard from "../app/components/Dashboard";
import ResumePage from "./resume";
import Resume from "./resume";
import ResumeSection from "../app/components/Resume";
import ResumeData from "../data/resume";
import { Data } from "../types/models";


export default function HomePage() {
const rSData = ResumeData;
  const { data: session } = useSession();
  return (
    <ResumeSection basics={rSData.basics} skills={rSData.skills} work={rSData.work} projects={rSData.projects} />
  );
}
HomePage.getLayout = (page: React.ReactNode) => page;
HomePage.requireAuth = false;


