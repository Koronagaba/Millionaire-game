import Pyramid from "../../aside/Pyramid/Pyramid";
import classNames from "classnames";
import { useAppSelector } from "../../../hooks/hooks";
import DropDownAside from "../../aside/DropDownAside/DropDownAside";
import "./MobileAside.css";

interface PropsDropDownAside {
  expandAside: boolean;
    setExpandAside: (arg1: boolean) => void
}

const MobileAside = ({expandAside, setExpandAside }: PropsDropDownAside) => {

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
            showMobileAside: expandAside
          })}
        >
          <Pyramid />
        </div>
    </>
  );
};

export default MobileAside;
