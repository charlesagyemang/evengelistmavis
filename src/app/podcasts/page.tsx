import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import { podcast, youtubeChannelUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Power Thursday Podcast",
  description:
    "Power Thursday — weekly teachings from Evangelist Mavis Opoku Ayemang on prayer, the prophetic, and the power of God.",
  alternates: {
    canonical: "/podcasts",
  },
};

export default function PodcastsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Podcast
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground mb-6 leading-[1.05]">
              {podcast.name}
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12 max-w-2xl">
              {podcast.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mb-10">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src={podcast.spotifyShowEmbedUrl}
                width="100%"
                height="232"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Power Thursday — latest episode"
                className="border-0"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border-t border-border pt-10">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                More ways to listen
              </h2>
              <ul className="space-y-3 text-foreground-muted">
                <li>
                  <a
                    href={podcast.latestEpisodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                  >
                    Open on Spotify →
                  </a>
                </li>
                <li>
                  <a
                    href={youtubeChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                  >
                    Watch sermons on YouTube →
                  </a>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}
