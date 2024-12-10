import "../../styles/About.css";
import Header from "../Header";
import Carousel from "./Carousel";

function About() {
  return (
    <div>
      <Header />
      <div id="about-cont">
        <h2>About me</h2>
        <p>
          If you've come this far, I assume you've spent at least more than 30
          seconds on my website. And for that —thank you! This page is more
          personal than the others and is just a place to get to know me better.
        </p>

        <h3>Values</h3>

        <h3>Interests Beyond Web Development</h3>
        <p>
          I spend most of my day at my desk whether it's work, watching videos,
          or gaming. However, I also have other interests as well.
        </p>
        <img className="about-img" src="/about/desk.jpg" />
        <img className="about-img" src="/about/climbing.jpg" />
        <p>
          Contrary to the outdoor image you see, I actually am terrified of
          heights. I primarily do bouldering or belay in an indoor gym where I
          typically hover around the <em>"V4-V6"</em> grade range.
        </p>
        <p>
          I enjoy woodworking, 3D printing, and all things DIY . I love creating
          projects that either serve a purpose to me or support my hobbies. For
          either woodworking or 3D printing, I like to design everything in
          Sketchup.
        </p>
        <Carousel />
      </div>
    </div>
  );
}

export default About;
