import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

import { drawQuestion, nextQuestion } from "../../features/questionsSlice";

const Question = () => {
  const dispatch = useDispatch();

  const { questionNumber, randomQuestion } = useSelector(
    (state: RootState) => state.questions
  );

  useEffect(() => {
    dispatch(drawQuestion());
  }, []);

  const onNextQuest = () => {
    dispatch(nextQuestion());
    dispatch(drawQuestion());
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
