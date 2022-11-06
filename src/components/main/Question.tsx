import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { easyData } from "../../data/data";
import { drawQuestion } from "../../features/questionsSlice";

const Question = () => {
  const dispatch = useDispatch();

  const { questionNumber, currentQuestion } = useSelector(
    (state: RootState) => state.questions
  );

  // Initial draw a question
  useEffect(() => {
    dispatch(drawQuestion(easyData));
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
