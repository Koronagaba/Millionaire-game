import gsap from "gsap";

interface AnimationAnswerProps {
  wrongAnswerAnimation: boolean;
  isMobile: boolean;
  changeQuestionAnimation: boolean;
  answersWidth: number;
  winowWidth: number;
}

export const animationAfterChooseAnswer = ({
  wrongAnswerAnimation,
  isMobile,
  changeQuestionAnimation,
  answersWidth,
  winowWidth,
}: AnimationAnswerProps) => {
  const tl = gsap.timeline({
    defaults: { ease: "power4.inOut", duration: 1.2 },
  });
  const tl2 = gsap.timeline({
    defaults: { delay: 1, ease: "power4.inOut", duration: 0.9 },
  });

  if (wrongAnswerAnimation) {
    // animation after wrong answer
    gsap.set(".checked", { zIndex: 100 });
    if (isMobile) {
      gsap.to(".answer1", { delay: 1.1, y: "74" });
      gsap.to(".answer2", { delay: 1.1, y: "24" });
      gsap.to(".answer3", { delay: 1.1, y: "-24" });
      gsap.to(".answer4", { delay: 1.1, y: "-74" });
      tl2
        .addLabel("disappear")
        .to(".answer", { duration: 2, opacity: 0 }, "+=1")
        .to(".question", { duration: 2, autoAlpha: 0 }, "disappear+=1");
    } else {
      gsap.set(".answer1,.answer2", { zIndex: 10 });
      gsap.set(".checked", { zIndex: 100 });
      tl2
        .to(".answer1, .answer2", { y: 50 })
        .addLabel("moveX")
        .to(".answer2, .answer4", { x: -answersWidth / 2 - 7 }, "-=1")
        .to(".answer1, .answer3", { x: answersWidth / 2 + 7 }, "moveX-=1")
        .addLabel("disappear")
        .to(".answer", { opacity: 0 }, "-=1")
        .to(".question", { opacity: 0 }, "disappear-=1");
    }
  } else {
    // animation after correct answer
    if (changeQuestionAnimation) {
      tl.to(".question", { x: winowWidth })
        .to(".question", { x: 0 })
        .to(".answer", { stagger: 0.1, opacity: 0, y: 150 }, "-=2")
        .to(".answer", { opacity: 1, y: 0 })
        .set(".answer", { clearProps: "opacity" });
    }
  }
};
