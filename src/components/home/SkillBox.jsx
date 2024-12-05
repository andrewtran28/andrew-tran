import Skill from "./Skill";
import { useState, useRef } from "react";

function SkillBox({ data, title }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const iconRef = useRef(null);

  const handleIconHover = (skillName, skillDesc, index) => {
    setName(skillName);
    setDescription(skillDesc);
    setHoveredIndex(index);
    iconRef.current.style.backgroundColor = "white";
    iconRef.current.style.padding = "10px";
    iconRef.current.style.display = "unset";
  };

  return (
    <>
      <div className="skills-cont">
        <h3 className="skills-title">{title}</h3>
        <div className="skills-row">
          {data.map((item, i) => (
            <div className="skill-box" key={i}>
              <Skill
                key={i}
                name={item.skill}
                icon={item.icon}
                info={item.info}
                index={i}
                hoverSkill={handleIconHover}
              />
              {hoveredIndex === i && <div className="hover-connection"></div>}
            </div>
          ))}
        </div>
        <span className="skill-info" ref={iconRef}>
          <div className="skill-name">{name}</div>
          {description}
        </span>
      </div>
    </>
  );
}

export default SkillBox;
