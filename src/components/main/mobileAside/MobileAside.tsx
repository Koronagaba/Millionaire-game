import { useState } from "react";
import Pyramid from "../../aside/Pyramid/Pyramid";
import classNames from "classnames";
import { useAppSelector } from "../../../hooks/hooks";
import DropDownAside from "../DropDownAside/DropDownAside";
import "./MobileAside.css";

const MobileAside = () => {
  const [expandAside, setExpandAside] = useState(false);
  const { gameOver } = useAppSelector((state) => state.gameOver);

  return (
    <>
      <DropDownAside
        expandAside={expandAside}
        setExpandAside={setExpandAside}
      />
      <div
        className={classNames("mobileAside", {
          dim: gameOver,
          showMobileAside: expandAside,
        })}
      >
        <Pyramid />
      </div>
    </>
  );
};

export default MobileAside;
