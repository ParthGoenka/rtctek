import { createTheme } from '@mui/material/styles';

const theme = createTheme({

  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: "#1956d1"
    },
    white: {
      main: '#fff', 
    },
    error: {
      main: '#d32f2f', 
    },
    background: {
      main: '#fafafa', 
    },
  },


  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#333',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 'normal',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },

});

export default theme;
