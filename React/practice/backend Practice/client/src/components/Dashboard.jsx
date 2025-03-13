
import React, { useEffect, useState } from 'react';
import { Grid, Button, Typography, CircularProgress, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EventCard from './Card.jsx';

function Dashboard() {
  
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const navigate = useNavigate();
const handlelogout = () => {
  localStorage.removeItem("token");
  navigate("/")
}

useEffect(() => {
  // Fetch events from the backend API
  axios.get('http://localhost:4040/api/events')
    .then(response => {
      setEvents(response.data);
      setLoading(false);
    })
    .catch(err => {
      setError('Failed to load events');
      setLoading(false);
    });
}, []);

if (loading) {
  return <CircularProgress />;
}

if (error) {
  return <Typography color="error">{error}</Typography>;
}

  return (
    
      

    <Box sx={{ padding: 3 }}>
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <Button 
          variant="contained" 
          color="error" 
          fullWidth
          onClick={handlelogout}
          sx={{ mb: 3, padding: '12px 24px' }}
        >
          Logout
        </Button>
      </Grid>

      {Array.isArray(events) && events.length > 0 ? (
        events.map((event) => (
          <Grid item key={event._id} xs={12} sm={6} md={4}>
            <EventCard event={event} />
          </Grid>
        ))
      ) : (
        <Typography variant="h6" color="textSecondary">No events found</Typography>
      )}
    </Grid>
  </Box>

  )
}

export default Dashboard

