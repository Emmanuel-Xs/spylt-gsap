import { useMediaQuery } from "react-responsive";

import { DripButton } from "@/components/drip-button";

export const HeroSection = () => {
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <section
      className="relative isolate flex h-dvh flex-col items-center justify-between overflow-hidden bg-primary-300 pbs-[max(10%,_6rem)] lg:max-[1440px]:grid lg:max-[1440px]:place-content-center"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col items-center justify-center">
        <h1
          className="font-antonio text-[13vw] leading-[1.2] font-bold tracking-[-.35vw] text-secondary-800 uppercase mbe-[2vw] lg:text-[min(7.8rem,_10vw)] lg:leading-[9vw] lg:mbe-[1vw]"
          id="hero-title"
        >
          Freaking Delicious
        </h1>
        <h2 className="-rotate-2 bg-secondary-600 pli-[1.2vw] font-antonio text-[13vw] leading-[1.2] font-bold tracking-[-.35vw] text-[#fce1cd] uppercase outline-[.6vw] outline-offset-0 outline-primary-300 mbe-7 mbs-0 pbe-[1vw] lg:-rotate-3 lg:text-[min(7.8rem,_10vw)] lg:leading-[9vw] lg:pbe-[min(2vw,_1.5rem)]">
          Protein + Caffeine
        </h2>
        <p className="max-w-4/5 text-center text-base leading-[1.2] mbe-0 lg:w-[min(28rem,_40vw)] lg:text-[min(1.04rem,_1.4vw)] lg:leading-[1.15]">
          Live life to the fullest with SPYLT: Shatter boredom and embrace your
          inner kid with every deliciously smooth chug.
        </p>
        <DripButton to="/" text="Chug a SPYLT" />
      </div>
      {/* image for mobile and tablets */}
      <img
        src="/images/hero-img.png"
        alt=""
        aria-hidden="true"
        className="block w-[90%] mbs-10 min-[30rem]:w-[80%] md:w-[60%] md:mbs-[4.375rem] lg:hidden"
      />
      <img
        src="/images/hero-bg-1.png"
        srcSet="/images/hero-bg-2.png 500w,
                 /images/hero-bg-1.png 684w"
        sizes="(max-width: 684px) 100vw, 684px"
        loading="eager"
        aria-hidden="true"
        className="absolute inset-0 -z-1 h-full w-full scale-180 object-cover min-[30rem]:scale-100 lg:hidden"
      />
      {/* video for desktop */}
      <video
        src="/videos/hero-bg.mp4"
        autoPlay
        muted
        playsInline
        className="absolute inset-0 -z-1 hidden h-full w-full object-cover lg:block"
      />
    </section>
  );
};
