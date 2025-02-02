/* eslint-disable react/jsx-indent */
/* eslint-disable boundaries/element-types */
import { createBrowserRouter } from 'react-router-dom';
import { applicationRoutes } from '@/features/application';
import { authenticationRoutes } from '@/features/authentication';
import NotFoundPage from '@/common/components/NotFoundPage';
import AuthRoute from '@/common/utils/AuthRoute';
import AuthLayout from '@/common/layouts/AuthLayout';

const routes = createBrowserRouter([
  {
    path: '',
    children: applicationRoutes,
  },
  {
    path: 'auth',
    element: (
      <AuthRoute>
        {' '}
        <AuthLayout />
      </AuthRoute>
    ),
    children: authenticationRoutes,
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default routes;
