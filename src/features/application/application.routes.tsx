import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';

export const applicationcationRoutes: RouteObject[] = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'add',
    lazy: () => import('./pages/Add'),
  },
  {
    path: 'edit/:id',
    lazy: () => import('./pages/Edit'),
  },
];
