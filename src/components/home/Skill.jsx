import { useState, useRef } from "react";

function Skill({ name, icon, info, index, hoverSkill, hoverLeave }) {
  const [currentIndex, setCurrentIndex] = useState(null);
  const iconRef = useRef(null);

  const handleHover = () => {
    hoverSkill(name, info, index);
    setCurrentIndex(index);
  };

  const handleLeave = () => {
    hoverLeave();
  };

  return (
    <>
      <img
        className="skill-icon"
        src={icon}
        ref={iconRef}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      />
    </>
  );
}

export default Skill;
