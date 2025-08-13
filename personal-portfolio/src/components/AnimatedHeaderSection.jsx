import { useRef } from "react";
import AnimatedTextLine from "../components/AnimatedTextLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const introTL = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? { trigger: contextRef.current }
        : undefined,
    });

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
    <div ref={contextRef}>
      <div style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
        <div
          ref={headerRef}
          className="flex flex-col justify-center gap-4 sm:gap-8 md:gap-12 pt-16"
        >
          <p
            className={`text-[12px] md:text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
          >
            {subTitle}
          </p>
          <div className="px-10">
            <h1
              className={`flex flex-col ${textColor} flex-wrap gap-12 uppercase banner-text-responsive sm:gap-16 md:block`}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className={`relative px-10 ${textColor}`}>
        <div className="absolute inset-x-0 border-t-2"></div>
        <div className="py-12 sm:py16 text-end">
          <AnimatedTextLine
            text={text}
            className={`font-light uppercase value-text-responsive ${textColor}`}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
