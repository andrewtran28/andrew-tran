import { useState, useEffect, useRef } from "react";
import { useIsMount } from "./useIsMount";
import Header from "../Header";
import Project from "./Project";
import projectData from "./projects.json";
import "../../styles/Portfolio.css";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(0);
  const PER_PAGE = 6;
  const startIndex = page * PER_PAGE;
  const endIndex = startIndex + PER_PAGE;
  const [searchInput, setSearchInput] = useState("");
  const scrollRef = useRef(null);
  const isMount = useIsMount();

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

  //Prevents handleScroll on initial render.
  useEffect(() => {
    if (isMount === false) {
      handleScroll();
    }
  }, [page]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    setPage(0);
  };

  const handleNext = () => {
    handleScroll();
    if (!isNextDisabled) setPage((page) => page + 1);
  };

  const handlePrevious = () => {
    handleScroll();
    if (!isPreviousDisabled) setPage((page) => page - 1);
  };

  const handleScroll = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div ref={scrollRef}>
      <Header />
      <div className="portfolio-accent">
        <input
          name="search-bar"
          className="search-bar"
          placeholder="Search by project name or tags"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>

      <div id="portfolio">
        <div className="projects-cont">
          {currentPage.map((project, i) => (
            <Project
              key={i}
              name={project.name}
              img={project.img}
              desc={project.desc}
              gh_url={project.gh_url}
              ext_url={project.ext_url}
              tags={project.tags}
            />
          ))}
        </div>

        {TOTAL_PAGES > 0 ? (
          <div className="projects-nav">
            <button onClick={handlePrevious} disabled={isPreviousDisabled}>
              Previous
            </button>
            <div className="projects-page-num">
              Page {page + 1} of {TOTAL_PAGES}
            </div>
            <button onClick={handleNext} disabled={isNextDisabled}>
              Next
            </button>
          </div>
        ) : (
          <div className="projects-nav">
            No project name or tags match the search criteria...
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
