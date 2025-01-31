import { RouteObject } from 'react-router-dom';
import Login from './pages/Login';

export const authenticationRoutes: RouteObject[] = [
  {
    index: true,
    element: <Login />, // Home route
  },
  {
    element: <Login />,
    path: 'login',
  },
  {
    path: 'register',
    lazy: () => import('./pages/Register'), // Add route
  },
];
