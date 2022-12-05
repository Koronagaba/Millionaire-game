import { useEffect, useRef } from "react";
import PlayAgain from "../playAgain/PlayAgain";
import "./YouAreMillionaire.css";
import synth_melody from "../../../assets/sounds/synth_melody.mp3";
import applause_9s from "../../../assets/sounds/applause_9s.mp3";
import { useAppSelector } from "../../../hooks/hooks";
import QuitGame from "../QuitGame";

const YouAreMillionaire = () => {
  const { allMuted } = useAppSelector((state) => state.sound);

  const synthAudioRef = useRef<HTMLAudioElement>(null);
  const applauseAudioRef = useRef<HTMLAudioElement>(null);

  const synthAudioFn = () => {
    if (synthAudioRef.current) {
      synthAudioRef.current.play();
    }
  };
  const applauseAudioFn = () => {
    if (applauseAudioRef.current) {
      applauseAudioRef.current.play();
    }
  };

  useEffect(() => {
    synthAudioFn();
    applauseAudioFn();
  }, [] );

  return (
    <div className="millionaire">
      <audio ref={synthAudioRef} src={synth_melody} muted={allMuted} />
      <audio ref={applauseAudioRef} muted={allMuted} src={applause_9s} />
      <div>
        <h1>You are Millionaire</h1>
        <p>here's your million dollar check</p>
      </div>
      <div className="btns">
      <PlayAgain />
      <QuitGame />
      </div>
    </div>
  );
};

export default YouAreMillionaire;
