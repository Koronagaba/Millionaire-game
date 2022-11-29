import "./DropDownAside.css";

interface PropsDropDownAside {
  expandAside: boolean;
  setExpandAside: (arg1: boolean) => void;
}

const DropDownAside = ({ expandAside, setExpandAside }: PropsDropDownAside) => {
  const toggleDropDown = () => {
    setExpandAside(!expandAside);
  };
  return <div className="drop_down_container" onClick={toggleDropDown}></div>;
};

export default DropDownAside;
