import WorkGallery from "./components/WorkGallery";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08100d] text-[#e8e5dc]">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08100d]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#" className="font-serif text-xl italic tracking-wide">
            Antonio Lorusso
          </a>

          <nav className="hidden gap-8 text-sm text-white/55 md:flex">
            <a href="#work" className="transition hover:text-white">
              Work
            </a>

            <a href="#case-studies" className="transition hover:text-white">
              Case Studies
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="/cv/antonio-lorusso-cv.pdf"
            download
            className="portfolio-button border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
          >
            Download CV
          </a>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="mx-auto flex min-h-[82vh] max-w-6xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <div className="hero-label mb-8 flex items-center gap-3 text-sm text-white/50">
            <span className="h-2 w-2 rounded-full bg-[#b86f45]" />
            <span>Digital Marketing & E-commerce Specialist</span>
          </div>

          <h1 className="hero-title max-w-5xl font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
            Growth built frame
            <br />
            by <span className="italic text-[#75968c]">frame</span>, not by luck.
          </h1>

          <p className="hero-description mt-8 max-w-2xl text-lg leading-8 text-white/55">
            I build digital growth through content, e-commerce and CRM —
            systems designed to keep working after launch.
          </p>

          <div className="hero-actions mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              style={{
                backgroundColor: "#e8e5dc",
                color: "#08100d",
              }}
              className="portfolio-button px-6 py-3 text-sm font-medium transition hover:opacity-85"
            >
              View my work
            </a>

            <a
              href="#contact"
              className="portfolio-button border border-white/15 px-6 py-3 text-sm text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Contact me
            </a>
          </div>

          <div className="hero-meta mt-14 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/35">
            <span>Dublin, Ireland — relocating from Italy</span>

            <span className="text-[#b86f45]">
              EU citizen · no sponsorship required
            </span>
          </div>
        </div>
      </section>

      {/* ================= NUMBERS ================= */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <ScrollReveal>
            <div className="mb-14">
              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                Numbers, not
                <br />
                adjectives.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid border border-white/10 md:grid-cols-4">
            <ScrollReveal delay={0}>
              <div className="h-full border-b border-white/10 p-8 md:border-b-0 md:border-r">
                <div className="font-serif text-5xl">+75%</div>

                <p className="mt-4 text-sm text-white/45">
                  Organic sales growth
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="h-full border-b border-white/10 p-8 md:border-b-0 md:border-r">
                <div className="font-serif text-5xl">+50%</div>

                <p className="mt-4 text-sm text-white/45">
                  Repeat purchase rate
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <div className="h-full border-b border-white/10 p-8 md:border-b-0 md:border-r">
                <div className="font-serif text-5xl">+22%</div>

                <p className="mt-4 text-sm text-white/45">
                  Email-attributed revenue
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="h-full p-8">
                <div className="font-serif text-5xl">650</div>

                <p className="mt-4 text-sm text-white/45">
                  Subscribers in 30 days
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section id="case-studies" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <ScrollReveal>
            <div className="mb-14 flex items-end justify-between gap-8">
              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                Brands I&apos;ve built,
                <br />
                scaled and rewritten.
              </h2>

              <p className="hidden font-serif text-lg italic text-white/35 md:block">
                Selected case studies
              </p>
            </div>
          </ScrollReveal>

          <div className="border-t border-white/10">
            {/* G3M */}
            <ScrollReveal delay={0}>
              <a
                href="/case-studies/g3m"
                className="group case-row grid gap-4 border-b border-white/10 py-8 transition md:grid-cols-[90px_1fr_1.4fr_auto] md:items-center"
              >
                <span className="font-serif italic text-white/35">
                  00:01
                </span>

                <span className="font-serif text-3xl transition group-hover:translate-x-1">
                  G3M
                </span>

                <span className="text-sm text-white/50">
                  Growth, e-commerce & retention
                </span>

                <span className="text-sm text-[#75968c] transition group-hover:translate-x-1">
                  View project →
                </span>
              </a>
            </ScrollReveal>

            {/* EMAR */}
            <ScrollReveal delay={80}>
              <a
                href="/case-studies/emar"
                className="group case-row grid gap-4 border-b border-white/10 py-8 transition md:grid-cols-[90px_1fr_1.4fr_auto] md:items-center"
              >
                <span className="font-serif italic text-white/35">
                  00:02
                </span>

                <span className="font-serif text-3xl transition group-hover:translate-x-1">
                  Emar
                </span>

                <span className="text-sm text-white/50">
                  Building digital from scratch
                </span>

                <span className="text-sm text-[#75968c] transition group-hover:translate-x-1">
                  View project →
                </span>
              </a>
            </ScrollReveal>

            {/* FOCUS OTTICA */}
            <ScrollReveal delay={160}>
              <a
                href="/case-studies/focus-ottica"
                className="group case-row grid gap-4 border-b border-white/10 py-8 transition md:grid-cols-[90px_1fr_1.4fr_auto] md:items-center"
              >
                <span className="font-serif italic text-white/35">
                  00:03
                </span>

                <span className="font-serif text-3xl transition group-hover:translate-x-1">
                  Focus Ottica
                </span>

                <span className="text-sm text-white/50">
                  Positioning, brand identity & launch
                </span>

                <span className="text-sm text-[#75968c] transition group-hover:translate-x-1">
                  View project →
                </span>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

        {/* ================= SELECTED WORK ================= */}
      <section id="work" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <ScrollReveal>
            <div className="mb-14">
              <p className="mb-5 text-sm text-white/35">
                Selected Work
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                Strategy is better
                <br />
                when you can{" "}
                <span className="italic text-[#75968c]">
                  see it.
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <WorkGallery />
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-28 md:grid-cols-2 md:items-center">
          {/* PORTRAIT */}
          <ScrollReveal>
            <div className="group relative min-h-[560px] overflow-hidden border border-white/10 bg-[#0b1410] md:min-h-[680px]">
              <img
                src="/media/about/antonio-lorusso.jpg"
                alt="Antonio Lorusso"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-[1.02]"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08100d]/65 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                    Digital Marketing
                  </p>

                  <p className="mt-2 font-serif text-2xl text-white">
                    Antonio Lorusso
                  </p>
                </div>

                <span className="font-serif text-sm italic text-white/40">
                  Strategy × Execution
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* ABOUT COPY */}
          <ScrollReveal delay={120}>
            <div>
              <p className="mb-5 text-sm text-white/35">
                About
              </p>

              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                A strategist who
                <br />
                <span className="italic text-[#75968c]">
                  executes.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-white/50">
                I work across content, digital marketing, e-commerce and CRM,
                combining strategy with hands-on execution.
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-white/50">
                From positioning and content systems to customer journeys,
                email flows and e-commerce optimisation, I build systems
                designed to produce measurable growth.
              </p>

              <div className="mt-10 border-l border-[#75968c]/50 pl-6">
                <p className="font-serif text-xl italic leading-8 text-[#a9c2ba]">
                  “I treat every project like it&apos;s my own brand.”
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Strategy",
                  "Content",
                  "E-commerce",
                  "CRM",
                  "Brand Positioning",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 px-4 py-2 text-xs text-white/45"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <ScrollReveal>
            <h2 className="font-serif text-6xl italic leading-tight md:text-8xl">
              Let&apos;s work
              <br />
              together.
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid gap-4 md:max-w-3xl md:grid-cols-2">
            <ScrollReveal delay={80}>
              <a
                href="mailto:antoniolorusso.work@outlook.com"
                className="work-card block h-full border border-white/10 p-6 transition hover:border-white/30"
              >
                <div className="text-sm text-white/35">
                  Email
                </div>

                <div className="mt-3 break-all text-lg">
                  antoniolorusso.work@outlook.com
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <a
                href="https://www.linkedin.com/in/antonio-lorusso-3b96a9279/"
                target="_blank"
                rel="noreferrer"
                className="work-card block h-full border border-white/10 p-6 transition hover:border-white/30"
              >
                <div className="text-sm text-white/35">
                  LinkedIn
                </div>

                <div className="mt-3 text-lg">
                  linkedin.com/in/antonio-lorusso
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-white/30 md:flex-row md:items-center md:justify-between">
          <span>Antonio Lorusso © 2026</span>
          <span>Dublin, Ireland</span>
        </div>
      </footer>
    </main>
  );
}