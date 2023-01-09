import { useAppSelector } from "../../../hooks/hooks";

import Pyramid from "../Pyramid/Pyramid";
import LifeBuoys from "../LifeBous/LifeBuoys";

import "./Aside.css";
import classNames from "classnames";

const Aside = () => {
  const { gameOver } = useAppSelector((state) => state.questions);

  return (
    <>
      <div
        className={classNames("aside", {
          dim: gameOver,
        })}
      >
        <LifeBuoys />
        <Pyramid />
      </div>
    </>
  );
};

export default Aside;
