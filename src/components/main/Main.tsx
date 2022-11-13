import React from "react";
import Answers from "./Answers";
import Header from "./header/Header";
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
          <Answers />
        </div>
      )}
    </div>
  );
};

export default Main;
