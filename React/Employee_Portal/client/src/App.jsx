import Home from './pages/Home';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Dashboard from "./pages/DashBoard";
import HrInquiry from './components/HrInquiry';
import Referral from './components/Referral';
import ProtectedRoute from './components/ProtectedRoute'; 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Protected Routes */}
          <Route  element={<ProtectedRoute />}>
          <Route path="/dashboard/:id" element={<Dashboard />} /> 
          <Route path="/hrinquiry" element={<HrInquiry />} />
          <Route path="/referral" element={<Referral />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;



