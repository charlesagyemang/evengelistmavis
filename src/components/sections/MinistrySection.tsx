import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { ministryAreas } from "@/lib/content";

export default function MinistrySection() {
  return (
    <section
      id="ministry"
      className="bg-background-elevated py-20 sm:py-28 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Ministry"
          title="Four grounds of the calling."
          description="The work of the ministry is not one thing but many — held together by scripture and prayer."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {ministryAreas.map((area, i) => (
            <FadeIn
              key={area.title}
              delay={i * 0.08}
              className="bg-background-elevated p-8 sm:p-10"
            >
              <p className="text-accent font-display text-2xl mb-4">
                0{i + 1}
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {area.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
