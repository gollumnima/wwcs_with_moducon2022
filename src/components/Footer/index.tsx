/* eslint-disable jsx-a11y/anchor-is-valid */
export const Footer = () => (
  <footer className="absolute sm:fixed bottom-0 p-6 footer bg-neutral text-neutral-content">
    <div className="w-full sm:max-w-2xl sm:mx-auto sm:flex sm:justify-between">
      <div>
        <img className="w-40" src="/images/seoul_t_b.jpg" alt="위민후코드 서울 로고" />
        <br />
        <p className="my-2">
          만든이: 김두리
          <br />
          오류 신고 및 문의는 아래의 이메일로 부탁드립니다.
          <br />
          <br />
          💌 doori.alice.kim@gmail.com
        </p>
      </div>
      <div>
        <span className="footer-title">Speakers</span>
        <div className="grid grid-flow-col gap-4 mt-2">
          <a href="https://www.linkedin.com/in/dooreplay" target="_blank" rel="noreferrer">
            <span className="underline decoration-wavy decoration-secondary">김두리</span>
          </a>
          <a href="https://www.linkedin.com/in/hayoo2" target="_blank" rel="noreferrer">
            <span className="underline decoration-wavy decoration-secondary">유현아</span>
          </a>
          <a href="https://www.linkedin.com/in/hwayoung-yoon" target="_blank" rel="noreferrer">
            <span className="underline decoration-wavy decoration-secondary">윤화영</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);
