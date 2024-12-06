import "../../styles/Home.css";
import Intro from "./Intro";
import SkillBox from "./SkillBox";
import skillData from "./skills.json";
import ExperienceBox from "./ExperienceBox";
import experienceData from "./experiences.json";

function Home() {
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
      <Intro />

      <div className="home-cont">
        <hr />
        <h2>Relevant Skills</h2>
        <p>
          Below are my skills that are applicable to web development. I don't
          plan to stop learning and I intend to continue refining my current
          skill set. <br />
          <strong>Hover over the icons below to know more.</strong>
        </p>
        <div className="skills-cont">
          <SkillBox data={skillData[0]} title={"Front-end Development"} />
          <SkillBox data={skillData[1]} title={"Tools & Platforms"} />
          <SkillBox data={skillData[2]} title={"Additional Skills"} />
        </div>
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
