import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setExtraTime } from "../../../features/timerSlice";
import { useAppSelector } from "../../../hooks/hooks";
import {
  // addProbabilityAnswers,
  addAnswersWithCalculatedPercents,
  // setTwoIdsWrongAnswers,
} from "../../../features/lifebousSlice";

import fiftyfifty_white_transparent from "../../../assets/icons/fiftyfifty-white-transparent.svg";
import public_white_transparent from "../../../assets/icons/public-white-transparent.svg";
import thirtySec_white_transparent from "../../../assets/icons/30sec-white-transparent.svg";

import "./LifeBous.css";
import classNames from "classnames";
import { addProbabilityAnswers, setDisablePublicHelpLifebous, setDisableThirtySecondLifebous, setTwoIdsWrongAnswers } from "../../../features/questionsSlice";

const Lifebous = () => {
  const [sumProbabilityAnswers, setSumProbabilityAnswers] = useState(0);
  const dispatch = useDispatch();

  const {
    // disableThirtySecLifebous,
    // twoIdsWrongAnswers,
    // disablePublicHelpLifebous,
    // probabilityAnswers,
  } = useAppSelector((state) => state.lifebous);
  const {
    currentQuestion,
    selectedAnswer,
    probabilityAnswers,
    disableThirtySecLifebous,
    disablePublicHelpLifebous,
    twoIdsWrongAnswers
    
  } = useAppSelector((state) => state.questions);
  const { gameOver } = useAppSelector((state) => state.questions);

  const showWrongAnswersIds = () => {
    const threeWrongAnswersIds = currentQuestion?.answers
      .filter((answer) => !answer.isCorrect)
      .map((wrongAnswer) => wrongAnswer.id);
    return threeWrongAnswersIds;
  };
  const threeWrongAnswersIds = showWrongAnswersIds();

  ////////////////
  const handlePublicHelp = () => {
    if (disablePublicHelpLifebous || gameOver || selectedAnswer) return;
    if (twoIdsWrongAnswers.questionId === currentQuestion?.id) {
      // With fiftyFifty lifebous
    } else {
      currentQuestion?.answers.map((answer) => {
        //Probability answers
        if (answer.isCorrect) {
          // Probability for true answer
          const randomForTrueAnswer = Math.floor(
            Math.random() * (100 - 60 + 1) + 60
          );

          dispatch(
            addProbabilityAnswers({
              id: answer.id,
              probabilityAmount: randomForTrueAnswer,
            })
          );
        } else {
          //Probability for false answer
          const randomForFalseAnswer = Math.floor(Math.random() * 80);
          dispatch(
            addProbabilityAnswers({
              id: answer.id,
              probabilityAmount: randomForFalseAnswer,
            })
          );
        }
      });
      dispatch(setDisablePublicHelpLifebous());
    }
  };

  useEffect(() => {
    const sum = probabilityAnswers.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.probabilityAmount,
      0
    );
    setSumProbabilityAnswers(sum);

    const answersWithCalculatedPercents = probabilityAnswers.map((answer) => ({
      id: answer.id,
      answerTheAudience: Math.round(
        (answer.probabilityAmount * 100) / sumProbabilityAnswers
      ),
    }));

    dispatch(addAnswersWithCalculatedPercents(answersWithCalculatedPercents));
  }, [probabilityAnswers, sumProbabilityAnswers, dispatch]);

  ////////////////////////////////////
  const handleFiftyFifty = () => {
    if (
      twoIdsWrongAnswers.questionId ||
      !currentQuestion ||
      gameOver ||
      selectedAnswer
    )
      return;
    if (!threeWrongAnswersIds) return;

    const random = Math.floor(Math.random() * threeWrongAnswersIds.length);
    threeWrongAnswersIds.splice(random, 1);
    const twoWrongAnswersIds = threeWrongAnswersIds;

    dispatch(
      setTwoIdsWrongAnswers({
        wrongAnswersIds: twoWrongAnswersIds,
        questionId: currentQuestion.id,
      })
    );
  };
  /////////////////////////////////////
  const handleExtraTime = () => {
    if (disableThirtySecLifebous || gameOver || selectedAnswer) return;
    dispatch(setExtraTime(30));
    dispatch(setDisableThirtySecondLifebous());
  };

  return (
    <div className="lifebous">
      <img
        className={classNames("img_lifebous", {
          lifebousDisabled: disablePublicHelpLifebous,
          notAllowed: gameOver,
        })}
        onClick={handlePublicHelp}
        src={public_white_transparent}
        alt="public help lifebous"
      />
      <img
        className={classNames("img_lifebous", {
          lifebousDisabled: twoIdsWrongAnswers.questionId,
          notAllowed: gameOver,
        })}
        onClick={handleFiftyFifty}
        src={fiftyfifty_white_transparent}
        alt="fifty-fifty lifebous"
      />
      <img
        className={classNames("img_lifebous", {
          lifebousDisabled: disableThirtySecLifebous,
          notAllowed: gameOver,
        })}
        onClick={handleExtraTime}
        src={thirtySec_white_transparent}
        alt="Additional 30 seconds lifebous"
      />
    </div>
  );
};

export default Lifebous;
