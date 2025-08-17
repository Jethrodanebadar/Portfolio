import { projects, techs } from "../constants/data";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Icon } from "@iconify/react";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Tools from "./Tools";

const Work = () => {
  const previewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const text = `Projects that showcase my skills and the experience I’ve gained in software development.`;
  const moveX = useRef(null);
  const moveY = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const overlayRefs = useRef([]);
  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });
    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <Tools techs={techs} />
      <AnimatedHeaderSection
        subTitle={"CODING WITH PURPOSE"}
        title={"WORKS"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />

      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => window.open(project.href, "_blank")}
          >
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />
            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[24px] leading-none">
                {project.name}
              </h2>
              <Icon icon="uim:arrow-up-right" className="md:size-6 size-5" />
            </div>
            <div className="w-full h-0.5 bg-black/80"></div>
            <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12 overflow-hidden ">
              {project.tools.map((tool, index) => (
                <p
                  key={index}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {tool.name}
                </p>
              ))}
            </div>
            {/* mobile */}
            <div className="relative flex items-center justify-center p-x-10 md:hidden h-[400px]">
              <div className="object-cover w-full h-full rounded-md brightness-50 bg-black"></div>
              <img
                src={project.image}
                alt={project.name}
                className="absolute bg-center px-14 rounded-xl"
              />
            </div>
            <div className="px-8 md:hidden mb-8">
              <p className="mt-4 text-[12px]">{project.description}</p>
            </div>
          </div>
        ))}

        {/* destkop  */}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black bg-black pointer-events-none md:w-[560px] lg:w-[720px] xl:w-[960px] md:block hidden opacity-0 p-4 text-white "
        >
          {currentIndex !== null && (
            <div>
              <img
                src={projects[currentIndex].image}
                alt="preview"
                className="object-cover w-full h-full"
              />
              <p className="mt-4 text-white/60">
                {projects[currentIndex].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
