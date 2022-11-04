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
} from "../../features/questionsSlice";
import { setGameOver, showCurrentAward } from "../../features/gameOverSlice";
import { AnswerType } from "../../types/types";
import "../../styles/main/Answer.css";
import { setStopTimer } from "../../features/timerSlice";
import { useCalculateAward } from "../../app/hooks/useCalculateAward";

const Answer = () => {
  const [style, setStyle] = useState("");
  const { currentQuestion, questionNumber, selectedAnswer } = useSelector(
    (state: RootState) => state.questions
  );
  const { award, gameOver } = useSelector((state: RootState) => state.gameOver);
  const dispatch = useDispatch();
  const calculateAward = useCalculateAward();

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
    if (selectedAnswer) return; //Protection against multiple selection of answers

    dispatch(chooseAnswer(answer));
    setStyle(answer.isCorrect ? "answer checked correct" : "answer checked wrong");
    // stop timer
    dispatch(setStopTimer(true));

    setTimeout(() => {
      if (answer.isCorrect) {
        if (questionNumber === 12) {
          dispatch(showCurrentAward(pyramid[11].quantity));
          // You are Milionaire!!!!
          
        } else {
          onNextQuest();
          dispatch(chooseAnswer(null));
        }
      } else {
        dispatch(setGameOver());
        dispatch(chooseAnswer(null));
        calculateAward();
      }
    }, 3000);
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
