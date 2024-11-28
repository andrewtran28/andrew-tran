import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
// import Homepage from './components/Homepage.jsx';
// import Storepage from './components/Storepage.jsx';
// import Checkout from './components/Storepage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:name",
    element: <App />,
    children: [
      // { index: true, element: <Homepage /> },
      // { path: "home", element: <Homepage /> },
      // { path: "store", element: <Storepage /> },
      // { path: "checkout", element: <Checkout /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
