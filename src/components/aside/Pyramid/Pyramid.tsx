import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { pyramid } from "../../../data/data";

import "./Pyramid.css";

const Pyramid = () => {
  const questionNumber = useSelector(
    (state: RootState) => state.questions.questionNumber
  );

  return (
    <div className="pyramid">
      {pyramid.map(({ id, quantity, currency, safeHaven }) => (
        <div
          className={`single_pyramid row space ${safeHaven} ${
            questionNumber === id ? "activePyramid" : " "
          } `}
          key={id}
        >
          <p>{id}</p>
          <p>
            {" "}
            {quantity} {currency}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Pyramid;
