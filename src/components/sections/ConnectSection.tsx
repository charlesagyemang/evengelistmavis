import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { socials, powerEncounter } from "@/lib/content";

export default function ConnectSection() {
  return (
    <section
      id="connect"
      className="bg-background-elevated py-20 sm:py-28 scroll-mt-24"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          eyebrow="Connect"
          title="Stay in step with the ministry."
          description="The easiest place to keep up is on YouTube and on the New Fire Media channels that carry Power Encounter every Sunday."
        />

        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-background border border-border text-foreground px-7 py-3.5 rounded-full text-base font-medium hover:border-accent/60 hover:text-accent transition-colors min-h-[48px]"
              >
                Follow on {social.name}
              </a>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-border">
            <p className="text-foreground-muted text-sm tracking-wider uppercase mb-3">
              Also on
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-foreground-muted">
              {powerEncounter.channels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {channel.name}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
