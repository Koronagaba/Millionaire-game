import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  easyData,
  mediumData,
  quiteDifficultData,
  difficultData,
  pyramid,
} from "../../data/data";
import {
  chooseAnswer,
  drawQuestion,
  nextQuestion,
  showCurrentAward,
} from "../../features/questionsSlice";
import { AnswerType } from "../../types/types";
import "../../styles/main/Answer.css";

const Answer = () => {
  const [style, setStyle] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const { currentQuestion, questionNumber, selectedAnswer, award } =
    useSelector((state: RootState) => state.questions);

  const dispatch = useDispatch();

  const onNextQuest = () => {
    if (questionNumber <= 3) {
      dispatch(drawQuestion(easyData));
    } else if (questionNumber > 3 && questionNumber <= 6) {
      dispatch(drawQuestion(mediumData));
    } else if (questionNumber > 6 && questionNumber <= 9) {
      dispatch(drawQuestion(quiteDifficultData));
    } else if (questionNumber > 9 && questionNumber <= 12) {
      dispatch(drawQuestion(difficultData));
    }
    dispatch(nextQuestion());
  };

  const selectAnswer = (answer: AnswerType) => {
    dispatch(chooseAnswer(answer));
    setStyle(
      answer.isCorrect ? "answer checked correct" : "answer checked wrong"
    );

    dispatch(showCurrentAward(pyramid[questionNumber - 1].quantity));

    setTimeout(() => {
      if (answer.isCorrect) {
        onNextQuest();
      } else {
        setGameOver(true);
      }
    }, 4000);
  };

  return (
    <div className="answers">
      {gameOver ? (
        <div>
          <h1>Game Over</h1>
          <p>You won: {award}</p>
        </div>
      ) : (
        <>
          {currentQuestion?.answers.map((answer) => (
            <button
              className={selectedAnswer === answer ? style : "answer"}
              key={answer.id}
              onClick={() => selectAnswer(answer)}
            >
              {answer.answer}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default Answer;
