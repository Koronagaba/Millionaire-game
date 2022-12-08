import { useDispatch } from "react-redux";
import { setGameOver } from "../../../features/gameOverSlice";
import {
  clearProbabilityAnswers,
  setTwoIdsWrongAnswers,
  toggleDisablePublicHelpLifebous,
  toggleDisableThirtySecondLifebous,
} from "../../../features/lifebousSlice";
import { youAreMillionaire } from "../../../features/millionaireSlice";
import {
  drawEasyQuestion,
  // addIdToUsedIds,
  drawId,
  restoreInitialDifficultData,
  restoreInitialEasyData,
  restoreInitialMediumData,
  restoreInitialQuiteDifficultData,
  setCurrendQuestion,
  setQuestionNumber,
} from "../../../features/questionsSlice";
import { useAppSelector } from "../../../hooks/hooks";

import "./PlayAgain.css";

const PlayAgain = () => {
  const dispatch = useDispatch();
  const { easyDataCopy } = useAppSelector((state) => state.questions);

  const onPlayAgain = () => {
    dispatch(restoreInitialEasyData())
    dispatch(restoreInitialMediumData())
    dispatch(restoreInitialQuiteDifficultData())
    dispatch(restoreInitialDifficultData())
    dispatch(drawId(easyDataCopy.data));
    dispatch(setCurrendQuestion(easyDataCopy.data));
    dispatch(drawEasyQuestion());
    // dispatch(addIdToUsedIds());
   
    dispatch(setGameOver(false));
    dispatch(setQuestionNumber(1));
    dispatch(toggleDisableThirtySecondLifebous(false));
    dispatch(toggleDisablePublicHelpLifebous(false));
    dispatch(
      setTwoIdsWrongAnswers({ wrongAnswersIds: [], questionId: undefined })
    );
    dispatch(clearProbabilityAnswers());
    dispatch(youAreMillionaire(false));
  };

  return (
    <>
      <button className="btn" onClick={onPlayAgain}>
        Play Again
      </button>
    </>
  );
};

export default PlayAgain;
