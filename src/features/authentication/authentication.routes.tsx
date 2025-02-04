import { RouteObject } from 'react-router-dom';
import Login from './pages/Login';
import AuthRoute from '@/common/utils/AuthRoute';
import AuthLayout from '@/common/layouts/AuthLayout';

export const authenticationRoutes: RouteObject[] = [
  {
    element: (
      <AuthRoute>
        {' '}
        <AuthLayout />
      </AuthRoute>
    ),
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        element: <Login />,
        path: 'login',
      },
      {
        path: 'register',
        lazy: () => import('./pages/Register'),
      },
    ],
  },
];
