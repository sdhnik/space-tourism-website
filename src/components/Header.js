import { h } from 'preact';
import { Link } from 'preact-router/match';


const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="header__logo">
        <img src='/assets/shared/logo.svg' alt="Logo" />
      </Link>
      <ul>
        <li>
          <Link href="/" activeClassName="active">00 Home</Link>
        </li>
        <li>
          <Link href="/destination.html" activeClassName="active">01 Destination</Link>
        </li>
        <li>
          <Link href="/crew.html" activeClassName="active">02 Crew</Link>
        </li>
        <li>
          <Link href="/technology.html" activeClassName="active">03 Technology</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;