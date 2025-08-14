import ReactLenis from "lenis/react";
import About from "./sections/About";
import Header from "./sections/header";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

const App = () => {
  return (
    <ReactLenis root className="relative w-screen min-h-screen">
      <Header />
      <Hero />
      <Skills />
      <About />
      <Work />
    </ReactLenis>
  );
};

export default App;
