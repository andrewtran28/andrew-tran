import jokerGIF from "../../assets/joker-six.gif";
import { useState } from "react";

interface HoverGIFProps {
  text: string;
}

function HoverGIF({ text }: HoverGIFProps) {
  const [showGIF, setShowGIF] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
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
        <u>{text}</u>
      </span>

      {showGIF && (
        <img
          src={jokerGIF}
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
