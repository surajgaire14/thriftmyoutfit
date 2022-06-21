import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**
 * @components
 */
import Navbar from "./components/Navbar";

/**
 * @pages
 */
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="app__container">
      <Navbar />
      <Home/>
    </div>
  );
}
