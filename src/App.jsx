import "./App.css";
import Main from "./components/Main";
import SideNav from "./components/Sidenav";
import React from "react";

function App() {
  return (
    <>
      <div>
        <Main className="main" />
        <SideNav className="sidenav" />
      </div>
    </>
  );
}

export default App;
