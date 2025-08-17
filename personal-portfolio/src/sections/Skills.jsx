import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });

  return (
    <section className=" overflow-hidden font-light leading-snug text-center my-20 md:mb-32 contact-text-responsive">
      <div
        id="title-service-1"
        className="font-normal skills-text-responsive items-center"
      >
        <p className="font-normal ">Software Engineer</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 "
      >
        <p className="font-normal skills-text-responsive">Architecture</p>
        <div className="w-10 h-1 md:w-32 bg-gold"></div>
        <p className=" skills-text-responsive">Collaboration</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-24"
      >
        <p className="font-normal skills-text-responsive">UI/IX</p>
        <div className="w-10 h-1 md:w-32 bg-gold"></div>
        <p className=" skills-text-responsive">Problem Solving</p>
      </div>
      <div
        id="title-service-4"
        className="flex items-center justify-center gap-3 translate-x-24"
      >
        <p className="font-normal skills-text-responsive">
          Full Stack Development
        </p>
      </div>
    </section>
  );
};

export default Skills;
