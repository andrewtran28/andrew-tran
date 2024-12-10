import "../../styles/Home.css";
import { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Intro from "./Intro";
import SkillBox from "./SkillBox";
import skillData from "./skills.json";
import ExperienceBox from "./ExperienceBox";
import experienceData from "./experiences.json";

function Home() {
  const [visibleItems, setVisibleItems] = useState({});
  const scrollRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    handleScrollView();
  }, []);

  const handleScrollTo = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const handleScrollView = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.45 } // Trigger when 45% of the item is visible
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  };

  const handleDownload = () => {
    const pdfUrl = "../../assets/AndrewTran_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AndrewTran_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <div className="intro-wrapper">
        <Intro scroll={handleScrollTo} />
      </div>
      <div id="home-cont" ref={scrollRef}>
        <hr />
        <div
          data-id="item0"
          className={`fade-in-section ${visibleItems.item0 ? "visible" : ""}`}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <h2>Relevant Skills</h2>
          <p>
            Below are my skills that are applicable to web development. I don't
            plan to stop learning and I intend to continue refining my current
            skill set. <strong>Hover over the icons below to know more.</strong>
          </p>
          <SkillBox data={skillData[0]} title={"Front-end Development"} />
          <SkillBox data={skillData[1]} title={"Tools & Platforms"} />
          <SkillBox data={skillData[2]} title={"Additional Skills"} />
          <hr />
        </div>

        <div
          data-id="item1"
          className={`exp-cont fade-in-section ${
            visibleItems.item1 ? "visible" : ""
          }`}
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <h2>Education & Certifications</h2>
          <ExperienceBox data={experienceData[0]} />
        </div>
        <div
          data-id="item2"
          className={`exp-cont right fade-in-section ${
            visibleItems.item2 ? "visible" : ""
          }`}
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <h2>Professional Experience</h2>
          <ExperienceBox data={experienceData[1]} />
        </div>
        <hr />
        <div
          data-id="item3"
          className={`resume-cont fade-in-section ${
            visibleItems.item3 ? "visible" : ""
          }`}
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <div>
            Need a summary of my resume?
            <br />
            <strong>Click the button to download the printable version.</strong>
          </div>
          <button id="resume-btn" onClick={handleDownload}>
            Download PDF
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
