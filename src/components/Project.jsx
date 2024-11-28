import github from '../assets/icons/github.png';
import externalLink from '../assets/icons/external-link.png'

function Project ({name, img, desc, gh_url, ext_url, tags}) {
    return (
        <>
            <div className="project">
                <img className="project-img" src={img} />
                <div className="project-sub">
                    <div className="project-name">{name}</div>
                    <div className="project-text">{desc}</div>
                    <div className="project-btns">
                        <a href={gh_url}>
                            <img className="icon" src={github} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href={ext_url}>
                            <img className="icon" src={externalLink} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;