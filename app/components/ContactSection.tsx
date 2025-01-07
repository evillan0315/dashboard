import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection: React.FC<{ email: any; phone: any }> = ({ email, phone }) => {
  return (
    <Box my={0} display="flex" justifyContent="center" gap={2}>
      <Typography variant="body1" color="textSecondary" display="flex" alignItems="center">
        <FaEnvelope style={{ marginRight: 8 }} />
        {email}
      </Typography>
      <Typography variant="body1" color="textSecondary" display="flex" alignItems="center">
        <FaPhone style={{ marginRight: 8 }} />
        {phone}
      </Typography>
    </Box>
  );
};

export default ContactSection;
