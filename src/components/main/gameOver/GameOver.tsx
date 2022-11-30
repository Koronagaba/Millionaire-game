import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../hooks/hooks";
import { easyData } from "../../../data/data";

import "./GameOver.css";
import PlayAgain from "../playAgain/PlayAgain";

export const easyDataCopy = [...easyData];

const GameOver = () => {
  const { award } = useAppSelector((state) => state.gameOver);

  return (
    <div className="gameOver">
        <div>
          <h1>GameOver</h1>
          <h2 className="prize">Your prize: {award}</h2>
        </div>
        <PlayAgain />
    </div>
  );
};

export default GameOver;
