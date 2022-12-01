import { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
}

export const Meta = ({ title } :PropsWithChildren<MetaProps>) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content="모두콘 2022에서 위민후코드 서울 커뮤니티 세션 발표용 웹사이트 입니다. 커뮤니티를 한 단어로 나타내고, 각자 어떤 생각을 가지고 있는지 키워드를 통해 확인해볼 수 있습니다. 사이트를 방문해 방명록도 남겨보세요!" />
    <meta property="og:title" content="위민후코드 서울 X 모두콘 2022" />
    <meta property="og:url" content="https://moducon2022-5fa7d.web.app/" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/public/images/og-image.png" />
    <meta property="og:description" content="모두콘 2022에서 위민후코드 서울 커뮤니티 세션 발표용 웹사이트 입니다. 커뮤니티를 한 단어로 나타내고, 각자 어떤 생각을 가지고 있는지 키워드를 통해 확인해볼 수 있습니다. 사이트를 방문해 방명록도 남겨보세요!" />

    <meta name="twitter:creator" content="@WWCodeSeoul" />
    <meta name="twitter:site" content="@WWCodeSeoul" />
    <meta name="twitter:url" content="https://moducon2022-5fa7d.web.app/" />
    <meta name="twitter:card" content="모두콘 2022에서 위민후코드 서울 커뮤니티 세션 발표용 웹사이트 입니다. 커뮤니티를 한 단어로 나타내고, 각자 어떤 생각을 가지고 있는지 키워드를 통해 확인해볼 수 있습니다. 사이트를 방문해 방명록도 남겨보세요!" />
  </Helmet>
);