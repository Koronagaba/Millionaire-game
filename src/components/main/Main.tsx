import React from "react";
import Answer from "./Answer";
import Header from "./Header";
import Question from "./Question";
import "../../styles/main/Main.css";
import Timer from "./Timer";
import { useAppSelector } from "../../app/hooks/hooks";
import GameOver from "./GameOver";

const Main = () => {
  const gameOver = useAppSelector((state) => state.gameOver.gameOver);

  return (
    <div className="main">
      <Header />
      {gameOver ? (
        <GameOver />
      ) : (
        <div className="quiz">
          <Timer />
          <Question />
          <Answer />
        </div>
      )}
    </div>
  );
};

export default Main;
