import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addAnswersWithCalculatedPercents } from "../../../features/lifebuoysSlice";
import { setExtraTime } from "../../../features/timerSlice";
import { useAppSelector } from "../../../hooks/hooks";

import thirtySec_white_transparent from "../../../assets/icons/30sec-white-transparent.svg";
import fiftyfifty_white_transparent from "../../../assets/icons/fiftyfifty-white-transparent.svg";
import public_white_transparent from "../../../assets/icons/public-white-transparent.svg";

import classNames from "classnames";
import gsap from "gsap";
import {
  addProbabilityAnswers,
  setDisablePublicHelpLifebous,
  setDisableThirtySecondLifebous,
  setInitialAnimations,
  setTwoIdsWrongAnswers,
} from "../../../features/questionsSlice";
import "./LifeBous.css";

const Lifebuoys = () => {
  const [sumProbabilityAnswers, setSumProbabilityAnswers] = useState(0);
  const dispatch = useDispatch();

  const { isMobile } = useAppSelector((state) => state.responsive);

  const {} = useAppSelector((state) => state.lifebuoys);
  const {
    currentQuestion,
    selectedAnswer,
    probabilityAnswers,
    disableThirtySecLifebous,
    disablePublicHelpLifebous,
    twoIdsWrongAnswers,
    initialAnimations,
  } = useAppSelector((state) => state.questions);
  const { gameOver, startGame } = useAppSelector((state) => state.questions);

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

  // life bous animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    if (!isMobile && initialAnimations) {
      tl.set(".img_lifebous", { scale: 1, filter: "invert(1)" })
        .fromTo(
          ".img_lifebous",
          { scale: 1.5, filter: "invert(0)" },
          { delay: 1.7, duration: 0.2, scale: 1, stagger: 0.9 }
        )
        .set(".img_lifebous", { clearProps: "filter,scale" });
      dispatch(setInitialAnimations(false));
    }
  }, [initialAnimations]);

  return (
    <div className="lifebous">
      <img
        className={classNames("img_lifebous a", {
          lifebousDisabled: disablePublicHelpLifebous || !startGame || gameOver,
        })}
        onClick={handlePublicHelp}
        src={public_white_transparent}
        alt="public help lifebous"
        width={65}
      />
      <img
        className={classNames("img_lifebous b", {
          lifebousDisabled:
            twoIdsWrongAnswers.questionId || !startGame || gameOver,
        })}
        onClick={handleFiftyFifty}
        src={fiftyfifty_white_transparent}
        alt="fifty-fifty lifebous"
        width={65}
      />
      <img
        className={classNames("img_lifebous c", {
          lifebousDisabled: disableThirtySecLifebous || !startGame || gameOver,
        })}
        onClick={handleExtraTime}
        src={thirtySec_white_transparent}
        alt="Additional 30 seconds lifebous"
        width={65}
      />
    </div>
  );
};

export default Lifebuoys;
