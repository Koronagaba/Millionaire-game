import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createImmediatelyInvokedFunctionExpression } from "typescript";
import { RootState } from "../../app/store";
import {
  easyData,
  mediumData,
  quiteDifficultData,
  difficultData,
} from "../../data/data";
import {
  chooseAnswer,
  drawQuestion,
  nextQuestion,
} from "../../features/questionsSlice";
import { AnswerType } from "../../types/types";
import "../../styles/main/Answer.css";

const Answer = () => {
  const [style, setStyle] = useState("");

  const { currentQuestion, questionNumber, selectedAnswer } = useSelector(
    (state: RootState) => state.questions
  );

  const dispatch = useDispatch();

  const onNextQuest = () => {
    if (questionNumber <= 3) {
      dispatch(drawQuestion(easyData));
    } else if (questionNumber > 3 && questionNumber <= 6) {
      dispatch(drawQuestion(mediumData));
    } else if (questionNumber > 6 && questionNumber <= 9) {
      dispatch(drawQuestion(quiteDifficultData));
    } else if (questionNumber > 9 && questionNumber <= 12) {
      dispatch(drawQuestion(difficultData));
    }
    dispatch(nextQuestion());
  };

  const selectAnswer = (answer: AnswerType) => {
    dispatch(chooseAnswer(answer));
    setStyle(answer.isCorrect ? "answer checked correct" : "answer checked wrong");
  };

  return (
    <div className="answers">
      {currentQuestion?.answers.map((answer) => (
        <button
          className={selectedAnswer === answer ? style : "answer"}
          key={answer.id}
          onClick={() => selectAnswer(answer)}
        >
          {answer.answer}
        </button>
      ))}
    </div>
  );
};

export default Answer;
