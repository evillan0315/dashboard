import React from "react";
import { Box, Typography, Button, Container, Grid, Grid2 } from "@mui/material";
import Image from "next/image";
interface HeroSectionProps {
  title: string;
  subtitle: string;
  projectLink?: string;
  contactLink?: string;
  image?: string;
  reverse?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  projectLink,
  contactLink,
  image,
  reverse,
}) => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative", // Dark background color
        color: "white",
        py: 10,
        mb: 10,
        textAlign: "center",
      }}
    >
      <Container>
        <Grid2
          container
          direction={image ? "row" : undefined}
          spacing={2}
          justifyItems={"flex-start"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid2 size={image ? 6 : undefined}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                lineHeight: 1.2,
                fontSize: `${image ? "3rem" : "5rem"}`,
                flexGrow: 1,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              component="p"
              gutterBottom
              sx={{
                mt: 2,
                mb: 4,
                p: 4,
                fontSize: `${image ? "1.5rem" : "2rem"}`,
              }}
            >
              {subtitle}
            </Typography>
          </Grid2>
          {image && (
            <Grid2 size={6} px={4}>
              <Image
                className="rounded-lg shadow-md shadow-slate-900 border border-gray-950"
                src={image}
                alt={""}
                width={1920}
                height={1080}
              />
            </Grid2>
          )}
        </Grid2>
        <Grid
          container
          spacing={4}
          gap={2}
          justifyContent="center"
          marginTop={10}
          marginBottom={10}
        >
          <Grid item>
            <Button
              hidden={!projectLink}
              href={projectLink}
              variant="contained"
            >
              View My Projects
            </Button>
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
