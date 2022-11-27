import { Colors, Paths } from '../types/base';

export const formatDate = (timestamp:number) => new Intl.DateTimeFormat(
  'ko',
  { dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Seoul' },
).format(timestamp);

const COLOR_MAP = new Map<Paths, Colors>([['/', 'primary'], ['/community', 'secondary'], ['/footprint', 'accent'], ['/result', 'info']]);

export const changeColorByPathname = (pathname: Paths) => COLOR_MAP.get(pathname);
