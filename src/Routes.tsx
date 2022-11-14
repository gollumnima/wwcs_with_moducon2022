import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Community } from './components/Community';
import { Cloud } from './components/Cloud';
import { Layout } from './components/Layout';
import { Footprint } from './components/Footprint';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <App />,
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
