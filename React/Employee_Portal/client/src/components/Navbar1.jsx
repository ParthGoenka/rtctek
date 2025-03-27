import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

export default function Navbar1() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
         navigate("/login", { replace: true });
       };

  return (
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <IconButton sx={{ mr: 2 }}>
            <CardMedia
              component="img"
              height="50"
              width="50"
              image="../logo.png"
              alt="Logo"
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            Employee Dashboard
          </Typography>
      
      <Button type="submit" variant="contained" color="primary" href="/hrinquiry">
        Hr Inquiry Form
      </Button>
      <Button type="submit" variant="contained" color="primary" href="/referral" sx={{ ml: 2 }}>
        Referral Form
      </Button>
      <Button type="submit" variant="contained" color="primary" href="/expert" sx={{ ml: 2 }}>
        Expert
      </Button>
      <Button
      type="button"
      variant="contained"
      color="error"
      onClick={handleLogout}
      sx={{ ml: 2 }}
    >
      LogOut
    </Button>
        </Toolbar>
      </AppBar>
    
  );
}
