import fiftyfifty_white_transparent from "../../../assets/fiftyfifty-white-transparent.svg";
import public_white_transparent from "../../../assets/public-white-transparent.svg";
import thirtySec_white_transparent from "../../../assets/30sec-white-transparent.svg";
import thirtySec_black_transparent from "../../../assets/30sec-black-transparent.svg";
import { useDispatch } from "react-redux";
import { setExtraTime } from "../../../features/timerSlice";
import { useAppSelector } from "../../../app/hooks/hooks";
import {
  setDisableThirtySecond,
  setTwoIdsWrongAnswers,
} from "../../../features/lifebousSlice";
import classNames from "classnames";
import "./LifeBous.css";

const Lifebous = () => {
  const { disableThirtySec, twoIdsWrongAnswers } = useAppSelector(
    (state) => state.lifebous
  );
  const { currentQuestion } = useAppSelector((state) => state.questions);
  const dispatch = useDispatch();
  const handleExtraTime = () => {
    if (!disableThirtySec) {
      dispatch(setExtraTime(30));
      dispatch(setDisableThirtySecond(true));
    }
  };

  const handleFiftyFifty = () => {
    if (!currentQuestion) return;
    const wrongAnswersIds = currentQuestion.answers
      .filter((answer) => answer.isCorrect === false)
      .map((wrongAnswer) => wrongAnswer.id);


    const random = Math.floor(Math.random() * wrongAnswersIds.length);
    wrongAnswersIds.splice(random, 1);
    dispatch(setTwoIdsWrongAnswers(wrongAnswersIds));
  };


  return (
    <div className="lifebous">
      <img
        className="img_lifebous"
        src={public_white_transparent}
        alt="public help lifebous"
      />
      <img
        className="img_lifebous"
        onClick={handleFiftyFifty}
        src={fiftyfifty_white_transparent}
        alt="fifty-fifty lifebous"
      />
      <img
        className={classNames("img_lifebous", {
          lifebousDisabled: disableThirtySec,
        })}
        onClick={handleExtraTime}
        src={thirtySec_white_transparent}
        alt="Additional 30 seconds lifebous"
      />
    </div>
  );
};

export default Lifebous;
