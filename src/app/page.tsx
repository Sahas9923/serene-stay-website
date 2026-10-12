import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import About from "../components/About";
import Amenities from "../components/Amenities";
import Gallery from "../components/Gallery";
import Rates from "../components/Rates";
import Location from "../components/Location";
import HouseRules from "../components/HouseRules";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Amenities />
        <Gallery />
        <Rates />
        <Location />
        <HouseRules />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}