import AnimatedHeaderSection from "../components/AnimatedHeaderSection.jsx";
const Hero = () => {
  const text = `Where logic meets design.
      I blend logic and creativity to 
      create real-world solutions.`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <AnimatedHeaderSection
        subTitle={"No errors detected"}
        title={"Jethro Badar"}
        text={text}
        textColor={"text-black"}
      />
    </section>
  );
};

export default Hero;
