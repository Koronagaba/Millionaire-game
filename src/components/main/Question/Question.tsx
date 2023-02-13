import gsap from "gsap";
import { useEffect } from "react";
import { useAppSelector } from "../../../hooks/hooks";

import "./Question.css";

const Question = () => {
  const { questionNumber, currentQuestion, changeQuestionAnimation } =
    useAppSelector((state) => state.questions);
  const { isMobile } = useAppSelector((state) => state.responsive);

  useEffect(() => {
    
    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1.2 },
    });
    const tl2 = gsap.timeline({
      defaults: { ease: "power4.inOut", duration: 1.2 },
    });
    if (changeQuestionAnimation) {
      // if(isMobile){

      // }else {
        tl.to(".question", { x: 500 }).to(".question", { x: 0 })
          .to(".answer", { stagger: 0.1, opacity: 0, y: 150}, "-=2")
          .to(".answer", { opacity: 1, y: 0 });
      // }
    }
  }, [changeQuestionAnimation]);

  return (
    <div className="question">
      <p>{currentQuestion?.question}</p>
    </div>
  );
};

export default Question;
 