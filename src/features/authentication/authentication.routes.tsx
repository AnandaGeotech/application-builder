import { RouteObject } from 'react-router-dom';
import Login from './pages/Login';
import NotFoundPage from '@/common/components/NotFoundPage';

export const authenticationRoutes: RouteObject[] = [
  {
    path: 'login', // Root route
    element: <Login />, // Use Layout as the wrapper
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
