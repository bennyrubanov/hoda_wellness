import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import FourPillars from "./components/sections/FourPillars";
import BetterLife from "./components/sections/BetterLife";
import PhotoStrip from "./components/sections/PhotoStrip";
import WhyHoda from "./components/sections/WhyHoda";
import Team from "./components/sections/Team";
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
        <WhyHoda />
        <Team />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
