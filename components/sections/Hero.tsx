import { Reveal } from "@/components/primitives/Reveal";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

const CATEGORIES = ["PDPs", "UGC", "Lifestyle Shots", "Ads", "Stories", "Street Style"];

// 8 tiles fanned in a ring around the upload zone (original: hero__carousel 0–315deg)
const RING = Array.from({ length: 8 }, (_, i) => i * 45);

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 md:pt-36">
      <div className="container-page">
        {/* headline row + markers */}
        <div className="relative flex flex-col gap-8 pt-10 md:pt-16">
          <div className="flex items-start justify-between gap-6">
            <h1 className="font-display font-medium capitalize leading-[0.92] tracking-[-0.03em] text-content-primary">
              <span className="block" style={{ fontSize: "clamp(48px, 11vw, 150px)" }}>Your</span>
              <span className="block" style={{ fontSize: "clamp(48px, 11vw, 150px)" }}>Catalog,</span>
              <span className="block text-black/35" style={{ fontSize: "clamp(48px, 11vw, 150px)" }}>Instantly</span>
              <span className="block text-black/35" style={{ fontSize: "clamp(48px, 11vw, 150px)" }}>Re-Shot.</span>
            </h1>

            <div className="hidden shrink-0 flex-col items-end gap-2 pt-3 sm:flex">
              <span className="font-mono text-[11px] font-semibold tracking-[1.4px] text-content-tertiary">
                2026
              </span>
              <span className="mt-2 flex flex-col items-end font-mono text-[10.5px] font-semibold uppercase tracking-[1.6px] text-content-tertiary">
                Scroll
                <span>Down</span>
                <svg className="mt-2" width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true">
                  <path d="M7 1v17m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* full-bleed category marquee row */}
      <div className="mt-10 overflow-hidden border-y border-border-primary py-4 md:mt-14">
        <div className="flex items-center gap-6 whitespace-nowrap px-5 md:gap-10 md:px-10">
          {[...CATEGORIES, ...CATEGORIES].map((c, i) => (
            <span key={`${c}-${i}`} className="flex items-center gap-6 md:gap-10">
              <span
                className="font-display font-medium capitalize tracking-[-0.01em] text-content-primary"
                style={{ fontSize: "clamp(20px, 3vw, 40px)" }}
              >
                {c}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-60" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>

      {/* upload zone + radial image cluster */}
      <div className="container-page">
        <div className="relative mx-auto flex min-h-[560px] max-w-[900px] items-center justify-center py-16 md:min-h-[680px]">
          {/* ring of gray tiles */}
          {RING.map((deg) => (
            <div
              key={deg}
              className="absolute left-1/2 top-1/2 hidden md:block"
              style={{
                transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(clamp(-320px, -34vw, -220px)) rotate(${-deg}deg)`,
              }}
              aria-hidden="true"
            >
              <div className="h-[120px] w-[92px] lg:h-[150px] lg:w-[116px]">
                <MediaPlaceholder ratio="3 / 4" />
              </div>
            </div>
          ))}

          {/* center upload card */}
          <div className="relative z-10 w-full max-w-[420px] rounded-3xl border border-dashed border-border-secondary bg-white/80 px-6 py-10 text-center backdrop-blur-sm">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/[0.05] text-content-primary">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 12V3m0 0L5.5 6.5M9 3l3.5 3.5M3.5 13.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="mt-4 font-display text-[20px] font-medium capitalize tracking-[-0.3px] text-content-primary">
              Upload Or Drop Your Assets
            </p>
            <p className="mt-2 font-sans text-[14px] leading-[1.6] text-content-secondary">
              A product photo or a store link is all it takes.
            </p>
            <a
              href="#features"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-[10px] bg-content-primary px-6 font-sans text-[14px] font-medium text-white transition-colors hover:bg-black"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
