import { useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { turnOffVolume, turnOnVolume } from "../../../features/soundSlice";

import "./Header.css";
import volume_on from "../../../assets/icons/volume_on.svg";
import volume_off from "../../../assets/icons/volume_off.svg";

const Header = () => {
  const [muted, setMuted] = useState(true);
  const dispatch = useAppDispatch();

  const handleSound = () => {
    setMuted(!muted);
    if (muted) {
      dispatch(turnOnVolume());
    } else {
      dispatch(turnOffVolume());
    }
  };

  return (
    <div className="header">
      {muted ? (
        <img className="volume" src={volume_off} onClick={handleSound} />
      ) : (
        <img className="volume" src={volume_on} onClick={handleSound} />
      )}
      {/* <p>Millionaire</p> */}
      
      <p>Best Score: {localStorage.getItem("score")}</p>
    </div>
  );
};

export default Header;
