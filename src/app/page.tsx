import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MinistrySection from "@/components/sections/MinistrySection";
import MediaSection from "@/components/sections/MediaSection";
import MediaOutreachSection from "@/components/sections/MediaOutreachSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MinistrySection />
        <MediaSection />
        <MediaOutreachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
