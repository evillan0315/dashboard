
import * as React from "react";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";
import { useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { auth, providerMap } from "../auth";
import Link from "next/link";
import Dashboard from "../app/components/Dashboard";



export default function HomePage() {

  const { data: session } = useSession();
  return (
    <Dashboard />
  );
}
HomePage.getLayout = (page: React.ReactNode) => page;
HomePage.requireAuth = false;


