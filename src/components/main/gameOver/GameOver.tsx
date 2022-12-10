import { useAppSelector } from "../../../hooks/hooks";

import PlayAgain from "../playAgain/PlayAgain";
import QuitGame from "../quitGame/QuitGame";

import "./GameOver.css";

const GameOver = () => {
  const { award } = useAppSelector((state) => state.gameOver);
  const { userName } = useAppSelector((state) => state.userName);

  return (
    <div className="gameOver">
      <div className="gameOver_header">
        <h1>GameOver</h1>
        <div className="prize">
          <h3>
            {userName}
          </h3>
          <h4>Your prize is: {award}</h4>
        </div>
      </div>
      <div className="btns">
        <PlayAgain />
        <QuitGame />
      </div>
    </div>
  );
};

export default GameOver;
