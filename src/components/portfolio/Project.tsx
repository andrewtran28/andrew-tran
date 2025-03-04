import React from "react";
import github from "../../assets/icons/github.png";
import externalLink from "../../assets/icons/external-link.png";

interface ProjectProps {
  name: string;
  img: string;
  desc: string;
  gh_url: string;
  ext_url: string;
  tags: string[];
}

const Project: React.FC<ProjectProps> = ({ name, img, desc, gh_url, ext_url, tags }) => {
  return (
    <div className="project">
      <a target="_blank" rel="noopener noreferrer" href={ext_url}>
        <img className="project-img" src={img} alt={name} />
      </a>
      <div className="project-sub">
        <div>
          <div className="project-name">{name}</div>
          <div className="project-text">{desc}</div>
        </div>
        <div className="project-tags">
          {tags.map((tag, i) => (
            <span key={i} className="project-tag">
              {tag}{" "}
            </span>
          ))}
        </div>
        <div className="project-btns">
          <a href={gh_url} target="_blank" rel="noopener noreferrer">
            <img className="icon" src={github} alt="GitHub" />
          </a>
          {ext_url !== "" && (
            <a href={ext_url} target="_blank" rel="noopener noreferrer">
              <img className="icon" src={externalLink} alt="External Link" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
