import Pyramid from "./Pyramid/Pyramid";
import "./Aside.css";
import LifeBous from "./LifeBous/LifeBous";

const Aside = () => {
  return (
    <div className="aside">
      <LifeBous />
      <Pyramid />
    </div>
  );
};

export default Aside;
