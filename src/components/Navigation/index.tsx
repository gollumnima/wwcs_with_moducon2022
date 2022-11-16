export const Navigation = () => (
  <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
    <div className="flex-none px-2 mx-2">
      <span className="text-lg font-bold">
        WWCS X MODUCON
      </span>
    </div>
    <div className="flex-1 px-2 mx-2">
      <div className="items-stretch lg:flex">
        <a href="/community">
          <span className="btn btn-ghost btn-sm rounded-btn">
            커뮤니티란?
          </span>
        </a>
        <a href="/footprint">
          <span className="btn btn-ghost btn-sm rounded-btn">
            발도장
          </span>
        </a>
        <a href="/result">
          <span className="btn btn-ghost btn-sm rounded-btn">
            구름
          </span>
        </a>
      </div>
    </div>
  </div>
);
