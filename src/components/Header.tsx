import "../styles/Header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //Set to height of Header (px)
      if (window.scrollY > 95) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header id="top-header">
        <h1>
          <Link to="../home">ANDREW TRAN</Link>
        </h1>
      </header>

      <nav>
        <div id="logo" style={{ display: isScrolled ? "unset" : "none" }}>
          <Link to="../home">AT</Link>
        </div>
        <ul>
          <li className="nav-list home">
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
