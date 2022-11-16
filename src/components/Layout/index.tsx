import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';

type Props = {

};

export const Layout = ({ children }: PropsWithChildren<Props>) => (
  <>
    <Navigation />
    <div className="px-2 mx-2">
      {children}
      <Outlet />
    </div>
  </>
);
