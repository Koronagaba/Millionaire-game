import Pyramid from "./Pyramid";
import '../../styles/aside/Aside.css'
import LifeBous from "./LifeBous";

const Aside = () => {
  return (
    <div className="aside">
      <LifeBous />
      <Pyramid />
    </div>
  );
};

export default Aside;
