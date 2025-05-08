import "./App.css";
import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  useLocation,
  useNavigationType,
} from "react-router-dom";
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
    const navigationType = useNavigationType(); // PUSH, REPLACE, or POP

    useEffect(() => {
      if (navigationType !== "POP") {
        // Only scroll to top on route changes, not on page reloads
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }, [location.pathname, navigationType]);

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
