// components/AvatarSection.tsx

import React from "react";
import { Box, Typography } from "@mui/material";

import { Basics } from "../types/models";

interface AvatarSectionProps {
  basics: Basics | null;
}

const AvatarSection: React.FC<AvatarSectionProps> = ({ basics }) => {
  return (
    <Box my={4} textAlign="center">
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "2rem", // Small screens
            sm: "2.5rem", // Medium screens
            md: "3rem", // Larger screens
          },
          fontWeight: {
            xs: 600,
          },
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        {basics?.name}
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontSize: {
            xs: ".8rem", // Small screens
            sm: ".9rem", // Medium screens
            md: "1.6rem", // Larger screens
          },
          fontWeight: {
            xs: 400,
          },

          marginBottom: "30px",
        }}
      >
        {basics?.label}
      </Typography>
      <Typography variant="body1" marginBottom={10}>
        {basics?.summary}
      </Typography>
    </Box>
  );
};

export default AvatarSection;
