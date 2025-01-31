import { createBrowserRouter } from 'react-router-dom';
import { applicationRoutes } from '@/features/application';
import { authenticationRoutes } from '@/features/authentication';

const routes = createBrowserRouter([
  {
    path: '',
    children: applicationRoutes,
  },
  {
    path: 'auth',
    children: authenticationRoutes,
  },
]);

export default routes;
