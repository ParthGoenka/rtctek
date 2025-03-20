import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import axios from 'axios';

function Post() {
  const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const navigate = useNavigate();

    const handlePost = async() => {
      try{
      const res = await axios.post('http://localhost:4040/posts', { title, date});

                if (res.status === 200) {
                    
                        navigate("/Dashboard");
                  
                }}
            
            catch (error) {
                console.error("Error", error);
            }

            setDate("");
            setTitle("");
    
    }
  return (
    <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    p: 4,
                    width: '100%',
                    maxWidth: 400,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                }}
            >
                <Typography variant="h4" component="h1" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Post Details
                </Typography>

                <TextField
                    label="Title"
                    variant="outlined"
                    type="text"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value); }}
                    fullWidth
                    margin="normal"
                    sx={{ bgcolor: 'background.paper' }}
                />

                <TextField
                    variant="outlined"
                    type="date"
                    value={date}
                    onChange={(e) => { setDate(e.target.value); }}
                    fullWidth
                    margin="normal"
                    sx={{ bgcolor: 'background.paper' }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePost}
                    sx={{
                        mt: 2,
                        width: '100%',
                        fontWeight: 'bold',
                        padding: '10px 0',
                        '&:hover': {
                            backgroundColor: '#1976d2', 
                        },
                    }}
                >
                    Post
                </Button>
                
            </Paper>
        </Box>
  )
}

export default Post