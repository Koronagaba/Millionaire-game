import { useState } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import DropDownAside from "../DropDownAside/DropDownAside";

import Pyramid from "../../aside/Pyramid/Pyramid";

import "./MobileAside.css";
import classNames from "classnames";

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
