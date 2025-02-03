/* eslint-disable boundaries/no-unknown */
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/auth.context';
import { TUserRole } from '../types/common.type';

interface ProtectedRouteProps {
  allowedRoles: Array<TUserRole>;
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, children }) => {
  const { token, loading, user } = useAuth();

  const isAuthenticated = !!token;

  if (loading) return <p>Loading...</p>;

  if (!isAuthenticated || !user) return <Navigate to="/auth/login" replace />;

  // Check if the user's role is allowed
  if (!allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" replace />;

  return children;
};

export default ProtectedRoute;
