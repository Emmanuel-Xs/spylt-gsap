import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { Link } from "react-router";
import { useRef } from "react";

import dripAnim from "@/assets/lottie/splt_gsap_btn_hover.json";

export const HeroSection = () => {
  const animRef = useRef<LottieRefCurrentProps | null>(null);
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-between bg-primary-300 pbs-[max(10%,_6rem)]"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col items-center justify-center">
        <h1
          className="font-antonio text-[13vw] leading-[120%] font-bold tracking-[-.35vw] text-secondary-800 uppercase mbe-[2vw] lg:text-[7.8vw] lg:leading-[9vw] lg:mbe-[1vw]"
          id="hero-title"
        >
          Freaking Delicious
        </h1>
        <h2 className="-rotate-2 bg-secondary-600 pli-[1.2vw] font-antonio text-[13vw] leading-[120%] font-bold tracking-[-.35vw] text-[#fce1cd] uppercase outline-[.5vw] outline-offset-0 outline-primary-300 mbe-7 mbs-0 pbe-[1vw] lg:-rotate-3 lg:text-[7.8vw] lg:leading-[9vw]">
          Protein + Caffeine
        </h2>
        <p className="max-w-4/5 text-center text-base leading-[120%] mbe-0 lg:w-[28vw] lg:text-[1.04vw] lg:leading-[115%]">
          Live life to the fullest with SPYLT: Shatter boredom and embrace your
          inner kid with every deliciously smooth chug.
        </p>
        <Link
          to="/"
          onMouseEnter={() => {
            if (animRef.current) {
              animRef.current.setDirection(1);
              animRef.current.setSpeed(2);
              animRef.current.play();
            }
          }}
          onMouseLeave={() => {
            if (animRef.current) {
              animRef.current.setDirection(-1);
              animRef.current.setSpeed(5);
              animRef.current.play();
            }
          }}
          className="relative isolate z-20 flex h-[48px] w-[165px] items-center justify-center rounded-full bg-secondary-500 font-antonio text-base font-bold uppercase mbs-[40px] lg:h-[3.7vw] lg:w-[12.5vw] lg:text-[1.05vw] lg:mbs-[4vw]"
        >
          Chug a SPYLT
          <Lottie
            animationData={dripAnim}
            autoplay={false}
            loop={false}
            lottieRef={animRef}
            className="pointer-events-none absolute -top-[145%] left-1/2 z-10 size-[400%] -translate-x-1/2"
          />
        </Link>
      </div>
    </section>
  );
};
