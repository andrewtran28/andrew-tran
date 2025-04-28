import "../../styles/About.css";
import { useState, useEffect, useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";
import HoverGIF from "../about/HoverGIF";
import Carousel from "./Carousel";

function About() {
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    handleScrollView();
  }, []);

  const handleScrollView = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetElement = entry.target as HTMLElement;
            setVisibleItems((prev) => ({
              ...prev,
              [targetElement.dataset.id!]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  };

  return (
    <>
      <Header />
      <div className="about-accent">
        <div className="about-top">
          <h1>About me</h1>
          <div className="about-intro">
            <img id="about-profile" src="/about/about.jpg" />
            <div>
              <p>
                If you've come this far, I assume you've spent more than 30 seconds on my website. And for that —thank
                you!
              </p>
              <p>
                I am an electrical engineer who has worked <HoverGIF text="6 years" /> in the consulting engineering
                industry where I have done services such as upgrading power distribution systems and designing
                architectural lighting. There are only so many ways you can change a lightbulb{" "}
                <em>(quite literally)...</em> So in recent years, I wanted to explore new avenues that would allow me to
                display my problem-solving skills and creativity. This has lead me to web-development as I liked the
                logical approach associated with programming and the rapid expansion of innovation behind web-design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="about-cont">
        <hr />
        <div
          data-id="item0"
          className={`fade-in-section ${visibleItems.item0 ? "visible" : ""}`}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <h2>My Values and Design Approach</h2>
          <div className="values-cont">
            <div className="value">
              <h3>Form Follows Function</h3>
              <span>
                I believe what makes a good design is when the design reflects its practicality over aesthetics;
                emphasizing function, simplicity, and efficiency. This is a more utilitarian stylistic approach.
              </span>
            </div>
            <div className="value">
              <h3>Re-usable & Scalable Code</h3>
              <span>
                I create code with the assumption that I will always re-use and expand upon it in later projects. This
                mindset ensures my code will be modular, extensible, and clean.
              </span>
            </div>
            <div className="value">
              <h3>Logical Problem-Solving</h3>
              <span>
                When faced with challenging problems, I tend to break down complex problems into smaller, more
                manageable ones. By using reasoning, evidence, and logical thinking, I can arrive at an effective
                solution.
              </span>
            </div>
          </div>
        </div>

        <hr />
        <div
          data-id="item1"
          className={`fade-in-section ${visibleItems.item1 ? "visible" : ""}`}
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <h2>Interests Beyond Web Development</h2>
          <div className="interests-cont">
            <div className="interest">
              <p>
                I spend most of my day at the computer whether it's work, watching videos, or gaming. I run a dual-boot
                PC of Windows 10 for general use and Ubuntu for web-development. Besides sitting at my desk, I also have
                other interests as well.
              </p>
              <img className="interest-img" src="/about/desk.jpg" />
            </div>
            <div className="interest reverse">
              <img className="interest-img" src="/about/climbing.jpg" />
              <p>
                Contrary to the outdoor image you see, I'm actually terrified of heights. I primarily do bouldering and
                sometimes belay in an indoor gym. I am by no means a <em>pro</em>, but I consider myself pretty average
                where I hover around the <em>"V4-V6"</em> grade range.
              </p>
            </div>
            <div className="interest">
              <p>
                I enjoy woodworking, 3D printing, and all things DIY. I love creating projects that either serve a
                purpose to me or further support my hobbies. For woodworking or 3D printing, I like to model everything
                in Sketchup to plan out my designs.
                <br />
                <br />
                Check out some of the things I've made during my free time!
              </p>
              <Carousel />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
