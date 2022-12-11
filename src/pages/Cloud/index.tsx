/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from 'react';
import WordCloud from 'react-d3-cloud';
import { getDocs } from 'firebase/firestore';
import { getUniqueListByTextKeyword } from 'src/utils/index';
import { DocumentProps, Words } from './types';
import { cloudRef } from '../../firebase';

export const Cloud = () => {
  const [words, setWords] = useState<Words[]>([]);

  const getWords = async () => {
    const querySnapshot = await getDocs(cloudRef);
    // eslint-disable-next-line prefer-const
    let documents: DocumentProps[] = [];
    querySnapshot.forEach((doc) => {
      documents.push({
        text: doc.data().word,
      });
    });

    // any 없애기..
    const countValues = documents.reduce((acc: any, curr: DocumentProps) => {
      if (!acc[curr.text]) {
        acc[curr.text] = 1;
      }
      acc[curr.text] += 1;
      return acc;
    }, {});

    const updateDocument = documents.map((doc) => ({
      text: doc.text,
      value: countValues[doc.text],
    }));

    const convertedDocument = getUniqueListByTextKeyword(updateDocument);
    setWords(convertedDocument);
  };

  useEffect(() => {
    getWords();
  }, []);

  return (
    <WordCloud
      data={words}
      width={500}
      height={500}
      font="Times"
      fontStyle="italic"
      fontWeight="bold"
      fontSize={(word) => Math.log2(word.value) * 20}
      spiral="rectangular"
      rotate={(word) => word.value % 360}
      padding={5}
      random={Math.random}
    />
  );
};
