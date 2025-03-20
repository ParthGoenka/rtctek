import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#444', color: '#fff', padding: '40px 0' }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* About Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
              We provide the best services for your needs. Our team is dedicated to bringing you
              the best solutions.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block" sx={{ fontSize: '0.9rem', marginBottom: '10px', '&:hover': { textDecoration: 'underline' } }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ fontSize: '0.9rem', marginBottom: '10px', '&:hover': { textDecoration: 'underline' } }}>
              Terms & Conditions
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ fontSize: '0.9rem', marginBottom: '10px', '&:hover': { textDecoration: 'underline' } }}>
              Contact Us
            </Link>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="#" color="inherit" sx={{ marginRight: '15px', '&:hover': { color: '#1976d2' } }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ marginRight: '15px', '&:hover': { color: '#1da1f2' } }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ '&:hover': { color: '#0077b5' } }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
          <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
            &copy; 2025 My Project. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
