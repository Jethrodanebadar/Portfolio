import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLine from "../components/AnimatedTextLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const imgRef = useRef(null);
  const aboutRef = useRef(null);
  const text =
    "Passionate about building software that solves real-world problems and creates meaningful experiences.";

  const aboutText = `I’m a Backend Software Engineer with hands-on experience building full-stack production-grade systems using Python and Django, including applications serving over 3,000 users. I enjoy designing REST APIs, database schemas, and backend workflows that are reliable, maintainable, and scalable. Through my projects, I’ve gained experience in full-stack development, cloud deployment basics, and system reliability, and I’m excited to continue growing as a T-shaped engineer with a focus on backend and API design.

When I’m not coding:

🎨 I’m practicing drawing while working toward creating illustrations and my own manga. 

🎸 I enjoy music sessions while thinking—it's my way to focus, relax, and let creativity flow as I code or plan projects.`;

  useGSAP(() => {
    const about = aboutRef.current;
    gsap.to(about, {
      scale: 0.95,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: about,
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        onUpdate: (self) => {
          if (self.progress > 0) {
            about.classList.add("rounded-b-4xl");
          } else {
            about.classList.remove("rounded-b-4xl");
          }
        },
      },
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section ref={aboutRef} className="min-h-screen bg-black">
      <AnimatedHeaderSection
        subTitle={"CODING WITH PURPOSE"}
        title={"ABOUT"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col  items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60 ">
        <img
          ref={imgRef}
          src="images/portfolio.jpg"
          alt="profile"
          className="w-md rounded-2xl"
        />
        <AnimatedTextLine text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
