import React from 'react';
import { Box, Typography, Container, Grid, Paper, Button } from '@mui/material';
import { Work, Security, AccountBox, Task } from '@mui/icons-material';
import { motion } from 'framer-motion'; // Smooth animations

const HomeDiv = () => {
  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: '#1976d2',
          borderRadius: 2,
          padding: '80px 0',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          mb: 4,
        }}
      >
        <Typography
          variant="h3"
          color="white"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem' },
          }}
        >
          Welcome to the Employee Portal
        </Typography>
        <Typography
          variant="body1"
          color="white"
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '1rem',
            lineHeight: 1.8,
            opacity: 0.8,
          }}
        >
          Empower your work-life with tools and features to enhance productivity, manage tasks, collaborate with teams, and track your progress.
        </Typography>
      </Box>

      {/* Main Content Section */}
      <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: 2, padding: 4 }}>
        <Typography
          variant="h5"
          align="center"
          color="primary"
          sx={{ fontWeight: 'bold', mb: 4 }}
        >
          Our Core Features
        </Typography>

        {/* Information Sections */}
        <Grid container spacing={4} justifyContent="center">
          {/* Task Management Card */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 3,
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  boxShadow: 2,
                  height: '100%', // Ensure all cards have equal height
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <Work sx={{ fontSize: 50, color: '#1976d2' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', my: 2 }}>
                  Task Management
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', color: '#555' }}>
                  Keep track of all your tasks, projects, and deadlines in one place. Stay organized and never miss a deadline.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Employee Profiles Card */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 3,
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  boxShadow: 2,
                  height: '100%', // Ensure all cards have equal height
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <AccountBox sx={{ fontSize: 50, color: '#1976d2' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', my: 2 }}>
                  Employee Profiles
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', color: '#555' }}>
                  Manage personal details and professional information with ease. Keep your profile up-to-date for better management.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Security & Privacy Card */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 3,
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  boxShadow: 2,
                  height: '100%', // Ensure all cards have equal height
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <Security sx={{ fontSize: 50, color: '#1976d2' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', my: 2 }}>
                  Security & Privacy
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', color: '#555' }}>
                  Your data security is our priority. With state-of-the-art encryption and protection measures, your information is safe.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          {/* Performance Tracking Card */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Paper
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 3,
                  backgroundColor: '#fff',
                  borderRadius: 2,
                  boxShadow: 2,
                  height: '100%', // Ensure all cards have equal height
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <Task sx={{ fontSize: 50, color: '#1976d2' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', my: 2 }}>
                  Performance Tracking
                </Typography>
                <Typography variant="body2" sx={{ textAlign: 'center', color: '#555' }}>
                  Track your performance and stay aligned with your goals. Visualize progress and receive actionable feedback.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* CTA Button */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: '12px 30px',
              fontSize: '1rem',
              borderRadius: 30,
              '&:hover': { backgroundColor: '#1565c0' },
            }}
            href="#"
          >
            Start Exploring Now
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeDiv;
