import { useEffect } from "react";
import classNames from "classnames";
import { useAppSelector } from "../../../hooks/hooks";
import "./PercentageBars.css";
import gsap from "gsap";

const PercentageBars = () => {
  const { answersWithCalculatedPercents } = useAppSelector(
    (state) => state.lifebuoys
  );

  const {
    twoIdsWrongAnswers,
    currentQuestion,
    disablePublicHelpLifebous,
  } = useAppSelector((state) => state.questions);

  const percentageBars = answersWithCalculatedPercents.map((audienceAnswer) => {
    if (!audienceAnswer.id) return;
    const disabled =
      twoIdsWrongAnswers?.questionId === currentQuestion?.id &&
      twoIdsWrongAnswers.wrongAnswersIds.includes(audienceAnswer.id);

    const letterInsteadNumber =
      audienceAnswer.id === 1
        ? "A"
        : audienceAnswer.id === 2
        ? "B"
        : audienceAnswer.id === 3
        ? "C"
        : "D";

    return (
      <div
        className={classNames("percentageBars_single", { disabled })}
        key={audienceAnswer.id}
      >
        <div className="percentValue">{audienceAnswer.answerTheAudience} %</div>
        <div className={`bar bar${letterInsteadNumber}`} />
        <div className="answer_id">{letterInsteadNumber}</div>
      </div>
    );
  });

  const audiencePercent = answersWithCalculatedPercents.map(
    (single) => single.answerTheAudience
  );

  useEffect(() => {
    if (percentageBars.length > 2) {
      gsap.to(".barA", { height: audiencePercent[0] * 1.3 });
      gsap.to(".barB", { height: audiencePercent[1] * 1.3 });
      gsap.to(".barC", { height: audiencePercent[2] * 1.3 });
      gsap.to(".barD", { height: audiencePercent[3] * 1.3 });
    }
  }, [disablePublicHelpLifebous, percentageBars]);

  return <div className="percentageBars">{percentageBars}</div>;
};

export default PercentageBars;
