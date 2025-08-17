import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Tools = ({ techs, duration = 20 }) => {
  const scrollerRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    tweenRef.current = gsap.to(scroller, {
      xPercent: -50,
      repeat: -1,
      ease: "linear",
      duration: duration,
    });

    return () => tweenRef.current.kill();
  }, [duration]);

  const handleMouseEnter = () => {
    tweenRef.current.pause();
  };

  const handleMouseLeave = () => {
    tweenRef.current.resume();
  };

  return (
    <div
      className="overflow-hidden whitespace-nowrap relative w-full bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={scrollerRef}
        className="flex space-x-8 w-max"
        style={{ display: "inline-flex" }}
      >
        {[...techs, ...techs].map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center px-4 py-2 text-white md:text-2xl uppercase xw"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
