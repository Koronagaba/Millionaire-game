import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  easyData,
  mediumData,
  quiteDifficultData,
  difficultData,
  pyramid,
} from "../../data/data";
import {
  chooseAnswer,
  drawQuestion,
  nextQuestion,
} from "../../features/questionsSlice";
import { setGameOver, showCurrentAward } from "../../features/gameOverSlice";
import { AnswerType } from "../../types/types";
import "../../styles/main/Answer.css";
import { setStopTimer } from "../../features/timerSlice";
import { useCalculateAward } from "../../app/hooks/useCalculateAward";
import { easyDataCopy } from "./Question";
import { useAppSelector } from "../../app/hooks/hooks";
import classNames from "classnames";

type RemovedWrongAnswerIdsType = [] | [number, number];
const Answers = () => {
  const {
    currentQuestion,
    questionNumber,
    selectedAnswer,
    // easyDataCopy
  } = useSelector((state: RootState) => state.questions);
  const { twoIdsWrongAnswers } = useAppSelector((state) => state.lifebous);
  const [removedWrongAnswerIds, setRemovedWrongAnswerIds] =
    useState<RemovedWrongAnswerIdsType>([]);

  const dispatch = useDispatch();
  const calculateAward = useCalculateAward();

  const onNextQuest = () => {
    if (questionNumber <= 3) {
      dispatch(drawQuestion(easyDataCopy));
    } else if (questionNumber > 3 && questionNumber <= 6) {
      dispatch(drawQuestion(mediumData));
    } else if (questionNumber > 6 && questionNumber <= 9) {
      dispatch(drawQuestion(quiteDifficultData));
    } else if (questionNumber > 9 && questionNumber <= 12) {
      dispatch(drawQuestion(difficultData));
    }
    dispatch(nextQuestion());
    // console.log(easyData);
  };

  const selectAnswer = (answer: AnswerType) => {
    if (selectedAnswer) return; //Protection against multiple selection of answers

    dispatch(chooseAnswer(answer));
    // stop timer
    dispatch(setStopTimer(true));

    setTimeout(() => {
      if (answer.isCorrect) {
        if (questionNumber === 12) {
          dispatch(showCurrentAward(pyramid[11].quantity));
          // You are Milionaire!!!!
        } else {
          onNextQuest();
          dispatch(chooseAnswer(null));
        }
      } else {
        dispatch(setGameOver(true));
        dispatch(chooseAnswer(null));
        calculateAward();
      }
    }, 5000);
  };

  return (
    <div className="answers">
      {currentQuestion?.answers.map((answer) => {
        const selected = selectedAnswer === answer;
        const disabled =
          twoIdsWrongAnswers?.questionId === currentQuestion.id &&
          twoIdsWrongAnswers.ids.includes(answer.id);
        return (
          <button
            className={classNames("answer", {
              checked: selected,
              [answer.isCorrect ? "correct" : "wrong"]: selected,
              disabled,
            })}
            key={answer.id}
            onClick={() => (disabled ? undefined : selectAnswer(answer))}
          >
            {answer.answer}
          </button>
        );
      })}
    </div>
  );
};

export default Answers;
