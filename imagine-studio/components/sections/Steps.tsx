import { Reveal } from "@/components/primitives/Reveal";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

const STEPS: {
  n: string;
  tag: string;
  title: string;
  muted: string;
  copy: string;
  chips: [string, string];
}[] = [
  {
    n: "01",
    tag: "(PB)",
    title: "Add Products",
    muted: "And Brand.",
    copy: "Store your products, shots and brand look in one place.",
    chips: ["14+ Model Presets", "Multiple Pose Options"],
  },
  {
    n: "02",
    tag: "(GO)",
    title: "AI Generates",
    muted: "Options.",
    copy: "Use AI to create new concepts, scenes and ideas.",
    chips: ["Concept & Scene Variations", "Multiple Visual Directions"],
  },
  {
    n: "03",
    tag: "(CB)",
    title: "Choose The",
    muted: "Best Ones.",
    copy: "Pick the versions you like from the generations.",
    chips: ["Side-By-Side Comparison", "Easy Selection & Review"],
  },
  {
    n: "04",
    tag: "(AX)",
    title: "Ready-Made",
    muted: "Assets Export.",
    copy: "Export ready-made files to your store, ads and social.",
    chips: ["Optimized For PDP & Ads", "One-Click Export"],
  },
];

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border-primary bg-white px-3.5 py-2 font-sans text-[13px] font-medium text-content-secondary">
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0 text-primary-60">
        <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </span>
  );
}

export function Steps() {
  return (
    <section id="steps" className="border-t border-border-primary py-20 md:py-28">
      <div className="container-page">
        {/* heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2
              className="font-display font-semibold capitalize leading-[0.98] tracking-[-0.02em] text-content-primary"
              style={{ fontSize: "clamp(36px, 6vw, 84px)" }}
            >
              From Idea To Assets{" "}
              <span className="text-black/35">In Four Steps.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-[34ch] font-sans text-[16px] leading-[1.7] tracking-[-0.005em] text-content-secondary">
              Sign up for free and supercharge your creative workflow.
            </p>
          </Reveal>
        </div>

        {/* step blocks */}
        <div className="mt-14 flex flex-col gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 60}>
              <article className="grid gap-8 rounded-3xl border border-border-primary bg-white p-6 md:grid-cols-2 md:p-10">
                {/* left: text */}
                <div className="flex flex-col">
                  <div className="flex items-start justify-between">
                    <span
                      className="font-display font-medium leading-[1] tracking-[-0.02em] text-content-primary"
                      style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
                    >
                      {step.n}
                    </span>
                    <span className="font-mono text-[12px] font-semibold tracking-[1px] text-content-tertiary">
                      {step.tag}
                    </span>
                  </div>

                  <h3
                    className="mt-6 font-display font-medium capitalize leading-[1.02] tracking-[-0.02em] text-content-primary"
                    style={{ fontSize: "clamp(26px, 3vw, 40px)" }}
                  >
                    {step.title} <span className="text-black/35">{step.muted}</span>
                  </h3>

                  <p className="mt-4 max-w-[42ch] font-sans text-[15px] leading-[1.7] tracking-[-0.005em] text-content-secondary">
                    {step.copy}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    <Chip label={step.chips[0]} />
                    <Chip label={step.chips[1]} />
                  </div>
                </div>

                {/* right: image */}
                <MediaPlaceholder label={`Step ${step.n}`} ratio="4 / 3" className="min-h-[220px]" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
