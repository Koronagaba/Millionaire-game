import React from "react";
import {useEffect, useState} from "react";
import Aside from "../components/aside/Aside/Aside";
import Main from "../components/main/Main";
import { setIsMobileFalse, setIsMobileTrue } from "../features/responsiveSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import "./App.css";

function App() {
const [expandAside, setExpandAside] = useState(false);
const dispatch = useAppDispatch()
const {isMobile} = useAppSelector(state => state.responsive)

  useEffect(() => {
    if (window.innerWidth < 700) {
dispatch(setIsMobileTrue())
    } else dispatch(setIsMobileFalse())
    window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        dispatch(setIsMobileTrue())
      } else dispatch(setIsMobileFalse())
    });
  }, []);

  
  return (
    <div className="wrapper">
      <div className="app_container">
          <Main  expandAside={expandAside}
          setExpandAside={setExpandAside}/>
          {!isMobile && <Aside />}
          
      </div>
    </div>
  );
}

export default App;
