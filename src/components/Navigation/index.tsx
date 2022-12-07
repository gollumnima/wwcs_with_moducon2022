import { Link } from 'react-router-dom';
import { usePathname } from 'src/utils/usePathname';

export const Navigation = () => {
  const { pathname } = usePathname();
  return (
    <div className="navbar mb-2 shadow-lg bg-primary text-white fixed z-50">
      <div className="w-full sm:max-w-2xl sm:mx-auto flex justify-between">
        <div className="px-2 mx-2">
          <Link to="/">
            <span className={`text-lg font-bold ${pathname === '/' && 'text-primary-content underline underline-offset-8'}`}>
              WWCS X MODUCON
            </span>
          </Link>
        </div>
        <div className="px-2 mx-2">
          <div className="items-stretch lg:flex">
            <a href="/community">
              <span className={`btn btn-ghost btn-sm rounded-btn ${pathname === '/community' && 'text-primary-content underline underline-offset-8'}`}>
                😎 커뮤니티란?
              </span>
            </a>
            <a href="/footprint">
              <span className={`btn btn-ghost btn-sm rounded-btn ${pathname === '/footprint' && 'text-primary-content underline underline-offset-8'}`}>
                🦶 발도장
              </span>
            </a>
            <a href="/result">
              <span className={`btn btn-ghost btn-sm rounded-btn ${pathname === '/result' && 'text-primary-content underline underline-offset-8'}`}>
                ☁️ 구름
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
