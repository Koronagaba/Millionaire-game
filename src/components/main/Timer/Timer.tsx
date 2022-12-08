import { useEffect, useState } from "react";
import {  useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useCalculateAward } from "../../../hooks/useCalculateAward";
import { setGameOver } from "../../../features/gameOverSlice";
import { setExtraTime, setStopTimer } from "../../../features/timerSlice";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./Timer.css";


const Timer = () => {
  const [key, setKey] = useState(0);
  const { questionNumber } = useAppSelector(state=> state.questions);
  const { stopTimer, extraTime } = useAppSelector(state => state.timer);
  const dispatch = useAppDispatch();

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
        strokeLinecap="square"
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
