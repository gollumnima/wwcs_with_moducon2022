/* eslint-disable no-undef */
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';
import './styles/main.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>,
);
