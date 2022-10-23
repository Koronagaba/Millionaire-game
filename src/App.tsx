import React from "react";
import Pyramid from "./components/pyramid/Pyramid";
import Question from "./components/question/Question";


function App() {
  return (
    <div className="container center">
      <h1>Millionaire</h1>
      <div className="row">
     <Question />
      <Pyramid />
    </div>
    </div>
  );
}

export default App;
