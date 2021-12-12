import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Link } from 'preact-router/match';


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Link href="/" className="header__logo">
        <img src='/assets/shared/logo.svg' alt="Logo" />
      </Link>
      <button 
        className={`header__toggle${open ? ` open` : ``}`}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul className={`nav header__nav${open ? ` open` : ``}`}>
        <li className="header__nav__item">
          <Link href="/" activeClassName="active">Home</Link>
        </li>
        <li className="header__nav__item">
          <Link href="/destination.html" activeClassName="active">Destination</Link>
        </li>
        <li className="header__nav__item">
          <Link href="/crew.html" activeClassName="active">Crew</Link>
        </li>
        <li className="header__nav__item">
          <Link href="/technology.html" activeClassName="active">Technology</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;