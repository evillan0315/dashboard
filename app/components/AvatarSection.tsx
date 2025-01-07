// components/AvatarSection.tsx

import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import ContactSection from "./ContactSection";
import SkillsSection from "./SkillsSection";

interface AvatarSectionProps {
  phone: string;
  name: string;
  image: string;
  label: string;
  summary: string;
  url: string;
  email: string;
}

const AvatarSection: React.FC<AvatarSectionProps> = ({
  name,
  image,
  phone,
  email,
  label,
  summary,
  url,
}) => {
  return (
    <Box my={4} textAlign="center">
      <Avatar
        alt={name}
        src={image}
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
        {name}
      </Typography>
      <ContactSection email={email} phone={phone} />
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
        {label}
      </Typography>
      <Typography variant="body1">{summary}</Typography>
    </Box>
  );
};

export default AvatarSection;
