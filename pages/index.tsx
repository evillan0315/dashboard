"use client";
import * as React from "react";
import {
  Button,
  Container,
  Typography,
  Grid2,
  Paper,
  Stack,
  Grid,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import ResumeSection from "../components/Resume";
import { styled, useTheme } from "@mui/material/styles";
import ResumeData, { heroText, Projects, Testimonials } from "../data/resume";

import Footer from "../components/Footer";
import { Login, Logout } from "@mui/icons-material";
import {
  PageContainer,
  PageHeaderToolbar,
  PageHeader,
} from "@toolpad/core/PageContainer";

import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import WorkSection from "../components/WorkSection";
import ProjectsSection from "../components/ProjectsSection";
import { CodeBlock } from "../components/ui/CodeBlock";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
import { CardBody, CardContainer, CardItem } from "../components/ui/3D-Card";
import Image from "next/image";
import { FaAws, FaGit, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import Logo from "../components/Logo";
import CloudinaryUpload from "../components/CloudinaryUpload";
import { ContainerScroll } from "../components/ui/ContainerScroll";
import ContainerScrollSection from "../components/ContainerScrollSection";
import BackgroundLinesSection from "../components/BackgroundLinesSection";
import { ClassNames } from "@emotion/react";
import TestimonialsSection from "../components/TestimonialsSection";
import ScrollIMage from "../assets/images/code-python-01.png";
import { TimelineSection } from "../components/TimelineSection";
import Project from "../types/projects";
const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));
function CustomPageToolbar() {
  return (
    <PageHeaderToolbar
      sx={{
        width: "100%",
        position: "fixed",
        zIndex: 10,
      }}
    >
      <Grid2 container direction="row" alignContent={"center"}>
        <Grid2>
          <Logo width={70} height={70} />
        </Grid2>

        {/* <Grid2
          container
          direction="row"
          spacing={1}
          alignItems="center"
          justifyItems={"center"}
          width={"100%"}
        >
          <Button
            variant="outlined"
            size="small"
            startIcon={<Login fontSize="inherit" />}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            size="small"
            startIcon={<Logout fontSize="inherit" />}
          >
            Logout
          </Button>
        </Grid2> */}
      </Grid2>
    </PageHeaderToolbar>
  );
}
function CustomPageHeader() {
  return (
    <>
      <PageHeader slots={{ toolbar: CustomPageToolbar }} />
    </>
  );
}
export default function HomePage() {
  const scImage = ScrollIMage;
  const hText = heroText;
  const rSData = ResumeData;
  const [projects, setProjects] = React.useState<Project[]>([]); // Store fetched projects data

  React.useEffect(() => {
    // Fetch projects data from the backend API
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects"); // Update this if needed
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []); // Only run on mount
  const codeB = {
    code: `
require("dotenv").config(); // This should be at the top
const express = require("express");
const cors = require("./middlewares/corsConfig");
const textRoutes = require("./routes/textRoutes");
const testRoutes = require("./routes/testRoutes");
const resultRoutes = require("./routes/resultRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const connectToDatabase = require("./database/database");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(cors);

// Connect to the database
connectToDatabase();

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/text", textRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/users", userRoutes);
app.use("/api", uploadRoutes);
//Testing
app.use("/api/test", testRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:5000");
});
` as string,
    language: "javascript",
    filename: "server.js",
  };
  const scrollImage =
    "https://res.cloudinary.com/dt3mokrx9/image/upload/v1736800049/uploads/vadercun9cishgyghtsa.png";
  const Card3D = () => {
    return (
      <>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  shadow-lg dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-zinc-950 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl md:px-10 md:py-8 border text-center">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <Typography
                variant={"h5"}
                sx={{ fontWeight: "200", marginTop: "5px" }}
              >
                {hText[2].header}
              </Typography>
            </CardItem>
            <CardItem translateZ="100" className="w-full py-6">
              <Image
                src={
                  "https://images.unsplash.com/photo-1516101922849-2bf0be616449?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                height="1920"
                width="1080"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              <Typography variant="body1" sx={{ fontWeight: "200" }}>
                {hText[2].subheader}
              </Typography>
            </CardItem>
            <CardItem
              translateZ={80}
              className="p-4  text-white text-xs font-bold"
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={5}
              >
                <FaPython size={40} />
                <FaReact size={40} />
                <FaNodeJs size={40} />
                <FaAws size={40} />
                <FaGit size={40} />
              </Stack>
            </CardItem>
          </CardBody>
        </CardContainer>
      </>
    );
  };
  const HeroCode = () => {
    return (
      <CodeBlock
        language={codeB.language}
        filename={codeB.filename}
        code={codeB.code as string}
      />
    );
  };
  return (
    <Box className="relative h-screen w-full">
      <PageContainer
        maxWidth={false}
        component={"div"}
        sx={{}}
        slots={{
          header: CustomPageHeader,
        }}
      >
        <div className="mt-10">
          <BackgroundLinesSection
            title={rSData.basics.quotes[0]}
            subtitle={rSData.basics.subheading}
            projectLink={"#"}
            contactLink={"#"}
          />
        </div>
        <Container>
          <ContainerScrollSection
            title={hText[5].header}
            subtitle={hText[5].subheader}
            image={hText[5].image}
          />
        </Container>
        <HeroSection
          title={hText[0].header}
          subtitle={hText[0].subheader}
          Component={Card3D}
          reverse={true}
        />
        <TimelineSection projects={projects} />
        <SkillsSection skills={rSData.skills} />
        <HeroSection
          title={hText[3].header}
          subtitle={hText[3].subheader}
          projectLink={"#"}
          contactLink={"#"}
        />
        <HeroSection
          title={hText[1].header}
          subtitle={hText[1].subheader}
          Component={HeroCode}
          projectLink={"#"}
          contactLink={"#"}
        />
        <HeroSection
          title={hText[4].header}
          subtitle={hText[4].subheader}
          Component={CloudinaryUpload}
          projectLink={"#"}
          contactLink={"#"}
          reverse
        />

        <TestimonialsSection />
        <Footer />
      </PageContainer>
    </Box>
  );
}
HomePage.getLayout = (page: React.ReactNode) => page;
HomePage.requireAuth = false;
