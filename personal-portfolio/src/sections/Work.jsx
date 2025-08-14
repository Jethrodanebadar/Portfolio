import { projects } from "../constants/data";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Work = () => {
  const text = `Featured projects that have given me knowledge and experience in software development`;
  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"CODING WITH PURPOSE"}
        title={"WORKS"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
          >
            <div>
              <h2 className="lg:text-[32px] text-[24px] leading-none">
                {project.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
