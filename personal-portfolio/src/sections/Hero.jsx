import React, { useRef } from "react";
import AnimatedTextLine from "../components/AnimatedTextLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const introText = `Where logic meets design.
I blend logic and creativity to 
create real-world solutions.`;

  useGSAP(() => {
    const introTL = gsap.timeline();

    introTL.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    introTL.from(
      headerRef.current,
      {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <section className="flex flex-col justify-end min-h-screen">
      <div ref={contextRef}>
        <div style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
          <div
            ref={headerRef}
            className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
          >
            <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 text-black">
              No <span className="text-red-500">errors</span> detected
            </p>
            <div className="px-10">
              <h1 className="flex flex-col text-black flex-wrap gap-12 uppercase banner-text-responsive sm:gap-16 md:block">
                Jethro Badar
              </h1>
            </div>
          </div>
        </div>
        <div className="relative px-10 text-black">
          <div className="absolute inset-x-0 border-t-2"></div>
          <div className="py-12 sm:py16 text-end">
            <AnimatedTextLine
              text={introText}
              className="font-light uppercase value-text-responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
