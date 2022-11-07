import fiftyfifty_white_transparent from "../../assets/fiftyfifty-white-transparent.svg";
import public_white_transparent from "../../assets/public-white-transparent.svg";
import thirtySec_white_transparent from "../../assets/30sec-white-transparent.svg";

const Lifebous = () => {
  return (
    <div className='lifebous'>
      <img className='img_lifebous' src={public_white_transparent} alt="public help lifebous" />
      <img className='img_lifebous' src={fiftyfifty_white_transparent} alt="fifty-fifty lifebous" />
      <img className='img_lifebous' src={thirtySec_white_transparent} alt="Additional 30 seconds lifebous" />
    </div>
  );
};

export default Lifebous;
