import classNames from "classnames";
import { useAppSelector } from "../../../hooks/hooks";
import "./PercentageBars.css";

const PercentageBars = () => {
  const { answersWithCalculatedPercents } = useAppSelector(
    (state) => state.lifebuoys
  );

  const { twoIdsWrongAnswers, currentQuestion } = useAppSelector(
    (state) => state.questions
  );

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
        <div
          className="bar"
          style={{ height: audienceAnswer.answerTheAudience * 1.3 }}
        />
        <div className="answer_id">{letterInsteadNumber}</div>
      </div>
    );
  });

  return <div className="percentageBars">{percentageBars}</div>;
};

export default PercentageBars;
