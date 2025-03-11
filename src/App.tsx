import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import ErrorPage from "./components/ErrorPage";

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

function App() {
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

  return (
    <div id="root">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
