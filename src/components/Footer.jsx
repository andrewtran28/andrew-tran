import location from '../assets/icons/location.png';
import phone from '../assets/icons/phone.png';
import email from '../assets/icons/email.png';
import githubWhite from '../assets/icons/github_light.png';
import linkedinWhite from '../assets/icons/linkedin_light.png';
import twitterWhite from '../assets/icons/twitter_light.png';

function Footer () {
    return (
        <>
            <footer>
                <div className="contact-cont">
                    <h2>Contact me</h2>
                    <p>Feel free to reach out to me for any inquiries or opportunities if you think our work can be mutually beneficial!</p>
                    <div className="contact-card">
                            <img className="icon" src={location} />
                            <span>Ottawa, ON, Canada</span><br />
                        </div> 
                        <div className="contact-card">
                            <img className="icon" src={phone} />
                            <span>613-316-0250</span><br />
                        </div>
                        <div className="contact-card">
                            <img className="icon" src={email} />
                            <span>tran.andrew@outlook.com</span>
                        </div>
                        <div className="contact-btns">
                            <a href="https://github.com/andrewtran28"><img className="contact-icon" src={githubWhite}/></a>
                            <img className="contact-icon" src={linkedinWhite} />
                            <img className="contact-icon" src={twitterWhite} />
                        </div>
                </div>
                <picture>
                    <source id="contact-img" media="(max-width: 1050px)" srcSet="../public/minglee2-2.png" />
                    <img id="contact-img" src="../public/minglee2.png" alt="" />
                </picture>
            </footer>                   
        </>
    )
}

export default Footer;