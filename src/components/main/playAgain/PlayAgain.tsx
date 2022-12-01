import { useDispatch } from "react-redux";
import { easyData } from "../../../data/data";
import { setGameOver } from "../../../features/gameOverSlice";
import { clearProbabilityAnswers, setTwoIdsWrongAnswers, toggleDisablePublicHelpLifebous, toggleDisableThirtySecondLifebous } from "../../../features/lifebousSlice";
import { youAreMillionaire } from "../../../features/millionaireSlice";
import { drawQuestion, setQuestionNumber } from "../../../features/questionsSlice";

import synth_melody from '../../../assets/sounds/synth_melody.mp3'

import './PlayAgain.css'
import useSound from "use-sound";







const PlayAgain = () => {
    const dispatch = useDispatch();
    const [play, {stop}] = useSound(synth_melody)


    const onPlayAgain = () => {
        dispatch(drawQuestion(easyData));
        dispatch(setGameOver(false));
        dispatch(setQuestionNumber(1));
        dispatch(toggleDisableThirtySecondLifebous(false));
        dispatch(setTwoIdsWrongAnswers({ ids: [], questionId: undefined }));
        dispatch(toggleDisablePublicHelpLifebous(false));
        dispatch(clearProbabilityAnswers());
        dispatch(youAreMillionaire(false))
      };

  return (
    < >
      <button className="btn" onClick={onPlayAgain}>
        Play Again
      </button>
    </>
  );
};

export default PlayAgain;
