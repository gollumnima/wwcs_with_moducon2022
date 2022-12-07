/* eslint-disable no-undef */
import { PropsWithChildren, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';

type Props = {

};

export const Layout = ({ children }: PropsWithChildren<Props>) => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);
  return (
    <div className="relative h-full sm:h-screen">
      <Navigation />
      <div className="px-2 max-w-2xl mx-auto pt-28 pb-80 sm:pb-64">
        {children}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
