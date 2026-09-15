"use client";

import { useState } from "react";

type FolderName =
  | "Social"
  | "Video"
  | "Website"
  | "Brand Identity"
  | "Photography";

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
  { name: "Social", number: "01" },
  { name: "Video", number: "02" },
  { name: "Website", number: "03" },
  { name: "Brand Identity", number: "04" },
  { name: "Photography", number: "05" },
];

/* ========================================
   SOCIAL
======================================== */

const social01: MediaItem = {
  id: "focus-social-01",
  title: "Love at First Sight",
  description:
    "Seasonal Valentine's Day creative using a visual pun around love at first sight, connecting the occasion with eyewear while maintaining Focus Ottica's playful, fashion-oriented tone of voice.",
  type: "image",
  media: "/media/work/focus-ottica/focus-social-01.jpg",
};

const social02: MediaItem = {
  id: "focus-social-02",
  title: "Pre-Launch Teaser",
  description:
    "Pre-launch social creative designed to build anticipation before opening, introducing Focus Ottica's visual language before revealing the full retail experience.",
  type: "image",
  media: "/media/work/focus-ottica/focus-social-02.jpg",
};

const social03: MediaItem = {
  id: "focus-social-03",
  title: "Stop Looking, Start Seeing",
  description:
    "One of the brand's first social communications, created to introduce Focus Ottica as a younger, fashion-oriented eyewear boutique rather than another traditional optical store.",
  type: "image",
  media: "/media/work/focus-ottica/focus-social-03.jpg",
  highlight: "Positioning",
};

/* ========================================
   VIDEO
======================================== */

const reel01: MediaItem = {
  id: "focus-reel-01",
  title: "Brand Selection Teaser",
  description:
    "Focus Ottica's first Reel: a fast-paced montage introducing the brands that would soon be available in store, using their visual worlds to reinforce the boutique positioning before launch.",
  type: "video",
  media: "/media/work/focus-ottica/focus-reel-01.mp4",
};

const reel02: MediaItem = {
  id: "focus-reel-02",
  title: "Store Reveal",
  description:
    "Post-launch Reel revealing the physical boutique and its location, turning the identity introduced online into a real retail destination for the local audience.",
  type: "video",
  media: "/media/work/focus-ottica/focus-reel-02.mp4",
};

/* ========================================
   WEBSITE
======================================== */

const website01: MediaItem = {
  id: "focus-website-01",
  title: "Showcase Website",
  description:
    "Website experience created for Focus Ottica's launch, translating the boutique positioning and visual identity into a digital showcase consistent with the physical store.",
  type: "video",
  media: "/media/work/focus-ottica/website/focus-website-01.mp4",
  highlight: "Website / UX",
};

/* ========================================
   BRAND IDENTITY
======================================== */

const brand01: MediaItem = {
  id: "focus-brand-01",
  title: "Focus Ottica Visual Identity",
  description:
    "Logo and visual identity developed after defining the market positioning and target audience, using dark green and peach to move away from traditional optical-store aesthetics.",
  type: "image",
  media: "/media/work/focus-ottica/brand/focus-logo-01.png",
  highlight: "Brand Identity",
};

/* ========================================
   PHOTOGRAPHY
======================================== */

const photography01: MediaItem = {
  id: "focus-photography-01",
  title: "Eyewear Editorial Shooting",
  description:
    "Creative direction and production of an editorial eyewear shoot designed to present Focus products through a fashion-first visual language rather than traditional optical retail photography.",
  type: "carousel",
  highlight: "Creative Direction",
  slides: [
    "/media/work/focus-ottica/photography/focus-shoot-01.webp",
    "/media/work/focus-ottica/photography/focus-shoot-02.webp",
    "/media/work/focus-ottica/photography/focus-shoot-03.webp",
    "/media/work/focus-ottica/photography/focus-shoot-04.webp",
    "/media/work/focus-ottica/photography/focus-shoot-05.webp",
  ],
};

/* ========================================
   FOLDER CONTENT
======================================== */

const folderContent: Record<FolderName, MediaItem[]> = {
  Social: [social01, social02, social03, reel01, reel02],

  Video: [reel01, reel02],

  Website: [website01],

  "Brand Identity": [brand01],

  Photography: [photography01],
};

/* ========================================
   POSITIONING
======================================== */

const positioningSteps = [
  {
    number: "01",
    title: "Study the local market",
    description:
      "The city already had several established optical stores. Entering the market meant understanding the existing offer before deciding how Focus should compete.",
  },
  {
    number: "02",
    title: "Define who Focus was for",
    description:
      "Buyer personas helped identify a younger and increasingly style-conscious audience looking for more than a purely functional eyewear purchase.",
  },
  {
    number: "03",
    title: "Move beyond the traditional optical store",
    description:
      "Focus was positioned as an eyewear boutique: a contemporary destination built around fashion, personal style, curated products and a more distinctive retail experience.",
  },
  {
    number: "04",
    title: "Use product selection as positioning",
    description:
      "Fashion-led collections and limited collaborations helped create a product offer capable of differentiating Focus from more traditional local competitors.",
  },
  {
    number: "05",
    title: "Add personal consultation",
    description:
      "Free in-store consultations helped customers move beyond trends alone, guiding them toward frames suited to their facial features and personal style.",
  },
];

/* ========================================
   MY ROLE
======================================== */

const roleItems = [
  {
    number: "01",
    title: "Market Research",
    description:
      "Analysed the local competitive landscape and existing optical retail offer before defining the strategic direction of the new business.",
  },
  {
    number: "02",
    title: "Positioning & Buyer Personas",
    description:
      "Defined the target audience and positioned Focus as a contemporary eyewear boutique rather than a generalist optical store.",
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "Developed the logo, colour direction and visual language used across digital communication and the physical retail environment.",
  },
  {
    number: "04",
    title: "Social & Launch Strategy",
    description:
      "Planned the pre-launch communication, opening campaign and post-launch content around anticipation, brand discovery and local awareness.",
  },
  {
    number: "05",
    title: "Website",
    description:
      "Created a showcase website that extended the boutique positioning into a simple and consistent digital experience.",
  },
  {
    number: "06",
    title: "Photography & Creative Direction",
    description:
      "Organised and produced eyewear shootings designed to communicate products through a more editorial and fashion-oriented visual language.",
  },
];

/* ========================================
   STACK
======================================== */

const stackGroups = [
  {
    title: "Strategy",
    tools: [
      "Market Research",
      "Competitor Analysis",
      "Buyer Personas",
      "Brand Positioning",
    ],
  },
  {
    title: "Creative",
    tools: [
      "Brand Identity",
      "Content Production",
      "Photography",
      "Creative Direction",
    ],
  },
  {
    title: "Digital",
    tools: [
      "Social Media",
      "Website",
      "Content Strategy",
      "Launch Strategy",
    ],
  },
];

/* ========================================
   CAROUSEL
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
        alt={`${item.title} — image ${currentSlide + 1}`}
        className="block h-auto w-full"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previousSlide();
        }}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-white backdrop-blur-md transition md:h-10 md:w-10 md:opacity-0 md:group-hover/carousel:opacity-100"
      >
        ←
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          nextSlide();
        }}
        aria-label="Next image"
        className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center border border-white/20 bg-black/75 text-white backdrop-blur-md transition md:h-10 md:w-10 md:opacity-0 md:group-hover/carousel:opacity-100"
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
   MEDIA CARD
======================================== */

ffunction MediaCard({ item }: { item: MediaItem }) {
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
          <span className="border border-[#e8b6ac]/40 bg-black/75 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.1em] text-[#e8b6ac] backdrop-blur-md">
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
          ? "border-[#e8b6ac]/40 bg-[#101a16]"
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
              active ? "text-[#e8b6ac]" : "text-white/25"
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

export default function FocusOtticaCaseStudy() {
  const [activeFolder, setActiveFolder] =
    useState<FolderName>("Social");

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
          <span className="font-serif italic">00:03</span>
          <span className="h-px w-8 bg-white/20" />
          <span>Case Study</span>
        </div>

        <h1 className="font-serif text-6xl leading-[0.85] tracking-tight sm:text-7xl md:text-[8rem]">
          Focus
          <br />
          <span className="italic text-[#e8b6ac]">Ottica</span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="max-w-md font-serif text-2xl leading-tight text-white/75 md:text-3xl">
              Not another
              <br />
              optical store.
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              Project
            </p>
            <p className="text-sm text-white/65">
              Brand launch
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              Business
            </p>
            <p className="text-sm text-white/65">
              Eyewear
              <br />
              Boutique
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              Focus
            </p>
            <p className="text-sm text-white/65">
              Positioning
              <br />
              Brand & Launch
            </p>
          </div>
        </div>
      </section>

      {/* HERO BRAND */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden border border-white/10 bg-[#293526] p-8 md:min-h-[620px] md:p-16">
          <img
            src="/media/work/focus-ottica/brand/focus-logo-01.png"
            alt="Focus Ottica logo"
            className="block w-full max-w-3xl"
          />

          <div className="absolute bottom-5 left-5 border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/50 backdrop-blur-md">
            Focus Ottica — Brand Identity
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
              The market already had
              <br />
              optical stores.
              <br />
              It didn&apos;t need{" "}
              <span className="italic text-[#e8b6ac]">
                another one.
              </span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/50 md:text-lg">
              <p>
                Focus Ottica was a new local business entering a market
                where customers already had several established optical
                stores to choose from.
              </p>

              <p>
                My work started before the logo, before the website and
                before the first social post. Together with the two
                founders, I began by studying the local market and
                understanding where there was room to build something
                meaningfully different.
              </p>

              <p className="font-serif text-2xl leading-relaxed text-white/75 md:text-3xl">
                The opportunity wasn&apos;t to become an optical store
                for everyone. It was to become an eyewear destination
                for someone specific.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                02 — Positioning
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                From optical store
                <br />
                to{" "}
                <span className="italic text-[#e8b6ac]">
                  eyewear boutique.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                Market research and buyer personas became the foundation
                for a positioning built around fashion, personal style,
                curated eyewear and a younger audience.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10">
            {positioningSteps.map((item) => (
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

      {/* BRAND IDENTITY */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                03 — Brand Identity
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                Turning positioning
                <br />
                into an{" "}
                <span className="italic text-[#e8b6ac]">
                  identity.
                </span>
              </h2>

              <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/50 md:text-lg">
                <p>
                  Once the positioning and audience were defined, I
                  developed a visual direction capable of translating the
                  boutique concept across both digital communication and
                  the physical store.
                </p>

                <p>
                  Dark green became the foundation of the identity, while
                  peach introduced a warmer and more expressive accent.
                  The combination helped Focus move away from the visual
                  conventions of a traditional optical store.
                </p>
              </div>
            </div>
          </div>

          {/* COLOR SYSTEM */}
          <div className="mt-20 grid md:grid-cols-2">
            <div className="flex min-h-[340px] flex-col justify-between border border-white/10 bg-[#293526] p-8 md:min-h-[430px]">
              <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                Primary
              </span>

              <div>
                <p className="font-serif text-4xl text-[#e8b6ac]">
                  Dark Green
                </p>
                <p className="mt-2 text-sm text-white/35">
                  Boutique / Depth / Identity
                </p>
              </div>
            </div>

            <div className="flex min-h-[340px] flex-col justify-between border border-white/10 bg-[#e8b6ac] p-8 text-[#293526] md:min-h-[430px]">
              <span className="text-xs uppercase tracking-[0.18em] opacity-50">
                Accent
              </span>

              <div>
                <p className="font-serif text-4xl">
                  Peach
                </p>
                <p className="mt-2 text-sm opacity-50">
                  Warmth / Fashion / Expression
                </p>
              </div>
            </div>
          </div>

          <div className="border-x border-b border-white/10 bg-[#293526] p-8 md:p-14">
            <img
              src="/media/work/focus-ottica/brand/focus-logo-01.png"
              alt="Focus Ottica visual identity"
              className="mx-auto block w-full max-w-3xl"
            />
          </div>
        </div>
      </section>

      {/* LAUNCH */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                04 — Launch Strategy
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                Opening the brand
                <br />
                before opening{" "}
                <span className="italic text-[#e8b6ac]">
                  the doors.
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/45">
                The launch communication was designed as a sequence.
                Instead of immediately revealing everything, the social
                presence gradually introduced Focus&apos;s attitude,
                visual identity and brand selection before showing the
                physical boutique.
              </p>
            </div>
          </div>

          <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Position",
                text: "Introduce the attitude and visual language before focusing on individual products.",
              },
              {
                number: "02",
                title: "Tease",
                text: "Build curiosity around the opening without immediately revealing the complete store experience.",
              },
              {
                number: "03",
                title: "Reveal",
                text: "Use the selected brands and product universe to make the boutique positioning tangible.",
              },
              {
                number: "04",
                title: "Open",
                text: "Connect the digital anticipation with the physical boutique and turn local attention into store visits.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="min-h-[260px] border-b border-r border-white/10 p-7"
              >
                <span className="font-serif text-sm italic text-[#e8b6ac]">
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
        </div>
      </section>

      {/* LAUNCH IMPACT */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                05 — Launch Impact
              </p>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#e8b6ac]">
                Opening day
              </p>

              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                Positioning turned
                <br />
                into{" "}
                <span className="italic text-[#e8b6ac]">
                  real demand.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-3">
            <article className="min-h-[300px] border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                Pairs sold
              </p>

              <p className="mt-12 font-serif text-7xl text-[#e8b6ac] md:text-8xl">
                ~120
              </p>

              <p className="mt-5 text-sm text-white/40">
                during the inauguration
              </p>
            </article>

            <article className="min-h-[300px] border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                Available
              </p>

              <p className="mt-12 font-serif text-7xl text-white/80 md:text-8xl">
                210
              </p>

              <p className="mt-5 text-sm text-white/40">
                pairs available at launch
              </p>
            </article>

            <article className="min-h-[300px] border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                Launch sell-through
              </p>

              <p className="mt-12 font-serif text-7xl text-[#e8b6ac] md:text-8xl">
                ~57%
              </p>

              <p className="mt-5 text-sm leading-6 text-white/40">
                of available eyewear sold during the inauguration
              </p>
            </article>
          </div>

          <p className="mt-5 text-xs leading-5 text-white/25">
            Based on approximately 120 pairs sold from 210 pairs
            available during the inauguration.
          </p>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                06 — My Role
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                From market research
                <br />
                to the{" "}
                <span className="italic text-[#e8b6ac]">
                  final image.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                My role covered both strategy and execution, allowing the
                positioning defined at the beginning of the project to
                remain consistent across brand identity, social,
                website, photography and launch communication.
              </p>
            </div>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {roleItems.map((item) => (
              <article
                key={item.number}
                className="min-h-[250px] border-b border-r border-white/10 p-7 md:p-9"
              >
                <span className="font-serif text-sm italic text-[#e8b6ac]">
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
                07 — Work Archive
              </p>
            </div>

            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                One positioning.
                <br />
                Multiple{" "}
                <span className="italic text-[#e8b6ac]">
                  expressions.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/45">
                From pre-launch social communication to the website,
                identity and editorial photography, every touchpoint was
                built around the same boutique positioning.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            {/* FOLDERS */}
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

            {/* FINDER WINDOW */}
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
                {/* WEBSITE — LARGE VIDEO */}
                {activeFolder === "Website" ? (
                  <div className="w-full">
                    <div className="overflow-hidden border border-white/10 bg-black">
                      <video
                        controls
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="block h-auto w-full"
                      >
                        <source
                          src="/media/work/focus-ottica/website/focus-website-01.mp4"
                          type="video/mp4"
                        />
                        Your browser does not support HTML5 video.
                      </video>
                    </div>

                    <div className="border-x border-b border-white/10 bg-[#0b1410] p-6">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#e8b6ac]">
                        Website / Digital Experience
                      </p>

                      <h3 className="mt-3 font-serif text-3xl text-white">
                        Showcase Website
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                        Website experience created for Focus Ottica&apos;s
                        launch, translating the boutique positioning and
                        visual identity into a digital showcase consistent
                        with the physical store.
                      </p>
                    </div>
                  </div>
                ) : activeFolder === "Brand Identity" ? (
                  /* BRAND — LARGE PRESENTATION */
                  <div className="w-full">
                    <div className="flex min-h-[500px] items-center justify-center border border-white/10 bg-[#293526] p-8 md:p-14">
                      <img
                        src="/media/work/focus-ottica/brand/focus-logo-01.png"
                        alt="Focus Ottica logo"
                        className="block w-full max-w-2xl"
                      />
                    </div>

                    <div className="border-x border-b border-white/10 bg-[#0b1410] p-6">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#e8b6ac]">
                        Brand Identity
                      </p>

                      <h3 className="mt-3 font-serif text-3xl text-white">
                        Focus Ottica Visual Identity
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                        Logo and visual identity developed after defining
                        the market positioning and target audience,
                        translating the boutique concept into a
                        recognisable visual system.
                      </p>
                    </div>
                  </div>
                ) : activeFolder === "Photography" ? (
                  /* PHOTOGRAPHY — LARGE CAROUSEL */
                  <div className="w-full">
                    <div className="border border-white/10">
                      <CarouselCard item={photography01} />
                    </div>

                    <div className="border-x border-b border-white/10 bg-[#0b1410] p-6">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#e8b6ac]">
                        Photography / Creative Direction
                      </p>

                      <h3 className="mt-3 font-serif text-3xl text-white">
                        Eyewear Editorial Shooting
                      </h3>

                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                        Creative direction and production of an editorial
                        eyewear shoot designed to present Focus products
                        through a fashion-first visual language rather
                        than traditional optical retail photography.
                      </p>
                    </div>
                  </div>
                ) : (
                  /* SOCIAL / VIDEO */
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

      {/* PHOTOGRAPHY FEATURE */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-14 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                08 — Creative Direction
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                Eyewear as a
                <br />
                <span className="italic text-[#e8b6ac]">
                  fashion piece.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                The photography followed the same principle as the brand
                positioning: products were presented as part of personal
                style rather than simply as functional optical items.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden border border-white/10">
              <img
                src="/media/work/focus-ottica/photography/focus-shoot-01.webp"
                alt="Focus Ottica editorial eyewear shooting"
                className="block h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden border border-white/10">
              <img
                src="/media/work/focus-ottica/photography/focus-shoot-02.webp"
                alt="Focus Ottica editorial eyewear portrait"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              "focus-shoot-03.webp",
              "focus-shoot-04.webp",
              "focus-shoot-05.webp",
            ].map((image, index) => (
              <div
                key={image}
                className="aspect-square overflow-hidden border border-white/10"
              >
                <img
                  src={`/media/work/focus-ottica/photography/${image}`}
                  alt={`Focus Ottica shooting — ${index + 3}`}
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.025]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                09 — Scope
              </p>
            </div>

            <div>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Strategy through{" "}
                <span className="italic text-[#e8b6ac]">
                  execution.
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
                      className="border border-white/10 px-4 py-2.5 text-sm text-white/50 transition hover:border-[#e8b6ac]/50 hover:text-white/80"
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

      {/* CLOSING */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="max-w-4xl">
            <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[#e8b6ac]">
              The takeaway
            </p>

            <p className="font-serif text-4xl leading-tight text-white/75 md:text-6xl">
              Differentiation didn&apos;t start with a logo or an
              Instagram post.
              <br />
              <span className="italic text-[#e8b6ac]">
                It started with deciding what Focus should mean.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* BACK */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="mb-6 text-sm text-white/30">
            Back to portfolio
          </p>

          <a
            href="/"
            className="group inline-block"
          >
            <h2 className="font-serif text-6xl italic leading-[0.95] transition group-hover:text-[#e8b6ac] md:text-8xl">
              All projects
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