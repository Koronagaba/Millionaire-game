import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  easyData,
  mediumData,
  quiteDifficultData,
  difficultData,
  pyramid,
} from "../../../data/data";
import {
  chooseAnswer,
  drawQuestion,
  nextQuestion,
} from "../../../features/questionsSlice";
import { setGameOver, showCurrentAward } from "../../../features/gameOverSlice";
import { AnswerType } from "../../../types/types";

import { setStopTimer } from "../../../features/timerSlice";
import { useCalculateAward } from "../../../hooks/useCalculateAward";
import { easyDataCopy } from "../gameOver/GameOver";
import { useAppSelector } from "../../../hooks/hooks";
import {
  clearProbabilityAnswers,
  resetTwoIdsInTheGame,
} from "../../../features/lifebousSlice";
import { youAreMillionaire } from "../../../features/millionaireSlice";
import classNames from "classnames";
import "./Answer.css";

import useSound from "use-sound";
import synth_melody from "../../../assets/sounds/synth_melody.mp3";
import applause_9s from "../../../assets/sounds/applause_9s.mp3";
import good_king from "../../../assets/sounds/good_king.mp3";
import correct from "../../../assets/sounds/correct.mp3";
import wrong from "../../../assets/sounds/wrong.mp3";

const Answers = () => {
  const {
    currentQuestion,
    questionNumber,
    selectedAnswer,
    // easyDataCopy
  } = useSelector((state: RootState) => state.questions);
  const { twoIdsWrongAnswers } = useAppSelector((state) => state.lifebous);
  const { award } = useAppSelector((state) => state.gameOver);

  const dispatch = useDispatch();
  const calculateAward = useCalculateAward();

  const [playCorrect] = useSound(correct);
  const [playWrong] = useSound(wrong);
  const [playGood_king] = useSound(good_king);
  const [playApplause9s] = useSound(applause_9s);
  const [playSynth, { stop: stopSynth }] = useSound(synth_melody);

  const onNextQuest = () => {
    if (questionNumber <= 3) {
      dispatch(drawQuestion(easyDataCopy));
    } else if (questionNumber > 3 && questionNumber <= 6) {
      dispatch(drawQuestion(mediumData));
    } else if (questionNumber > 6 && questionNumber <= 9) {
      dispatch(drawQuestion(quiteDifficultData));
    } else if (questionNumber > 9 && questionNumber <= 12) {
      dispatch(drawQuestion(difficultData));
    }
    dispatch(nextQuestion());
    dispatch(resetTwoIdsInTheGame());
    dispatch(clearProbabilityAnswers());
  };

  const selectAnswer = (answer: AnswerType) => {
    if (selectedAnswer) return; //Protection against multiple selection of answers
    calculateAward();

    dispatch(chooseAnswer(answer));
    // stop timer
    dispatch(setStopTimer(true));
    setTimeout(() => {
      if (answer.isCorrect) {
        if (questionNumber === 12) {
          // You are Milionaire!!!!
          dispatch(showCurrentAward(pyramid[11].quantity));
          dispatch(youAreMillionaire(true));
          dispatch(chooseAnswer(null));
          playSynth();
          playApplause9s();
        } else {
          playCorrect();
          setTimeout(() => {
            onNextQuest();
            dispatch(chooseAnswer(null));
          }, 1400);
        }
      } else {
        playWrong();
        setTimeout(() => {
          dispatch(setGameOver(true));
          dispatch(chooseAnswer(null));
        }, 1200);
        if (questionNumber > 8 && questionNumber <= 12) {
          setTimeout(() => {
            playGood_king();
          }, 2900);
        }
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
    <div className="answers">
      {currentQuestion?.answers.map((answer) => {
        const selected = selectedAnswer === answer;
        const disabled =
          twoIdsWrongAnswers?.questionId === currentQuestion.id &&
          twoIdsWrongAnswers.ids.includes(answer.id);
        return (
          <button
            className={classNames("answer", {
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
  );
};

export default Answers;
