import "./DropDownAside.css";
// import chevron-left from '../../../assets/icons/chevron-left.svg'
import chevron_left from "../../../assets/icons/chevron_left.svg";
import chevron_right from "../../../assets/icons/chevron_right.svg";

interface PropsDropDownAside {
  expandAside: boolean;
  setExpandAside: (arg1: boolean) => void;
}

const DropDownAside = ({ expandAside, setExpandAside }: PropsDropDownAside) => {
  const toggleDropDown = () => {
    setExpandAside(!expandAside);
  };
  return (
    <div className="drop_down_container" onClick={toggleDropDown}>
      {expandAside ? (
        <>
          <div className="img_wrapper">
            <img
              className="chevron"
              src={chevron_right}
              alt="Double right arrow to expand the menu"
            ></img>
            <img
              className="chevron_second"
              src={chevron_right}
              alt="Double right arrow to expand the menu"
            />
          </div>
        </>
      ) : (
        <div className="img_wrapper">
          <img
            className="chevron"
            src={chevron_left}
            alt="Double left arrow to expand the menu"
          ></img>
          <img
            className="chevron_second"
            src={chevron_left}
            alt="Double left arrow to expand the menu"
          />
        </div>
      )}
    </div>
  );
};

export default DropDownAside;
