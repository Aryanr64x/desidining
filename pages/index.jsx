import Hero from "../components/Hero";
import LatestWork from "../components/LatestWork";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Tools from "../components/Tools";
import Script from 'next/script';

export default function Home() {
  return (
      <div className="text-primary bg-black">
          <Hero />
          <LatestWork />
          <Tools />
          <Contact />
          <Footer />

          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>

      </div>
  );
}
