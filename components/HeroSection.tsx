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
  return (
    <Box
      component="section"
      sx={{
        position: "relative", // Dark background color
        color: "white",
        textAlign: "center",
        my: {
          xs: 6,
          sm: 12,
        },
      }}
    >
      <Grid2
        container
        justifyItems="flex-start"
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
          size={Component ? 6 : undefined}
          sx={{
            width: {
              xs: Component ? undefined : "100%", // Full width for small screens
              //sm: "auto", // Auto width for larger screens
            },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              lineHeight: 1.2,
              flexGrow: 1,
              p: 2,
              fontSize: {
                xs: Component ? "2em" : "2.6em", // For small screens
                sm: Component ? "3em" : "3.6em", // For medim screens and above
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            gutterBottom
            sx={{
              mt: 2,
              mb: 4,
              p: 2,
              fontSize: {
                sm: Component ? "1em" : "1.5em", // For medim screens and above
              },
            }}
          >
            {subtitle}
          </Typography>
          <Grid2
            container
            gap={2}
            columnGap={2}
            alignContent={"center"}
            justifyContent={"center"}
          >
            <Grid2>
              <Button
                hidden={!projectLink}
                href={projectLink}
                variant="contained"
              >
                View My Projects
              </Button>
            </Grid2>
            <Grid2>
              <Button
                hidden={!contactLink}
                href={contactLink}
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": { borderColor: "#d1d5db" },
                }}
              >
                Get in Touch
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>

        {Component && (
          <Grid2
            size={6}
            sx={{
              width: {
                //xs: "100%", // Full width for small screens
                // sm: "auto", // Auto width for larger screens
              },
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
