import Answers from "../Answers/Answers";
import Header from "../Header/Header";
import Question from "../Question/Question";
import "./Main.css";
import Timer from "../Timer/Timer";
import { useAppSelector } from "../../../hooks/hooks";
import GameOver from "../GameOver/GameOver";
import PercentageBars from "../PercentageBars/PercentageBars";
import classNames from "classnames";
import Lifebous from "../../aside/LifeBous/LifeBous";
import MobileAside from "../MobileAside/MobileAside";

interface PropsDropDownAside {
  expandAside: boolean;
  setExpandAside: (arg1: boolean) => void;
}

const Main = ({ expandAside, setExpandAside }: PropsDropDownAside) => {
  const gameOver = useAppSelector((state) => state.gameOver.gameOver);
  const probabilityAnswers = useAppSelector(
    (state) => state.lifebous.probabilityAnswers
  );
  const isMobile = useAppSelector((state) => state.responsive.isMobile);

  return (
    <>
      <div className="main_container">
        <div
          className={classNames("main", {
            darkened: gameOver,
          })}
        >
          <Header />
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
        </div>
        {isMobile && (
          <MobileAside
            expandAside={expandAside}
            setExpandAside={setExpandAside}
          />
        )}
      </div>
    </>
  );
};

export default Main;
