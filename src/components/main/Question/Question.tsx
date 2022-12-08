import { useAppSelector } from "../../../hooks/hooks";

import "./Question.css";

const Question = () => {
  const { questionNumber, currentQuestion } = useAppSelector(
    (state) => state.questions
  );

  return (
    <div className="question">
      <h1>
        {questionNumber}. {currentQuestion?.question}
      </h1>
    </div>
  );
};

export default Question;
