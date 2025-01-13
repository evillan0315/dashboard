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
import ResumeData, { heroText } from "../data/resume";

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

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));
function CustomPageToolbar() {
  return (
    <PageHeaderToolbar>
      <Stack direction="row" spacing={1} alignItems="center">
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
      </Stack>
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
  const hText = heroText;
  const rSData = ResumeData;
  const codeB = {
    code: `function AppLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppProvider
        theme={undefined}
        navigation={NAVIGATION}
        branding={BRANDING}
        session={session}
        authentication={AUTHENTICATION}
      >
        <div className="relative h-screen w-full grid-background bg-zinc-950 overflow-scroll">
          {children}
        </div>
      </AppProvider>
    </React.Fragment>
  );
}` as string,
    language: "typescript",
    filename: "",
  };
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
    <>
      <div className="relative h-screen">
        <PageContainer
          maxWidth={false}
          sx={{ padding: 0 }}
          slots={{
            header: CustomPageHeader,
          }}
        >
          <HeroSection
            title={rSData.basics.quotes[0]}
            subtitle={rSData.basics.subheading}
            projectLink={"#"}
            contactLink={"#"}
          />

          <SkillsSection skills={rSData.skills} />

          <Box>
            <HeroSection
              title={hText[0].header}
              subtitle={hText[0].subheader}
              Component={Card3D}
              reverse={true}
            />
          </Box>
          <Box>
            <HeroSection
              title={hText[3].header}
              subtitle={hText[3].subheader}
              projectLink={"#"}
              contactLink={"#"}
            />
          </Box>
          <Box>
            <HeroSection
              title={hText[1].header}
              subtitle={hText[1].subheader}
              Component={HeroCode}
              projectLink={"#"}
              contactLink={"#"}
            />
          </Box>
          {/*           <Container className="">
            <WorkSection work={rSData.work} />
          </Container> */}
          {/*           <Container className="lg:pt-8 md:pt-6 sm:pt-4">
            <ProjectsSection projects={rSData.projects} />
          </Container> */}
          <Footer />
        </PageContainer>
      </div>
    </>
  );
}
HomePage.getLayout = (page: React.ReactNode) => page;
HomePage.requireAuth = false;
