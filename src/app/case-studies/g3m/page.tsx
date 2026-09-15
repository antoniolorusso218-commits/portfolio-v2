"use client";

import { useState } from "react";

type FolderName =
  | "Content"
  | "Social"
  | "Ads"
  | "E-commerce"
  | "Email"
  | "Video"
  | "Carousel";

type MediaItem = {
  id: string;
  title: string;
  description: string;
  type: "image" | "video" | "carousel" | "stacked";
  media?: string;
  slides?: string[];
  mediaParts?: string[];
  highlight?: string;
};

const folders: {
  name: FolderName;
  number: string;
}[] = [
  { name: "Content", number: "01" },
  { name: "Social", number: "02" },
  { name: "Ads", number: "03" },
  { name: "E-commerce", number: "04" },
  { name: "Email", number: "05" },
  { name: "Video", number: "06" },
  { name: "Carousel", number: "07" },
];

/* ========================================
   CONTENT / SOCIAL / ADS
======================================== */

const work01: MediaItem = {
  id: "work-01",
  title: "Made in Italy Campaign",
  description:
    "Paid social creative highlighting 100% cotton T-shirts made entirely in Italy.",
  type: "image",
  media: "/media/work/g3m/work-01.webp",
};

const work02: MediaItem = {
  id: "work-02",
  title: "Things We Learn Too Late",
  description:
    "Editorial social carousel connecting self-care, personal identity and conscious clothing through brand storytelling.",
  type: "carousel",
  slides: [
    "/media/work/g3m/carosello-1.webp",
    "/media/work/g3m/carosello-2.webp",
    "/media/work/g3m/carosello-3.webp",
    "/media/work/g3m/carosello-4.webp",
    "/media/work/g3m/carosello-5.webp",
    "/media/work/g3m/carosello-6.webp",
    "/media/work/g3m/carosello-7.webp",
  ],
};

const work03: MediaItem = {
  id: "work-03",
  title: "2 T-Shirts for €60",
  description:
    "Organic Reel communicating G3M's 2-for-€60 offer while reinforcing the 100% cotton and Made in Italy product value.",
  type: "video",
  media: "/media/work/g3m/work-03.mp4",
};

const work04: MediaItem = {
  id: "work-04",
  title: "Sale Campaign",
  description:
    "Promotional video created to communicate the seasonal sale through a direct, product-led social format.",
  type: "video",
  media: "/media/work/g3m/work-04.mp4",
};

const work05: MediaItem = {
  id: "work-05",
  title: 'La "V" di Venerdì',
  description:
    "Organic social carousel built around relatable content to encourage shares, comments and saves.",
  type: "carousel",
  slides: [
    "/media/work/g3m/carosello-05-1.jpg",
    "/media/work/g3m/carosello-05-2.jpg",
    "/media/work/g3m/carosello-05-3.jpg",
    "/media/work/g3m/carosello-05-4.jpg",
    "/media/work/g3m/carosello-05-5.jpg",
    "/media/work/g3m/carosello-05-6.jpg",
  ],
};

const work06: MediaItem = {
  id: "work-06",
  title: "Remarketing — Price Drop",
  description:
    "Remarketing creative communicating the discount and gift price thresholds through a direct price-drop hook.",
  type: "image",
  media: "/media/work/g3m/work-06.webp",
};

const work07: MediaItem = {
  id: "work-07",
  title: "Cold Audience — Problem / Solution",
  description:
    "Prospecting creative designed for cold audiences, turning common category pain points into clear product benefits and closing with social proof.",
  type: "image",
  media: "/media/work/g3m/work-07.webp",
};

const work08: MediaItem = {
  id: "work-08",
  title: "Warm Audience — Conversion Ad",
  description:
    "Conversion-focused creative for warm audiences, combining product visibility, gender-based messaging and a clear 20% discount with a direct CTA.",
  type: "image",
  media: "/media/work/g3m/work-08.webp",
};

const work09: MediaItem = {
  id: "work-09",
  title: "Zodiac Content Series",
  description:
    "A repeatable organic content format matching zodiac signs with G3M T-shirt phrases. After validating the angle, the series consistently generated +65% views and interactions per post.",
  type: "carousel",
  highlight: "+65% views & interactions",
  slides: [
    "/media/work/g3m/carosello-09-1.webp",
    "/media/work/g3m/carosello-09-2.webp",
    "/media/work/g3m/carosello-09-3.webp",
    "/media/work/g3m/carosello-09-4.webp",
    "/media/work/g3m/carosello-09-5.webp",
    "/media/work/g3m/carosello-09-6.webp",
    "/media/work/g3m/carosello-09-7.webp",
    "/media/work/g3m/carosello-09-8.webp",
  ],
};

const work10: MediaItem = {
  id: "work-10",
  title: "3 Reasons to Choose Ranpollo",
  description:
    "Warm-audience Reel built around three reasons to choose Ranpollo, reinforcing Made in Italy quality and T-shirts designed to express your mood.",
  type: "video",
  media: "/media/work/g3m/work-10.mp4",
};

/* ========================================
   E-COMMERCE
======================================== */

const ecommerce01: MediaItem = {
  id: "ecommerce-01",
  title: "E-commerce Homepage",
  description:
    "Homepage designed and built end-to-end, from e-commerce structure and navigation to visual direction and AI-generated product model mockups.",
  type: "image",
  media: "/media/work/g3m/website-01.jpg",
};

const ecommerce02: MediaItem = {
  id: "ecommerce-02",
  title: "Homepage Category Selector",
  description:
    "Interactive homepage selection module designed to guide users toward key product categories and improve product discovery through visual navigation.",
  type: "image",
  media: "/media/work/g3m/website-02.jpg",
};

const ecommerce03: MediaItem = {
  id: "ecommerce-03",
  title: "E-commerce Collection Page",
  description:
    "Collection page designed and built to support product discovery, combining filtering, sorting, colour variants and a consistent product grid with AI-generated model imagery.",
  type: "image",
  media: "/media/work/g3m/website-03.jpg",
};

const ecommerce04: MediaItem = {
  id: "ecommerce-04",
  title: "Product Detail Page",
  description:
    "Product page designed and built around conversion, combining product imagery, social proof, flexible payment options, variant selection and a clear purchase flow.",
  type: "image",
  media: "/media/work/g3m/website-04.jpg",
};

/* ========================================
   EMAIL
======================================== */

const email01: MediaItem = {
  id: "email-01",
  title: "Curvy Segment — Brand Positioning",
  description:
    "Segmented email targeting customers with a history of curvy-size purchases, using an inclusive brand message to shift the focus from body size to self-expression before guiding readers toward the Regular and Curvy collections.",
  type: "image",
  media: "/media/work/g3m/email-01.jpg",
};

const email02: MediaItem = {
  id: "email-02",
  title: "Mother's Day — Promotional Campaign",
  description:
    "Seasonal conversion campaign built around Mother's Day, combining urgency, a time-limited incentive, gift-oriented product discovery and social proof to guide customers from occasion awareness to purchase.",
  type: "image",
  media: "/media/work/g3m/email-02.jpg",
};

const email03: MediaItem = {
  id: "email-03",
  title: "VIP Customers — Curated Selection",
  description:
    "Retention email targeting high-affinity customers with an exclusive curated product selection, using recognition, brand values and personal relevance to drive repeat purchase without relying on discounts.",
  type: "image",
  media: "/media/work/g3m/email-03.jpg",
};

const email04: MediaItem = {
  id: "email-04",
  title: "Summer 2026 — Early Access",
  description:
    "Subscriber-exclusive launch campaign giving early access to the Summer 2026 collection, combining exclusivity, a dedicated presale incentive and category-led product discovery to drive first-wave sales.",
  type: "stacked",
  mediaParts: [
    "/media/work/g3m/email-04-1.jpg",
    "/media/work/g3m/email-04-2.jpg",
  ],
};

const email05: MediaItem = {
  id: "email-05",
  title: "Beyond T-Shirts — Category Expansion",
  description:
    "Cross-selling campaign introducing accessories to existing customers, using brand storytelling and product education to expand discovery beyond T-shirts and increase the range of products considered.",
  type: "image",
  media: "/media/work/g3m/email-05.jpg",
};

/* ========================================
   FOLDER CONTENT
======================================== */

const folderContent: Record<FolderName, MediaItem[]> = {
  Content: [
    work01,
    work02,
    work03,
    work04,
    work05,
    work06,
    work07,
    work08,
    work09,
    work10,
  ],
  Social: [work01, work02, work03, work04, work05, work09],
  Ads: [work01, work06, work07, work08, work10],
  "E-commerce": [
    ecommerce01,
    ecommerce02,
    ecommerce03,
    ecommerce04,
  ],
  Email: [email01, email02, email03, email04, email05],
  Video: [work03, work04, work10],
  Carousel: [work02, work05, work09],
};

/* ========================================
   STRATEGY
======================================== */

const strategyItems = [
  {
    number: "01",
    title: "Build the brand foundation",
    description:
      "Defined buyer personas, positioning, visual identity, colour palette, typography and tone of voice to create a recognisable foundation across every customer touchpoint.",
  },
  {
    number: "02",
    title: "Connect the ecosystem",
    description:
      "Aligned organic content, paid creative, email and e-commerce around the same visual and communication principles, reducing the gap between acquisition and the experience customers encountered after the click.",
  },
  {
    number: "03",
    title: "Turn launches into journeys",
    description:
      "Rebuilt the launch process around pre-launch anticipation, using teasers, polls, community participation and subscriber incentives before moving into launch and conversion communication.",
  },
  {
    number: "04",
    title: "Let audience behaviour shape decisions",
    description:
      "Used content performance and customer response to identify repeatable patterns. Testing became a way to validate ideas before turning them into larger creative and product decisions.",
    link: true,
  },
  {
    number: "05",
    title: "Build for retention, not only acquisition",
    description:
      "Reworked CRM around segmentation and omnichannel journeys, connecting social interactions with newsletter acquisition, early access, voting mechanics, product discovery and repeat-purchase communication rather than relying exclusively on discounts.",
  },
];

/* ========================================
   ROLE
======================================== */

const roleItems = [
  {
    number: "01",
    title: "Marketing Strategy & Brand",
    description:
      "Marketing structure, buyer personas, positioning, brand direction, launch strategy and cross-channel planning.",
  },
  {
    number: "02",
    title: "Creative & Content",
    description:
      "Creative direction and hands-on production across organic social, paid media, email and e-commerce — including concepts, copy, graphic design, video scripting, recording and editing.",
  },
  {
    number: "03",
    title: "E-commerce & CRO",
    description:
      "Complete Shopify redesign covering information architecture, navigation, copy, visual system, product discovery and conversion experience, alongside AI-assisted image production integrated with Adobe Photoshop.",
  },
  {
    number: "04",
    title: "CRM & Retention",
    description:
      "Klaviyo flow restructuring, campaign strategy, segmentation and omnichannel acquisition mechanics designed to improve engagement, conversion and repeat purchase.",
  },
  {
    number: "05",
    title: "Product & Customer Insights",
    description:
      "Used behavioural and content insights to inform product decisions, including new colourways, T-shirt variants, the V-neck Curvy proposition and new collection concepts.",
    link: true,
  },
  {
    number: "06",
    title: "Team & Creative Leadership",
    description:
      "Ongoing collaboration with the paid media team to align strategy and creative production, alongside the management and direction of a dedicated email marketing resource as the marketing structure expanded.",
  },
];

/* ========================================
   STACK
======================================== */

const stackGroups = [
  {
    title: "E-commerce & Analytics",
    tools: [
      "Shopify",
      "Google Analytics",
      "Google Search Console",
      "Microsoft Clarity",
    ],
  },
  {
    title: "CRM & Marketing",
    tools: ["Klaviyo", "Meta Business Suite", "TikTok Studio"],
  },
  {
    title: "Creative",
    tools: ["Adobe Creative Suite", "Figma", "Canva", "CapCut"],
  },
  {
    title: "AI & Production",
    tools: ["Midjourney", "ChatGPT", "Claude", "Higgsfield"],
  },
  {
    title: "Collaboration & Productivity",
    tools: ["Slack", "Google Workspace", "Microsoft Office"],
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
      ) : item.type === "stacked" && item.mediaParts ? (
        <div className="w-full">
          {item.mediaParts.map((part, index) => (
            <img
              key={part}
              src={part}
              alt={`${item.title} — part ${index + 1}`}
              className="block h-auto w-full"
            />
          ))}
        </div>
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
          {item.type === "stacked" ? "email" : item.type}
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

export default function G3MCaseStudy() {
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
          <span className="font-serif italic">00:01</span>
          <span className="h-px w-8 bg-white/20" />
          <span>Case Study</span>
        </div>

        <h1 className="font-serif text-7xl leading-[0.85] tracking-tight md:text-[9rem]">
          G3M
        </h1>

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <p className="max-w-md font-serif text-2xl leading-tight text-white/75 md:text-3xl">
              Growth, e-commerce
              <br />
              & retention.
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              Timeframe
            </p>
            <p className="text-sm text-white/65">
              2024 — Present
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              Brand
            </p>
            <p className="text-sm text-white/65">
              Ranpollo
              <br />
              Women&apos;s Fashion
            </p>
          </div>

          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/25">
              Role
            </p>
            <p className="text-sm text-white/65">
              Digital Marketing
              <br />
              & E-commerce
            </p>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="group relative overflow-hidden border border-white/10 bg-[#0b1410]">
          <img
            src="/media/g3m/g3m-homepage.webp"
            alt="Ranpollo e-commerce homepage"
            className="block h-auto w-full transition duration-700 ease-out group-hover:scale-[1.015]"
          />

          <div className="pointer-events-none absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

          <div className="pointer-events-none absolute bottom-5 left-5 border border-white/10 bg-[#08100d]/80 px-3 py-2 text-xs text-white/50 backdrop-blur-md">
            G3M — Ranpollo
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
              From fragmented marketing to one{" "}
              <span className="italic text-[#75968c]">
                connected growth system.
              </span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/50 md:text-lg">
              <p>
                G3M is the company behind Ranpollo, an Italian
                women&apos;s fashion e-commerce brand built around
                expressive apparel and a strong Made in Italy identity.
              </p>

              <p>
                I joined at a stage where the brand had product potential
                but lacked a consistent marketing structure. Social
                visibility was limited, communication across channels was
                fragmented, CRM performance was weak and the e-commerce
                experience needed to be rebuilt around a clearer brand
                and customer journey.
              </p>

              <p>
                My role evolved from hands-on execution into shaping and
                coordinating the broader marketing ecosystem — connecting
                brand, content, e-commerce, CRM, paid media and product
                development around one consistent growth strategy.
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
              The problem wasn&apos;t one channel.
              <br />
              It was the lack of a{" "}
              <span className="italic text-[#b86f45]">
                system.
              </span>
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/50 md:text-lg">
              <p>
                Ranpollo&apos;s marketing activities existed, but they
                were not yet working as one ecosystem. Social accounts
                were suffering from limited visibility following previous
                practices, the brand lacked a defined visual and verbal
                identity, content production had no consistent process,
                email performance was weak and the Shopify experience was
                not structured around SEO, discovery and conversion.
              </p>

              <p>
                Product launches also lacked a coordinated communication
                framework, making it difficult to build anticipation
                before a release and maintain momentum afterwards.
              </p>

              <p className="font-serif text-2xl leading-relaxed text-white/75 md:text-3xl">
                The challenge was bigger than improving individual
                channels: it was about creating the foundations for a
                marketing operation that could become consistent,
                measurable and scalable.
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
                Build the foundation.
                <br />
                Then{" "}
                <span className="italic text-[#75968c]">
                  connect the dots.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                Instead of treating social, CRM, paid media and
                e-commerce as separate activities, I structured the
                strategy around a shared understanding of the customer
                and a consistent brand experience.
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

                <div>
                  <p className="max-w-xl text-sm leading-7 text-white/45">
                    {item.description}
                  </p>

                  {item.link && (
                    <a
                      href="#zodiac-deep-dive"
                      className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#75968c] transition hover:text-white"
                    >
                      Go to section 08
                      <span>→</span>
                      Zodiac Deep Dive
                    </a>
                  )}
                </div>
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
                Strategy when needed.
                <br />
                Execution when required.
                <br />
                <span className="italic text-[#75968c]">
                  Leadership throughout.
                </span>
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45">
                My responsibility has spanned both strategic direction
                and hands-on execution, while progressively coordinating
                people and specialist teams around a shared marketing
                vision.
              </p>
            </div>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {roleItems.map((item) => (
              <article
                key={item.number}
                className="min-h-[260px] border-b border-r border-white/10 p-7 md:p-9"
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

                {item.link && (
                  <a
                    href="#zodiac-deep-dive"
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#75968c] transition hover:text-white"
                  >
                    Explore section 08
                    <span>→</span>
                  </a>
                )}
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
                Strategy turned into{" "}
                <span className="italic text-[#75968c]">
                  execution.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/45">
                From organic content and paid creative to CRM and the
                e-commerce experience, the archive shows how the same
                strategic direction was translated across different
                customer touchpoints.
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
                <div className="columns-1 gap-4 md:columns-2">
                  {activeItems.map((item) => (
                    <MediaCard
                      key={item.id}
                      item={item}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm text-white/30">
                06 — Results
              </p>
            </div>

            <div>
              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                A stronger brand.
                <br />
                <span className="italic text-[#75968c]">
                  Measurable momentum.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/45">
                As the brand, content, CRM and e-commerce experience
                became more coordinated, improvements started appearing
                across both acquisition and retention.
              </p>
            </div>
          </div>

          <div className="grid border-l border-t border-white/10 md:grid-cols-3">
            <article className="border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                Social visibility
              </p>

              <div className="mt-8 font-serif text-6xl md:text-7xl">
                ~15K
              </div>

              <h3 className="mt-5 font-serif text-xl text-white/75">
                Average views per post
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                Up from an initial baseline of roughly 100–200 views
                across social content.
              </p>
            </article>

            <article className="border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                Conversion
              </p>

              <div className="mt-8 font-serif text-6xl md:text-7xl">
                +50%
              </div>

              <h3 className="mt-5 font-serif text-xl text-white/75">
                Conversions
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                Growth as the brand, communication and e-commerce
                experience became more consistent across the customer
                journey.
              </p>
            </article>

            <article className="border-b border-r border-white/10 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                Retention
              </p>

              <div className="mt-8 font-serif text-6xl md:text-7xl">
                +70%
              </div>

              <h3 className="mt-5 font-serif text-xl text-white/75">
                Repeat purchases
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/40">
                Increase in repeat purchases from existing customers
                through email marketing and retention-focused
                communication.
              </p>
            </article>
          </div>

          <div className="mt-4 border border-white/10 p-8 md:flex md:items-center md:justify-between md:gap-12 md:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#75968c]">
                Beyond the metrics
              </p>

              <h3 className="mt-4 font-serif text-3xl text-white/80">
                From isolated channels to one brand ecosystem.
              </h3>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 md:mt-0">
              Organic, paid, CRM and e-commerce now share a clearer visual
              and communication framework, creating a more recognisable
              customer experience and a stronger foundation for continued
              growth.
            </p>
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
                  system.
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

      {/* ZODIAC DEEP DIVE */}
      <section
        id="zodiac-deep-dive"
        className="scroll-mt-24 border-t border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-white/30">
                08 — Deep Dive
              </p>
            </div>

            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#b86f45]">
                Zodiac Capsule / From Insight to Product
              </p>

              <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
                When content data becomes a{" "}
                <span className="italic text-[#75968c]">
                  product decision.
                </span>
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/50">
                Organic content became a testing ground for understanding
                what genuinely resonated with the Ranpollo audience. One
                recurring signal stood out: content built around zodiac
                signs consistently generated stronger reactions.
              </p>
            </div>
          </div>

          {/* PROCESS */}
          <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-5">
            {[
              {
                number: "01",
                label: "Signal",
                text: "Audience behaviour revealed a recurring interest in zodiac-led identity content.",
              },
              {
                number: "02",
                label: "Test",
                text: "The concept was explored for four months across different formats and communication angles.",
              },
              {
                number: "03",
                label: "Validate",
                text: "A repeatable creative format consistently generated stronger views and interactions.",
              },
              {
                number: "04",
                label: "Translate",
                text: "The content signal became evidence of a broader product opportunity.",
              },
              {
                number: "05",
                label: "Build",
                text: "The validated insight was turned into a dedicated Zodiac Capsule collection.",
              },
            ].map((step) => (
              <article
                key={step.number}
                className="min-h-[280px] border-b border-r border-white/10 p-6"
              >
                <span className="font-serif text-sm italic text-[#75968c]">
                  {step.number}
                </span>

                <h3 className="mt-8 font-serif text-2xl text-white/80">
                  {step.label}
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/40">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          {/* METRIC + STORY */}
          <div className="mt-4 grid border border-white/10 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                Validated content signal
              </p>

              <div className="mt-8 font-serif text-6xl text-[#e8e5dc] md:text-8xl">
                +65%
              </div>

              <p className="mt-5 font-serif text-2xl text-white/70">
                Views & interactions
              </p>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                The validated zodiac format maintained stronger
                performance across subsequent posts using the same
                communication angle.
              </p>
            </div>

            <div className="p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-[#75968c]">
                The decision
              </p>

              <h3 className="mt-6 max-w-2xl font-serif text-3xl leading-tight text-white/85 md:text-4xl">
                Instead of stopping at a successful content format, the
                insight was brought into the product.
              </h3>

              <div className="mt-8 max-w-2xl space-y-5 text-sm leading-7 text-white/45">
                <p>
                  After four months of testing different approaches, the
                  consistency of the response suggested that zodiac signs
                  were more than a temporary content trend for this
                  audience.
                </p>

                <p>
                  The validated theme became the foundation for a
                  dedicated capsule collection, connecting audience
                  behaviour directly with product development.
                </p>

                <p>
                  I managed the process from the original marketing
                  insight through the creative direction of the
                  collection, including the development of the graphics
                  used on the T-shirts.
                </p>
              </div>
            </div>
          </div>

          {/* VISUAL EVIDENCE */}
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="group relative overflow-hidden border border-white/10 bg-[#0b1410]">
              <img
                src="/media/work/g3m/carosello-09-1.jpg"
                alt="Zodiac content testing for Ranpollo"
                className="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="pointer-events-none absolute bottom-0 left-0 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">
                  Phase 01
                </p>

                <p className="mt-2 font-serif text-2xl text-white">
                  Content as research.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "/media/work/g3m/carosello-09-2.jpg",
                "/media/work/g3m/carosello-09-3.jpg",
                "/media/work/g3m/carosello-09-4.jpg",
                "/media/work/g3m/carosello-09-5.jpg",
              ].map((image, index) => (
                <div
                  key={image}
                  className="group relative overflow-hidden border border-white/10 bg-[#0b1410]"
                >
                  <img
                    src={image}
                    alt={`Zodiac content test ${index + 2}`}
                    className="block h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* TAKEAWAY */}
          <div className="mt-4 border border-[#75968c]/25 bg-[#0b1410] p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[0.4fr_1fr]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#75968c]">
                The takeaway
              </p>

              <p className="max-w-3xl font-serif text-3xl leading-relaxed text-white/75 md:text-4xl">
                Data did not just optimise the communication.
                <br />
                <span className="italic text-[#75968c]">
                  It helped decide what to create next.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <p className="mb-6 text-sm text-white/30">
            Have a project in mind?
          </p>

          <h2 className="font-serif text-6xl italic leading-[0.95] md:text-8xl">
            Want something
            <br />
            like this?
          </h2>

          <a
            href="/#contact"
            className="portfolio-button mt-12 inline-block border border-white/15 px-6 py-3 text-sm text-white/75 transition hover:border-white/40 hover:text-white"
          >
            Let&apos;s talk →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-white/30 md:flex-row md:items-center md:justify-between">
          <span>
            Antonio Lorusso © 2026
          </span>

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