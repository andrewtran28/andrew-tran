import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import ErrorPage from "./components/ErrorPage";

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setShowLoading(true);
    }, 1000);

    setIsLoading(false);
    clearTimeout(loadingTimeout);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/home",
      element: <Navigate to="/" />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1 className={showLoading ? "show" : ""}>
          Loading<span className="load-animation">...</span>
        </h1>
      </div>
    );
  }

  return (
    <div id="root">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
