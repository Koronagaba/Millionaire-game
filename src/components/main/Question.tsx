import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  difficultData,
  easyData,
  mediumData,
  quiteDifficultData,
} from "../../data/data";

import { drawQuestion, nextQuestion } from "../../features/questionsSlice";
import { Answer, SingleData } from "../../types/types";

const Question = () => {
  const dispatch = useDispatch();

  const { questionNumber, currentQuestion } = useSelector(
    (state: RootState) => state.questions
  );

  useEffect(() => {
    dispatch(drawQuestion(easyData));
  }, []);

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

  return (
    <div className="question">
      <h1>
        {questionNumber}. {currentQuestion?.question}
      </h1>
      <button onClick={onNextQuest}>Next quest</button>
      <div className="answers">
        <button className="btn">A: {currentQuestion?.answers[0].answer}</button>
        <button className="btn">B: {currentQuestion?.answers[1].answer}</button>
      </div>
      <div className="answers">
        <button className="btn">C: {currentQuestion?.answers[2].answer}</button>
        <button className="btn">D: {currentQuestion?.answers[3].answer}</button>
      </div>
    </div>
  );
};

export default Question;
