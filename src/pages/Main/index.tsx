import { useEffect } from 'react';
import { useReducerState } from 'src/utils/index';
import { useColors } from '../../utils/useColors';
import styles from './main.module.css';
import { CustomCSS } from './types';

const { listWithCommunity, listWithFootPrint, listWithCloud } = styles;
export const Main = () => {
  const { mainColor } = useColors();
  const [state, setState] = useReducerState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const countDownDate = new Date('2022-12-15 14:30:00').getTime();
      const distance = countDownDate - now;
      const isOver = now > countDownDate;

      if (isOver) {
        setState({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(interval);
        return undefined;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      return setState({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const {
    days, hours, minutes, seconds,
  } = state;

  return (
    <div className="mx-5 mt-5">
      <h1 className="text-2xl">안녕하세요 MODU들!</h1>
      <div className="mt-1 mb-4">
        <span>
          이 페이지는 모두콘2022를 위해 만든 페이지입니다.&nbsp;
        </span>
        <h1 className="mt-2">😎위민후코드 서울 세션까지 남은 시간😎</h1>
        <div className="grid grid-flow-col gap-4 text-center auto-cols-max my-4">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content place-items-center">
            <span className="font-mono text-4xl countdown">
              <span style={{ '--value': days } as CustomCSS} />
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content place-items-center">
            <span className="font-mono text-4xl countdown">
              <span style={{ '--value': hours } as CustomCSS} />
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content place-items-center">
            <span className="font-mono text-4xl countdown">
              <span style={{ '--value': minutes } as CustomCSS} />
            </span>
            minutes
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content place-items-center">
            <span className="font-mono text-4xl countdown">
              <span style={{ '--value': seconds } as CustomCSS} />
            </span>
            seconds
          </div>
        </div>
        <span>
          위의 메뉴를 보면 커뮤니티, 발도장, 구름이라는 메뉴가 있습니다.
        </span>
        <ul className="list-none list-inside mt-4">
          <li className={listWithCommunity}>
            <a className={`font-semibold cursor-pointer ${mainColor.text} ${mainColor.bg} px-1 mr-1`} href="/community">커뮤니티</a>
            : 본인이 생각하는 커뮤니티를 한 단어로 표현할 수 있습니다.
          </li>
          <li className={listWithFootPrint}>
            <a className={`font-semibold cursor-pointer ${mainColor.text} ${mainColor.bg} px-1 mr-1`} href="/footprint">발도장</a>
            : 위민후코드 서울에 전하고 싶은 말 혹은 컨퍼런스 이후 소감을 남길 수 있습니다.
          </li>
          <li className={listWithCloud}>
            <a className={`font-semibold cursor-pointer ${mainColor.text} ${mainColor.bg} px-1 mr-1`} href="/result">구름</a>
            : 커뮤니티에 대한 생각을 조합한 구름(Word Cloud)을 볼 수 있습니다.
          </li>
        </ul>
      </div>
      <h1 className="text-2xl">위민후코드 서울이란?</h1>
      <img className="my-4" src="/images/wwcs_bg.jpeg" alt="위민후코드 서울 단체사진" />
      <div className="mt-1">
        <p>
          위민후코드 서울은 기술분야에 종사하는 여성의 커리어 발전에 영감을 불어넣기 위해 만들어진 글로벌 비영리 기구
          <a className={`font-semibold cursor-pointer ${mainColor.text} ${mainColor.bg} px-2 mx-1`} href="https://www.womenwhocode.com/">@WomenWhoCode</a>
          의 서울지부입니다.
        </p>
        <ul className="list-disc list-inside mt-4 mb-8">
          <li className="underline decoration-wavy decoration-primary my-1"><a href="https://www.facebook.com/groups/wwcodeseoul" target="_blank" rel="noreferrer">Facebook Group 팔로우 하러 가기</a></li>
          <li className="underline decoration-wavy decoration-primary my-1"><a href="https://twitter.com/WWCodeSeoul" target="_blank" rel="noreferrer">Twitter 팔로우 하러 가기</a></li>
          <li className="underline decoration-wavy decoration-primary my-1"><a href="https://docs.google.com/forms/d/e/1FAIpQLScnNmJZ0NOq0OZfNRcGekrdV0Upem6vmaBJFizX9oPg93B7_w/viewform" target="_blank" rel="noreferrer">위민후코드 서울 2023 신규 운영진 모집 알림 받기</a></li>
        </ul>
      </div>
    </div>
  );
};
