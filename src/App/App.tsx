import React from "react";
import Aside from "../components/aside/Aside";
import Main from "../components/main/Main";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="container center row">
          <Main />
          <Aside />
      </div>
    </div>
  );
}

export default App;
