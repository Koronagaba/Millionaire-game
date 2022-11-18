import React from "react";
import Answers from "./Answers";
import Header from "./header/Header";
import Question from "./Question";
import "../../styles/main/Main.css";
import Timer from "./Timer";
import { useAppSelector } from "../../app/hooks/hooks";
import GameOver from "./gameOver/GameOver";
import PercentageBars from "./percentageBars/PercentageBars";

const Main = () => {
  const gameOver = useAppSelector((state) => state.gameOver.gameOver);
  const disablePublicHelpLifebous = useAppSelector(
    (state) => state.lifebous.disablePublicHelpLifebous
  );

  return (
    <div className="main">
      <Header />

      {gameOver ? (
        <GameOver />
      ) : (
        <div className="quiz">
          <Timer />
          {disablePublicHelpLifebous && <PercentageBars />}
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
