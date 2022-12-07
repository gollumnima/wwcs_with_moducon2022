import { Meta } from 'src/components/Meta';
import { useColors } from '../../utils/useColors';
import styles from './main.module.css';

const { listWithCommunity, listWithFootPrint, listWithCloud } = styles;
export const Main = () => {
  const { mainColor } = useColors();
  return (
    <>
      <Meta title="위민후코드 서울 X 모두콘 2022: 방명록 혹은 모두콘 후기를 남겨보세요!" />
      <div className="mx-5 mt-5">
        <h1 className="text-2xl">안녕하세요 MODU들!</h1>
        <div className="mt-1 mb-4">
          <span>
            이 페이지는 모두콘2022를 위해 만든 페이지입니다.&nbsp;
          </span>
          <span>
            위의 메뉴를 보면 커뮤니티, 발도장, 구름이라는 메뉴가 있습니다.
          </span>
          <ul className="list-none list-inside mt-4">
            <li className={listWithCommunity}>
              <a className={`font-semibold cursor-pointer ${mainColor.text} ${mainColor.bg} px-1 mr-1`} href="/community">커뮤니티</a>
              라는 글자를 클릭하면 해당 페이지에서 본인이 생각하는
              커뮤니티를 한 단어로 표현할 수 있습니다.
            </li>
            <li className={listWithFootPrint}>
              <a className={`font-semibold cursor-pointer ${mainColor.text} ${mainColor.bg} px-1 mr-1`} href="/footprint">발자국</a>
              이라는 글자를 클릭하면 해당 페이지에 위민후코드 서울에 전하고 싶은 말 혹은 컨퍼런스 이후 소감을 남길 수 있습니다.
            </li>
            <li className={listWithCloud}>
              <a className={`font-semibold cursor-pointer ${mainColor.text} ${mainColor.bg} px-1 mr-1`} href="/result">구름</a>
              이라는 글자를 클릭하면 해당 페이지에 커뮤니티 페이지에서 남겼던 단어들을 조합한 구름을 볼 수 있습니다.
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
          </ul>
        </div>
      </div>
    </>
  );
};
