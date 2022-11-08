import fiftyfifty_white_transparent from "../../assets/fiftyfifty-white-transparent.svg";
import public_white_transparent from "../../assets/public-white-transparent.svg";
import thirtySec_white_transparent from "../../assets/30sec-white-transparent.svg";
import thirtySec_black_transparent from "../../assets/30sec-black-transparent.svg";
import "../../styles/aside/Lifebous.css";
import { useDispatch } from "react-redux";
import { setExtraTime } from "../../features/timerSlice";
import { useAppSelector } from "../../app/hooks/hooks";
import { setDisableThirtySecond } from "../../features/lifebousSlice";

const Lifebous = () => {
  const { disableThirtySec } = useAppSelector((state) => state.lifebous);
  const dispatch = useDispatch();

  const handleExtraTime = () => {
    dispatch(setExtraTime(30));
    dispatch(setDisableThirtySecond(true));
  };

  return (
    <div className="lifebous">
      <img
        className="img_lifebous"
        src={public_white_transparent}
        alt="public help lifebous"
      />
      <img
        className="img_lifebous"
        src={fiftyfifty_white_transparent}
        alt="fifty-fifty lifebous"
      />
      {disableThirtySec ? (
        <img
          src={thirtySec_black_transparent}
          alt="Disable 30 seconds lifebous"
        />
      ) : (
        <img
          className="img_lifebous"
          onClick={handleExtraTime}
          src={thirtySec_white_transparent}
          alt="Additional 30 seconds lifebous"
        />
      )}
    </div>
  );
};

export default Lifebous;
