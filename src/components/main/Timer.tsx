import { useEffect, useState } from "react";
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
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  const [key, setKey] = useState(0);
  const { questionNumber } = useSelector((state: RootState) => state.questions);
  const { stopTimer, timer } = useSelector((state: RootState) => state.timer);
  const dispatch = useDispatch();

  const calculateAward = useCalculateAward();

  // useEffect(() => {
  //   if (timer === 0) {
  //     dispatch(setGameOver());
  //     dispatch(setStopTimer(true));
  //     // Show award
  //     calculateAward();
  //   } else {
  //     if (stopTimer) return;

  //     const interval = setInterval(() => {
  //       dispatch(runTimer());
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }
  // }, [timer, dispatch, stopTimer]);

  useEffect(() => {
    // Reset stopwatch
    setKey((prevState) => prevState + 1);

    dispatch(setStopTimer(false));
  }, [questionNumber, dispatch]);

  const renderTime = ({ remainingTime }: any) => {
    if (remainingTime === 0) {
      dispatch(setGameOver());
      dispatch(setStopTimer(true));
      // Show award
      calculateAward();
      return <div className="timer">Too lale...</div>;
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  return (
    <div>
      <CountdownCircleTimer
        key={key}
        isPlaying={!stopTimer}
        duration={timer}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ delay: 1 })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
