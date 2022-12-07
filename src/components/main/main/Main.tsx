import Answers from "../answers/Answers";
import Header from "../header/Header";
import Question from "../Question/Question";

import Timer from "../Timer/Timer";
import { useAppSelector } from "../../../hooks/hooks";
import GameOver from "../gameOver/GameOver";
import PercentageBars from "../percentageBars/PercentageBars";

import Lifebous from "../../aside/LifeBous/LifeBous";
import MobileAside from "../mobileAside/MobileAside";
import YouAreMillionaire from "../youAreMillionaire/YouAreMillionaire";
import StartView from "../startView/StartView";

import "./Main.css";
import classNames from "classnames";

const Main = () => {
  const gameOver = useAppSelector((state) => state.gameOver.gameOver);
  const probabilityAnswers = useAppSelector(
    (state) => state.lifebous.probabilityAnswers
  );
  const { youAreMillionaire } = useAppSelector((state) => state.millionaire);
  const isMobile = useAppSelector((state) => state.responsive.isMobile);
  const { startGame } = useAppSelector((state) => state.startView);

  return (
    <div className="main_container">
      <div
        className={classNames("main", {
          darkened: gameOver,
        })}
      >
        <Header />
        {!startGame ? (
          <StartView />
        ) : (
          <>
            {youAreMillionaire ? (
              <YouAreMillionaire />
            ) : (
              <>
                {gameOver ? (
                  <GameOver />
                ) : (
                  <>
                    {isMobile && (
                      <div>
                        <Lifebous />
                        <Timer />
                      </div>
                    )}
                    <div className="quiz">
                      {!isMobile ? <Timer /> : <div></div>}
                      {probabilityAnswers.length !== 0 && <PercentageBars />}
                      <div>
                        <Question />
                        <Answers />
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
      {isMobile && startGame && <MobileAside />}
    </div>
  );
};

export default Main;
