import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  easyData,
  mediumData,
  quiteDifficultData,
  difficultData,
} from "../../data/data";
import { drawQuestion, nextQuestion } from "../../features/questionsSlice";

const Answer = () => {
  const { currentQuestion, questionNumber } = useSelector(
    (state: RootState) => state.questions
  );

  const dispatch = useDispatch();

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
    <div className="answers">
      <button onClick={onNextQuest}>Next quest</button>
      {currentQuestion?.answers.map((answer) => (
        <button className="answer">{answer.answer}</button>
      ))}
    </div>
  );
};

export default Answer;
