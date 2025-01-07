// components/AvatarSection.tsx

import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import ContactSection from "./ContactSection";

interface AvatarSectionProps {
  basics: any;
}

const AvatarSection: React.FC<AvatarSectionProps> = ({
 basics
}) => {
  return (
    <Box my={4} textAlign="center">
      <Avatar
        alt={basics.name}
        src={basics.image}
        sx={{ width: 100, height: 100, marginBottom: 2 }}
      />
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "2rem", // Small screens
            sm: "2.5rem", // Medium screens
            md: "3rem", // Larger screens
          },
          fontWeight: {
            xs: 800,
          },
        }}
      >
        {basics.name}
      </Typography>
      <ContactSection email={basics.email} phone={basics.phone} />
      <Typography
        variant="h3"
        sx={{
          fontSize: {
            xs: ".8rem", // Small screens
            sm: ".9rem", // Medium screens
            md: "1.2rem", // Larger screens
          },
          fontWeight: {
            xs: 100,
          },
        }}
      >
        {basics.label}
      </Typography>
      <Typography variant="body1">{basics.summary}</Typography>
    </Box>
  );
};

export default AvatarSection;
