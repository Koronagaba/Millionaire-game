import { enterUserName } from "../../../features/userNameSlice";
import { startTheGame } from "../../../features/startViewSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import "./StartView.css";

const StartView = () => {
  const dispatch = useAppDispatch();
  const { userName } = useAppSelector((state) => state.userName);

  const handleStartGame = () => {
    dispatch(startTheGame());
  };

  const toUpperCaseFn = (name: string) => {
    return name.toUpperCase();
  };

  return (
    <div className="startView">
      <h1 className="welcome">Hello {userName} </h1>
      <label className="enterName btn">
        Enter name:
        <input
          type="text"
          value={userName}
          onChange={(e) =>
            dispatch(enterUserName(toUpperCaseFn(e.target.value)))
          }
        />
      </label>
      <button className="btn" onClick={handleStartGame}>
        Start Game
      </button>
    </div>
  );
};

export default StartView;
