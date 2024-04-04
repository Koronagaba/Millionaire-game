import gsap from "gsap";

interface AnimationPyramid {
  initialAnimations: boolean;
  startGame: boolean;
  isMobile: boolean;
}

export const pyramidGsap = ({
  initialAnimations,
  startGame,
  isMobile,
}: AnimationPyramid) => {
  const tl = gsap.timeline();

  if (!startGame || initialAnimations) {
    tl.set(".single_pyramid", {
      backgroundColor: "transparent",
      boxShadow: "0 0 0",
    });
  }

  if (initialAnimations && !isMobile) {
    tl.fromTo(
      ".single_pyramid",
      {
        backgroundColor: "#b69033",
        boxShadow: "0 0 8px 4px #fff",
      },
      {
        delay: 0.25,
        duration: 0.6,
        stagger: 0.125,
        backgroundColor: "transparent",
        boxShadow: "none",
      }
    );
  }
  tl.set(".single_pyramid", { clearProps: "all" }, "-=.45");
};
