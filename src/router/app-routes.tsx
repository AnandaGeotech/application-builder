import { createBrowserRouter } from 'react-router-dom';
// import { authenticationRoutes } from '@/features/authentication';
// import { constUsRoutes } from '@/features/contact-us/contact-us.routes';
import { applicationcationRoutes } from '@/features/application';

const routes = createBrowserRouter([
  // {
  //   index: true,
  //   element: <h1 className="text-3xl font-bold underline">
  //   Hello world!
  // </h1>
  // },
  {
    path: '',
    children: applicationcationRoutes,
  },
  // {
  //   path: 'update/:id',
  //   children: constUsRoutes,
  // },
]);

export default routes;
