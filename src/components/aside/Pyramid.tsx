import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { pyramid } from "../../data/data";

import "../../styles/aside/Pyramid.css";

const Pyramid = () => {
  const questionNumber = useSelector(
    (state: RootState) => state.questions.questionNumber
  );

  return (
    <div className="pyramid">
      <h1>Pyramid</h1>
      {pyramid.map(({ id, quantity, currency, safeHaven }) => (
        <div
          className={`row ${safeHaven} ${
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
