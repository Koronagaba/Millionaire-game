import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setGameOver } from "../../features/gameOverSlice";
import {
  runTimer,
  setStopTimer,
  setTimerToinitialValue,
} from "../../features/timerSlice";

const Timer = () => {
  const { questionNumber } = useSelector((state: RootState) => state.questions);
  const { stopTimer, timer } = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timer === 0) {
      dispatch(setGameOver());
      dispatch(setStopTimer(true));
    } else {
      if (stopTimer) return;

      const interval = setInterval(() => {
        dispatch(runTimer());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, dispatch, stopTimer]);

  useEffect(() => {
    dispatch(setTimerToinitialValue());
    dispatch(setStopTimer(false));
    console.log(timer);
  }, [questionNumber]);

  return (
    <div>
      <h1>Timer: {timer}</h1>
    </div>
  );
};

export default Timer;
