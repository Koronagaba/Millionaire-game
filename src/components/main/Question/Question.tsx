import { useAppSelector } from "../../../hooks/hooks";

import "./Question.css";

const Question = () => {
  const { questionNumber, currentQuestion } = useAppSelector(
    (state) => state.questions
  );

  return (
    <div className="question">
      <p>
        {questionNumber}. {currentQuestion?.question}
      </p>
    </div>
  );
};

export default Question;
