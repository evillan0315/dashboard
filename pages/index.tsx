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
  const code = `function AppLayout({ children }: { children: React.ReactNode }) {
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
}
`;
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
          <Divider className="py-12" />
          <Grid2
            container
            spacing={4}
            direction={"row-reverse"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid2 size={6}>
              <Typography
                className="dark:text-white light:text-black"
                variant="h2"
                sx={{ fontWeight: "bold" }}
              >
                {hText[0].header}
              </Typography>
              <Typography
                className="dark:text-white light:text-black"
                variant="h4"
              >
                {hText[0].subheader}
              </Typography>
            </Grid2>
            <Grid2 size={6}>
              <Box px={4}>
                <CodeBlock
                  language="typescript"
                  filename="execute.ts"
                  code={code}
                />
              </Box>
            </Grid2>
          </Grid2>
          <Divider className="mt-10" />

          <HeroSection
            title={hText[1].header}
            subtitle={hText[1].subheader}
            image={
              "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />

          <Container className="">
            <WorkSection work={rSData.work} />
          </Container>
          <Container className="py-20">
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
