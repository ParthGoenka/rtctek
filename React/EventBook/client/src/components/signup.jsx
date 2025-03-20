import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

function SignUp() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async () => {
        if (!email || !pass || !username) {
            console.log("Required fields are missing");
        } else {
            try {
                const res = await axios.post('http://localhost:4040/api/signup', { email, pass, username });

                if (res.status === 200) {
                    const token = res.data.token;
                    localStorage.setItem('token', token);
                    if (token) {
                        navigate("/Dashboard");
                    }
                }
            } catch (error) {
                console.error("Error during signup:", error);
            }

            setEmail("");
            setPass("");
            setUsername("");
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: 'url("https://source.unsplash.com/1600x900/?abstract,technology")',
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
                    Sign Up
                </Typography>

                <TextField
                    label="Username"
                    variant="outlined"
                    type="text"
                    value={username}
                    onChange={(e) => { setUsername(e.target.value); }}
                    fullWidth
                    margin="normal"
                    sx={{ bgcolor: 'background.paper' }}
                />

                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); }}
                    fullWidth
                    margin="normal"
                    sx={{ bgcolor: 'background.paper' }}
                />

                <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={pass}
                    onChange={(e) => { setPass(e.target.value); }}
                    fullWidth
                    margin="normal"
                    sx={{ bgcolor: 'background.paper' }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSignUp}
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
                    Sign Up
                </Button>
            </Paper>
        </Box>
    );
}

export default SignUp;
