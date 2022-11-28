import './styles/main.css';
import './styles/global.css';
import { useColors } from './utils/useColors';

export const Main = () => {
  const { mainColor } = useColors();
  return (
    <div className="ml-5 mt-5">
      <h1 className="text-2xl">안녕하세요 MODU들!</h1>
      <div className="mt-1 mb-4">
        <span>
          이 페이지는 모두콘2022를 위해 만든 페이지입니다.
        </span>
        <span>모두콘</span>
      </div>
      <h1 className="text-2xl">위민후코드 서울이란?</h1>
      <div className="mt-1">
        <span>
          위민후코드 서울은 기술분야에 종사하는 여성의 커리어 발전에 영감을 불어넣기 위해 만들어진 글로벌 비영리 기구
          <a className={`font-semibold cursor-pointer ${mainColor.text} ${mainColor.bg} px-2 mx-1`} href="https://www.womenwhocode.com/">@WomenWhoCode</a>
          의 서울지부입니다.
        </span>
        <span>모두콘</span>
      </div>
    </div>
  );
};
