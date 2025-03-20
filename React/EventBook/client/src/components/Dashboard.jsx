
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
const handlePost = () => {
  navigate("/post")
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
    <Grid container spacing={1} justifyContent="center">
      

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

    <Grid item xs={12}>
        <Button 
          variant="contained" 
          color="error" 
          onClick={handlelogout}
          sx={{ mt: 3, padding: '24px', width:"100px" }}
        >
          Logout
        </Button>
        <Button 
          variant="contained" 
          color="error" 
          onClick={handlePost}
          sx={{ mt: 3, padding: '24px', width:"100px", ml:3 }}
        >
          Post
        </Button>
      </Grid>
  </Box>

  )
}

export default Dashboard

