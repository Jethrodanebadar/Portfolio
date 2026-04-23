import ReactLenis from "lenis/react";
import About from "./sections/About";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Footer />
    </ReactLenis>
  );
};

export default App;
