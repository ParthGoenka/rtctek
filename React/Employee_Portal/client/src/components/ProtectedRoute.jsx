import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = localStorage.getItem('token');
  console.log("auth", auth);

  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
