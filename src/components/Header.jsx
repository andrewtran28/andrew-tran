import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1 id="top-header">Andrew Tran</h1>
      <nav>
        <ul>
          <li>
            <Link to="../home">Home</Link>
          </li>
          <li>
            <Link to="../portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="../about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
