import React from 'react';
import { Box, IconButton, Typography, Container, Link } from '@mui/material';
import { Facebook, Instagram, Twitter, MailOutline, LocationOn } from '@mui/icons-material';

function Footer() {
  return (
    <Box  color='white' sx={{ backgroundColor: '#333', padding: '20px 0' }}>
      <Container>
      
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <IconButton
            color="white"
            component={Link}
            href="https://www.instagram.com"
            target="_blank"
            sx={{ margin: '0 10px' }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="white"
            component={Link}
            href="https://www.facebook.com"
            target="_blank"
            sx={{ margin: '0 10px' }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            color="white"
            component={Link}
            href="https://www.twitter.com"
            target="_blank"
            sx={{ margin: '0 10px' }}
          >
            <Twitter />
          </IconButton>
        </Box>

        <Box sx={{ textAlign: 'center' , padding:"5px"}}>
          <Typography color='white' variant="body1">
            <MailOutline sx={{ verticalAlign: 'middle', mb:1 }} />
             - contact@employeeportal.com
          </Typography>
          <Typography color='white' variant="body1">
            <LocationOn sx={{ verticalAlign: 'middle'}} />
            - C10, New Delhi, India
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
