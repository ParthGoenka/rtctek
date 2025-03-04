import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProtectedRoute = () => {
  const Params = useParams();
  const auth = localStorage.getItem('token');
  if(auth == Params.id){
  console.log("auth", auth);
  return <Outlet /> ;
}
else{
  return <Navigate to="/login" replace />
}

  
};

export default ProtectedRoute;
