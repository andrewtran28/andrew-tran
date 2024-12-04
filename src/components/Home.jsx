import "../styles/Home.css";
import { useState, useEffect } from "react";
import SkillBox from "./SkillBox";
import skillData from "./skills.json";

function Home() {
  const [showGIF, setShowGIF] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // const [skills, setSkills] = useState([]);
  const [frontSkills, setFrontSkills] = useState([]);

  // useEffect(() => {
  //   setFrontSkills(skillData[0]);
  // }, []);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // const handleDownload = () => {
  //   const pdfUrl = "Andrew-Tran_Resume.pdf";
  //   const link = document.elementFromPoint("a");
  //   link.href = pdfUrl;
  //   link.download = "document.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <div className="home-cont">
      <div className="intro-card">
        <h1>Hey there!</h1>
        <p>
          I am an electrical engineer from Ottawa, Ontario who has recently
          ventured into the realm of web development. My goal is to take the
          plunge and pursue a career as a <strong>full-stack developer</strong>.
          During my{" "}
          <span onMouseMove={handleMouseMove}>
            <span
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setShowGIF(true)}
              onMouseLeave={() => setShowGIF(false)}
            >
              <strong>
                <u>6 years</u>
              </strong>{" "}
            </span>

            {showGIF && (
              <img
                id="joker"
                src="/joker-six.gif"
                alt="Hover GIF"
                style={{
                  position: "fixed",
                  top: `${cursorPosition.y + 110}px`,
                  left: `${cursorPosition.x}px`,
                  width: "200px",
                  pointerEvents: "none",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "5px",
                }}
              />
            )}
          </span>
          in consulting engineering, I have worked with teams and clients alike,
          and have become highly specialized in designing, managing, and
          creating electrical systems for buildings. I believe that{" "}
          <em>these</em> same skills are what makes me a great engineer and is
          what will make me a great developer.
        </p>
        <p>
          I am passionate about creating something out of my own design
          conceptions whether it be electrical systems or functional web
          applications. In other words, I've always been a problem-solver and
          love to take on challenging projects. If you or your company share my
          interest in work, please reach out to me. I look forward to hearing
          from you!
        </p>
      </div>
      <br />
      <hr />
      <h2>Related Skills</h2>
      <p>
        Below are my skills that are applicable to web development. If there is
        something you think is missing, fear not! I don't plan to stop learning
        and I intend to continue my growth. Hover over the icons below to know
        more.
      </p>

      <SkillBox data={skillData[0]} title={"Front-end Development"} />
      <SkillBox data={skillData[1]} title={"Tools & Platforms"} />
      <SkillBox data={skillData[2]} title={"Additional Skills"} />

      <div className="skill-cont">[Other Programs/Platforms]</div>
      <h2>Professional Experience</h2>
      <ul>
        <li>Morrison Hershfield</li>
        <li>Stantec</li>
      </ul>
      <h2>Education & Certifications</h2>
      <ul>
        <li>Carleton University</li>
        <li>Security Clearance: Level II</li>
      </ul>

      <hr />
      <ul>
        <li>Bachelors of Engineering, Electrical, Co-op Option</li>
      </ul>
      <p>Download the printable resume below.</p>
      <span>
        HTML for markup, CSS for presentation, and JavaScript for scripting
      </span>
      {/* <button onClick={handleDownload}>Download Resume</button> */}
    </div>
  );
}

export default Home;
