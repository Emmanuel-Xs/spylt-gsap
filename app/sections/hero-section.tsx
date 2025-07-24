import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { DripButton } from "@/components/drip-button";

export const HeroSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#hero-title", {
      type: "words chars",
    });
    const tl = gsap.timeline({
      delay: 1,
    });

    tl.fromTo(
      "#hero-content",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
      },
    )
      .to(
        "#hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5",
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5",
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-section",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to("#hero-section", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section
      className="relative isolate flex h-dvh flex-col items-center justify-between overflow-hidden bg-primary-300 pbs-[max(10%,_6rem)] lg:max-[1440px]:grid lg:max-[1440px]:place-content-center"
      aria-labelledby="hero-title"
      id="hero-section"
    >
      <div
        className="flex flex-col items-center justify-center"
        id="hero-content"
      >
        <div className="overflow-hidden">
          <h1
            className="font-antonio text-[13vw] leading-[1.2] font-bold tracking-[-.35vw] text-secondary-800 uppercase mbe-[2vw] lg:text-[min(7.8rem,_10vw)] lg:leading-[9vw] lg:mbe-[.5vw]"
            id="hero-title"
          >
            Freaking Delicious
          </h1>
        </div>
        <div
          className="-rotate-2 border-[.6vw] border-primary-300 -mbs-2 mbe-7 lg:-rotate-3"
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          id="hero-text-scroll"
        >
          <div className="bg-secondary-600">
            <h2 className="pli-[1.2vw] font-antonio text-[13vw] leading-[1.2] font-bold tracking-[-.35vw] text-[#fce1cd] uppercase pbe-[1vw] lg:text-[min(7.8rem,_10vw)] lg:leading-[9vw] lg:pbe-[min(2vw,_1.5rem)]">
              Protein + Caffeine
            </h2>
          </div>
        </div>
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
      {/* image for mobile only */}
      <img
        src="/images/hero-bg-1.png"
        srcSet="/images/hero-bg-2.png 500w,
                 /images/hero-bg-1.png 684w"
        sizes="(max-width: 684px) 100vw, 684px"
        loading="eager"
        aria-hidden="true"
        className="absolute inset-0 -z-1 h-full w-full scale-160 object-cover md:hidden"
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
