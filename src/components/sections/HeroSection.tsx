import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { youtubeChannelUrl } from "@/lib/content";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Evangelist Mavis Opoku Ayemang"
          fill
          className="object-cover object-top sm:object-center"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <FadeIn className="max-w-2xl">
          <p className="text-accent text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-6">
            Ghanaian Evangelist
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.05] mb-6">
            Evangelist Mavis
            <br />
            Opoku Ayemang
          </h1>
          <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed mb-10 max-w-xl">
            Preaching the gospel on the airwaves of Ghana and beyond. Host of{" "}
            <span className="text-foreground">Power Thursday</span> and{" "}
            <span className="text-foreground">Power Encounter</span> on New Fire
            Media.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-background px-7 py-3.5 rounded-full text-base font-medium hover:bg-accent-hover transition-colors min-h-[48px]"
            >
              Watch Latest Sermons
            </a>
            <a
              href="#listen"
              className="inline-flex items-center justify-center bg-transparent border border-foreground/30 text-foreground px-7 py-3.5 rounded-full text-base font-medium hover:bg-foreground/5 hover:border-foreground/60 transition-colors min-h-[48px]"
            >
              Broadcast Schedule
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
