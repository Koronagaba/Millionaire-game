import { useEffect, useRef } from "react";
import { pyramid } from "../../../data/data";
import { AnswerType } from "../../../types/types";
import {
  chooseAnswer,
  handleNextQuestion,
  setGameOver,
  youAreMillionaire,
} from "../../../features/questionsSlice";
import { showCurrentAward } from "../../../features/gameOverSlice";
import { setStopTimer } from "../../../features/timerSlice";
import { useCalculateAward } from "../../../hooks/useCalculateAward";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import startGame from "../../../assets/sounds/startGame.mp3";
import good_king from "../../../assets/sounds/good_king.mp3";
import correct from "../../../assets/sounds/correct.mp3";
import wrong from "../../../assets/sounds/wrong.mp3";

import classNames from "classnames";
import "./Answers.css";

const Answers = () => {
  const {
    currentQuestion,
    questionNumber,
    selectedAnswer,
    twoIdsWrongAnswers,
  } = useAppSelector((state) => state.questions);
  const { award } = useAppSelector((state) => state.gameOver);
  const { allMuted } = useAppSelector((state) => state.sound);

  const dispatch = useAppDispatch();
  const calculateAward = useCalculateAward();

  const correctAudioRef = useRef<HTMLAudioElement>(null);
  const wrongAudioRef = useRef<HTMLAudioElement>(null);
  const gameAudioRef = useRef<HTMLAudioElement>(null);
  const goodKingAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    gameAudioFn();
  }, []);

  const correctAudioFn = (atr: "play" | "pause") => {
    if (correctAudioRef.current) {
      if (atr === "play") {
        correctAudioRef.current.play();
      } else if (atr === "pause") {
        correctAudioRef.current.pause();
        correctAudioRef.current.currentTime = 0;
      }
    }
  };

  const wrongAudiFn = () => {
    if (wrongAudioRef.current) {
      wrongAudioRef.current.play();
    }
  };

  const gameAudioFn = () => {
    if (gameAudioRef.current) {
      gameAudioRef.current.play();
    }
  };

  const good_kingAudioFn = () => {
    if (goodKingAudioRef.current) {
      goodKingAudioRef.current.play();
    }
  };

  const onNextQuest = () => {
    dispatch(handleNextQuestion());
  };

  const wrongAnswer = () => {
    wrongAudiFn();
    if (questionNumber > 2 && questionNumber <= 12) {
      setTimeout(() => {
        dispatch(setGameOver());
        dispatch(chooseAnswer(null));
      }, 5000);
      setTimeout(() => {
        good_kingAudioFn();
      }, 2700);
    } else {
      setTimeout(() => {
        dispatch(setGameOver());
        dispatch(chooseAnswer(null));
      }, 3700);
    }
  };

  const correctAnswer = () => {
    correctAudioFn("play");
    setTimeout(() => {
      onNextQuest();
      dispatch(chooseAnswer(null));
    }, 1400);
    setTimeout(() => {
      correctAudioFn("pause");
    }, 3300);
  };

  const youAreMillionaireFn = () => {
    dispatch(showCurrentAward(pyramid[11].quantity));
    dispatch(youAreMillionaire(true));
    dispatch(chooseAnswer(null));
  };

  const selectAnswer = (answer: AnswerType) => {
    correctAudioFn("pause");
    if (selectedAnswer) return; //Protection against multiple selection of answers
    calculateAward();
    dispatch(chooseAnswer(answer));
    // stop timer
    dispatch(setStopTimer(true));
    setTimeout(() => {
      if (answer.isCorrect) {
        if (questionNumber === 12) {
          youAreMillionaireFn();
        } else {
          correctAnswer();
        }
      } else {
        wrongAnswer();
      }
    }, 2500);
  };

  // Storing Score in localStorage
  useEffect(() => {
    const localScore = localStorage.getItem("score") ?? "0";
    const localScoreAsNumber = parseInt(localScore);
    if (award >= localScoreAsNumber) {
      localStorage.setItem("score", award.toString());
    }
  }, [award, selectedAnswer]);

  return (
    <div>
      <audio ref={correctAudioRef} muted={allMuted} src={correct} />
      <audio ref={wrongAudioRef} muted={allMuted} src={wrong} />
      <audio ref={goodKingAudioRef} muted={allMuted} src={good_king} />
      <audio ref={gameAudioRef} muted={allMuted} src={startGame} />

      <div className="answers">
        {currentQuestion?.answers.map((answer) => {
          const selected = selectedAnswer === answer;
          const disabled =
            twoIdsWrongAnswers?.questionId === currentQuestion.id &&
            twoIdsWrongAnswers.wrongAnswersIds.includes(answer.id);
          return (
            <button
              className={classNames("answer btn", {
                checked: selected,
                [answer.isCorrect ? "correct" : "wrong"]: selected,
                disabled,
              })}
              key={answer.id}
              onClick={() => (disabled ? undefined : selectAnswer(answer))}
            >
              {answer.answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Answers;
