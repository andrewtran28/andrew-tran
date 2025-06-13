import "../styles/Footer.css";
import footer1 from "../assets/footer1.jpg";
import footer2 from "../assets/footer2.jpg";
import location from "../assets/icons/location.png";
import phone from "../assets/icons/phone.png";
import email from "../assets/icons/email.png";
import githubLight from "../assets/icons/github_light.png";
import linkedinLight from "../assets/icons/linkedin_light.png";

function Footer(): JSX.Element {
  return (
    <footer>
      <svg className="footer-mountains" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1880 58">
        <g transform="scale(1, -1) translate(0, -58)">
          <path
            d="M0 58.7V33.4L285.9 0l202.4 29.7L674 1.9l421.5 42.7 195-40.8L1478 37.1l200.6-14.9 133.7 33.4 67.9-7.4v10.4H0z"
            fill="#e2d8cc"
          />
        </g>
      </svg>

      <div id="footer-cont">
        <div className="contact-cont">
          <h2>Contact me</h2>
          <p>
            Please reach out to me if there are any inquiries or opportunities. Your time viewing this website is
            already greatly appreciated. Thank you!
          </p>
          <div className="contact-card">
            <a href="https://maps.app.goo.gl/Yq9zvF317Vr6qHgF9" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={location} alt="Location icon" />
            </a>
            <span>Ottawa, ON, Canada</span>
            <br />
          </div>
          <div className="contact-card">
            <a href="mailto:tran.andrew@outlook.com">
              <img className="icon" src={email} alt="Email icon" />
            </a>
            <span>tran.andrew@outlook.com</span>
          </div>
          <div className="contact-card">
            <img className="icon" src={phone} alt="Phone icon" />
            <span>(613) 316-0250</span>
            <br />
          </div>
          <div className="contact-btns">
            <a href="https://github.com/andrewtran28">
              <img className="contact-icon" src={githubLight} alt="GitHub icon" />
            </a>
            <a href="https://www.linkedin.com/in/andrewtran-dev">
              <img className="contact-icon" src={linkedinLight} alt="LinkedIn icon" />
            </a>
          </div>
        </div>
        <picture>
          <source id="contact-img" media="(max-width: 1000px)" srcSet={footer2} />
          <img id="contact-img" src={footer1} alt="" loading="lazy" />
        </picture>
        <div id="copyright">© Andrew Tran. All Rights Reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
