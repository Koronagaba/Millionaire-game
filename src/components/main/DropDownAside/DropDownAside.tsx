import gsap from "gsap";
import { useEffect } from "react";
import chevron_left from "../../../assets/icons/chevron_left.svg";
import chevron_right from "../../../assets/icons/chevron_right.svg";
import { useAppSelector } from "../../../hooks/hooks";

import "./DropDownAside.css";

interface PropsDropDownAside {
  expandAside: boolean;
  setExpandAside: (arg1: boolean) => void;
}

const DropDownAside = ({ expandAside, setExpandAside }: PropsDropDownAside) => {
  const { gameOver } = useAppSelector((state) => state.questions);

  useEffect(() => {
    if (gameOver) setExpandAside(false);
    const tl = gsap.timeline();
    tl.set(".blink", { scale: 1 })
    .fromTo(".blink",{ scale: 1.4 },
      { delay: 4, duration: 1 , ease: "power1.inOut",repeat: 2, scale: 1 }
    );
  }, [gameOver]);

  const toggleDropDown = () => {
    setExpandAside(!expandAside);
  };

  return (
    <div className="drop_down_container" onClick={toggleDropDown}>
      {gameOver ? (
        <></>
      ) : expandAside ? (
        <>
          <div className="img_wrapper">
            <img
              className="chevron"
              src={chevron_right}
              alt="Double right arrow to expand the menu"
            ></img>
            <img
              className="chevron_second"
              src={chevron_right}
              alt="Double right arrow to expand the menu"
            />
          </div>
        </>
      ) : (
        <div className="img_wrapper">
          <img
            className="chevron blink"
            src={chevron_left}
            alt="Double left arrow to expand the menu"
          ></img>
          <img
            className="chevron_second blink"
            src={chevron_left}
            alt="Double left arrow to expand the menu"
          />
        </div>
      )}
    </div>
  );
};

export default DropDownAside;
