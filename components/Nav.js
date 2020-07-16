import './../styles/Nav.scss';
import Link from 'next/Link';

const Nav = () => {
  return(
    <div className="navbar">
      <Link href="/">
        <span className="link">Home</span>
      </Link>
      <Link href="/about">
        <span className="link">About</span>
      </Link>
    </div>
  )
}

export default Nav;