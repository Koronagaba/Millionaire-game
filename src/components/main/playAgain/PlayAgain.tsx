import { useDispatch } from "react-redux";
import { setInitialQuestion } from "../../../features/questionsSlice";

const PlayAgain = () => {
  const dispatch = useDispatch();

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
