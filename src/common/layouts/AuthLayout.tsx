import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => (
  <div>
    <h2>Auth page</h2>
    <Outlet />
  </div>
);

export default AuthLayout;
