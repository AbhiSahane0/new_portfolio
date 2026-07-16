import Hero from "./_components/sections/Hero";
import About from "./_components/sections/About";
import Skills from "./_components/sections/Skills";
import Projects from "./_components/sections/Projects";
import Experience from "./_components/sections/Experience";
import Different from "./_components/sections/Different";
import Testimonials from "./_components/sections/Testimonials";
import Freelancing from "./_components/sections/Freelancing";
import Contact from "./_components/sections/Contact";
import Footer from "./_components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Different />
      <Testimonials />
      <Freelancing />
      <Contact />
      <Footer />
    </>
  );
}
