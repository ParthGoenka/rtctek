import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          My Project
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit" href='/login'>Login</Button>
        <Button color="inherit" href='/signup'>SignUp</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
