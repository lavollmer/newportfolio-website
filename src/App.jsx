import "./App.css";
import Main from "./components/Main";
import About from "./components/About";
import SideNav from "./components/Sidenav";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Skill from "./components/Skill";
import React from "react";
import { useEffect } from "react";

function App() {
  return (
    <>
      <div>
        <Main />
        <SideNav className="sidenav" />
        <Project />
        <About />
        <Skill />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
