import { useEffect } from "react";
import Aside from "../components/aside/Aside/Aside";
import Main from "../components/main/main/Main";
import { setIsMobileFalse, setIsMobileTrue } from "../features/responsiveSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const { isMobile } = useAppSelector((state) => state.responsive);

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    if (window.innerWidth < 900) {
      dispatch(setIsMobileTrue());
    } else dispatch(setIsMobileFalse());

    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        dispatch(setIsMobileTrue());
      } else dispatch(setIsMobileFalse());
    });

    fetchData();
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="app_container">
        <Main />
        {!isMobile && <Aside />}
      </div>
    </div>
  );
}

export default App;
