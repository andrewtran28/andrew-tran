import "../styles/Footer.css";
import location from "../assets/icons/location.png";
import phone from "../assets/icons/phone.png";
import email from "../assets/icons/email.png";
import githubLight from "../assets/icons/github_light.png";
import linkedinLight from "../assets/icons/linkedin_light.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="contact-cont">
          <h2>Contact me</h2>
          <p>
            Please reach out to me if there are any inquiries or opportunities.
            Your time viewing this website is greatly appreciated. Thank you!
          </p>
          <div className="contact-card">
            <a
              href="https://maps.app.goo.gl/Yq9zvF317Vr6qHgF9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="icon" src={location} />
            </a>
            <span>Ottawa, ON, Canada</span>
            <br />
          </div>
          <div className="contact-card">
            <img className="icon" src={phone} />
            <span>613-316-0250</span>
            <br />
          </div>
          <div className="contact-card">
            <a href="mailto:tran.andrew@outlook.com">
              <img className="icon" src={email} />
            </a>
            <span>tran.andrew@outlook.com</span>
          </div>
          <div className="contact-btns">
            <a href="https://github.com/andrewtran28">
              <img className="contact-icon" src={githubLight} />
            </a>
            <a href="https://www.linkedin.com/in/andrew-tran-canada">
              <img className="contact-icon" src={linkedinLight} />
            </a>
          </div>
        </div>
        <picture>
          <source
            id="contact-img"
            media="(max-width: 1000px)"
            srcSet="/profile_mountain2.jpg"
          />
          <img id="contact-img" src="/profile_mountain.jpg" alt="" />
        </picture>
      </footer>
    </>
  );
}

export default Footer;
