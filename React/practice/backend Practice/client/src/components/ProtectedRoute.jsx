import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');  
  if (!token) {
    console.log("not authorised")
    return <Navigate to="/" />;
  }

  return children;  
};

export default ProtectedRoute;