import { stopTheGame } from "../../../features/questionsSlice";
import { enterUserName } from "../../../features/userNameSlice";
import { useAppDispatch } from "../../../hooks/hooks";

import "./QuitGame.css";

const QuitGame = () => {
  const dispatch = useAppDispatch();

  const quitGame = () => {
    dispatch(enterUserName(""));
    dispatch(stopTheGame());
  };

  return (
    <button className="btn" onClick={quitGame}>
      QuitGame
    </button>
  );
};

export default QuitGame;
