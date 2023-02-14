import { useEffect } from "react";
import { animationAfterChooseAnswer } from "../../../animations/animationAfterChooseAnswer";
import { useAppSelector } from "../../../hooks/hooks";

import "./Question.css";

const Question = () => {
  const { currentQuestion, changeQuestionAnimation, wrongAnswerAnimation } =
    useAppSelector((state) => state.questions);
  const { isMobile } = useAppSelector((state) => state.responsive);

  useEffect(() => {
    animationAfterChooseAnswer({
      wrongAnswerAnimation,
      isMobile,
      changeQuestionAnimation,
    });
  }, [changeQuestionAnimation, wrongAnswerAnimation]);

  return (
    <div className="question">
      <p>{currentQuestion?.question}</p>
    </div>
  );
};

export default Question;
