import { COLOR_MAP } from '../constant';
import { Paths } from '../types/base';

export const formatDate = (timestamp:number) => new Intl.DateTimeFormat(
  'ko',
  { dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Seoul' },
).format(timestamp);

export const changeColorByPathname = (pathname: Paths) => COLOR_MAP.get(pathname);
