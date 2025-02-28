import React from 'react';
import { Box, IconButton, Typography, Container, Link } from '@mui/material';
import { Facebook, Instagram, Twitter, MailOutline, LocationOn } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#2c2f36', padding: '40px 0', color: 'white' }}>
      <Container>
        {/* Social Media Links */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <IconButton color="white" component={Link} href="https://www.instagram.com" target="_blank" sx={{ margin: '0 15px' }}>
            <Instagram />
          </IconButton>
          <IconButton color="white" component={Link} href="https://www.facebook.com" target="_blank" sx={{ margin: '0 15px' }}>
            <Facebook />
          </IconButton>
          <IconButton color="white" component={Link} href="https://www.twitter.com" target="_blank" sx={{ margin: '0 15px' }}>
            <Twitter />
          </IconButton>
        </Box>

        {/* Contact Info */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography color="white" variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
            <MailOutline sx={{ mr: 1 }} /> contact@employeeportal.com
          </Typography>
          <Typography color="white" variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LocationOn sx={{ mr: 1 }} /> C10, New Delhi, India
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
