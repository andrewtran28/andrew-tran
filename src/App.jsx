import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";

import { useParams, Navigate } from "react-router-dom";

function App() {
  const { name } = useParams();

  return (
    <div id="root">
      {name === "home" ? (
        <Home />
      ) : name === "portfolio" ? (
        <Portfolio />
      ) : name === "about" ? (
        <About />
      ) : (
        <Navigate to="/home" />
      )}

      <Footer />
    </div>
  );
}

export default App;
