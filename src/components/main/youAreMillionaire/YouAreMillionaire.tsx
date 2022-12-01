import PlayAgain from "../playAgain/PlayAgain";
import "./YouAreMillionaire.css";

const YouAreMillionaire = () => {
  return (
    <div className="millionaire">
      <div>
        <h1>You are Millionaire</h1>
        <p>here's your million dollar check</p>
      </div>
      <PlayAgain />
    </div>
  );
};

export default YouAreMillionaire;
