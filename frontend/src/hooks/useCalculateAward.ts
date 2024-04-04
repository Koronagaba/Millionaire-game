import { useDispatch, useSelector } from "react-redux";
import { pyramid } from "../data/data";
import { showCurrentAward } from "../features/gameOverSlice";
import { RootState } from "../store";

export const useCalculateAward = () => {
  const { questionNumber } = useSelector((state: RootState) => state.questions);
  const dispatch = useDispatch();

  const calculateAward = () => {
    if (questionNumber <= 2) dispatch(showCurrentAward(0));
    else if (questionNumber >= 3 && questionNumber <= 7) {
      dispatch(showCurrentAward(pyramid[1].quantity));
    } else if (questionNumber >= 8 && questionNumber <= 12) {
      dispatch(showCurrentAward(pyramid[6].quantity));
    }
  };

  return calculateAward;
};
