export const site = {
  name: "Evangelist Mavis Opoku Ayemang",
  shortName: "Evangelist Mavis",
  tagline: "Preaching the gospel on the airwaves of Ghana and beyond.",
  url: "https://evangelistmavis.com",
} as const;

export const ministryAreas = [
  {
    title: "Evangelism",
    description:
      "Reaching communities across Ghana and beyond with the message of the gospel through crusades, outreaches and broadcasts.",
  },
  {
    title: "Healing & Deliverance",
    description:
      "Ministering to the oppressed and the broken, believing God for physical healing and spiritual freedom in Jesus' name.",
  },
  {
    title: "Prophetic Ministry",
    description:
      "Sharing prophetic insight that encourages, directs and strengthens believers in their walk with God.",
  },
  {
    title: "Teaching",
    description:
      "Opening scripture with clarity and conviction, grounding believers in the whole counsel of God.",
  },
] as const;

export const youtubeVideos = [
  { id: "UknUXraepPI", date: "September 15, 2023" },
  { id: "-jqIipA9QoI", date: "October 22, 2023" },
  { id: "nho_401ktmg", date: "November 5, 2023" },
] as const;

export const youtubeChannelUrl = "https://www.youtube.com/@EvangelistMavis";

export const podcast = {
  name: "Power Thursday",
  description:
    "Weekly teachings on prayer, the prophetic, and the power of God — available on Spotify.",
  latestEpisodeUrl:
    "https://open.spotify.com/episode/39dfriyELtR25PooGAmnoQ?si=2TS3fQROQsi4N_TUbLdgjQ",
  spotifyShowEmbedUrl:
    "https://open.spotify.com/embed/episode/39dfriyELtR25PooGAmnoQ?utm_source=generator&theme=0",
} as const;

export const radioStations = [
  {
    id: "rejoice",
    name: "Rejoice FM",
    region: "Bono Region",
    frequency: "101.7",
    schedule: "Tuesdays, 5:00 – 6:00 am",
    logo: "/images/radios/rejoice.jpg",
  },
  {
    id: "oyerepa",
    name: "Oyerepa FM",
    region: "Ashanti Region",
    frequency: "100.7",
    schedule: "Saturdays, 9:00 – 10:00 pm",
    logo: "/images/radios/oyerepa.png",
  },
  {
    id: "ayekoo",
    name: "Ayekoo FM",
    region: "Ashanti Region",
    frequency: "100.9",
    schedule: "Thursdays, 7:00 – 8:00 pm",
    logo: "/images/radios/ayekoo.jpeg",
  },
] as const;

export const powerEncounter = {
  name: "Power Encounter",
  schedule: "Sundays, 7:00 – 9:00 pm",
  platform: "New Fire Media",
  channels: [
    {
      name: "Facebook",
      url: "https://web.facebook.com/newfireradio",
    },
    {
      name: "Twitch",
      url: "https://twitch.tv/newfiremedia",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/pianoafrik",
    },
  ],
} as const;

export const newFireRadio = {
  name: "New Fire Radio",
  description: "24/7 gospel streaming from the New Fire Media network.",
  url: "https://newfireradio.com",
} as const;

export const socials = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/@EvangelistMavis",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/evangelistmavis",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@evangelistmavis",
  },
] as const;

export const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Ministry", href: "/#ministry" },
  { name: "Listen", href: "/#listen" },
  { name: "Podcast", href: "/podcasts" },
  { name: "Connect", href: "/#connect" },
] as const;
