import { useAppSelector } from "../../../hooks/hooks";

import "./Question.css";

const Question = () => {
  const { currentQuestion } = useAppSelector((state) => state.questions);

  return (
    <div className="question">
      <p>{currentQuestion?.question}</p>
    </div>
  );
};

export default Question;
