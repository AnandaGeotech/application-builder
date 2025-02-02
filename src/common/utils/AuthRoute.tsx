/* eslint-disable boundaries/no-unknown */
import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth.context';

const AuthRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const { token, authLoading, user } = useAuth();

  const isAuthenticated = !!token;
  console.log(token, authLoading, 'token');
  if (authLoading) return <p>Loading...</p>;

  if (!isAuthenticated || !user?.email) return children;

  // Check if the user's role is allowed

  if (isAuthenticated && user?.email) return <Navigate to="/" replace />;
  return children;
};

export default AuthRoute;
