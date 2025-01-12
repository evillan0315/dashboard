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
} from "@mui/material";
import ResumeSection from "../components/Resume";
import { styled, useTheme } from "@mui/material/styles";
import ResumeData from "../data/resume";

import Footer from "../components/Footer";
import { Login, Logout } from "@mui/icons-material";
import {
  PageContainer,
  PageHeaderToolbar,
  PageHeader,
} from "@toolpad/core/PageContainer";
import JobTech from "../data/resume";
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
  const rSData = ResumeData;

  return (
    <>
      <Paper variant="outlined" sx={{ width: "100%" }}>
        <Avatar
          alt={rSData.basics?.name}
          src={rSData.basics?.image}
          sx={{ width: 100, height: 100, marginBottom: 2 }}
        />
        <PageContainer
          slots={{
            header: CustomPageHeader,
          }}
        >
          <ResumeSection
            jobTech={JobTech}
            basics={rSData.basics}
            skills={rSData.skills}
            work={rSData.work}
            projects={rSData.projects}
          />
        </PageContainer>
      </Paper>
      <Footer />
    </>
  );
}
HomePage.getLayout = (page: React.ReactNode) => page;
HomePage.requireAuth = false;
