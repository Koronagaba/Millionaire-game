import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { easyData } from "../../data/data";
import { drawQuestion } from "../../features/questionsSlice";

export const easyDataCopy = [...easyData]

const Question = () => {
  const dispatch = useDispatch();

  const { questionNumber, currentQuestion, 
    // easyDataCopy
   } = useSelector(
    (state: RootState) => state.questions
  );



  // Initial draw a question
  useEffect(() => {
    dispatch(drawQuestion(easyDataCopy));
    
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
