import { createBrowserRouter } from 'react-router-dom';
import { applicationRoutes } from '@/features/application';
import { authenticationRoutes } from '@/features/authentication';
import NotFoundPage from '@/common/components/NotFoundPage';

const routes = createBrowserRouter([
  {
    path: '',
    children: applicationRoutes,
  },
  {
    path: 'auth',
    children: authenticationRoutes,
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default routes;
