import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import News from "./components/News";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Charity from "./components/Charity";
import About from "./components/About";
import Events from "./components/Events";
import Mission from "./components/Mission";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <Outlet />
      <Footer />
    </div>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/home", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/charity", element: <Charity /> },
      { path: "/news", element: <News /> },
      { path: "/events", element: <Events /> },
      { path: "/mission", element: <Mission /> },
    ],
  },
]);

export default App;
