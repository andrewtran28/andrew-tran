import "./App.css";
import { useState, useEffect, useRef } from "react";
import { createBrowserRouter, RouterProvider, Navigate, Outlet, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import ErrorPage from "./components/ErrorPage";

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

  const ScrollToTopLayout = () => {
    const location = useLocation();
    const previousPathRef = useRef<string | null>(null);

    useEffect(() => {
      if (previousPathRef.current !== location.pathname) {
        // only scroll to top only if pathname actually changed
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      previousPathRef.current = location.pathname;
    }, [location.pathname]);

    return <Outlet />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ScrollToTopLayout />,
      children: [
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
      ],
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
    </div>
  );
}

export default App;
