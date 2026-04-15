import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/images/about.png"
              alt="Evangelist Mavis Opoku Ayemang"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-accent text-sm font-medium tracking-[0.2em] uppercase mb-4">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-[1.1]">
              A voice for the gospel in Ghana and beyond.
            </h2>

            <div className="space-y-5 text-foreground-muted text-base sm:text-lg leading-relaxed">
              <p>
                Evangelist Mavis Opoku Ayemang is a Ghanaian minister of the
                gospel whose work reaches believers across the Ashanti and Bono
                regions — and further still through New Fire Media's global
                broadcast.
              </p>
              <p>
                Her ministry centres on the simple, steady proclamation of
                scripture, accompanied by prayer for healing, deliverance and
                prophetic counsel. Through weekly radio programs, the{" "}
                <span className="text-foreground">Power Thursday</span> podcast
                and Sunday's{" "}
                <span className="text-foreground">Power Encounter</span>{" "}
                broadcast, she meets listeners wherever they are.
              </p>
              <p>
                Her calling is plainspoken: to point people to Christ, and to
                stand with those who are seeking God for a breakthrough.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
