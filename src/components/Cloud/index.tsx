import WordCloud from 'react-d3-cloud';
import { getDocs, query } from 'firebase/firestore';
import { useEffect } from 'react';
import { docRef } from '../../firebase';

const data = [
  { text: 'Hey', value: 3 },
  { text: 'lol', value: 5 },
  { text: 'first impression', value: 8 },
  { text: 'very cool', value: 10 },
  { text: 'duck', value: 10 },
];

export const Cloud = () => {
  const getWords = async () => {
    const q = await query(docRef);
    const result = await getDocs(q);
    return result.docs.map((doc:any) => {
      console.log(doc.data(), 'ddd');
      // TODO: 동일한 값이면 value 하나씩 증가하게 바꾸기
      return doc.data();
    });
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <WordCloud
      data={data}
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
      // fill={(d, i) => schemeCategory10ScaleOrdinal(i)}
    />
  );
};
