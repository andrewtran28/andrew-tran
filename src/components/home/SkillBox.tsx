import React, { useState, useRef } from "react";
import Skill from "./Skill";

type SkillData = {
  skill: string;
  icon: string;
  info: string;
};

type SkillBoxProps = {
  data: SkillData[];
  title: string;
};

function SkillBox({ data, title }: SkillBoxProps) {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const iconRef = useRef<HTMLSpanElement | null>(null);
  const connectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleIconHover = (skillName: string, skillDesc: string, index: number) => {
    setName(skillName);
    setDescription(skillDesc);
    setHoveredIndex(index);

    if (iconRef.current) {
      iconRef.current.style.backgroundColor = "white";
      iconRef.current.style.padding = "10px";
      iconRef.current.style.opacity = "100%";
      iconRef.current.style.transform = "translateY(5px)";
    }

    if (connectionRefs.current[index]) {
      connectionRefs.current[index]!.style.minHeight = "20px";
      connectionRefs.current[index]!.style.transitionDuration = "0.2s"; //Transition duration must be the same as skill-info and skill-icon in Home.css
    }
  };

  const handleInfoHover = () => {
    if (iconRef.current) {
      iconRef.current.style.transform = "translateY(0px)";
    }

    if (hoveredIndex !== null && connectionRefs.current[hoveredIndex]) {
      connectionRefs.current[hoveredIndex]!.style.minHeight = "24px";
    }
  };

  return (
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
              hoverLeave={handleInfoHover}
            />
            {hoveredIndex === i && (
              <div className="hover-connection" ref={(el) => (connectionRefs.current[i] = el)}></div>
            )}
          </div>
        ))}
      </div>
      <span className="skill-info" ref={iconRef}>
        <div className="skill-name">{name}</div>
        {description}
      </span>
    </div>
  );
}

export default SkillBox;
