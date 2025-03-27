import React from 'react';
import { Navigate, Outlet } from "react-router-dom";



const ProtectedRoute = () => {
  const token = localStorage.getItem('authToken');
 
    if (!token) {
      console.log(token);
      return <Navigate to="/login" />;
    }
    console.log(token)
    return <Outlet />;

  
};

export default ProtectedRoute;
