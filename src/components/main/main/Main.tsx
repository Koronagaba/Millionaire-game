import Answers from "../answers/Answers";
import Header from "../header/Header";
import Question from "../Question/Question";

import Timer from "../Timer/Timer";
import { useAppSelector } from "../../../hooks/hooks";
import GameOver from "../gameOver/GameOver";
import PercentageBars from "../percentageBars/PercentageBars";

import MobileAside from "../mobileAside/MobileAside";
import YouAreMillionaire from "../youAreMillionaire/YouAreMillionaire";
import StartView from "../startView/StartView";

import "./Main.css";
import classNames from "classnames";

const Main = () => {
  const { gameOver, probabilityAnswers, youAreMillionaire, startGame } =
    useAppSelector((state) => state.questions);
  const isMobile = useAppSelector((state) => state.responsive.isMobile);

  return (
    <div className="main_container">
      <div
        className={classNames("main", {
          darkened: gameOver,
          mobile_device: isMobile,
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
                    <Timer />
                    <div className="quiz">
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
