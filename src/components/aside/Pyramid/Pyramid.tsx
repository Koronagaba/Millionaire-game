import { useEffect } from "react";
import { pyramid } from "../../../data/data";
import { useAppSelector } from "../../../hooks/hooks";
import { pyramidGsap } from "../../../gsap/pyramidGsap";

import "./Pyramid.css";
import gsap from "gsap";

const Pyramid = () => {
  const { questionNumber, initialAnimations, startGame } = useAppSelector(
    (state) => state.questions
  );

  // gsap animation
  useEffect(() => {
      pyramidGsap(initialAnimations, startGame);
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
