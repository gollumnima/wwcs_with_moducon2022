import { useReducer } from 'react';
import { COLOR_MAP } from '../constant';
import { Words } from '../pages/Cloud/types';
import { Paths } from '../types/base';

export const formatDate = (timestamp:number) => new Intl.DateTimeFormat(
  'ko',
  { dateStyle: 'full', timeStyle: 'short', timeZone: 'Asia/Seoul' },
).format(timestamp);

export const changeColorByPathname = (pathname: Paths) => COLOR_MAP.get(pathname);

export const useReducerState = <State extends object>(initialState: State) => {
  const reducer = (prev: State, next: Partial<State>): State => ({
    ...prev,
    ...next,
  });
  return useReducer(reducer, initialState);
};

export const getUniqueListByTextKeyword = (arr: Words[]) => [
  ...new Map(arr.map((item: Words) => [item.text, item]))
    .values()];
