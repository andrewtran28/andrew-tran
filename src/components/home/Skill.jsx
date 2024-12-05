import { useState, useRef } from "react";

function Skill({ name, icon, info, index, hoverSkill }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const iconRef = useRef(null);

  const handleHover = () => {
    hoverSkill(name, info, index);
    iconRef.current.style.backgroundColor = "white";
    setCurrentIndex(index);
  };

  return (
    <>
      <img
        className="skill-icon"
        src={icon}
        ref={iconRef}
        onMouseEnter={handleHover}
      />
    </>
  );
}

export default Skill;
