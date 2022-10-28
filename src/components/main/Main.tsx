import React from "react";
import Answer from "./Answer";
import Header from "./Header";
import Question from "./Question";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="quiz">
      <Question />
      <Answer />
      </div>
    </div>
  );
};

export default Main;
