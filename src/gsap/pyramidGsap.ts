import gsap from "gsap";

export const pyramidGsap = (initialAnimations: boolean) => {
  const tl = gsap.timeline();
  tl.set(".single_pyramid", {
    backgroundColor: "transparent",
    boxShadow: "0 0 0",
  });

  if (initialAnimations) {
    tl.fromTo(
      ".single_pyramid",
      {
        backgroundColor: "#b69033",
        boxShadow: "0 0 8px 4px #fff",
      },
      {
        delay: 0.25,
        duration: 1,
        stagger: 0.125,
        backgroundColor: "transparent",
        boxShadow: "none",
      }
    ).set(".single_pyramid", { clearProps: "all" }, "-=.85");
  }
};
