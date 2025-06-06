import "../../styles/Home.css";
import { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import Intro from "./Intro";
import SkillBox from "./SkillBox";
import skillData from "./skills.json";
import ExperienceBox from "./ExperienceBox";
import experienceData from "./experiences.json";

function Home() {
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>({});
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    handleScrollView();
  }, []);

  const handleScrollTo = () => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  const handleScrollView = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if ((entry.target as HTMLElement).dataset.id) {
              setVisibleItems((prev) => ({
                ...prev,
                [(entry.target as HTMLElement).dataset.id as string]: true,
              }));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.45 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  };

  const handleDownload = () => {
    const pdfUrl = "https://drive.google.com/file/d/1B3rjWO5EtdheQuA8qTuziK9LOa0D5MYF/view?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
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
          <h2>Relevant Skills & Technologies</h2>
          <p>
            Below are the skills and tools relevant to my web development journey. While these represent my current
            expertise, I am always eager to learn and expand my knowledge.{" "}
            <strong>Hover over the icons to see additional details.</strong>
          </p>

          <SkillBox data={skillData[0]} title={"Front-end Development"} />
          <SkillBox data={skillData[1]} title={"Back-end Development"} />
          <SkillBox data={skillData[2]} title={"Databases"} />
          <SkillBox data={skillData[3]} title={"Build Tools & DevOps"} />
          <SkillBox data={skillData[4]} title={"Additional Tools & Skills"} />
          <hr />
        </div>

        <div
          data-id="item1"
          className={`exp-cont fade-in-section ${visibleItems.item1 ? "visible" : ""}`}
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <h2>Education & Certifications</h2>
          <ExperienceBox data={experienceData[0]} />
        </div>
        <div
          data-id="item2"
          className={`exp-cont right fade-in-section ${visibleItems.item2 ? "visible" : ""}`}
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <h2>Professional Experience</h2>
          <ExperienceBox data={experienceData[1]} />
        </div>
        <hr />
        <div
          data-id="item3"
          className={`resume-cont fade-in-section ${visibleItems.item3 ? "visible" : ""}`}
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <div>
            Need a summary of my resume?
            <br />
            <strong>Click the button to view the printable version.</strong>
          </div>
          <button id="resume-btn" onClick={handleDownload}>
            Download PDF
          </button>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
