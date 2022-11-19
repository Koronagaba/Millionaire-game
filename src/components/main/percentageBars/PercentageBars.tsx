import { useAppSelector } from "../../../app/hooks/hooks";
import './PercentageBars.css'

const PercentageBars = () => {
  const percentAnswersAfterPublicHelp = useAppSelector(
    (state) => state.lifebous.percentAnswersAfterPublicHelp
  );

  const siedem = 7
  const percentageBars = percentAnswersAfterPublicHelp.map((answer) => (
    
    <div className="percentageBars_single"  key={answer.id}>
      <div className="percentValue">{answer.answerTheAudience} %</div>
      <div className='bar' 
      style={{height: answer.answerTheAudience *1.3}}
       ></div>
      <div className="answer_id">{answer.id}</div>
    </div>
  ));

  return <div className="percentageBars">{percentageBars}</div>;
};

export default PercentageBars;
