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
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [empid, setEmpid] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!empid || !password) {
      setError("Employee ID and password are required");
    } else {
      try {
        const res = await axios.post("http://localhost:4000/api/login", {
          empid,
          password,
        });
        setError();
        if (res.status == 200) {
          const { token } = res.data;
          localStorage.setItem("authToken", token);
          navigate(`/dashboard/${res.data.id}`);
        }
      } catch (error) {
        console.error("Login failed:", error);
        setError("Invalid credentials");
      }
    }
  };

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url(/back1.jfif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper elevation={3} sx={{ padding: 3, width: "100%", maxWidth: 600 }}>
        <Typography variant="h5" align="center" sx={{ mb: 2 }}>
          Login Details
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Employee ID"
              variant="outlined"
              fullWidth
              type="text"
              value={empid}
              onChange={(e) => setEmpid(e.target.value)}
              autoComplete="empid"
              required
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </Box>

          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ mb: 2, textAlign: "center" }}
            >
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mb: 2 }}
          >
            Log in
          </Button>

          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2">
                Don't have an account?{" "}
                <Button color="primary" href="/signup">
                  Sign up
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
