import React from "react";
import Answer from "./Answer";
import Header from "./Header";
import Question from "./Question";
import "../../styles/main/Main.css"
import Timer from "./Timer";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <div className="quiz">
        <Timer />
      <Question />
      <Answer />
      </div>
    </div>
  );
};

export default Main;
