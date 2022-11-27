import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { changeColorByPathname } from '.';
import { Colors, Paths } from '../types/base';

export const usePathname = () => {
  const { pathname } = useLocation();
  const [mainColor, setMainColor] = useState<Colors>('primary');

  useEffect(() => {
    const color = changeColorByPathname(pathname as Paths) ?? 'primary';
    setMainColor(color);
  }, [pathname]);
  return {
    mainColor,
  };
};
