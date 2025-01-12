import React from "react";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import Button from "@mui/material/Button";
interface ContactSectionProps {
  name: string;
  profileImage: string;
  email: string;
  url: string;
}

const SocialSection: React.FC<ContactSectionProps> = ({
  name,
  profileImage,
  email,
  url,
}) => {
  return (
    <Box my={4} textAlign="center">
      <Button
        variant="contained"
        color="primary"
        href={url}
        target="_blank"
        sx={{ marginTop: 2 }}
      >
        View LinkedIn Profile
      </Button>
    </Box>
  );
};

export default SocialSection;
