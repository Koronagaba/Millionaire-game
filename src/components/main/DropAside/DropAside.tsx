import gsap from "gsap";
import { useEffect, useRef } from "react";
import chevron_left from "../../../assets/icons/chevron_left.svg";
import chevron_right from "../../../assets/icons/chevron_right.svg";
import { useAppSelector } from "../../../hooks/hooks";

import "./DropAside.css";

interface PropsDropAside {
  expandAside: boolean;
  setExpandAside: (arg1: boolean) => void;
}

const DropAside = ({ expandAside, setExpandAside }: PropsDropAside) => {
  const { gameOver } = useAppSelector((state) => state.questions);
  const blinkRef = useRef(null);
  const dropAsideRef = useRef(null);

  useEffect(() => {
    if (gameOver) setExpandAside(false);
    if (blinkRef.current) {
      const tl = gsap.timeline();
      tl.set(blinkRef.current, { scale: 1 }).fromTo(
        blinkRef.current,
        { scale: 1.2 },
        { delay: 4, duration: 1, ease: "power1.inOut", repeat: 2, scale: 1 }
      );
    }
  }, [gameOver]);

  const toggleDropDown = () => {
    setExpandAside(!expandAside);

    if (!expandAside) {
      const tl = gsap.timeline();
      tl.to(dropAsideRef.current, { duration: 0.2, x: "-214px" });
    } else {
      gsap.to(dropAsideRef.current, { duration: 0.2, x: 0 });
    }
  };

  return (
    <div
      ref={dropAsideRef}
      className="drop_aside_container"
      onClick={toggleDropDown}
    >
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
        <div ref={blinkRef} className="img_wrapper">
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

export default DropAside;
