import Answers from "./answers/Answers";
import Header from "./header/Header";
import Question from "./Question/Question";
import "./Main.css";
import Timer from "./Timer/Timer";
import { useAppSelector } from "../../hooks/hooks";
import GameOver from "./gameOver/GameOver";
import PercentageBars from "./percentageBars/PercentageBars";
import classNames from "classnames";

const Main = () => {
  const gameOver = useAppSelector((state) => state.gameOver.gameOver);
  const probabilityAnswers = useAppSelector(
    (state) => state.lifebous.probabilityAnswers
  );

  return (
    <div
      className={classNames("main", {
        darkened: gameOver,
      })}
    >
      <Header />
      {gameOver ? (
        <GameOver />
      ) : (
        <div className="quiz">
          <Timer />
          {probabilityAnswers.length !== 0 && <PercentageBars />}
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
