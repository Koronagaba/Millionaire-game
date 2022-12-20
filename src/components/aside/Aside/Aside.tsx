import { useAppSelector } from "../../../hooks/hooks";

import Pyramid from "../Pyramid/Pyramid";
import LifeBous from "../LifeBous/LifeBous";

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
        <LifeBous />
        <Pyramid />
      </div>
    </>
  );
};

export default Aside;
