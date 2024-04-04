import { setToInitialQuestionNumber, stopTheGame } from "../../../features/questionsSlice";
import { enterUserName } from "../../../features/userNameSlice";
import { useAppDispatch } from "../../../hooks/hooks";

const QuitGame = () => {
  const dispatch = useAppDispatch();

  const quitGame = () => {
    dispatch(enterUserName(""));
    dispatch(stopTheGame());
    dispatch(setToInitialQuestionNumber())
  };

  return (
    <button className="btn" onClick={quitGame}>
      QuitGame
    </button>
  );
};

export default QuitGame;
