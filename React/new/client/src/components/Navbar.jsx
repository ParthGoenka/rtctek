import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import Link from '@mui/material/Link';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          <IconButton sx={{ mr: 2 }}>
            <CardMedia
              component="img"
              height="50"
              width="50"
              image="./logo.png"
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee DashBoard
          </Typography>
          <Button color="white" href="/login">
                  Login
                </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
