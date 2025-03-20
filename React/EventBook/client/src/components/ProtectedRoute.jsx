import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('token'); 
      if (!token) {
        setIsAuthenticated(false); 
        setLoading(false); 
        return;
      }

      try {
        const response = await axios.get('http://localhost:4040/Dashboard', {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log(response)
        if (response.data.token) {
          setIsAuthenticated(true); 
        } else {
          setIsAuthenticated(false); 
        }
      } catch (error) {
        setIsAuthenticated(false); 
      } finally {
        setLoading(false); 
      }
    };

    checkAuthStatus();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!isAuthenticated) {
    console.log("not auth")
    return <Navigate to="/" />;
  }

  return children; 
};

export default ProtectedRoute;
