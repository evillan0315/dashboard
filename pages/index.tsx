
import * as React from "react";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";
import { useSession } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { auth, providerMap } from "../auth";
import Link from "next/link";

export default function HomePage() {
  const { data: session } = useSession();
  return (
    <Container>
      <Typography variant="h1">Welcome to the Toolpad</Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Dashboard</Typography>
            <Typography variant="body1">Manage your dashboard system</Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href="/dashboard"
            >
              Go to Dashboard
            </Button>
          </Paper>
    </Container>
  );
}
HomePage.getLayout = (page: React.ReactNode) => page;
HomePage.requireAuth = false;


