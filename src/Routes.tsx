import { createBrowserRouter } from 'react-router-dom';
import { Community } from './pages/Community';
import { Cloud } from './pages/Cloud';
import { Layout } from './components/Layout';
import { Footprint } from './pages/Footprint';
import { Main } from './pages/Main';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'result',
        element: <Cloud />,
      },
      {
        path: 'footprint',
        element: <Footprint />,
      },
    ],
  },
]);
