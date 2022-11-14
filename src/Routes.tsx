import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Community } from './components/Community';
import { Cloud } from './components/Cloud';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App />
    ),
  },
  {
    path: '/community',
    element: <Community />,
  },
  {
    path: '/result',
    element: <Cloud />,
  },
]);
