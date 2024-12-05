import "../../styles/Home.css";
import { useState, useEffect } from "react";
import HoverGIF from "./HoverGIF";
import SkillBox from "./SkillBox";
import skillData from "./skills.json";
import ExperienceBox from "./ExperienceBox";
import experienceData from "./experiences.json";

import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";

function Home() {
  const [greeting, setGreeting] = useState("Hey there!");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGreeting("Hey there!");
      setFade(false);
    }, 750);
  }, []);

  const handleGreetings = (old) => {
    const randomNum = (max) => {
      return Math.floor(Math.random() * max);
    };

    const list = [
      "Yo!",
      "Hey there!",
      "Hello.",
      "Hey!",
      "Sup.",
      "Hi.",
      "*Waves*",
      "Bonjour.",
      "What's up?",
    ];

    let pickGreeting = list[randomNum(list.length)];
    while (pickGreeting === old) {
      pickGreeting = list[randomNum(list.length)];
    }
    setFade(true);
    setTimeout(() => {
      setGreeting(pickGreeting);
      setFade(false);
    }, 300);
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
      <div id="about-accent">
        <section id="about-me">
          <div className="about-me-img-cont">
            <img className="about-me-img" src="/profile_colour.jpg" alt="" />
            <div className="img-name">Andrew Tran</div>
          </div>
          <div className="about-me-card">
            <h2
              className={`greetings ${fade ? "fade" : ""}`}
              onClick={() => handleGreetings(greeting)}
            >
              {greeting}
            </h2>
            <p>
              I am an electrical engineer from Ottawa, ON who has recently
              ventured into the world of web development and want to pursue a
              career as a <strong>full-stack developer</strong>. During my
              <HoverGIF text="6 years" />
              as an electrical engineer, I have become proficient in designing,
              managing, and creating electrical systems for buildings with teams
              and clients alike. I believe that these same skills are what makes
              me a great engineer and is what will make me a great developer.
            </p>
            <p>
              I am passionate about creating something out of my own design
              conceptions whether it be electrical systems or functional web
              applications. In other words, I've always been a problem-solver
              and love to take on challenging projects.
            </p>
            <div className="about-btns">
              <a href="https://github.com/andrewtran28">
                <img className="contact-icon" src={github} />
              </a>
              <a href="https://www.linkedin.com/in/andrew-tran-canada">
                <img className="contact-icon" src={linkedin} />
              </a>
            </div>
          </div>
        </section>
      </div>

      <div className="home-cont">
        <hr />
        <h2>Relevant Skills</h2>
        <p>
          Below are my skills that are applicable to web development. I don't
          plan to stop learning and I intend to continue refining my current
          skill set. <br />
          <strong>Hover over the icons below to know more.</strong>
        </p>
        <SkillBox data={skillData[0]} title={"Front-end Development"} />
        <SkillBox data={skillData[1]} title={"Tools & Platforms"} />
        <SkillBox data={skillData[2]} title={"Additional Skills"} />
        <hr />
        <div className="exp-cont">
          <h2>Education & Certifications</h2>
          <ExperienceBox data={experienceData[0]} />
        </div>
        <div className="exp-cont right">
          <h2>Professional Experience</h2>
          <ExperienceBox data={experienceData[1]} />
        </div>
        <hr />
        <div className="resume-cont">
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
