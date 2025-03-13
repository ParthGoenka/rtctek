import React from 'react';
import { Box, IconButton, Typography, Container, Link, Grid, Divider } from '@mui/material';
import { Facebook, Instagram, Twitter, MailOutline, LocationOn, GitHub } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ background: 'linear-gradient(to right,rgb(58, 58, 58),rgb(103, 103, 103))', padding: '40px 0', color: 'white' }}>
      <Container>
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" sx={{ fontWeight: 'bold', mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body2" color="white" sx={{ fontSize: '0.9rem' }}>
              We are a leading company in providing innovative solutions for your business needs. 
              Our mission is to empower your success.
            </Typography>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" sx={{ fontWeight: 'bold', mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton
                color="white"
                component={Link}
                href="https://www.instagram.com"
                target="_blank"
                sx={{
                  margin: '0 15px',
                  fontSize: '2rem',
                  '&:hover': { color: '#E1306C' },
                }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="white"
                component={Link}
                href="https://www.facebook.com"
                target="_blank"
                sx={{
                  margin: '0 15px',
                  fontSize: '2rem',
                  '&:hover': { color: '#3b5998' },
                }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="white"
                component={Link}
                href="https://www.x.com"
                target="_blank"
                sx={{
                  margin: '0 15px',
                  fontSize: '2rem',
                  '&:hover': { color: '#1DA1F2' },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="white"
                component={Link}
                href="https://github.com"
                target="_blank"
                sx={{
                  margin: '0 15px',
                  fontSize: '2rem',
                  '&:hover': { color: '#333' },
                }}
              >
                <GitHub />
              </IconButton>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contact Us
            </Typography>
            <Typography color="white" variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
              <MailOutline sx={{ mr: 1 }} /> contact@employeeportal.com
            </Typography>
            <Typography color="white" variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <LocationOn sx={{ mr: 1 }} /> C10, New Delhi, India
            </Typography>
          </Grid>
        </Grid>

        {/* Divider between sections */}
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.3)', my: 4 }} />

        {/* Footer Text */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="white" sx={{ fontSize: '0.9rem' }}>
            &copy; 2025 Employee Portal. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
