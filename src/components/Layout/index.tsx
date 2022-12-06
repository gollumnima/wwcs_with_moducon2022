import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';

type Props = {

};

export const Layout = ({ children }: PropsWithChildren<Props>) => (
  <div className="relative h-full">
    <Navigation />
    <div className="px-2 max-w-2xl mx-auto pt-28 pb-80 sm:pb-64">
      {children}
      <Outlet />
    </div>
    <Footer />
  </div>
);
