export const formatDate = (timestamp:number) => new Intl.DateTimeFormat(
  'ko',
  { dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Seoul' },
).format(timestamp);
