import './App.css';

import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

import { Link, useParams } from 'react-router-dom';

function App() {
  const { name } = useParams();

  return (
    <>
      <h1 id="top-header">Andrew Tran</h1>
        <nav>
          <ul>
            <li><Link to="../home">Home</Link></li>
            <li><Link to="../portfolio">Portfolio</Link></li>
            <li><Link to="../about">About</Link></li>
          </ul>
        </nav>

        <main>
          {name === "home" ? (
            <Home />
          ) : name === "portfolio" ? (
            <Portfolio />
          ) : name === "about" ? (
            <About />
          ) : (
            <Home />
          )}
        </main>

        <Footer />
    </>
  )
}

export default App
