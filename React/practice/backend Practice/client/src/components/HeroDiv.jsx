import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ backgroundColor: '#f7f7f7', padding: '80px 0' }}>
      <Container>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" gutterBottom>
              Welcome to Our Project
            </Typography>
            <Typography variant="h6" paragraph>
              We're here to make your experience better with our amazing features and services.
            </Typography>
            <Button variant="contained" color="primary" href='/signup'>
              Get Started
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="./capture2.png"
              alt="Hero Image"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
