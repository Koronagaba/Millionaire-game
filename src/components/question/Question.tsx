import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { data } from "../../data/data";
import { nextQuestion } from "../../features/questionsSlice";

const Question = () => {
  const dispatch = useDispatch();
  const questionNumber = useSelector((state: RootState) => state.questions.questionNumber)

  const onNextQuest = () => {
    dispatch(nextQuestion());
  };

  return (
    <div>
      <h1>Pyramid</h1>
      <div>
        <div>
          <h1>{questionNumber}. {data[0].question}</h1>
          <button onClick={onNextQuest}>Next quest</button>
          {data[0].answers.map((answer) => (
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
