/* eslint-disable boundaries/element-types */
import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import Layout from '@/common/layouts/BasicLayout';
import NotFoundPage from '@/router/components/NotFoundPage';

export const applicationcationRoutes: RouteObject[] = [
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
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
