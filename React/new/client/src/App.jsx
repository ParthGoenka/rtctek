import Home from './pages/Home';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";


function App() {
      
return(
<ThemeProvider theme={theme}>
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
  </Routes>
</Router></ThemeProvider>

    
  )
}

export default App



