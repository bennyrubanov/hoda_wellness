import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import FourPillars from "./components/sections/FourPillars";
import BetterLife from "./components/sections/BetterLife";
import PhotoStrip from "./components/sections/PhotoStrip";
import Program from "./components/sections/Program";
import WhyHoda from "./components/sections/WhyHoda";
import Team from "./components/sections/Team";
import Testimonials from "./components/sections/Testimonials";
import FinalCTA from "./components/sections/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BetterLife />
        <FourPillars />
        <PhotoStrip />
        <Program />
        <WhyHoda />
        <Team />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
