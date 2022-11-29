import Answers from "./answers/Answers";
import Header from "./header/Header";
import Question from "./Question/Question";
import "./Main.css";
import Timer from "./Timer/Timer";
import { useAppSelector } from "../../hooks/hooks";
import GameOver from "./gameOver/GameOver";
import PercentageBars from "./percentageBars/PercentageBars";
import classNames from "classnames";
import Lifebous from "../aside/LifeBous/LifeBous";
import MobileAside from "./mobileAside/MobileAside";

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

  console.log(isMobile);

  return (
    <>
      <div className="main_container">
        <div
          className={classNames("main", {
            darkened: gameOver,
          })}
        >
          <Header />

          {/* Only for mobile */}
          {isMobile && (
            <div>
              <Lifebous />
              <Timer />
            </div>
          )}

          {gameOver ? (
            <GameOver />
          ) : (
            <div className="quiz">
              {!isMobile ? <Timer /> : <div></div>}
              {probabilityAnswers.length !== 0 && <PercentageBars />}
              <div>
                <Question />
                <Answers />
              </div>
            </div>
          )}
        </div>
        {isMobile && (
          <MobileAside expandAside={expandAside} setExpandAside={setExpandAside} />
        )}
      </div>
    </>
  );
};

export default Main;
