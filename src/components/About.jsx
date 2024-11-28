import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import '../styles/About.css'

function About() {
    return (
        <>
            <header>
                <section id="about-me">
                <div className="about-me-img-cont">
                    <img className="about-me-img" src="/profile.jpg" alt="" />
                    <div className="img-name">Andrew Tran</div>
                </div>
                <div className="about-me-card">
                    <h2>About me</h2>
                    <p className="about-me-text">Hey there! I am an up-and-coming programmer who wants to pursue a career in web development. My background originally was in electrical engineering where I had worked with power distribution systems for buildings. As I have always strived to showcase my design skills and creativity, my interests have steered me towards web development. Overall, I am a hands-on kind of guy who enjoys designing and making things. Hobbies of mine include wood-working, 3D printing, rock-climbing, and computers (AKA video games).</p>
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
            </header>
        </>
    )
}

export default About;