import github from "../../assets/icons/github.png";
import externalLink from "../../assets/icons/external-link.png";

function Project({ name, img, desc, gh_url, ext_url, tags }) {
  return (
    <>
      <div className="project">
        <a target="_blank" rel="noopener noreferrer" href={ext_url}>
          <img className="project-img" src={img} />
        </a>
        <div className="project-sub">
          <div>
            <div className="project-name">{name}</div>
            <div className="project-text">{desc}</div>
          </div>
          <div className="project-tags">
            {tags.map((tag, i) => {
              return (
                <span key={i} className="project-tag">
                  {tag}{" "}
                </span>
              );
            })}
          </div>
          <div className="project-btns">
            <a href={gh_url} target="_blank" rel="noopener noreferrer">
              <img className="icon" src={github} />
            </a>
            {ext_url !== "" && (
              <a href={ext_url} target="_blank" rel="noopener noreferrer">
                <img className="icon" src={externalLink} />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
