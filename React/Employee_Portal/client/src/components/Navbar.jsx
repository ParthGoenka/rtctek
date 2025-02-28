import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <IconButton sx={{ mr: 2 }}>
            <CardMedia
              component="img"
              height="50"
              width="50"
              image="./logo.png"
              alt="Logo"
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Employee Dashboard
          </Typography>
          <Button color="inherit" href="/login" sx={{ fontWeight: 'bold' }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
