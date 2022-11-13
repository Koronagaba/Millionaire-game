import fiftyfifty_white_transparent from "../../../assets/fiftyfifty-white-transparent.svg";
import public_white_transparent from "../../../assets/public-white-transparent.svg";
import thirtySec_white_transparent from "../../../assets/30sec-white-transparent.svg";
import { useDispatch } from "react-redux";
import { setExtraTime } from "../../../features/timerSlice";
import { useAppSelector } from "../../../app/hooks/hooks";
import {
  setDisableThirtySecond,
  setTwoIdsInTheGame,
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

  const showWrongAnswersIds = () => {
    const threeIdsWrongAnswers = currentQuestion?.answers
      .filter((answer) => !answer.isCorrect)
      .map((wrongAnswer) => wrongAnswer.id);
    return threeIdsWrongAnswers;
  };

  const threeIdsWrongAnswers = showWrongAnswersIds();

  const handlePublicHelp = () => {
    if(twoIdsWrongAnswers.questionId === currentQuestion?.id) {
     // With fiftyFifty lifebous
      
    }else {
      

    console.log(threeIdsWrongAnswers);
console.log('nie ma question Id');

    }
    
  };

  const handleFiftyFifty = () => {
    if (twoIdsWrongAnswers.questionId || !currentQuestion) return;
    if (!threeIdsWrongAnswers) return;

    const random = Math.floor(Math.random() * threeIdsWrongAnswers.length);
    const randomWrongIdInTheGame = threeIdsWrongAnswers.splice(random, 1);

    dispatch(
      setTwoIdsWrongAnswers({
        ids: threeIdsWrongAnswers,
        questionId: currentQuestion.id,
      })
    );
    // Array with two ids that are in the game: One correct answer id && one wrong answer id
    const correctAnswerId = currentQuestion.answers
      .filter((answer) => answer.isCorrect)
      .map((answer) => answer.id);

    const twoIdsInTheGame = [...correctAnswerId, ...randomWrongIdInTheGame];

    dispatch(setTwoIdsInTheGame(twoIdsInTheGame));
  };

  const handleExtraTime = () => {
    if (!disableThirtySec) {
      dispatch(setExtraTime(30));
      dispatch(setDisableThirtySecond(true));
    }
  };

  return (
    <div className="lifebous">
      <img
        className="img_lifebous"
        onClick={handlePublicHelp}
        src={public_white_transparent}
        alt="public help lifebous"
      />
      <img
        className={classNames("img_lifebous", {
          lifebousDisabled: twoIdsWrongAnswers.questionId,
        })}
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
