import "../../styles/About.css";
import Header from "../Header";
import HoverGIF from "../about/HoverGIF";
import Carousel from "./Carousel";

function About() {
  return (
    <div>
      <Header />
      <div id="about-cont">
        <h2>About me</h2>
        <div className="about-intro">
          <img id="about-profile" src="/about/about.jpg" />
          <div>
            <p>
              If you've come this far, I assume you've spent more than 30
              seconds on my website. And for that —thank you!
            </p>
            <p>
              I am an electrical engineer who has worked{" "}
              <HoverGIF text="6 years" /> in the consulting engineering industry
              where I have done services such as upgrading power distribution
              systems and designing architectural lighting. In recent years, I
              wanted to explore new avenues that would allow me to display my
              problem-solving skills and creativity. There are only so many ways
              you can change a lightbulb <em>(quite literally)...</em> This has
              lead me to web-development as I liked the logical approach
              associated with programming and the rapid expansion of innovation
              behind web-design.
            </p>
          </div>
        </div>

        <hr />
        <h2>My Values and Design Approach</h2>
        <div className="values-cont">
          <div className="value">
            <h3>Form Follows Function</h3>
            <span>
              I believe what makes a good design is when the design reflects
              it's practicality over aesthetics; emphasizing function,
              simplicity, and efficiency. This is a more utilitarian stylistic
              approach.
            </span>
          </div>
          <div className="value">
            <h3>Re-usable & Scalable Code</h3>
            <span>
              I create code with the assumption that I will always re-use and
              expand upon it in later projects. This mindset ensures my code
              will be modular, extensible, and clean.
            </span>
          </div>
          <div className="value">
            <h3>Logical Problem-Solving</h3>
            <span>
              When faced with challenging problems, I tend to break down complex
              problems into smaller, more manageable ones. By using reasoning,
              evidence, and logical thinking, I can arrive at an effective
              solution.
            </span>
          </div>
        </div>
        <hr />
        <h2>Interests Beyond Web Development</h2>
        <div className="interests-cont">
          <div className="interest">
            <p>
              I spend most of my day at the computer whether it's work, watching
              videos, or gaming. I run a dual-boot PC of Windows 10 for general
              use and Ubuntu for web-development. Besides sitting at my desk, I
              also have other interests as well.
              <br />
              <br />
              <strong>Fun fact:</strong> The colour and theme of my website was
              based on the{" "}
              <a
                href="https://epomaker.com/products/cidoo-v87"
                target="_blank"
                rel="noopener noreferrer"
              >
                mechanical keyboard
              </a>{" "}
              you see in this image.
            </p>
            <img className="interest-img" src="/about/desk.jpg" />
          </div>
          <div className="interest reverse">
            <img className="interest-img" src="/about/climbing.jpg" />
            <p>
              Contrary to the outdoor image you see, I'm actually terrified of
              heights. I primarily do bouldering and sometimes belay in an
              indoor gym. If you were curios, I'm by no means a <em>pro</em>,
              but I consider myself pretty average where I hover around the{" "}
              <em>"V4-V6"</em> grade range.
            </p>
          </div>
          <div className="interest">
            <p>
              I enjoy woodworking, 3D printing, and all things DIY. I love
              creating projects that either serve a purpose to me or further
              support my hobbies. For woodworking or 3D printing, I like to
              model everything in Sketchup to plan out my designs. Check out
              some of the things I've made during my free time!
            </p>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
