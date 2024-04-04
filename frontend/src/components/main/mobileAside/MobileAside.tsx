import { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import DropAside from "../DropAside/DropAside";

import Pyramid from "../../aside/Pyramid/Pyramid";

import classNames from "classnames";
import gsap from "gsap";
import "./MobileAside.css";
import Lifebuoys from "../../aside/LifeBous/LifeBuoys";

const MobileAside = () => {
  const [expandAside, setExpandAside] = useState(false);
  const { gameOver, initialAnimations, selectedAnswer } = useAppSelector(
    (state) => state.questions
  );
  const { isMobile } = useAppSelector((state) => state.responsive);

  useEffect(() => {
    if (initialAnimations) {
      gsap.set(".mobileAside", { autoAlpha: 0 });
    }
    if (expandAside && !gameOver && !selectedAnswer) {
      gsap.to(".mobileAside", { duration: 0.3, autoAlpha: 1 });
    } else {
      gsap.to(".mobileAside", { duration: 0.2, autoAlpha: 0 });
    }
  }, [expandAside, gameOver, selectedAnswer]);

  return (
    <>
      <DropAside expandAside={expandAside} setExpandAside={setExpandAside} />
      <div
        className={classNames("mobileAside", {
          dim: gameOver,
        })}
        onClick={() => setExpandAside(!expandAside)}
      >
        {isMobile && (
          <div>
            <Lifebuoys />
          </div>
        )}
        <Pyramid />
      </div>
    </>
  );
};

export default MobileAside;
