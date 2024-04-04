import { useEffect } from "react";
import { pyramid } from "../../../data/data";
import { useAppSelector } from "../../../hooks/hooks";
import { pyramidGsap } from "../../../animations/pyramidGsap";

import "./Pyramid.css";

const Pyramid = () => {
  const { questionNumber, initialAnimations, startGame } = useAppSelector(
    (state) => state.questions
  );
  const { isMobile } = useAppSelector((state) => state.responsive);

  // gsap animation
  useEffect(() => {
    pyramidGsap({initialAnimations, startGame, isMobile});
  }, [initialAnimations]);

  return (
    <div className="pyramid">
      {pyramid.map(({ id, quantity, currency, safeHaven }) => (
        <div
          className={`single_pyramid ${safeHaven} ${
            questionNumber === id ? "active_pyramid" : " "
          } `}
          key={id}
        >
          <p>{id}</p>
          <p>
            {quantity.toLocaleString()} {currency}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Pyramid;
