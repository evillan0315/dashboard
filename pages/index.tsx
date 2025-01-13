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
            projectLink={"http://www"}
            contactLink={"http://ww"}
          />

          <SkillsSection skills={rSData.skills} />

          <Box>
            <HeroSection
              title={hText[0].header}
              subtitle={hText[0].subheader}
              Component={HeroCode}
              reverse={true}
            />
          </Box>
          <Box>
            <HeroSection
              title={hText[1].header}
              subtitle={hText[1].subheader}
              Component={HeroCode}
              projectLink={"http://www"}
              contactLink={"http://ww"}
            />
          </Box>
          <Container className="">
            <WorkSection work={rSData.work} />
          </Container>
          <Container className="lg:pt-8 md:pt-6 sm:pt-4">
            <ProjectsSection projects={rSData.projects} />
          </Container>
          <Footer />
        </PageContainer>
      </div>
    </>
  );
}
HomePage.getLayout = (page: React.ReactNode) => page;
HomePage.requireAuth = false;
