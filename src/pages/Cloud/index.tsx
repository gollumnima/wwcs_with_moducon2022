import { useEffect, useState } from 'react';
import WordCloud from 'react-d3-cloud';
import { getDocs } from 'firebase/firestore';
import { Meta } from 'src/components/Meta';
import { Words } from './types';
import { cloudRef } from '../../firebase';

export const Cloud = () => {
  const [words, setWords] = useState<Words[]>([]);
  const getWords = async () => {
    const querySnapshot = await getDocs(cloudRef);
    // eslint-disable-next-line prefer-const
    let document: any[] = [];
    querySnapshot.forEach((doc) => {
      document.push({
        id: doc.id,
        text: doc.data().word,
        value: 10, // TODO: 동적으로 바꾸기
      });
    });
    setWords(document);
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <>
      <Meta title="위민후코드 서울 X 모두콘 2022: 키워드로 보는 각자의 커뮤니티에 대한 생각들" />
      <span>키워드는 등록할 수 있는데 아직 동적으로 키워드에 따라 변화하는것은 수정예정!</span>
      <WordCloud
        data={words}
        width={500}
        height={500}
        font="Times"
        fontStyle="italic"
        fontWeight="bold"
        fontSize={(word) => Math.log2(word.value) * 5}
        spiral="rectangular"
        rotate={(word) => word.value % 360}
        padding={5}
        random={Math.random}
      />
    </>
  );
};
