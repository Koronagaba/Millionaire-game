import { useEffect } from "react";
import { drawQuestion } from "../../../features/questionsSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { easyDataCopy } from "../gameOver/GameOver";

import "./Question.css";

const Question = () => {
  const dispatch = useAppDispatch();

  const { questionNumber, currentQuestion } = useAppSelector(
    (state) => state.questions
  );

  // Initial draw a question
  useEffect(() => {
    dispatch(drawQuestion(easyDataCopy));
  }, []);

  return (
    <div className="question">
      <h1>
        {questionNumber}. {currentQuestion?.question}
      </h1>
    </div>
  );
};

export default Question;
