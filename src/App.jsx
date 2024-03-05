import "./App.css";
import Main from "./components/Main";
import SideNav from "./components/Sidenav";
import Project from "./components/Project";
import { Box } from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <>
      <div>
        <Box>
          <Main zIndex={-1} />
          {/* <SideNav zIndex={10} /> */}
          <Project />
        </Box>
      </div>
    </>
  );
}

export default App;
