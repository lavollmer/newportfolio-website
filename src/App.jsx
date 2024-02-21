import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <div>
          <p>Hello</p>
          <Header />
          <Showcase />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
