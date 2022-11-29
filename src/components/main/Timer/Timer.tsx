import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCalculateAward } from "../../../hooks/useCalculateAward";
import { RootState } from "../../../store";
import { setGameOver } from "../../../features/gameOverSlice";
import { setExtraTime, setStopTimer } from "../../../features/timerSlice";
import "./Timer.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  const [key, setKey] = useState(0);
  const { questionNumber } = useSelector((state: RootState) => state.questions);
  const { stopTimer, extraTime } = useSelector(
    (state: RootState) => state.timer
  );
  const dispatch = useDispatch();

  const calculateAward = useCalculateAward();

  useEffect(() => {
    // Reset stopwatch
    setKey((prevState) => prevState + 1);
    //Remove extra time
    dispatch(setExtraTime(0));

    dispatch(setStopTimer(false));
  }, [questionNumber, dispatch]);

  const renderTime = ({ remainingTime }: any) => {
    if (remainingTime === 0) {
      dispatch(setGameOver(true));
      dispatch(setStopTimer(true));
      // Show award
      calculateAward();
      return <div>Too lale...</div>;
    }

    return <div>{remainingTime}</div>;
  };

  return (
    <div className="timer">
      <CountdownCircleTimer
        key={key}
        isPlaying={!stopTimer}
        duration={200 + extraTime}
        colors={["#F7B801", "#F7B801", "#A30000"]}
        colorsTime={[10, 7, 0]}
        onComplete={() => ({ delay: 1 })}
        size={70}
        strokeWidth={7}
        // trailStrokeWidth={2}
        strokeLinecap="square"
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
