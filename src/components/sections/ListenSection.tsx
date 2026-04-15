import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  radioStations,
  powerEncounter,
  podcast,
  youtubeVideos,
  youtubeChannelUrl,
  newFireRadio,
} from "@/lib/content";

export default function ListenSection() {
  return (
    <section id="listen" className="bg-background py-20 sm:py-28 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Listen & Watch"
          title="Wherever you tune in, she's on."
          description="Radio across Ghana, Sunday broadcasts on New Fire Media, the Power Thursday podcast, and a growing YouTube archive of sermons."
        />

        <FadeIn className="mb-20">
          <h3 className="text-foreground text-lg font-semibold mb-6 tracking-wide">
            On the Radio
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {radioStations.map((station) => (
              <div
                key={station.id}
                className="bg-background-elevated rounded-lg overflow-hidden border border-border hover:border-accent/40 transition-colors"
              >
                <div className="relative h-40 bg-background">
                  <Image
                    src={station.logo}
                    alt={`${station.name} logo`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-1">
                    <h4 className="text-lg font-semibold text-foreground">
                      {station.name}
                    </h4>
                    <span className="text-accent font-display text-lg">
                      {station.frequency}
                    </span>
                  </div>
                  <p className="text-foreground-muted text-sm mb-4">
                    {station.region}
                  </p>
                  <p className="text-foreground text-sm border-t border-border pt-4">
                    {station.schedule}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mb-20">
          <div className="bg-background-elevated border border-border rounded-lg p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
                  Sunday Broadcast
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                  {powerEncounter.name}
                </h3>
                <p className="text-foreground-muted text-base mb-6 leading-relaxed">
                  A live Sunday evening service of prayer, preaching and
                  ministry — streamed on the {powerEncounter.platform} network.
                </p>
                <p className="text-foreground text-base font-medium mb-6">
                  {powerEncounter.schedule}
                </p>
                <div className="flex flex-wrap gap-2">
                  {powerEncounter.channels.map((channel) => (
                    <a
                      key={channel.name}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-background border border-border text-foreground px-4 py-2 rounded-full text-sm hover:border-accent/60 hover:text-accent transition-colors"
                    >
                      {channel.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-l-0 lg:border-l border-border lg:pl-10">
                <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
                  24/7 Stream
                </p>
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                  {newFireRadio.name}
                </h3>
                <p className="text-foreground-muted text-base mb-6 leading-relaxed">
                  {newFireRadio.description}
                </p>
                <a
                  href={newFireRadio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors font-medium"
                >
                  newfireradio.com
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mb-20">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="text-foreground text-lg font-semibold tracking-wide">
              Power Thursday Podcast
            </h3>
            <a
              href="/podcasts"
              className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
            >
              All episodes →
            </a>
          </div>
          <div className="bg-background-elevated border border-border rounded-lg p-6 sm:p-8">
            <p className="text-foreground-muted text-base mb-6 max-w-2xl leading-relaxed">
              {podcast.description}
            </p>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src={podcast.spotifyShowEmbedUrl}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Power Thursday on Spotify"
                className="border-0"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="text-foreground text-lg font-semibold tracking-wide">
              On YouTube
            </h3>
            <a
              href={youtubeChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover text-sm font-medium transition-colors"
            >
              Visit channel →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="bg-background-elevated rounded-lg overflow-hidden border border-border"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={`Sermon from ${video.date}`}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="p-4">
                  <p className="text-foreground-muted text-sm">{video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
