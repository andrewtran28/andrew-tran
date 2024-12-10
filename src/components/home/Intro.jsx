import "../../styles/Intro.css";
import profile from "../../assets/profile.jpg";
import github from "../../assets/icons/github_light.png";
import linkedin from "../../assets/icons/linkedin_light.png";
import HoverGIF from "./HoverGIF";
import { useState, useEffect, useRef } from "react";

function Intro({ scroll }) {
  const [greeting, setGreeting] = useState("Hey There!");
  const [fade, setFade] = useState(true);
  const [textFade, setTextFade] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    handleText();
    setTimeout(() => {
      setGreeting("Hey there!");
      setFade(false);
    }, 500);
  }, []);

  const handleGreetings = (old) => {
    const list = [
      "Hey there!",
      "Hello.",
      "Hey!",
      "Yo!",
      "Sup.",
      "Hi.",
      "*Waves*",
      "Bonjour.",
      "What's up?",
      "G'day bud!",
    ];

    const randomNum = (max) => {
      return Math.floor(Math.random() * max);
    };

    let pickGreeting = list[randomNum(list.length)];
    while (pickGreeting === old) {
      pickGreeting = list[randomNum(list.length)];
    }
    setFade(true);
    setTimeout(() => {
      setGreeting(pickGreeting);
      setFade(false);
    }, 500);
  };

  const handleText = () => {
    setTextFade(true);
    setTimeout(() => {
      setTextFade(false);
    }, 2000);
  };

  const handleScroll = () => {
    scroll();
  };

  return (
    <div id="intro-accent">
      <section id="intro">
        <div className="intro-img-cont">
          <img className="intro-img" src={profile} />
        </div>
        <div className="intro-card">
          <h2
            className={`greetings ${fade ? "fade" : ""}`}
            onClick={() => handleGreetings(greeting)}
          >
            {greeting}
          </h2>
          <div className={`intro-text ${textFade ? "textFade" : ""}`}>
            <p>
              I'm an electrical engineer from Ottawa, ON who wants to pursue a
              career in web development as a{" "}
              <strong>full-stack developer</strong>. During my{" "}
              <HoverGIF text="6 years" /> in the power-distribution industry, I
              have become proficient in designing, managing, and creating
              electrical systems for buildings with teams and clients alike. I
              believe that these same skills are what makes me a <em>great</em>{" "}
              engineer and is what will make me a <em>great</em> developer.
            </p>
            <p>
              I am passionate about creating something out of my own design
              conceptions whether it be electrical systems or functional web
              applications. In other words, I've always been a problem-solver
              and love to take on challenging projects.
            </p>
          </div>
          <div
            className={`intro-text ${textFade ? "textFade" : ""} intro-btns`}
          >
            <a href="https://github.com/andrewtran28">
              <img className="contact-icon" src={github} />
            </a>
            <a href="https://www.linkedin.com/in/andrewtran-developer">
              <img className="contact-icon" src={linkedin} />
            </a>
          </div>
        </div>
      </section>
      <div
        className={`intro-text ${textFade ? "textFade" : ""} intro-chevron`}
        onClick={handleScroll}
      >
        ⌄
      </div>
    </div>
  );
}

export default Intro;
