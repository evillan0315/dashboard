import React, { useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Grid2,
  setRef,
} from "@mui/material";
import Image from "next/image";
import { Header } from "./ui/ContainerScroll";
import HeroHeader from "./ui/HeroHeader";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  projectLink?: string;
  contactLink?: string;
  image?: string;
  reverse?: boolean;
  Component?: React.ElementType;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  projectLink,
  contactLink,
  image,
  reverse,
  Component,
}) => {
  const row = useRef();
  setRef(row, "row");
  if (reverse) {
    setRef(row, "reverse-row");
  }
  let hasComponent = false;
  if (Component) {
    hasComponent = true;
  }
  return (
    <Box
      component="section"
      maxWidth={{
        xs: "640px",
        sm: "1280px",
        md: "1920px",
      }}
      sx={{
        position: "relative", // Dark background color
        color: "white",
        textAlign: "center",
        my: {
          xs: 6,
          sm: 8,
          md: 10,
        },
        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },
      }}
    >
      <Grid2
        container
        justifyItems="center"
        alignItems="center"
        justifyContent="center"
        gap={2}
        columnGap={2}
        spacing={2}
        direction={{ xs: "column", sm: reverse ? "row-reverse" : "row" }}
        sx={{
          width: {
            xs: "100%", // Full width for small screens
            sm: "auto", // Auto width for larger screens
          },
        }}
      >
        <Grid2
          size={{
            xs: 12,
            sm: Component ? 6 : undefined,
          }}
          sx={{
            width: {
              xs: Component ? undefined : "100%", // Full width for small screens
              //sm: "auto", // Auto width for larger screens
            },
          }}
        >
          <HeroHeader
            title={title}
            subtitle={subtitle}
            sx={{}}
            hasComponent={hasComponent}
          />
          {/* <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-300 to-neutral-400 dark:from-neutral-500 dark:to-white font-sans py-2 md:py-4 relative z-20 tracking-tight"
            sx={{
              fontWeight: {
                xs: "200",
                sm: "bold",
              },
              mb: {
                xs: 0,
              },
              px: {
                xs: 1.8,
                sm: 2,
                md: 3,
                lg: 6,
              },
              fontSize: {
                xs: Component ? "2em" : "2.2em",
                sm: Component ? "2em" : "2.3em", // For medim screens and above
                md: Component ? "3em" : "3.5em",
                lg: Component ? "3.5em" : "4em",
              },
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            component="p"
            gutterBottom
            className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-200 to-neutral-300 dark:from-white-400 dark:to-zinc-500 font-sans elative z-20 font-light tracking-tight"
            sx={{
              mb: {
                xs: 1.5,
                sm: 2.5,
                md: 5,
                lg: 6,
              },
              px: {
                xs: 2,
                sm: 3.5,
                md: 4,
                lg: 6,
              },
              fontSize: {
                xs: Component ? "1em" : "1.2em",
                sm: Component ? "1.3em" : "1.5em", // For medim screens and above
              },
              lineHeight: {
                xs: 1.1,
                md: 1.2,
              },
            }}
          >
            {subtitle}
          </Typography> */}
          <Grid2
            container
            gap={2}
            columnGap={2}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <Grid2>
              <Button
                className="rounded-3xl bg-cyan-700 border-1 shadow-sm shadow-cyan-300/50 border-cyan-400"
                hidden={!projectLink}
                href={projectLink}
                variant="contained"
              >
                View My Projects
              </Button>
            </Grid2>
            <Grid2>
              <Button
                className="rounded-3xl bg-zinc-700 border-1 shadow-sm shadow-slate-300/50 border-slate-400"
                hidden={!contactLink}
                href={contactLink}
                variant="contained"
              >
                Get in Touch
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>

        {Component && (
          <Grid2
            size={{
              xs: 12,
              sm: 6,
            }}
          >
            <Box>
              <Component />
            </Box>
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
};

export default HeroSection;
