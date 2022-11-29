import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/hooks";
import { easyData } from "../../../data/data";
import { setGameOver } from "../../../features/gameOverSlice";
import {
  clearProbabilityAnswers,
  toggleDisablePublicHelpLifebous,
  toggleDisableThirtySecondLifebous,
  setTwoIdsWrongAnswers,
} from "../../../features/lifebousSlice";
import {
  drawQuestion,
  setQuestionNumber,
} from "../../../features/questionsSlice";

import "./GameOver.css";

export const easyDataCopy = [...easyData];

const GameOver = () => {
  const dispatch = useDispatch();
  const { award } = useAppSelector((state) => state.gameOver);

  const onPlayAgain = () => {
    dispatch(drawQuestion(easyData));
    dispatch(setGameOver(false));
    dispatch(setQuestionNumber(1));
    dispatch(toggleDisableThirtySecondLifebous(false));
    dispatch(setTwoIdsWrongAnswers({ ids: [], questionId: undefined }));
    dispatch(toggleDisablePublicHelpLifebous(false));
    dispatch(clearProbabilityAnswers());
  };

  return (
    <div className="gameOver">
      <div>
        <h1>GameOver</h1>
        <h2 className="prize">Your prize: {award}</h2>
      </div>
      <button className="btn" onClick={onPlayAgain}>
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
