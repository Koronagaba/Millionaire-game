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

  const { questionNumber, randomQuestion } = useSelector(
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
    <div>
      <h1>Pyramid</h1>
      <div>
        <div>
          <h1>
            {questionNumber}. {randomQuestion?.question}
          </h1>
          <button onClick={onNextQuest}>Next quest</button>
          {randomQuestion?.answers.map((answer) => (
            <div>
              <button className="btn">{answer.answer}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
