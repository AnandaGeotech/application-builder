import { createBrowserRouter } from 'react-router-dom';
import { applicationRoutes } from '@/features/application/application.routes';

const routes = createBrowserRouter([
  {
    path: '',
    children: applicationRoutes,
  },
]);

export default routes;
