import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

import { useParams, Navigate } from "react-router-dom";

function App() {
  const { name } = useParams();

  return (
    <>
      <Header />

      <main>
        {name === "home" ? (
          <Home />
        ) : name === "portfolio" ? (
          <Portfolio />
        ) : name === "about" ? (
          <About />
        ) : (
          <Navigate to="/home" />
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
