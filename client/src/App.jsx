import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <Router>
      <div className="app__container">
        <Navbar />
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
