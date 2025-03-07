import "../../styles/Home.css";
import { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Intro from "./Intro";
import SkillBox from "./SkillBox";
import skillData from "./skills.json";
import ExperienceBox from "./ExperienceBox";
import experienceData from "./experiences.json";

type ExperienceItem = {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  location: string;
  note?: string;
};

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
    const pdfUrl = "/AndrewTran_Resume_2025.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "AndrewTran_Resume_2025.pdf";
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
            Below are my skills and tools that are applicable to web development. Please note that I am not limited to
            these technologies, and intend to continue my growth.{" "}
            <strong>Hover over the icons below to know more.</strong>
          </p>
          <SkillBox data={skillData[0]} title={"Front-end Development"} />
          <SkillBox data={skillData[1]} title={"Back-end Development"} />
          <SkillBox data={skillData[2]} title={"Tools & Platforms"} />
          <SkillBox data={skillData[3]} title={"Additional Skills"} />
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
