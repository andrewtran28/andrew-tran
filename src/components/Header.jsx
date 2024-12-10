import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1 id="top-header">
        <Link to="../home">ANDREW TRAN</Link>
      </h1>
      <nav>
        <ul>
          <li className="nav-list">
            <Link className="nav-link" to="../home">
              Home
            </Link>
          </li>
          <li className="nav-list">
            <Link className="nav-link" to="../portfolio">
              Portfolio
            </Link>
          </li>
          <li className="nav-list">
            <Link className="nav-link" to="../about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
