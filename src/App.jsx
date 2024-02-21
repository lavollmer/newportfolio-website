import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 1. import `ChakraProvider` component and extendBaseTheme
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <div>
          <p>Hello</p>
          <Header {...pageProps} />
          <Showcase {...pageProps} />
          <Skills {...pageProps} />
          <Contact {...pageProps} />
          <Footer {...pageProps} />
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
