"use client";

import { useState } from "react";

type FolderName =
  | "Content"
  | "Social"
  | "Video"
  | "Carousel"
  | "Website";

type MediaItem = {
  id: string;
  title: string;
  description: string;
  type: "image" | "video" | "carousel";
  media?: string;
  slides?: string[];
  highlight?: string;
};

const folders: {
  name: FolderName;
  number: string;
}[] = [
  { name: "Content", number: "01" },
  { name: "Social", number: "02" },
  { name: "Video", number: "03" },
  { name: "Carousel", number: "04" },
  { name: "Website", number: "05" },
];

/* ========================================
   EMAR — VIDEO
======================================== */

const emarVideo01: MediaItem = {
  id: "emar-video-01",
  title: "Agricultural Vehicle Maintenance",
  description:
    "Educational talking Reel explaining the importance of scheduled maintenance for agricultural vehicles, comparing compatible brands and helping customers choose the best solution based on quality and price.",
  type: "video",
  media: "/media/work/emar/emarvd-1.mp4",
};

const emarVideo02: MediaItem = {
  id: "emar-video-02",
  title: "Local Store Promotion",
  description:
    "Promotional Reel created to increase local visibility, strengthen store awareness and encourage foot traffic through a direct presentation of the physical retail experience.",
  type: "video",
  media: "/media/work/emar/emarvd-2.mp4",
};

const emarVideo03: MediaItem = {
  id: "emar-video-03",
  title: "Makita Product Arrival",
  description:
    "Product announcement Reel introducing the arrival of Makita products in store, using new assortment communication to create interest and reinforce Emar's product offering.",
  type: "video",
  media: "/media/work/emar/emarvd-3.mp4",
};

/* ========================================
   EMAR — SINGLE POST
======================================== */

const emarPost01: MediaItem = {
  id: "emar-post-01",
  title: "Precision Agriculture — CHCNAV 612",
  description:
    "Product-focused social creative introducing an automated guidance system for precision agriculture, translating a technical solution into clear benefits and supporting the communication with a consultation-led CTA.",
  type: "image",
  media: "/media/work/emar/emarpost-01.jpg",
};

/* ========================================
   EMAR — CAROUSEL 01
======================================== */

const emarCarousel01: MediaItem = {
  id: "emar-carousel-01",
  title: "Workshop Essentials",
  description:
    "Educational carousel designed to help less experienced customers understand essential workshop tools and their practical uses, before naturally connecting product education with a time-sensitive Makita promotion.",
  type: "carousel",
  slides: [
    "/media/work/emar/emar-carousel-01-1.jpg",
    "/media/work/emar/emar-carousel-01-2.jpg",
    "/media/work/emar/emar-carousel-01-3.jpg",
    "/media/work/emar/emar-carousel-01-4.jpg",
    "/media/work/emar/emar-carousel-01-5.jpg",
    "/media/work/emar/emar-carousel-01-6.jpg",
    "/media/work/emar/emar-carousel-01-7.jpg",
    "/media/work/emar/emar-carousel-01-8.jpg",
  ],
};

/* ========================================
   EMAR — CAROUSEL 02
======================================== */

const emarCarousel02: MediaItem = {
  id: "emar-carousel-02",
  title: "Choosing the Right Tool",
  description:
    "Educational carousel simplifying the differences between common workshop tools and their use cases, helping customers make a more informed choice while positioning Emar as a practical point of reference.",
  type: "carousel",
  slides: [
    "/media/work/emar/emar-carousel-02-1.jpg",
    "/media/work/emar/emar-carousel-02-2.jpg",
    "/media/work/emar/emar-carousel-02-3.jpg",
    "/media/work/emar/emar-carousel-02-4.jpg",
    "/media/work/emar/emar-carousel-02-5.jpg",
    "/media/work/emar/emar-carousel-02-6.jpg",
    "/media/work/emar/emar-carousel-02-7.jpg",
  ],
};

/* ========================================
   EMAR — WEBSITE
======================================== */

const emarWebsite: MediaItem = {
  id: "emar-website",
  title: "Assisted Commerce Experience",
  description:
    "A product-led website designed around Emar's real buying behaviour, combining e-commerce-style product discovery with direct WhatsApp assistance for customers who need technical guidance before purchasing.",
  type: "carousel",
  highlight: "Website / UX",
  slides: [
    "/media/work/emar/website/website-01.jpg",
    "/media/work/emar/website/website-02.png",
    "/media/work/emar/website/website-03.png",
    "/media/work/emar/website/website-04.png",
    "/media/work/emar/website/website-05.png",
    "/media/work/emar/website/website-06.png",
    "/media/work/emar/website/website-07.png",
    "/media/work/emar/website/website-08.png",
  ],
};

/* ========================================
   FOLDER CONTENT
======================================== */

const folderContent: Record<FolderName, MediaItem[]> = {
  Content: [
    emarVideo01,
    emarVideo02,
    emarVideo03,
    emarPost01,
    emarCarousel01,
    emarCarousel02,
  ],

  Social: [
    emarVideo01,
    emarVideo02,
    emarVideo03,
    emarPost01,
    emarCarousel01,
    emarCarousel02,
  ],

  Video: [emarVideo01, emarVideo02, emarVideo03],

  Carousel: [emarCarousel01, emarCarousel02],

  Website: [emarWebsite],
};

/* ========================================
   STRATEGY
======================================== */

const strategyItems = [
  {
    number: "01",
    title: "Learn before communicating",
    description:
      "Entering a market I did not already know meant starting with research: understanding the territory, customer habits, product categories and the practical needs behind purchasing decisions.",
  },
  {
    number: "02",
    title: "Make technical products easier to understand",
    description:
      "Content was designed not only to promote products, but to explain them. Educational posts helped younger and less experienced audiences understand tools, maintenance and different use cases before making a purchase.",
  },
  {
    number: "03",
    title: "Use seasonality as relevance",
    description:
      "Communication followed agricultural cycles, seasonal needs and moments when specific products naturally became more relevant to the customer.",
  },
  {
    number: "04",
    title: "Promote when the offer makes sense",
    description:
      "Discounts and promotional mechanics were connected to real buying moments rather than being used continuously, helping maintain product value while supporting conversion.",
  },
  {
    number: "05",
    title: "Design around real customer behaviour",
    description:
      "The website experience was structured around how customers actually approached Emar: explore independently first, then ask for technical advice when the purchase required additional confidence.",
  },
];

/* ========================================
   ROLE
======================================== */

const roleItems = [
  {
    number: "01",
    title: "Market & Audience Research",
    description:
      "Studied a new market, local purchasing behaviour, customer needs and the different levels of product knowledge across Emar's audience.",
  },
  {
    number: "02",
    title: "Social Strategy",
    description:
      "Built the social communication around education, product discovery, local relevance, seasonality and selected promotional moments.",
  },
  {
    number: "03",
    title: "Content Production",
    description:
      "Managed concepts, copy, visual production and video content across educational, promotional and product-led communication.",
  },
  {
    number: "04",
    title: "Website & UX",
    description:
      "Structured the website, navigation and product discovery journey to remain understandable for customers with very different ages, digital confidence and technical knowledge.",
  },
  {
    number: "05",
    title: "Brand & Offline",
    description:
      "Developed Emar's logo and supported offline communication through promotional materials designed to keep physical and digital touchpoints visually consistent.",
  },
  {
    number: "06",
    title: "Conversion Journey",
    description:
      "Integrated WhatsApp into the website as a natural assisted-conversion touchpoint for customers who need technical guidance before choosing a product or solution.",
  },
];

/* ========================================
   STACK
======================================== */

const stackGroups = [
  {
    title: "Website",
    tools: ["WordPress"],
  },
  {
    title: "Creative",
    tools: ["Adobe Creative Suite", "Canva"],
  },
  {
    title: "AI & Production",
    tools: ["Midjourney", "ChatGPT", "Claude", "Higgsfield"],
  },
  {
    title: "Marketing & Analytics",
    tools: [
      "Meta Business Suite",
      "Google Analytics",
      "Google Search Console",
    ],
  },
  {
    title: "Productivity",
    tools: ["Google Workspace", "Microsoft Office"],
  },
];

/* ========================================
   STANDARD CAROUSEL
======================================== */

function CarouselCard({ item }: { item: MediaItem }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!item.slides?.length) {
    return null;
  }

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? item.slides!.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === item.slides!.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="group/carousel relative overflow-hidden bg-black">
      <img
        src={item.slides[currentSlide]}
        alt={`${item.title} — slide ${currentSlide + 1}`}
        className="block h-auto w-full"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previousSlide();
        }}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-sm text-white backdrop-blur-md transition md:h-10 md:w-10 md:opacity-0 md:group-hover/carousel:opacity-100"
      >
        ←
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          nextSlide();
        }}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-sm text-white backdrop-blur-md transition md:h-10 md:w-10 md:opacity-0 md:group-hover/carousel:opacity-100"
      >
        →
      </button>

      <span className="pointer-events-none absolute right-3 top-3 z-30 border border-white/15 bg-black/75 px-3 py-2 text-[10px] text-white/70 backdrop-blur-md md:opacity-0 md:transition md:group-hover/carousel:opacity-100">
        {currentSlide + 1} / {item.slides.length}
      </span>
    </div>
  );
}

/* ========================================
   WEBSITE CAROUSEL
======================================== */

function WebsiteCarousel({ item }: { item: MediaItem }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!item.slides?.length) {
    return null;
  }

  const previousSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? item.slides!.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === item.slides!.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <div className="relative flex min-h-[420px] w-full items-center justify-center bg-[#050907] sm:min-h-[520px] md:min-h-[640px]">
      <img
        src={item.slides[currentSlide]}
        alt={`${item.title} — screen ${currentSlide + 1}`}
        className="max-h-[640px] w-full object-contain"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previousSlide();
        }}
        aria-label="Previous website screen"
        className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-white backdrop-blur-md transition hover:bg-black sm:left-4"
      >
        ←
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          nextSlide();
        }}
        aria-label="Next website screen"
        className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-white backdrop-blur-md transition hover:bg-black sm:right-4"
      >
        →
      </button>

      <span className="pointer-events-none absolute right-3 top-3 z-30 border border-white/15 bg-black/75 px-3 py-2 text-[10px] text-white/70 backdrop-blur-md sm:right-4 sm:top-4">
        {currentSlide + 1} / {item.slides.length}
      </span>
    </div>
  );
}

/* ========================================
   MEDIA CARD
======================================== */

function MediaCard({ item }: { item: MediaItem }) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const hideOverlay = item.type === "video" && videoPlaying;

  return (
    <article className="group relative mb-4 inline-block w-full break-inside-avoid overflow-hidden border border-white/10 bg-[#0b1410] align-top">
      {item.type === "carousel" ? (
        <CarouselCard item={item} />
      ) : item.type === "video" && item.media ? (
        <video
          controls
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setVideoPlaying(true)}
          onPause={() => setVideoPlaying(false)}
          onEnded={() => setVideoPlaying(false)}
          className="block h-auto w-full bg-black"
        >
          <source src={item.media} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      ) : item.media ? (
        <img
          src={item.media}
          alt={item.title}
          className="block h-auto w-full"
        />
      ) : null}

      <div
        className={`pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-black/55 via-45% to-transparent transition-opacity duration-300 md:group-hover:opacity-0 ${
          hideOverlay ? "opacity-0" : "opacity-100"
        }`}
      />

      <div
        className={`pointer-events-none absolute left-4 top-4 z-20 transition duration-300 md:group-hover:-translate-y-2 md:group-hover:opacity-0 ${
          hideOverlay ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="border border-white/15 bg-black/70 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/70 backdrop-blur-md">
          {item.type}
        </span>
      </div>

      {item.highlight && (
        <div
          className={`pointer-events-none absolute right-4 top-4 z-20 transition duration-300 md:group-hover:-translate-y-2 md:group-hover:opacity-0 ${
            hideOverlay ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="border border-[#75968c]/50 bg-black/75 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.1em] text-[#a9c2ba] backdrop-blur-md">
            {item.highlight}
          </span>
        </div>
      )}

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 p-5 transition duration-300 md:group-hover:translate-y-4 md:group-hover:opacity-0 ${
          hideOverlay ? "translate-y-4 opacity-0" : "opacity-100"
        }`}
      >
        <h3 className="font-serif text-xl font-bold leading-tight text-white">
          {item.title}
        </h3>

        <p className="mt-3 text-xs leading-5 text-white/75">
          {item.description}
        </p>
      </div>
    </article>
  );
}

/* ========================================
   FINDER FOLDER
======================================== */

function FinderFolder({
  name,
  number,
  active,
  count,
  onClick,
}: {
  name: FolderName;
  number: string;
  active: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center gap-4 border px-4 py-4 text-left transition duration-300 ${
        active
          ? "border-[#75968c]/50 bg-[#101a16]"
          : "border-white/10 bg-[#0b1410] hover:border-white/25"
      }`}
    >
      <img
        src="/media/ui/folder-macos.webp"
        alt=""
        className={`h-14 w-14 shrink-0 object-contain transition duration-300 ${
          active ? "scale-105" : "group-hover:scale-105"
        }`}
      />

      <div className="min-w-0 flex-1">
        <span className="mb-1 block font-serif text-xs italic text-white/25">
          {number}
        </span>

        <div className="flex items-center justify-between gap-3">
          <h3
            className={`font-serif text-xl transition ${
              active ? "text-white" : "text-white/70"
            }`}
          >
            {name}
          </h3>

          <span
            className={`text-xs ${
              active ? "text-[#8eaaa1]" : "text-white/25"
            }`}
          >
            {count}
          </span>
        </div>
      </div>
    </button>
  );
}

/* ========================================
   PAGE
======================================== */

export default function EmarCaseStudy() {
  const [activeFolder, setActiveFolder] =
    useState<FolderName>("Content");

  const activeItems = folderContent[activeFolder];

  return (
    <main className="min-h-screen bg-[#08100d] text-[#e8e5dc]">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08100d]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="/"
            className="font-serif text-xl italic tracking-wide"
          >
            Antonio Lorusso
          </a>

          <a
            href="/#case-studies"
            className="text-sm text-white/50 transition hover:text-white"
          >
            ← Back to projects
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="mb-12 flex items-center gap-3 text-sm text-white/40">
          <span className="font-serif italic">00:02</span>
          <span className="h-px w-8 bg-white/20" />
          <span>Case Study</span>
        </div>

        <h1 className="font-serif text-7xl leading-[0.85] tracking-tight md:text-[9rem]">
          Emar
        </h1>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="max-w-md font-serif text-2xl leading-tight text-white/75 md:text-3xl">
              Strategy built around
              <br />
              real local behaviour.
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              Timeframe
            </p>
            <p className="text-sm text-white/65">
              2023 — Present
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              Business
            </p>
            <p className="text-sm text-white/65">
              Agricultural parts
              <br />& equipment
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              Focus
            </p>
            <p className="text-sm text-white/65">
              Website
              <br />
              Social & Brand
            </p>
          </div>
        </div>
      </section>

      {/* HERO MEDIA */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="group relative overflow-hidden border border-white/10 bg-[#0b1410]">
          <img
            src="/media/work/emar/website/website-01.jpg"
            alt="Emar Ricambi website homepage"
            className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.015]"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

          <div className="pointer-events-none absolute bottom-5 left-5 border border-white/10 bg-[#08100d]/80 px-3 py-2 text-xs text-white/50 backdrop-blur-md">
            Emar Ricambi — Digital Experience
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm text-white/30">
              01 — Overview
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Understanding the market
              <br />
              before designing the{" "}
              <span className="italic text-[#75968c]">
                communication.
              </span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/50 md:text-lg">
              <p>
                Emar Ricambi operates in a highly specialised market
                covering agricultural spare parts, equipment, irrigation,
                workshop tools and technical solutions.
              </p>

              <p>
                It was also one of the projects that required me to adapt
                the most. I entered a sector I did not already know and
                had to understand new products, customer habits and the
                relationship between the business and its local market
                before deciding how the brand should communicate.
              </p>

              <p>
                The project developed across social media, website,
                branding and offline communication, with the objective of
                making a technical business easier to understand,
                navigate and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm text-white/30">
              02 — The Challenge
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              One business.
              <br />
              Very different levels of{" "}
              <span className="italic text-[#b86f45]">
                knowledge.
              </span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/50 md:text-lg">
              <p>
                Emar serves customers with very different levels of
                experience: from people who already know exactly which
                part or tool they need to younger or less experienced
                customers approaching DIY, maintenance or agricultural
                products for the first time.
              </p>

              <p>
                This meant that simply displaying products was not enough.
                The communication had to explain what products were for,
                when they were useful and how to choose between different
                solutions.
              </p>

              <p className="font-serif text-2xl leading-relaxed text-white/75 md:text-3xl">
                The goal was to make expertise accessible without
                oversimplifying the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGY */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                03 — The Strategy
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                Local relevance,
                <br />
                practical education and{" "}
                <span className="italic text-[#75968c]">
                  conscious choice.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                The communication strategy was built around helping
                customers understand what they actually needed, while
                connecting products with local habits, agricultural
                seasonality and real use cases.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10">
            {strategyItems.map((item) => (
              <div
                key={item.number}
                className="grid gap-6 border-b border-white/10 py-9 md:grid-cols-[0.2fr_0.65fr_1.15fr] md:gap-10"
              >
                <span className="font-serif text-lg italic text-white/20">
                  {item.number}
                </span>

                <h3 className="font-serif text-2xl leading-tight text-white/80 md:text-3xl">
                  {item.title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-white/45">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                04 — My Role
              </p>
            </div>

            <div>
              <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                From research
                <br />
                to the final{" "}
                <span className="italic text-[#75968c]">
                  customer experience.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                I managed the project across both strategy and execution,
                connecting market research, social communication,
                website UX and visual identity around the same customer
                understanding.
              </p>
            </div>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {roleItems.map((item) => (
              <article
                key={item.number}
                className="min-h-[250px] border-b border-r border-white/10 p-7 md:p-9"
              >
                <span className="font-serif text-sm italic text-[#75968c]">
                  {item.number}
                </span>

                <h3 className="mt-8 font-serif text-3xl leading-tight text-white/85">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK ARCHIVE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                05 — Work Archive
              </p>
            </div>

            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Different formats.
                <br />
                One{" "}
                <span className="italic text-[#75968c]">
                  communication system.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/45">
                Educational content, product communication, local
                awareness and website UX were designed to work together,
                making technical information easier to access across
                different customer touchpoints.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <div className="space-y-3">
              {folders.map((folder) => (
                <FinderFolder
                  key={folder.name}
                  name={folder.name}
                  number={folder.number}
                  active={activeFolder === folder.name}
                  count={folderContent[folder.name].length}
                  onClick={() =>
                    setActiveFolder(folder.name)
                  }
                />
              ))}
            </div>

            <div className="min-w-0 border border-white/10 bg-[#09110e]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-3">
                  <img
                    src="/media/ui/folder-macos.webp"
                    alt=""
                    className="h-10 w-10 object-contain"
                  />

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">
                      Open folder
                    </p>

                    <h3 className="font-serif text-2xl">
                      {activeFolder}
                    </h3>
                  </div>
                </div>

                <span className="text-xs text-white/30">
                  {activeItems.length}{" "}
                  {activeItems.length === 1
                    ? "item"
                    : "items"}
                </span>
              </div>

              <div
                key={activeFolder}
                className="p-4 md:p-5"
              >
                {activeFolder === "Website" ? (
                  <div className="w-full">
                    <div className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden border border-white/10 bg-[#050907] md:min-h-[640px]">
                      <WebsiteCarousel item={emarWebsite} />
                    </div>

                    <div className="border-x border-b border-white/10 bg-[#0b1410] p-6">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#75968c]">
                        Website / UX
                      </p>

                      <h3 className="mt-3 font-serif text-3xl text-white">
                        Assisted Commerce Experience
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                        A product-led website designed around Emar&apos;s
                        real buying behaviour, combining e-commerce-style
                        product discovery with direct WhatsApp assistance
                        for customers who need technical guidance before
                        purchasing.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="columns-1 gap-4 md:columns-2">
                    {activeItems.map((item) => (
                      <MediaCard
                        key={item.id}
                        item={item}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSISTED COMMERCE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                06 — Assisted Commerce
              </p>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#b86f45]">
                Website / Customer Journey
              </p>

              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                Design the journey around
                <br />
                how customers{" "}
                <span className="italic text-[#75968c]">
                  actually buy.
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
                Many Emar customers want to understand which solution is
                best for their specific use case before making a final
                decision. The website was therefore designed to support
                both independent exploration and direct consultation.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Explore",
                text: "Clear categories allow customers to quickly understand where to start.",
              },
              {
                number: "02",
                title: "Understand",
                text: "Products, technical information and practical guidance help reduce uncertainty.",
              },
              {
                number: "03",
                title: "Evaluate",
                text: "Customers can independently narrow down the solutions that fit their needs.",
              },
              {
                number: "04",
                title: "Ask",
                text: "When additional expertise is needed, WhatsApp turns consultation into a natural part of the conversion journey.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="min-h-[260px] border-b border-r border-white/10 p-7"
              >
                <span className="font-serif text-sm italic text-[#75968c]">
                  {step.number}
                </span>

                <h3 className="mt-8 font-serif text-3xl text-white/80">
                  {step.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/40">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <div className="overflow-hidden border border-white/10 bg-[#0b1410]">
              <img
                src="/media/work/emar/website/website-02.png"
                alt="Emar website category navigation"
                className="block h-auto w-full"
              />
            </div>

            <div className="overflow-hidden border border-white/10 bg-[#0b1410]">
              <img
                src="/media/work/emar/website/website-04.png"
                alt="Emar WhatsApp assisted conversion"
                className="block h-auto w-full"
              />
            </div>
          </div>

          <div className="mt-4 border border-[#75968c]/25 bg-[#0b1410] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[0.4fr_1fr]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#75968c]">
                The principle
              </p>

              <p className="max-w-3xl font-serif text-3xl leading-relaxed text-white/75 md:text-4xl">
                Rather than forcing customers into a conventional
                checkout,
                <br />
                <span className="italic text-[#75968c]">
                  I designed the conversion journey around how they
                  actually buy.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                07 — Stack
              </p>
            </div>

            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Tools supporting the{" "}
                <span className="italic text-[#75968c]">
                  project.
                </span>
              </h2>
            </div>
          </div>

          <div className="border-t border-white/10">
            {stackGroups.map((group) => (
              <div
                key={group.title}
                className="grid gap-6 border-b border-white/10 py-7 md:grid-cols-[0.7fr_1.3fr] md:items-start"
              >
                <h3 className="font-serif text-xl text-white/60">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="border border-white/10 px-4 py-2.5 text-sm text-white/50 transition hover:border-[#75968c]/50 hover:text-white/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="mb-6 text-sm text-white/30">
            Next case study
          </p>

          <a
            href="/case-studies/focus-ottica"
            className="group inline-block"
          >
            <h2 className="font-serif text-6xl italic leading-[0.95] transition group-hover:text-[#75968c] md:text-8xl">
              Focus Ottica
              <br />→
            </h2>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-white/30 md:flex-row md:items-center md:justify-between">
          <span>Antonio Lorusso © 2026</span>

          <a
            href="/"
            className="transition hover:text-white"
          >
            Back home ↑
          </a>
        </div>
      </footer>
    </main>
  );
}