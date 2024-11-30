import "../styles/Home.css";
import { useState } from "react";

function Home() {
  const [showGIF, setShowGIF] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setShowGIF(true);
  };

  const handleMouseLeave = () => {
    setShowGIF(false);
  };

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleDownload = () => {
    const pdfUrl = "Andrew-Tran_Resume.pdf";
    const link = document.elementFromPoint("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeCHild(link);
  };

  const handleHoverGIF = () => {};

  return (
    <div className="home-cont">
      <div className="intro-card">
        <h1>Hey there!</h1>
        <p>
          I am an electrical engineer from Ottawa, Canada who has recently
          ventured into the realm of web development. My goal is to take the
          plunge and become a <strong>full-stack developer</strong>. During my{" "}
          <span onMouseMove={handleMouseMove}>
            <span
              style={{ cursor: "pointer" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
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
          in consulting engineering, I have worked with teams and clients alike
          and have become highly specialized in designing, managing, and
          creating electrical systems for buildings. I believe that these same
          skills are what makes me a great engineer and is what will make me a
          great developer.
        </p>
        <p>
          I am passionate about creating something out of my own design
          conceptions whether it be electrical systems or functional web
          applications. I've always been a problem-solver and love to take on
          new, challenging projects. If you or your company share my interest in
          work, please reach out to me. I look forward to hearing from you!
        </p>
      </div>
      <h2>Related Skills</h2>
      <p>
        Below are my skills that are applicable to web development (so far..).{" "}
        <br />
        Hover over the icons to know more!
      </p>
      <div className="skill-cont">
        [Front-end Development]
        <img className="skill-icon" src="/logos/html5.svg" />
        <img className="skill-icon" src="/logos/css3.svg" />
        <img className="skill-icon" src="/logos/javascript.svg" />
        <img className="skill-icon" src="/logos/react.svg" />
        <img className="skill-icon" src="/logos/tailwind.svg" />
      </div>
      <div className="skill-cont">
        [Tools & Platforms]
        <img className="skill-icon" src="/logos/git.svg" />
        <img className="skill-icon" src="/logos/github.svg" />
        <img className="skill-icon" src="/logos/vs-code.svg" />
        <img className="skill-icon" src="/logos/npm.svg" />
        <img className="skill-icon" src="/logos/webpack.svg" />
      </div>
      <div className="skill-cont">
        [Additional Skills]
        <img className="skill-icon" src="/logos/jest.svg" />
        <img className="skill-icon" src="/logos/responsive.svg" />
      </div>
      <div className="skill-cont">
        [Additional Skills]
        <img className="skill-icon" src="/logos/sql.svg" />
      </div>
      <div className="skill-cont">[Other Programs/Platforms]</div>
      <h2>Work Experience</h2>
      Morrison Hershfield Stantec
      <h2>Education</h2>
      Carleton University
      <hr />
      <ul>
        <li>Bachelors of Engineering, Electrical, Co-op Option</li>
      </ul>
      <p>Download the printable resume below.</p>
      <button onClick={handleDownload}>Download Resume</button>
    </div>
  );
}

export default Home;
