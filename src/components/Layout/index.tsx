import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';

type Props = {

};

export const Layout = ({ children }: PropsWithChildren<Props>) => (
  <>
    <Navigation />
    <Outlet />
    {children}
  </>
);
