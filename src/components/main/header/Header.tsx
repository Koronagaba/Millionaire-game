import { useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { turnOffVolume, turnOnVolume } from "../../../features/soundSlice";

import "./Header.css";
import classNames from "classnames";

const Header = () => {
  const [withSound, setWithSound] = useState(true);
  const dispatch = useAppDispatch();

  const handleSound = () => {
    setWithSound(!withSound);
    if (withSound) {
      dispatch(turnOffVolume());
    } else {
      dispatch(turnOnVolume());
    }
  };

  return (
    <div className="header">
      <button
        className={classNames("sound_btn", {
          noSound: !withSound,
        })}
        onClick={handleSound}
      ></button>
      <p>Millionaire</p>
      <p>Best Score: {localStorage.getItem("score")}</p>
    </div>
  );
};

export default Header;
