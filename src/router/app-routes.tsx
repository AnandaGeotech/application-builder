import { createBrowserRouter } from 'react-router-dom';
import { applicationcationRoutes } from '@/features/application';

const routes = createBrowserRouter([
  {
    path: '',
    children: applicationcationRoutes,
  },
]);

export default routes;
