// components/FooterSection.tsx
import React from "react";
import ContactSection from "./ContactSection";
import { Box, Typography } from "@mui/material";
interface FooterSectionProps {}

const FooterSection: React.FC<FooterSectionProps> = ({}) => {
  return (
    <Box my={4} textAlign="center">
      <Typography variant="body1" className="dark:text-white light: text-black">
        Copyright 2025 | Eddie Villanueva | Email: evillan0315@gmail.com
      </Typography>
    </Box>
  );
};

export default FooterSection;
