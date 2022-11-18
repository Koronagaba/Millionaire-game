import React from "react";
import { useAppSelector } from "../../../app/hooks/hooks";
import './PercentageBars.css'

const PercentageBars = () => {
  const percentAnswersAfterPublicHelp = useAppSelector(
    (state) => state.lifebous.percentAnswersAfterPublicHelp
  );

  const percentageBars = percentAnswersAfterPublicHelp.map((answer) => (
    <div key={answer.id}>
      <div>{answer.answerTheAudience}</div>
      <div>{answer.id}</div>
    </div>
  ));

  return <div className="percentageBars">{percentageBars}</div>;
};

export default PercentageBars;
