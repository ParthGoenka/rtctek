import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const EventCard = ({ event }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.date}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: 2 }} 
          onClick={() => alert(`Booking for ${event.title}`)}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
