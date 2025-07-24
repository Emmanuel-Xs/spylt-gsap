import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { Link, type To } from "react-router";
import { useRef } from "react";

import dripAnim from "@/assets/lottie/spylt_gsap_btn_hover.json";

interface DripButtonProps {
  text: string;
  to: To;
}

export const DripButton = ({ text, to }: DripButtonProps) => {
  const animRef = useRef<LottieRefCurrentProps | null>(null);

  const playForward = () => {
    if (animRef.current) {
      animRef.current.setDirection(1);
      animRef.current.setSpeed(3);
      animRef.current.play();
    }
  };

  const playReverse = () => {
    if (animRef.current) {
      animRef.current.setDirection(-1);
      animRef.current.setSpeed(5);
      animRef.current.play();
    }
  };

  return (
    <Link
      to={to}
      aria-label="Shop SPYLT drinks"
      onMouseEnter={playForward}
      onMouseLeave={playReverse}
      onFocus={playForward}
      onBlur={playReverse}
      className="focus-visible:ring-secondary-300 relative isolate z-3 flex h-12 w-[165px] items-center justify-center rounded-full bg-secondary-500 font-antonio text-base font-bold uppercase transition-all mbs-10 focus-visible:ring-3 focus-visible:ring-offset-1 focus-visible:ring-offset-primary-300 focus-visible:outline-none lg:h-[3.7vw] lg:w-[12.5vw] lg:text-[1.05vw] lg:mbs-[4vw]"
    >
      {text}
      <Lottie
        animationData={dripAnim}
        autoplay={false}
        loop={false}
        lottieRef={animRef}
        aria-hidden="true"
        className="pointer-events-none absolute -top-[85%] left-1/2 z-1 hidden size-[300%] -translate-x-1/2 md:block"
      />
    </Link>
  );
};
