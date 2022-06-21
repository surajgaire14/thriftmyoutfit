import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**
 * @components
 */
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

/**
 * @pages
 */
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Topbar/>
      <Home/>
    </div>
  );
}
