import { Reveal } from "@/components/primitives/Reveal";

const CAPABILITIES = ["Creates Images", "Makes Videos", "Stays On-Brand"];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border-primary py-20 md:py-28">
      <div className="container-page">
        <Reveal>
          <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[1.8px] text-content-tertiary">
            How It Works
          </span>
        </Reveal>

        <div className="mt-8 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6">
          <Reveal>
            <span
              className="font-display font-medium capitalize leading-[0.95] tracking-[-0.02em] text-content-secondary"
              style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
            >
              AI That
            </span>
          </Reveal>
          <ul className="flex flex-col">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c} delay={i * 90} as="li">
                <span
                  className="block font-display font-medium capitalize leading-[1.02] tracking-[-0.02em] text-content-primary"
                  style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
                >
                  {c}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Trusted By logo strip */}
        <div className="mt-16 flex flex-col gap-6 border-t border-border-primary pt-10 md:mt-24 md:flex-row md:items-center md:gap-10">
          <span className="shrink-0 font-mono text-[10.5px] font-semibold uppercase tracking-[1.6px] text-content-tertiary">
            Trusted By
          </span>
          <div className="grid flex-1 grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-6">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="flex h-12 items-center justify-center rounded-xl border border-border-primary bg-neutral-20"
                aria-hidden="true"
              >
                <div className="h-3 w-16 rounded-full bg-black/[0.09]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
