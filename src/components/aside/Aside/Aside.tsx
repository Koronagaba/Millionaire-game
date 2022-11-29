import Pyramid from "../Pyramid/Pyramid";
import "./Aside.css";
import LifeBous from "../LifeBous/LifeBous";
import classNames from "classnames";
import { useAppSelector } from "../../../hooks/hooks";

const Aside = () => {
  const { gameOver } = useAppSelector((state) => state.gameOver);

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
