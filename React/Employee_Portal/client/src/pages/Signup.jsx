import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [empid, setEmpid] = useState("");
  const [dept, setDept] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
    if (!email || !username || !password || !confirmPassword || !empid || !dept) {
      setError("All fields are required");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      const res = await axios.post("http://localhost:4000/api/signup", {
        name: username,
        email,
        empid,
        password,
        dept
      });

      if(res.status == 200)
      {
        localStorage.setItem('token', true);
        console.log("Token saved:", localStorage.getItem('token'))
        navigate(`/dashboard/${res.data.id}`);
      }
      setError(""); 
    }}
    catch(error)
    {
      setError("Already exist"); 
    }
    
    
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: "100%", maxWidth: 600 }}>
        <Typography variant="h4" align="center" sx={{ mb: 3 }}>
          Create an Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              sx={{ height: 50, fontSize: "1.1rem" }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              label="Department"
              variant="outlined"
              fullWidth
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              required
              sx={{ height: 50, fontSize: "1.1rem" }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              label="EmployeeID"
              variant="outlined"
              fullWidth
              value={empid}
              onChange={(e) => setEmpid(e.target.value)}
              required
              sx={{ height: 50, fontSize: "1.1rem" }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
              sx={{ height: 50, fontSize: "1.1rem" }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
              sx={{ height: 50, fontSize: "1.1rem" }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              required
              sx={{ height: 50, fontSize: "1.1rem" }}
            />
          </Box>

          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ mb: 3, textAlign: "center" }}
            >
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ height: 50, fontSize: "1.1rem" }}
          >
            Sign Up
          </Button>

          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              <Typography variant="body2">
                Already have an account?{" "}
                <Button color="primary" href="/login">
                  Login
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
