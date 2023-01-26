import { useDispatch } from "react-redux";
import { setInitialQuestion } from "../../../features/questionsSlice";
import { useAppSelector } from "../../../hooks/hooks";

import "./PlayAgain.css";

const PlayAgain = () => {
  const dispatch = useDispatch();
  const { easyDataCopy, randomIndex } = useAppSelector((state) => state.questions);

  const onPlayAgain = () => {
    dispatch(setInitialQuestion());
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
