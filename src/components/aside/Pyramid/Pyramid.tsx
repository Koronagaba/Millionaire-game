import { pyramid } from "../../../data/data";
import { useAppSelector } from "../../../hooks/hooks";

import "./Pyramid.css";

const Pyramid = () => {
  const questionNumber = useAppSelector(
    (state) => state.questions.questionNumber
  );

  return (
    <div className="pyramid">
      {pyramid.map(({ id, quantity, currency, safeHaven }) => (
        <div
          className={`single_pyramid ${safeHaven} ${
            questionNumber === id ? "activePyramid" : " "
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
