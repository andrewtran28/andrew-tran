import { useState, useEffect } from "react";

function HoverGIF({ text }) {
  const [showGIF, setShowGIF] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <span
        style={{ cursor: "pointer" }}
        onMouseEnter={() => setShowGIF(true)}
        onMouseLeave={() => setShowGIF(false)}
        onMouseMove={handleMouseMove}
      >
        {" "}
        <strong>
          <u>{text}</u>
        </strong>{" "}
      </span>

      {showGIF && (
        <img
          src="/joker-six.gif"
          style={{
            position: "fixed",
            top: `${cursorPosition.y + 110}px`,
            left: `${cursorPosition.x}px`,
            width: "200px",
            pointerEvents: "none",
            transform: "translate(-50%, -50%)",
            borderRadius: "5px",
          }}
        />
      )}
    </>
  );
}

export default HoverGIF;
