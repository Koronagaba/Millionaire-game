import gsap from "gsap";

interface LifebousAnimationProps {
  isMobile: boolean;
  initialAnimations: boolean;

  setInitialAnimations: (arg: boolean) => void;
}

export const lifebousAnimation = ({
  isMobile,
  initialAnimations,
  setInitialAnimations,
}: LifebousAnimationProps) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
  if (!isMobile && initialAnimations) {
    tl.set(".img_lifebous", { scale: 1, filter: "invert(1)" })
      .fromTo(
        ".img_lifebous",
        { scale: 1.5, filter: "invert(0)" },
        { delay: 1.7, duration: 0.2, scale: 1, stagger: 0.9 }
      )
      .set(".img_lifebous", { clearProps: "filter,scale" });
  }
};
