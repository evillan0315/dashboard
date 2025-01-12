"use client";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Dashboard from "../../components/Dashboard";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      <Typography>Welcome </Typography>;
    },
  });

  if (status === "loading") {
    return <Typography>Please Login </Typography>;
  }
  return <Dashboard />;
}

DashboardPage.requireAuth = true;
