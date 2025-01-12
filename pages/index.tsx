"use client";
import * as React from "react";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";
import ResumeSection from "../components/Resume";
import ResumeData from "../data/resume";
import HomepageNav from "../components/HomepageNav";
import Footer from "../components/Footer";

export default function HomePage() {
  const rSData = ResumeData;
  return (
    <main>
      <HomepageNav />
      <ResumeSection
        basics={rSData.basics}
        skills={rSData.skills}
        work={rSData.work}
        projects={rSData.projects}
      />
      <Footer />
    </main>
  );
}
HomePage.getLayout = (page: React.ReactNode) => page;
HomePage.requireAuth = false;
