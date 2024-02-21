import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div>
        <Header />
        <Divider />
        <Showcase />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
