import React from 'react';
import { Navigate } from 'react-router-dom';

const NonAuthRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  return token ? <Navigate to="/dashboard" /> : children;
};

export default NonAuthRoute;
