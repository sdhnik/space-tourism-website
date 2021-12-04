import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => {
  return (
    <header className="header">
      <Link href="/" className="header__logo"></Link>
      <ul>
        <li>
          <Link href="/" activeClassName="active">00 Home</Link>
        </li>
        <li>
          <Link href="/destinations" activeClassName="active">01 Destination</Link>
        </li>
        <li>
          <Link href="/crew" activeClassName="active">02 Crew</Link>
        </li>
        <li>
          <Link href="/technology" activeClassName="active">03 Technology</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;