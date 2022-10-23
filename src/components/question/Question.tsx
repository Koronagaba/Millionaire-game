import React from "react";
import { useDispatch } from "react-redux";
import { data } from "../../data/data";
import { nextQuestion } from "../../features/questionsSlice";

const Question = () => {
  const dispatch = useDispatch();

  const onNextQuest = () => {
    dispatch(nextQuestion());
  };

  return (
    <div>
      <h1>Pyramid</h1>
      <div>
        <div>
          <h1>{data[0].question}</h1>
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
