import location from '../assets/icons/location.png';
import phone from '../assets/icons/phone.png';
import email from '../assets/icons/email.png';
import githubWhite from '../assets/icons/github_light.png';
import linkedinWhite from '../assets/icons/linkedin_light.png';

function Footer () {
    return (
        <>
            <footer>
                <div className="contact-cont">
                    <h2>Contact me</h2>
                    <p>Feel free to reach out to me for any inquiries or opportunities if you think our work can be mutually beneficial!</p>
                    <div className="contact-card">
                            <a href="https://maps.app.goo.gl/Yq9zvF317Vr6qHgF9" target="_blank" rel="noopener noreferrer">
                                <img className="icon" src={location} />
                            </a>
                            <span>Ottawa, ON, Canada</span><br />
                        </div> 
                        <div className="contact-card">
                            <img className="icon" src={phone} />
                            <span>613-316-0250</span><br />
                        </div>
                        <div className="contact-card">
                            <a href="mailto:tran.andrew@outlook.com">
                                <img className="icon" src={email} />
                            </a>
                            <span>tran.andrew@outlook.com</span>
                        </div>
                        <div className="contact-btns">
                            <a href="https://github.com/andrewtran28"><img className="contact-icon" src={githubWhite}/></a>
                            <img className="contact-icon" src={linkedinWhite} />
                        </div>
                </div>
                <picture>
                    <source id="contact-img" media="(max-width: 1050px)" srcSet="/minglee2-2.png" />
                    <img id="contact-img" src="/minglee2.png" alt="" />
                </picture>
            </footer>                   
        </>
    )
}

export default Footer;