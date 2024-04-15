import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
// import { enterUserName } from "../../../features/userNameSlice";
import { setInitialQuestion } from "../../../features/questionsSlice";

import "./StartView.css";

const StartView = () => {
  const dispatch = useAppDispatch();
  const { userName } = useAppSelector((state) => state.userName);

  const startGame = () => {
    dispatch(setInitialQuestion());
  };

  // const max = 11;
  // const handleOnKey = (e: any) => {
  //   e.target.value = e.target.value.substring(0, max);
  // };

  return (
    <div className="startView">
      {/* <h1 className="welcome">{userName}</h1> */}
      {/* <label className="enterName btn">
        Enter name:
        <input
          type="text"
          value={userName}
          onChange={(e) =>
            dispatch(enterUserName(e.target.value.toUpperCase()))
          }
          onKeyUp={handleOnKey}
        />
      </label> */}

      <button className="btn" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};

export default StartView
