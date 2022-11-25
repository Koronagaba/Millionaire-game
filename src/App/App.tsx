import React from "react";
import {useEffect, useState} from "react";
import Aside from "../components/aside/Aside/Aside";
import Main from "../components/main/Main";
import { setIsMobileFalse, setIsMobileTrue } from "../features/responsiveSlice";
import { useAppDispatch } from "../hooks/hooks";
import "./App.css";

function App() {
const [isMobile, setIsMobile] = useState(false)
const dispatch = useAppDispatch()

  useEffect(() => {
    if (window.innerWidth < 900) {
dispatch(setIsMobileTrue())
    } else dispatch(setIsMobileFalse())
    window.addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        dispatch(setIsMobileTrue())
      } else dispatch(setIsMobileFalse())
    });
  }, [isMobile]);

  
  return (
    <div className="wrapper">
      <div className="app_container">
          <Main />
          <Aside />
      </div>
    </div>
  );
}

export default App;
