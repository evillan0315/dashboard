import React, { Component } from "react";
import { BackgroundLines } from "./ui/Background-lines";
import { Grid2, Button, Typography } from "@mui/material";
import HeroHeader from "./ui/HeroHeader";

interface BackgroundLinesSectionProps {
  title: string;
  subtitle: string;
  projectLink?: string;
  contactLink?: string;
  image?: string;
}
const BackgroundLinesSection: React.FC<BackgroundLinesSectionProps> = ({
  title,
  subtitle,
  projectLink,
  contactLink,
  image,
}) => {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col mt-10">
      <HeroHeader title={title} subtitle={subtitle} hasComponent={false} />

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
            className="text-center text-black bg-slate-300 rounded-3xl"
            sx={{}}
          >
            View My Projects
          </Button>
        </Grid2>
        <Grid2>
          <Button
            hidden={!contactLink}
            href={contactLink}
            variant="outlined"
            className="text-center text-black bg-slate-300 rounded-3xl"
            sx={{
              fontFamily: "Roboto",
            }}
          >
            Get in Touch
          </Button>
        </Grid2>
      </Grid2>
    </BackgroundLines>
  );
};
export default BackgroundLinesSection;
