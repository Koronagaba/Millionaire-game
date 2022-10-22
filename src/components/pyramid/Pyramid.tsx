import React from "react";
import { pyramid } from "../../data/data";

import "../../styles/Pyramid.css";

const Pyramid = () => {
  
const questionNumber = 10

  return (
    <div className="aside pyramid">
      <h1>Pyramid</h1>
      {pyramid.map(({id, quantity, currency, safeHaven}) => ( 

        <div className={`row ${safeHaven} ${questionNumber === id ? 'activePyramid' : ' '} `} key={id}>
          <p>{id}</p>
          <p> {quantity} {currency}</p>
        </div>
      ))}
    </div>
  );
};

export default Pyramid;
