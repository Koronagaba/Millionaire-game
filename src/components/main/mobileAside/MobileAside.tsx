import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import DropAside from "../DropAside/DropAside";

import Pyramid from "../../aside/Pyramid/Pyramid";

import classNames from "classnames";
import gsap from "gsap";
import "./MobileAside.css";

const MobileAside = () => {
  const [expandAside, setExpandAside] = useState(false);
  const { gameOver, initialAnimations } = useAppSelector(
    (state) => state.questions
  );

  useEffect(() => {
    if (initialAnimations) {
      gsap.set(".mobileAside", { autoAlpha: 0 });
    }
    if (expandAside && !gameOver) {
      gsap.to(".mobileAside", { autoAlpha: 1 });
    } else if (!expandAside && !gameOver) {
      gsap.to(".mobileAside", { autoAlpha: 0 });
    }
  }, [expandAside, gameOver]);

  return (
    <>
      <DropAside expandAside={expandAside} setExpandAside={setExpandAside} />
      <div
        className={classNames("mobileAside", {
          dim: gameOver,
        })}
        onClick={() => setExpandAside(!expandAside)}
      >
        <Pyramid />
      </div>
    </>
  );
};

export default MobileAside;
