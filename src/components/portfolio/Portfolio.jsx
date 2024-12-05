import { useState, useEffect } from "react";
import Project from "./Project";
import projectData from "./projects.json";
import "../../styles/Portfolio.css";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(0);
  const PER_PAGE = 4;
  const startIndex = page * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;

  const [searchInput, setSearchInput] = useState("");

  const filteredProjects = projects.filter(
    (item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchInput.toLowerCase())
      )
  );

  const TOTAL_PAGES = Math.ceil(filteredProjects.length / PER_PAGE);
  const currentPage = filteredProjects.slice(startIndex, endIndex);
  const isPreviousDisabled = page === 0;
  const isNextDisabled = endIndex >= filteredProjects.length;

  useEffect(() => {
    setProjects(projectData);
  }, []);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setPage(0);
  };

  const handleNext = () => {
    if (!isNextDisabled) setPage((page) => page + 1);
  };

  const handlePrevious = () => {
    if (!isPreviousDisabled) setPage((page) => page - 1);
  };

  return (
    <div id="portfolio">
      <div id="portfolio-accent">
        <input
          name="search-bar"
          className="search-bar"
          placeholder="Search by project name or tags"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>

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
          );
        })}
      </div>

      <div className="projects-nav">
        <button onClick={handlePrevious} disabled={isPreviousDisabled}>
          Previous
        </button>
        <div className="projects-page-num">
          {page + 1} of {TOTAL_PAGES}
        </div>
        <button onClick={handleNext} disabled={isNextDisabled}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Portfolio;
