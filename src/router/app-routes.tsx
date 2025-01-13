import { createBrowserRouter } from 'react-router-dom';
import { authenticationRoutes } from '@/features/authentication';
import { constUsRoutes } from '@/features/contact-us/contact-us.routes';

const routes = createBrowserRouter([
  {
    index: true,
    element: <p>Home</p>,
  },
  {
    path: 'auth',
    children: authenticationRoutes,
  },
  {
    path: 'contact-us',
    children: constUsRoutes,
  },
]);

export default routes;
