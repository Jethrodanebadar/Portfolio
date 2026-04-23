import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLine from "../components/AnimatedTextLine";

const Footer = () => {
  return (
    <section id="contact" className="bg-black min-h-[50vh]">
      <AnimatedHeaderSection
        subTitle={"Let’s connect"}
        title={"Contact"}
        text={""}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
    </section>
  );
};

export default Footer;
