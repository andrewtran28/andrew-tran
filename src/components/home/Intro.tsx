import "../../styles/Intro.css";
import profile from "../../assets/profile.jpg";
import github from "../../assets/icons/github_light.png";
import linkedin from "../../assets/icons/linkedin_light.png";
import { useState, useEffect } from "react";

interface IntroProps {
  scroll: () => void;
}

function Intro({ scroll }: IntroProps) {
  const [greeting, setGreeting] = useState<string>("Hey There!");
  const [fade, setFade] = useState<boolean>(true);
  const [textFade, setTextFade] = useState<boolean>(true);

  useEffect(() => {
    handleText();
    setTimeout(() => {
      setGreeting("Hey there!");
      setFade(false);
    }, 500);
  }, []);

  const handleGreetings = (old: string) => {
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

    const randomNum = (max: number): number => {
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
          <h2 className={`greetings ${fade ? "fade" : ""}`} onClick={() => handleGreetings(greeting)}>
            {greeting}
          </h2>
          <div className={`intro-text ${textFade ? "textFade" : ""}`}>
            <p>
              I'm an electrical engineer from Ottawa, ON, transitioning into a career as a full-stack web developer. In
              the consulting engineering industry, I designed and managed electrical systems for buildings,
              collaborating closely with cross-disciplinary teams and clients. The same problem-solving mindset that
              made me a strong engineer now drives my work as a developer.
            </p>
            <p>
              I’m passionate about building things—whether it's a reliable power system or a functional web app. I
              thrive on solving complex problems and bringing ideas to life through thoughtful design and code.
            </p>
          </div>
          <div className={`intro-text ${textFade ? "textFade" : ""} intro-btns`}>
            <a href="https://github.com/andrewtran28">
              <img className="contact-icon" src={github} />
            </a>
            <a href="https://www.linkedin.com/in/andrewtran-dev">
              <img className="contact-icon" src={linkedin} />
            </a>
          </div>
        </div>
      </section>
      <div className={`intro-text ${textFade ? "textFade" : ""} intro-chevron`} onClick={handleScroll}>
        ⌄
      </div>
    </div>
  );
}

export default Intro;
