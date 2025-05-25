import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { setInitialQuestion } from "../../../features/questionsSlice";

import "./StartView.css";
import ChatAI from "./ChatAI";

const StartView = () => {
  const dispatch = useAppDispatch();

  const startGame = () => {
    dispatch(setInitialQuestion());
  };

  return (
    <div className="startView">
      <ChatAI />
      <button className="btn absolute" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};

export default StartView;
