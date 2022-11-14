import './styles/main.css';
import './styles/global.css';

function App() {
  return (
    <>
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="flex-none px-2 mx-2">
          <span className="text-lg font-bold">
            WWCS X MODUCON
          </span>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="items-stretch hidden lg:flex">
            <span className="btn btn-ghost btn-sm rounded-btn">
              커뮤니티란?
            </span>
            <span className="btn btn-ghost btn-sm rounded-btn">
              방명록
            </span>
            <span className="btn btn-ghost btn-sm rounded-btn">
              구름
            </span>
          </div>
        </div>
      </div>

      <div className="ml-5 mt-5">
        <h1>커뮤니티란?에 들어가면 워드 클라우드를 위한 입력폼을 만들거고요</h1>
        <span>방명록엔 방명록을 쓸수있는 입력폼을 만들거에요오</span>
        <span>물논 지금은 대충 만들어서 배포했지만 이것은 모바일용 디자인에 최적화시킬거에요</span>
      </div>
    </>
  );
}

export default App;
