import { RouteObject } from 'react-router-dom';
import NotFoundPage from '@/common/components/NotFoundPage';
import Layout from '@/common/layouts/ApplicationLayout';
import Home from '@/features/application/pages/Home';

export const applicationRoutes: RouteObject[] = [
  {
    path: '/', // Root route
    element: <Layout />, // Use Layout as the wrapper
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
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
