
import * as React from "react";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";
import { useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { auth, providerMap } from "../auth";
import Link from "next/link";
import ResumePage from "../app/components/Resume";

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <ResumePage />
  );
}
HomePage.getLayout = (page: React.ReactNode) => page;
HomePage.requireAuth = false;


