import ScrollX from "./components/ScrollX";
import Snow from "./components/Snow";
import Space from "./components/Space";
import Journey from "./components/Journey";
import TechStack from "./components/TechStack";
import Ocean from "./components/Ocean";
import DeepOcean from "./components/DeepOcean";
import RightMind from "./components/RightMind";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Clients from "./components/Clients";

function Page() {
  return (
    <section className="stickysection">
      <Space />
      <RightMind />
      <Snow />
      <ScrollX />
      <Journey />
      <TechStack />
      <Ocean />
      <DeepOcean />
      <Contact />
      <Clients />
      <Footer />
    </section>
  );
}

export default Page;
