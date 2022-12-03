import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  easyData,
  mediumData,
  quiteDifficultData,
  difficultData,
  pyramid,
} from "../../../data/data";
import { AnswerType } from "../../../types/types";
import {
  chooseAnswer,
  drawQuestion,
  nextQuestion,
} from "../../../features/questionsSlice";
import { setGameOver, showCurrentAward } from "../../../features/gameOverSlice";
import { setStopTimer } from "../../../features/timerSlice";
import {
  clearProbabilityAnswers,
  resetTwoIdsInTheGame,
} from "../../../features/lifebousSlice";
import { youAreMillionaire } from "../../../features/millionaireSlice";
import { useCalculateAward } from "../../../hooks/useCalculateAward";
import { easyDataCopy } from "../gameOver/GameOver";
import { useAppSelector } from "../../../hooks/hooks";

import classNames from "classnames";
import "./Answer.css";

import useSound from "use-sound";
import during_the_game from "../../../assets/sounds/during_the_game.mp3";
import game from "../../../assets/sounds/game.mp3";
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
  const { allMuted } = useAppSelector((state) => state.sound);
  const dispatch = useDispatch();
  const calculateAward = useCalculateAward();

  const [inSound, setIiSound] = useState(true);

  const correctRef = useRef<HTMLAudioElement>(null);
  const wrongRef = useRef<HTMLAudioElement>(null);
  const applauseRef = useRef<HTMLAudioElement>(null);
  const synthRef = useRef<HTMLAudioElement>(null);
  const gameRef = useRef<HTMLAudioElement>(null);
  const goodKingRef = useRef<HTMLAudioElement>(null);

  //   useEffect(() => {
  // gameAudioFn()
  //   }, [])

  const correctAudioFn = (atr: "play" | "pause") => {
    if (correctRef.current) {
      if (atr === "play") {
        correctRef.current.play();
      } else if (atr === "pause") {
        correctRef.current.pause();
        correctRef.current.currentTime = 0;
      }
    }
  };

  const wrongAudiFn = () => {
    if (wrongRef.current) {
      wrongRef.current.play();
    }
  };

  const synthAudioFn = () => {
    if (synthRef.current) {
      synthRef.current.play();
    }
  };
  const applauseAudioFn = () => {
    if (applauseRef.current) {
      applauseRef.current.play();
    }
  };

  const gameAudioFn = () => {
    if (gameRef.current) {
      gameRef.current.play();
    }
  };

  const good_kingAudioFn = () => {
    if (goodKingRef.current) {
      goodKingRef.current.play();
    }
  };

  // const [playDuring_the_game, { stop: stopDuring_the_game }] =
  //   useSound(during_the_game);
  // const [playGame] = useSound(game);
  // const [playGood_king] = useSound(good_king);
  // const [playApplause9s] = useSound(applause_9s);
  // const [playSynth, { stop: stopSynth }] = useSound(synth_melody);
  // const [playWrong] = useSound(wrong
  // , {
  //  volume: wrongVolume
  //  volume: wrongV
  //  }
  // );
  // const [playCorrect] = useSound(correct, {
  //   // volume: correctVolume,
  //   sprite: {
  //     // laser: [0, 3350],
  //     laser: [0, 2300],
  //   },
  // });

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

  const wrongAnswer = () => {
    // playWrong();
    // stopDuring_the_game();
    wrongAudiFn();
    setTimeout(() => {
      dispatch(setGameOver(true));
      dispatch(chooseAnswer(null));
    }, 5000);
    if (questionNumber > 8 && questionNumber <= 12) {
      setTimeout(() => {
        good_kingAudioFn();
        // playGood_king();
      }, 2700);
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
    // playSynth();
    // playApplause9s();
    // synthAudioFn();
    applauseAudioFn();
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
      <audio ref={correctRef} muted={allMuted} src={correct} />
      <audio ref={wrongRef} muted={allMuted} src={wrong} />
      <audio ref={applauseRef} muted={allMuted} src={applause_9s} />
      <audio ref={synthRef} muted={allMuted} src={synth_melody} />
      <audio ref={goodKingRef} muted={allMuted} src={good_king} />
      <audio ref={gameRef} muted={allMuted} src={game} />

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
    </div>
  );
};

export default Answers;
