import { useState, useEffect } from 'react';
import Project from './Project';
import projectData from './projects.json';

function ProjectList () {
    const [projects, setProjects] = useState([]);
    const [page, setPage] = useState (0);
    const PER_PAGE = 4;
    const TOTAL_PAGES = Math.ceil(projects.length/PER_PAGE);
    const startIndex = page * PER_PAGE;
    const endIndex = startIndex + PER_PAGE;
    const currentPage = projects.slice(startIndex, endIndex);
    const isPreviousDisabled = (page === 0);
    const isNextDisabled = endIndex >= projects.length;

    useEffect(() => {
        setProjects(projectData);
    }, []);

    const handleNext = () => {
        if (!isNextDisabled) setPage((page) => page + 1);
    }
    
      const handlePrevious = () => {
        if (!isPreviousDisabled) setPage((page) => page - 1);
    }

    return (
        <>
            <div className="projects-cont">
                {currentPage.map((project, i) => {
                    return (
                        <Project 
                            key={i}
                            name={project.name}
                            img={project.img}
                            desc={project.desc}
                            gh_url={project.gh_url}
                            ext_url={project.ext_url}
                            tags={project.tags}
                        />
                    )
                })}
            </div>

            <div className="projects-nav">
                <button onClick={handlePrevious} disabled={isPreviousDisabled}>
                    Previous
                </button>
                <div className="projects-page-num">{page + 1} of {TOTAL_PAGES}</div>
                <button onClick={handleNext} disabled={isNextDisabled}>
                    Next
                </button>                
            </div>        
        </>

    );
} 

export default ProjectList;