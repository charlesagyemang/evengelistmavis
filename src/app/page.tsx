import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MinistrySection from "@/components/sections/MinistrySection";
import ListenSection from "@/components/sections/ListenSection";
import ConnectSection from "@/components/sections/ConnectSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MinistrySection />
        <ListenSection />
        <ConnectSection />
      </main>
      <Footer />
    </>
  );
}
