import { RouteObject } from 'react-router-dom';
import Layout from '@/common/layouts/DashboardLayout';
import ProtectedRoute from '@/common/utils/ProtectedRouted';
import Home from '@/features/application/pages/Home';
import { USER_ROLES } from '@/common/constants/common.constant';

export const applicationRoutes: RouteObject[] = [
  {
    path: '/',
    element: (
      <ProtectedRoute allowedRoles={[USER_ROLES.ADMIN]}>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Home />, // Home route
      },
      {
        path: 'add',
        lazy: () => import('./pages/Add'), // Add route
      },
      {
        path: 'edit/:id',
        lazy: () => import('./pages/Edit'), // Edit route
      },
      {
        path: 'user/:id',
        lazy: () => import('./pages/UserDetails'), // user details route
      },
      {
        path: 'users',
        element: <Home />, // user details route
      },
    ],
  },
];
