import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/common/contexts/auth.context';
import { TUserRole } from '@/common/types/common.type';

interface ProtectedRouteProps extends PropsWithChildren {
  allowedRoles: Array<TUserRole>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles, children }) => {
  const { token, authLoading, user } = useAuth();

  const isAuthenticated = !!token;
  if (authLoading) return <p>Loading...</p>;

  if (!isAuthenticated || !user) return <Navigate to="/auth/login" replace />;

  // Check if the user's role is allowed
  if (!allowedRoles.includes(user.role)) return <Navigate to="/unauthorized" replace />;

  return children;
};

export default ProtectedRoute;
