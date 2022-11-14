import React from "react";
import Answers from "./Answers";
import Header from "./header/Header";
import Question from "./Question";
import "../../styles/main/Main.css";
import Timer from "./Timer";
import { useAppSelector } from "../../app/hooks/hooks";
import GameOver from "./gameOver/GameOver";

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
          <div>
            <Question />
            <Answers />
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
