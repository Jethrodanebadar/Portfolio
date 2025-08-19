import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLine from "../components/AnimatedTextLine";

const Footer = () => {
  const contactText = `Hello 
  To
  The 
  World`;
  return (
    <section id="contact" className="bg-black h-[50vh]">
      <AnimatedHeaderSection
        subTitle={"Let’s connect"}
        title={"Contact"}
        text={""}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <AnimatedTextLine
        text={contactText}
        className={` flex flex-col items-center justify-center font-light uppercase value-text-responsive ${"text-white/75"}`}
      />
    </section>
  );
};

export default Footer;
