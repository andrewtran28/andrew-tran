import Skill from "./Skill";
import { useState, useRef } from "react";

function SkillBox({ data, title }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clicked, setClicked] = useState(false);
  const iconRef = useRef(null);

  const handleIconHover = (skillName, skillDesc, index) => {
    if (clicked) return; // Prevent hovering effects if a skill has been clicked

    setName(skillName);
    setDescription(skillDesc);
    setHoveredIndex(index);

    if (iconRef.current) {
      iconRef.current.style.backgroundColor = "white";
      iconRef.current.style.padding = "10px";
      iconRef.current.style.opacity = "100%";
      iconRef.current.style.marginBottom = "-5px";
    }
  };

  const handleInfoHover = () => {
    if (iconRef.current) {
      iconRef.current.style.marginBottom = "0px";
    }

    setClicked(false);
  };

  const handleClick = () => {
    setClicked(true);
    setHoveredIndex(null); // Hide the hover-connection on click
    setName(""); // Hide skill info
    setDescription("");

    if (iconRef.current) {
      iconRef.current.style.opacity = "0%";
    }
  };

  return (
    <>
      <div className="skills-cont">
        <h3 className="skills-title">{title}</h3>
        <div className="skills-row">
          {data.map((item, i) => (
            <div className="skill-box" key={i} onClick={handleClick}>
              <Skill
                key={i}
                name={item.skill}
                icon={item.icon}
                info={item.info}
                index={i}
                hoverSkill={handleIconHover}
                hoverLeave={handleInfoHover}
              />
              {hoveredIndex === i && !clicked && <div className="hover-connection"></div>}
            </div>
          ))}
        </div>
        {!clicked && (
          <span className="skill-info" ref={iconRef}>
            <div className="skill-name">{name} </div>
            {description}
          </span>
        )}
      </div>
    </>
  );
}

export default SkillBox;
