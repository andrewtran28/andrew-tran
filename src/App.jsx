import './App.css';

import Footer from './components/Footer';
import ProjectList from './components/ProjectList';

import github from './assets/icons/github.png';
import linkedin from './assets/icons/linkedin.png';
import twitter from './assets/icons/twitter.png';

function App() {
  // const { name } = useParams();

  return (
    <>
      <h1>Andrew Tran</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Portfolio</li>
                <li>About</li>
            </ul>
        </nav>

        <main>
          <header>
            <section className="about-me">
                <div className="about-me-img-cont">
                    {/* <picture> */}
                        {/* <source className="about-me-img" srcSet="../public/profile.jpg" media="min-width: 400px" /> */}
                        <img className="about-me-img" src="../public/profile.jpg" alt="" />
                    {/* </picture> */}
                    <div className="img-name">Andrew Tran</div>
                </div>
                <div className="about-me-card">
                    <h2>About me</h2>
                    <p className="about-me-text">Hey there! I am a self-taught programmer who wants to pursue a career in web development. My original background comes from electrical engineering, working with power system distribution for buildings. I have always been a <em>DIY</em>, hands-on kind of guy who enjoys designing and creating things. Hobbies of mine include wood-working, 3D printing, rock-climbing, and of course... video games.</p>
                    <div className="about-btns">
                        <a href="https://github.com/andrewtran28">
                          <img className="contact-icon" src={github} />
                        </a>
                        <img className="contact-icon" src={linkedin} />
                        <img className="contact-icon" src={twitter} />
                    </div>
                </div>
            </section>
          </header>

          <ProjectList />
          {/* {name === "home" ? (
            <App
            />
          ) : (
            <App />
          )} */}
        </main>

        <Footer />
    </>
  )
}

export default App
