import { useEffect, useState } from "react";
import fiftyfifty_white_transparent from "../../../assets/fiftyfifty-white-transparent.svg";
import public_white_transparent from "../../../assets/public-white-transparent.svg";
import thirtySec_white_transparent from "../../../assets/30sec-white-transparent.svg";
import { useDispatch } from "react-redux";
import { setExtraTime } from "../../../features/timerSlice";
import { useAppSelector } from "../../../app/hooks/hooks";
import {
  setAnswersAfterPublicHelp,
  setDisablePublicHelpLifebous,
  setDisableThirtySecondLifebous,
  setTwoIdsInTheGame,
  setTwoIdsWrongAnswers,
} from "../../../features/lifebousSlice";
import classNames from "classnames";
import "./LifeBous.css";

interface ProbabilityOfAudience {
  id?: number;
  probabilityAmount: number;
}

const Lifebous = () => {
  const [oneHundredPercentinAmount, setOneHundredPercent] = useState(0);
  const [answersWithProbabilityAudience, setAnswersWithProbabilityAudience] =
    useState<ProbabilityOfAudience[]>([]);

  const {
    disableThirtySecLifebous,
    twoIdsWrongAnswers,
    disablePublicHelpLifebous,
    answersAfterPublicHelp,
  } = useAppSelector((state) => state.lifebous);
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
    if (disablePublicHelpLifebous) return;
    if (twoIdsWrongAnswers.questionId === currentQuestion?.id) {
      // With fiftyFifty lifebous
    } else {
      currentQuestion?.answers.map((answer) => {
        if (answer.isCorrect) {
          // Probability for true answer
          const trueRandom = Math.floor(Math.random() * (100 - 60 + 1) + 60);

          setAnswersWithProbabilityAudience((prevState) => [
            ...prevState,
            {
              id: answer.id,
              probabilityAmount: trueRandom,
            },
          ]);
        } else {
          //Probability for false answer
          const falseRandom = Math.floor(Math.random() * 80);

          setAnswersWithProbabilityAudience((prevState) => [
            ...prevState,
            {
              id: answer.id,
              probabilityAmount: falseRandom,
            },
          ]);
        }
      });
      dispatch(setDisablePublicHelpLifebous(true));
    }
  };

  useEffect(() => {
    const sum = answersWithProbabilityAudience.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.probabilityAmount,
      0
    );
    setOneHundredPercent(sum);

    const answerWithCalculatedPercents = answersWithProbabilityAudience.map(
      (answer) => ({
        id: answer.id,
        answerTheAudience: Math.round(
          (answer.probabilityAmount * 100) / oneHundredPercentinAmount
        ),
      })
    );

    dispatch(setAnswersAfterPublicHelp(answerWithCalculatedPercents));
  }, [answersWithProbabilityAudience, oneHundredPercentinAmount, dispatch]);

  console.log(answersAfterPublicHelp);

  ////////////////////////////////////
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
    if (!disableThirtySecLifebous) {
      dispatch(setExtraTime(30));
      dispatch(setDisableThirtySecondLifebous(true));
    }
  };

  return (
    <div className="lifebous">
      <img
        className={classNames("img_lifebous", {
          lifebousDisabled: disablePublicHelpLifebous,
        })}
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
          lifebousDisabled: disableThirtySecLifebous,
        })}
        onClick={handleExtraTime}
        src={thirtySec_white_transparent}
        alt="Additional 30 seconds lifebous"
      />
    </div>
  );
};

export default Lifebous;
