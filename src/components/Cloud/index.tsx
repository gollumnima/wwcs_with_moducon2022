import WordCloud from 'react-d3-cloud';

const data = [
  { text: 'Hey', value: 3 },
  { text: 'lol', value: 5 },
  { text: 'first impression', value: 8 },
  { text: 'very cool', value: 10 },
  { text: 'duck', value: 10 },
];

// TODO:
// 입력폼 만들어서 파이어베이스에서 데이터 가져오기
// 편하게 react-d3-cloud를 써볼까 결정하기
// 동일한 텍스트의 경우 value가 하나씩 증가하도록 만들기

export const Cloud = () => {
  console.log('결과');

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
