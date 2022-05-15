import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Preloader from '../src/components/Pre';
import NavBar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
// import About from './components/About/'
import Footer from "./components/Footer";
import Resume from "./components/Resume/Resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
