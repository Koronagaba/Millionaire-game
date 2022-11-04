import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCalculateAward } from "../../app/hooks/useCalculateAward";
import { RootState } from "../../app/store";
import { setGameOver } from "../../features/gameOverSlice";
import {
  runTimer,
  setStopTimer,
  setTimerToinitialValue,
} from "../../features/timerSlice";
import "../../styles/main/Timer.css";

const Timer = () => {
  const { questionNumber } = useSelector((state: RootState) => state.questions);
  const { stopTimer, timer } = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();

  const calculateAward = useCalculateAward();

  useEffect(() => {
    if (timer === 0) {
      dispatch(setGameOver());
      dispatch(setStopTimer(true));
      // Show award
      calculateAward();
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
  }, [questionNumber]);

  return (
    <div className="timer">
      <p>{timer}</p>
    </div>
  );
};

export default Timer;
