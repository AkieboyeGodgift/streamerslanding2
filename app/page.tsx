import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import LiveSection from "./components/Live";
import AboutSection from "./components/About";
import SponsorsSection from "./components/Sponsors";
import StreamsSection from "./components/Streams";
import StreamerForm from "./components/Contact";
import FooterSection from "./components/Footer";


export default function Home() {

  return (
    <>
      <Navbar logo="/loader.png" title="Gamer Portal" />
      <HeroSection
      slides={[
        {
          image: "/img/cod.png",
          logo: "/logo/callofduty.png",
        },
        {
          image: "/img/bf6.webp",
          logo: "/logo/bf6.png",
        },
        {
          image: "/img/fortnite.jpg",
          logo: "/logo/fortnite.webp",
        },
      ]}
    />
    <AboutSection />
    <LiveSection />
    <SponsorsSection
      sponsors={[
        { name: "Intel", logo: "/logo/intel.png" },
        { name: "Nvidia", logo: "/logo/nvidia.png" },
        { name: "Corsair", logo: "/logo/corsair.png" },
        { name: "Razer", logo: "/logo/razer.png" },
        { name: "Beats", logo: "/logo/beats.png" },
        { name: "Logitech", logo: "/logo/logitech.png" },
      ]}
    />

    <StreamsSection />
    <StreamerForm />
    <FooterSection />

    </>
  );
}
