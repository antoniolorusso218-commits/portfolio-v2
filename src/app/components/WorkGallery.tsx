"use client";

import { useEffect, useState } from "react";

type Category =
  | "Content"
  | "Video"
  | "Social"
  | "Ads"
  | "Website"
  | "Email"
  | "E-commerce";

type WorkType = "image" | "video" | "carousel" | "email";

type WorkItem = {
  id: string;
  title: string;
  brand: string;
  description: string;
  categories: Category[];
  type: WorkType;
  media?: string;
  slides?: string[];
  emailImages?: string[];
  hideFromAll?: boolean;
  highlight?: string;
  websitePreview?: boolean;
};

const filters: Array<"All" | Category> = [
  "All",
  "Content",
  "Video",
  "Social",
  "Ads",
  "Website",
  "Email",
  "E-commerce",
];

/* ========================================
   WORKS
======================================== */

const works: WorkItem[] = [
  /* G3M */

  {
    id: "g3m-01",
    title: "Made in Italy Campaign",
    brand: "G3M / Ranpollo",
    description:
      "Paid social creative highlighting 100% cotton T-shirts made entirely in Italy.",
    categories: ["Ads", "Content", "Social"],
    type: "image",
    media: "/media/work/g3m/work-01.webp",
  },

  {
    id: "g3m-02",
    title: "Things We Learn Too Late",
    brand: "G3M / Ranpollo",
    description:
      "Editorial social carousel connecting self-care, personal identity and conscious clothing through brand storytelling.",
    categories: ["Content", "Social"],
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
  },

  {
    id: "g3m-03",
    title: "2 T-Shirts for €60",
    brand: "G3M / Ranpollo",
    description:
      "Organic Reel communicating G3M's 2-for-€60 offer while reinforcing the 100% cotton and Made in Italy product value.",
    categories: ["Video", "Content", "Social"],
    type: "video",
    media: "/media/work/g3m/work-03.mp4",
  },

  {
    id: "g3m-04",
    title: "Sale Campaign",
    brand: "G3M / Ranpollo",
    description:
      "Promotional video created to communicate the seasonal sale through a direct, product-led social format.",
    categories: ["Video", "Content", "Social"],
    type: "video",
    media: "/media/work/g3m/work-04.mp4",
  },

  {
    id: "g3m-05",
    title: 'La "V" di Venerdì',
    brand: "G3M / Ranpollo",
    description:
      "Organic social carousel built around relatable content to encourage shares, comments and saves.",
    categories: ["Content", "Social"],
    type: "carousel",
    slides: [
      "/media/work/g3m/carosello-05-1.jpg",
      "/media/work/g3m/carosello-05-2.jpg",
      "/media/work/g3m/carosello-05-3.jpg",
      "/media/work/g3m/carosello-05-4.jpg",
      "/media/work/g3m/carosello-05-5.jpg",
      "/media/work/g3m/carosello-05-6.jpg",
    ],
  },

  {
    id: "g3m-06",
    title: "Remarketing — Price Drop",
    brand: "G3M / Ranpollo",
    description:
      "Remarketing creative communicating the discount and gift price thresholds through a direct price-drop hook.",
    categories: ["Ads", "Content"],
    type: "image",
    media: "/media/work/g3m/work-06.webp",
  },

  {
    id: "g3m-07",
    title: "Cold Audience — Problem / Solution",
    brand: "G3M / Ranpollo",
    description:
      "Prospecting creative designed for cold audiences, turning common category pain points into clear product benefits and closing with social proof.",
    categories: ["Ads", "Content"],
    type: "image",
    media: "/media/work/g3m/work-07.webp",
  },

  {
    id: "g3m-08",
    title: "Warm Audience — Conversion Ad",
    brand: "G3M / Ranpollo",
    description:
      "Conversion-focused creative for warm audiences, combining product visibility and a clear promotional incentive with a direct CTA.",
    categories: ["Ads", "Content"],
    type: "image",
    media: "/media/work/g3m/work-08.webp",
  },

  {
    id: "g3m-09",
    title: "Zodiac Content Series",
    brand: "G3M / Ranpollo",
    description:
      "A repeatable organic format matching zodiac signs with G3M T-shirt phrases, consistently generating stronger audience response.",
    categories: ["Content", "Social"],
    type: "carousel",
    highlight: "+65% views & interactions",
    slides: [
      "/media/work/g3m/carosello-09-1.jpg",
      "/media/work/g3m/carosello-09-2.jpg",
      "/media/work/g3m/carosello-09-3.jpg",
      "/media/work/g3m/carosello-09-4.jpg",
      "/media/work/g3m/carosello-09-5.jpg",
      "/media/work/g3m/carosello-09-6.jpg",
      "/media/work/g3m/carosello-09-7.jpg",
      "/media/work/g3m/carosello-09-8.jpg",
    ],
  },

  {
    id: "g3m-10",
    title: "3 Reasons to Choose Ranpollo",
    brand: "G3M / Ranpollo",
    description:
      "Warm-audience Reel reinforcing Made in Italy quality and T-shirts designed to express your mood.",
    categories: ["Video", "Ads", "Content"],
    type: "video",
    media: "/media/work/g3m/work-10.mp4",
  },

  /* EMAR */

  {
    id: "emar-store-reel",
    title: "Local Store Promotion",
    brand: "Emar Ricambi",
    description:
      "Promotional Reel created to strengthen local awareness and bring the physical store closer to its audience.",
    categories: ["Video", "Social", "Content"],
    type: "video",
    media: "/media/work/emar/emarvd-2.mp4",
  },

  {
    id: "emar-carousel-01",
    title: "Workshop Essentials",
    brand: "Emar Ricambi",
    description:
      "Educational carousel helping less experienced customers understand essential workshop tools before connecting product education with a relevant Makita promotion.",
    categories: ["Content", "Social"],
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
  },

  {
    id: "emar-carousel-02",
    title: "Choosing the Right Tool",
    brand: "Emar Ricambi",
    description:
      "Educational social content simplifying the differences between workshop tools and helping customers make a more informed choice.",
    categories: ["Content", "Social"],
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
  },

  {
    id: "emar-website",
    title: "Assisted Commerce Experience",
    brand: "Emar Ricambi",
    description:
      "A product-led website combining e-commerce-style discovery with direct WhatsApp assistance for customers who need technical guidance before purchasing.",
    categories: ["Website"],
    type: "carousel",
    hideFromAll: true,
    websitePreview: true,
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
  },

  /* FOCUS OTTICA */

  {
    id: "focus-positioning",
    title: "Stop Looking, Start Seeing",
    brand: "Focus Ottica",
    description:
      "Early social creative introducing Focus Ottica as a younger, fashion-oriented eyewear boutique rather than another traditional optical store.",
    categories: ["Content", "Social"],
    type: "image",
    media: "/media/work/focus-ottica/focus-social-03.jpg",
    highlight: "Positioning",
  },

  {
    id: "focus-store-reveal",
    title: "Store Reveal",
    brand: "Focus Ottica",
    description:
      "Post-launch Reel revealing the physical boutique and connecting the identity introduced online with the real Focus Ottica retail experience.",
    categories: ["Video", "Social", "Content"],
    type: "video",
    media: "/media/work/focus-ottica/focus-reel-02.mp4",
    highlight: "Launch",
  },

  {
    id: "focus-editorial-shoot",
    title: "Eyewear Editorial Shooting",
    brand: "Focus Ottica",
    description:
      "Creative direction and production of an editorial eyewear shoot presenting the product through a fashion-first visual language rather than traditional optical retail photography.",
    categories: ["Content", "Social"],
    type: "carousel",
    highlight: "Creative Direction",
    slides: [
      "/media/work/focus-ottica/photography/focus-shoot-01.webp",
      "/media/work/focus-ottica/photography/focus-shoot-02.webp",
      "/media/work/focus-ottica/photography/focus-shoot-03.webp",
      "/media/work/focus-ottica/photography/focus-shoot-04.webp",
      "/media/work/focus-ottica/photography/focus-shoot-05.webp",
    ],
  },

  /* G3M — E-COMMERCE */

  {
    id: "g3m-ecommerce-01",
    title: "E-commerce Homepage",
    brand: "G3M / Ranpollo",
    description:
      "Homepage designed and built end-to-end, from e-commerce structure and navigation to visual direction and AI-generated product model mockups.",
    categories: ["E-commerce"],
    type: "image",
    media: "/media/work/g3m/website-01.jpg",
    hideFromAll: true,
  },

  {
    id: "g3m-ecommerce-02",
    title: "Homepage Category Selector",
    brand: "G3M / Ranpollo",
    description:
      "Interactive homepage selection module designed to improve product discovery through visual navigation.",
    categories: ["E-commerce"],
    type: "image",
    media: "/media/work/g3m/website-02.jpg",
    hideFromAll: true,
  },

  {
    id: "g3m-ecommerce-03",
    title: "E-commerce Collection Page",
    brand: "G3M / Ranpollo",
    description:
      "Collection page combining filtering, sorting, colour variants and a consistent product grid with AI-generated model imagery.",
    categories: ["E-commerce"],
    type: "image",
    media: "/media/work/g3m/website-03.jpg",
    hideFromAll: true,
  },

  {
    id: "g3m-ecommerce-04",
    title: "Product Detail Page",
    brand: "G3M / Ranpollo",
    description:
      "Conversion-focused product page combining product imagery, social proof, payment options and variant selection.",
    categories: ["E-commerce"],
    type: "image",
    media: "/media/work/g3m/website-04.jpg",
    hideFromAll: true,
  },

  /* G3M — EMAIL */

  {
    id: "g3m-email-01",
    title: "Curvy Segment — Brand Positioning",
    brand: "G3M / Ranpollo",
    description:
      "Segmented email using an inclusive brand message before guiding readers toward Regular and Curvy collections.",
    categories: ["Email"],
    type: "email",
    hideFromAll: true,
    media: "/media/work/g3m/email-01.jpg",
    emailImages: ["/media/work/g3m/email-01.jpg"],
  },

  {
    id: "g3m-email-02",
    title: "Mother's Day — Promotional Campaign",
    brand: "G3M / Ranpollo",
    description:
      "Seasonal conversion campaign combining urgency, a time-limited incentive, gift-oriented discovery and social proof.",
    categories: ["Email"],
    type: "email",
    hideFromAll: true,
    media: "/media/work/g3m/email-02.jpg",
    emailImages: ["/media/work/g3m/email-02.jpg"],
  },

  {
    id: "g3m-email-03",
    title: "VIP Customers — Curated Selection",
    brand: "G3M / Ranpollo",
    description:
      "Retention email for high-affinity customers built around recognition, brand values and curated product discovery.",
    categories: ["Email"],
    type: "email",
    hideFromAll: true,
    media: "/media/work/g3m/email-03.jpg",
    emailImages: ["/media/work/g3m/email-03.jpg"],
  },

  {
    id: "g3m-email-04",
    title: "Summer 2026 — Early Access",
    brand: "G3M / Ranpollo",
    description:
      "Subscriber-exclusive launch campaign combining early access, a dedicated presale incentive and category-led product discovery.",
    categories: ["Email"],
    type: "email",
    hideFromAll: true,
    media: "/media/work/g3m/email-04-1.jpg",
    emailImages: [
      "/media/work/g3m/email-04-1.jpg",
      "/media/work/g3m/email-04-2.jpg",
    ],
  },

  {
    id: "g3m-email-05",
    title: "Beyond T-Shirts — Category Expansion",
    brand: "G3M / Ranpollo",
    description:
      "Cross-selling campaign introducing accessories and expanding product discovery beyond the core T-shirt category.",
    categories: ["Email"],
    type: "email",
    hideFromAll: true,
    media: "/media/work/g3m/email-05.jpg",
    emailImages: ["/media/work/g3m/email-05.jpg"],
  },
];

/* ========================================
   CAROUSEL
======================================== */

function CarouselMedia({ work }: { work: WorkItem }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!work.slides?.length) {
    return null;
  }

  const previous = () => {
    setCurrentSlide((current) =>
      current === 0 ? work.slides!.length - 1 : current - 1,
    );
  };

  const next = () => {
    setCurrentSlide((current) =>
      current === work.slides!.length - 1 ? 0 : current + 1,
    );
  };

  const controls = (
    <>
      <button
        type="button"
        onClick={previous}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/75 text-sm text-white backdrop-blur-md transition md:opacity-0 md:group-hover/carousel:opacity-100"
      >
        ←
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/75 text-sm text-white backdrop-blur-md transition md:opacity-0 md:group-hover/carousel:opacity-100"
      >
        →
      </button>

      <span className="absolute right-3 top-3 z-30 border border-white/15 bg-black/75 px-3 py-2 text-[10px] text-white/70 backdrop-blur-md md:opacity-0 md:transition md:group-hover/carousel:opacity-100">
        {currentSlide + 1} / {work.slides.length}
      </span>
    </>
  );

  if (work.websitePreview) {
    return (
      <div className="group/carousel relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#050907]">
        <img
          src={work.slides[currentSlide]}
          alt={`${work.title} — screen ${currentSlide + 1}`}
          className="h-full w-full object-contain"
        />

        {controls}
      </div>
    );
  }

  return (
    <div className="group/carousel relative overflow-hidden bg-black">
      <img
        src={work.slides[currentSlide]}
        alt={`${work.title} — slide ${currentSlide + 1}`}
        className="block h-auto w-full"
      />

      {controls}
    </div>
  );
}

/* ========================================
   WORK CARD
======================================== */

function WorkCard({
  work,
  onOpenEmail,
}: {
  work: WorkItem;
  onOpenEmail: (work: WorkItem) => void;
}) {
  return (
    <article className="group relative mb-4 inline-block w-full break-inside-avoid overflow-hidden border border-white/10 bg-[#0b1410] align-top">
      {work.type === "carousel" ? (
        <CarouselMedia work={work} />
      ) : work.type === "video" && work.media ? (
        <video
          controls
          muted
          loop
          playsInline
          preload="metadata"
          className="block h-auto w-full bg-black"
        >
          <source src={work.media} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      ) : work.type === "email" && work.media ? (
        <button
          type="button"
          onClick={() => onOpenEmail(work)}
          className="block w-full cursor-zoom-in bg-[#050907] text-left"
        >
          <div className="aspect-square w-full overflow-hidden">
            <img
              src={work.media}
              alt={work.title}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </button>
      ) : work.media ? (
        <img
          src={work.media}
          alt={work.title}
          className="block h-auto w-full"
        />
      ) : null}

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-black/55 via-45% to-transparent transition-opacity duration-300 md:group-hover:opacity-0" />

      <div className="pointer-events-none absolute left-4 top-4 z-20 transition duration-300 md:group-hover:-translate-y-2 md:group-hover:opacity-0">
        <span className="border border-white/15 bg-black/70 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/70 backdrop-blur-md">
          {work.type === "email" ? "Email" : work.type}
        </span>
      </div>

      {work.highlight && (
        <div className="pointer-events-none absolute right-4 top-4 z-20 transition duration-300 md:group-hover:-translate-y-2 md:group-hover:opacity-0">
          <span className="border border-[#75968c]/50 bg-black/75 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.1em] text-[#a9c2ba] backdrop-blur-md">
            {work.highlight}
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-4 transition duration-300 sm:p-5 md:group-hover:translate-y-4 md:group-hover:opacity-0">
        <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-white/40">
          {work.brand}
        </p>

        <h3 className="font-serif text-lg font-bold leading-tight text-white sm:text-xl">
          {work.title}
        </h3>

        <p className="mt-3 text-xs leading-5 text-white/75">
          {work.description}
        </p>
      </div>
    </article>
  );
}

/* ========================================
   MAIN
======================================== */

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const [openEmail, setOpenEmail] = useState<WorkItem | null>(null);

  const filteredWorks =
    activeFilter === "All"
      ? works.filter((work) => !work.hideFromAll)
      : works.filter((work) =>
          work.categories.includes(activeFilter as Category),
        );

  useEffect(() => {
    if (!openEmail) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenEmail(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [openEmail]);

  return (
    <>
      <section>
        {/* FILTERS */}
        <div className="-mx-1 mb-10 overflow-x-auto px-1 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3">
            {filters.map((filter) => {
              const active = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={active}
                  className={`shrink-0 border px-3 py-2 text-xs transition sm:border-0 sm:px-0 sm:py-0 sm:text-sm ${
                    active
                      ? "border-[#75968c]/50 bg-[#75968c]/10 text-[#e8e5dc]"
                      : "border-white/10 text-white/40 hover:text-white/70"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* GALLERY */}
        <div className="mx-auto max-w-5xl columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filteredWorks.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              onOpenEmail={setOpenEmail}
            />
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <div className="mx-auto max-w-5xl border border-white/10 py-20 text-center">
            <p className="font-serif text-2xl text-white/35">
              More work coming soon.
            </p>
          </div>
        )}
      </section>

      {/* EMAIL MODAL */}
      {openEmail && (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 px-3 py-5 backdrop-blur-md sm:px-4 sm:py-10 md:px-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setOpenEmail(null);
            }
          }}
        >
          <div className="mx-auto max-w-[680px]">
            <div className="sticky top-3 z-20 mb-3 flex justify-end sm:top-4 sm:mb-4">
              <button
                type="button"
                onClick={() => setOpenEmail(null)}
                className="flex h-11 w-11 items-center justify-center border border-white/15 bg-black/90 text-xl text-white/70 backdrop-blur-md transition hover:border-white/40 hover:text-white"
                aria-label="Close email"
              >
                ×
              </button>
            </div>

            <div className="overflow-hidden border border-white/10 bg-white">
              {openEmail.emailImages?.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${openEmail.title} — part ${index + 1}`}
                  className="block h-auto w-full"
                />
              ))}
            </div>

            <div className="border-x border-b border-white/10 bg-[#08100d] p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#75968c]">
                {openEmail.brand}
              </p>

              <h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                {openEmail.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                {openEmail.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}