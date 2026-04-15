import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://evangelistmavis.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Evangelist Mavis Opoku Ayemang",
    template: "%s | Evangelist Mavis Opoku Ayemang",
  },
  description:
    "Ghanaian evangelist preaching the gospel through radio, television and crusades across Africa. Host of Power Thursday and Power Encounter on New Fire Media.",
  keywords: [
    "Evangelist Mavis Opoku Ayemang",
    "Power Thursday",
    "Power Encounter",
    "New Fire Media",
    "Ghana evangelist",
    "women evangelists Ghana",
    "Accra prophetic ministry",
  ],
  authors: [{ name: "Evangelist Mavis Opoku Ayemang" }],
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteUrl,
    siteName: "Evangelist Mavis Opoku Ayemang",
    title: "Evangelist Mavis Opoku Ayemang",
    description:
      "Ghanaian evangelist preaching the gospel through radio, television and crusades across Africa.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Evangelist Mavis Opoku Ayemang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evangelist Mavis Opoku Ayemang",
    description:
      "Ghanaian evangelist. Host of Power Thursday and Power Encounter on New Fire Media.",
    images: ["/images/hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Evangelist Mavis Opoku Ayemang",
  jobTitle: "Evangelist",
  url: siteUrl,
  image: `${siteUrl}/images/hero.png`,
  nationality: "Ghanaian",
  worksFor: {
    "@type": "Organization",
    name: "New Fire Media",
    url: "https://newfireradio.com",
  },
  sameAs: [
    "https://www.youtube.com/@EvangelistMavis",
    "https://www.facebook.com/evangelistmavis",
    "https://www.tiktok.com/@evangelistmavis",
  ],
};

const podcastJsonLd = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Power Thursday",
  author: {
    "@type": "Person",
    name: "Evangelist Mavis Opoku Ayemang",
  },
  url: `${siteUrl}/podcasts`,
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
