import Hero from "../components/Hero";
import LatestWork from "../components/LatestWork";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Tools from "../components/Tools";
export default function Home() {
  return (
      <div className="text-primary bg-black">
          <Hero />
          <LatestWork />
          <Tools />
          <Contact />
          <Footer />
      </div>
  );
}
