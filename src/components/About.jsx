import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import "../styles/About.css";

import { useState, useEffect } from "react";

function About() {
  const [greeting, setGreeting] = useState("‎");
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setGreeting("Hey there!");
      setFade(false);
    }, 750);
  }, []);

  const handleGreetings = (old) => {
    const list = [
      "Yo!",
      "Hey there!",
      "Hello.",
      "Hey!",
      "Sup.",
      "Hi.",
      "Oi!",
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

  const randomNum = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleHoverWord = (e) => {
    e.target.textContent = "video games";
    e.target.style = `
      color: #ff6054;
      cursor: default;
      transition-duration: 0.2s;
      text-decoration: none;
    `;
  };

  const handleLeaveWord = (e) => {
    e.target.textContent = "computers*";
    e.target.style = "color: unset";
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
            <p className="about-me-text">
              I am a programmer who wants to pursue a career as a{" "}
              <strong>full-stack web developer</strong>. My background comes
              from electrical engineering where I had worked with electrical
              systems for buildings. As I have always strived to showcase my
              design skills and creativity, my interests have steered me towards
              web development.
            </p>
            <p>
              Overall, I'm a hands-on kind of guy who enjoys designing and
              making things. Personal hobbies of mine include wood-working, 3D
              printing, rock-climbing, and{" "}
              <strong
                id="hover-word"
                onMouseEnter={(e) => handleHoverWord(e)}
                onMouseLeave={(e) => handleLeaveWord(e)}
              >
                computers*
              </strong>
              .
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
    </>
  );
}

export default About;
