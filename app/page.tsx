import CardMeteors from "@/components/CardMeteors";
import ScrollX from "./components/ScrollX";
import Snow from "./components/Snow";
import Space from "./components/Space";
import ImageTrial from "./components/ImageTrial";
import Journey from "./components/Journey";
import TechStack from "./components/TechStack";
import Ocean from "./components/Ocean";
import DeepOcean from "./components/DeepOcean";
import RightMind from "./components/RightMind";

function Page() {
  return (
    <section className="main-container stickysection ">
      <Space />
      <RightMind />
      <Snow />
      <ScrollX />
      <Journey />
      <TechStack />
      <Ocean />
      <DeepOcean />
    </section>
  );
}
export default Page;
