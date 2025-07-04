import { useEffect, useState } from "react";
import "../styles/ScrollToTop.css";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowButton(window.scrollY > window.innerHeight * 0.75);
    };

    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`scroll-to-top ${showButton ? "visible" : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top of page"
    >
      ⭡
    </button>
  );
}

export default ScrollToTop;
