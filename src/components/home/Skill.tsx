import { useRef } from "react";

interface SkillProps {
  name: string;
  icon: string;
  info: string;
  index: number;
  hoverSkill: (name: string, info: string, index: number) => void;
  hoverLeave: () => void;
}

function Skill({ name, icon, info, index, hoverSkill, hoverLeave }: SkillProps) {
  const iconRef = useRef<HTMLImageElement | null>(null);

  const handleHover = () => {
    hoverSkill(name, info, index);
  };

  const handleLeave = () => {
    hoverLeave();
  };

  return (
    <>
      <img className="skill-icon" src={icon} ref={iconRef} onMouseEnter={handleHover} onMouseLeave={handleLeave} />
    </>
  );
}

export default Skill;
