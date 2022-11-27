import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { changeColorByPathname } from '.';
import { COLOR_CONFIG } from '../constant';
import { ColorConfigProps, Paths } from '../types/base';

export const useColors = () => {
  const { pathname } = useLocation();
  const [mainColor, setMainColor] = useState<ColorConfigProps>(COLOR_CONFIG.primary);

  useEffect(() => {
    const color = changeColorByPathname(pathname as Paths) ?? COLOR_CONFIG.primary;
    setMainColor(color);
  }, [pathname]);
  return {
    mainColor,
  };
};
