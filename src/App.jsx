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

//mobile responsive design
const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sidenav = document.querySelector(".sidenav");
      if (window.pageYOffset > 0) {
        sidenav.classList.add("fixed");
      } else {
        sidenav.classList.remove("fixed");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <Main />
        <SideNav />
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
