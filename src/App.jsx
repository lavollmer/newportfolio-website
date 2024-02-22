import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import SideNav from "./components/Sidenav";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

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
  return (
    <>
      <div>
        {/* <Box w={[300, 400, 500]} bg="black"> */}
        <SideNav />
        <Header />
        <Main />
        <Project />
        <Skills />
        <Contact />
        <Footer />
        {/* </Box> */}
      </div>
    </>
  );
}

export default App;
