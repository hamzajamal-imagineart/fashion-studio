import { Reveal } from "@/components/primitives/Reveal";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

function FeatureHead({
  label,
  title,
  muted,
  body,
}: {
  label: string;
  title: string;
  muted: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[1.6px] text-content-tertiary">
          {label}
        </span>
        <h3
          className="mt-4 font-display font-medium capitalize leading-[0.98] tracking-[-0.02em] text-content-primary"
          style={{ fontSize: "clamp(30px, 4.4vw, 60px)" }}
        >
          {title} <span className="text-black/35">{muted}</span>
        </h3>
      </div>
      <p className="max-w-[38ch] font-sans text-[15px] leading-[1.7] tracking-[-0.005em] text-content-secondary md:text-[16px]">
        {body}
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="border-t border-border-primary py-20 md:py-28">
      <div className="container-page">
        {/* section heading */}
        <div className="max-w-[900px]">
          <Reveal>
            <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[1.8px] text-content-tertiary">
              What You Can Do
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2
              className="mt-5 font-display font-semibold capitalize leading-[0.98] tracking-[-0.02em] text-content-primary"
              style={{ fontSize: "clamp(36px, 6vw, 84px)" }}
            >
              On-Brand Visuals.{" "}
              <span className="text-black/35">Made By AI.</span>
            </h2>
          </Reveal>
        </div>

        {/* Block 1 — AI Fashion Photoshoot */}
        <Reveal className="mt-20 md:mt-28">
          <FeatureHead
            label="AI Fashion Photoshoot"
            title="Studio-Quality,"
            muted="Without The Studio."
            body="Upload one product and get all the angles, looks and moods you need for PDPs and campaigns — without booking a studio."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            <MediaPlaceholder label="Look 01" ratio="3 / 4" />
            <MediaPlaceholder label="Look 02" ratio="3 / 4" className="md:mt-10" />
            <MediaPlaceholder label="Look 03" ratio="3 / 4" />
            <MediaPlaceholder label="Look 04" ratio="3 / 4" className="md:mt-10" />
            <MediaPlaceholder label="Look 05" ratio="3 / 4" />
            <MediaPlaceholder label="Look 06" ratio="3 / 4" className="md:mt-10" />
          </div>
        </Reveal>

        {/* Block 2 — AI Product Shots */}
        <Reveal className="mt-20 md:mt-28">
          <FeatureHead
            label="AI Product Shots"
            title="Your Product,"
            muted="New Scenes On Demand."
            body="Drop a product photo and we build clean packshots and styled lifestyle scenes around it."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            <MediaPlaceholder label="Packshot" ratio="3 / 4" className="md:row-span-2" />
            <div className="grid gap-4 md:col-span-2">
              <MediaPlaceholder label="Lifestyle Scene" ratio="16 / 9" />
              <div className="grid grid-cols-2 gap-4">
                <MediaPlaceholder label="Detail" ratio="1 / 1" />
                <MediaPlaceholder label="On-Model" ratio="1 / 1" />
              </div>
            </div>
            <MediaPlaceholder label="Editorial" ratio="3 / 4" className="md:row-span-2" />
          </div>
        </Reveal>

        {/* Block 3 — AI Video Production */}
        <Reveal className="mt-20 md:mt-28">
          <FeatureHead
            label="AI Video Production"
            title="Campaign-Ready"
            muted="Video In Minutes."
            body="Create on-brand clips for Reels, TikTok and ads without a shoot."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
            <MediaPlaceholder label="Reel" kind="video" ratio="9 / 16" />
            <MediaPlaceholder label="Campaign Clip" kind="video" ratio="16 / 10" className="md:col-span-2" />
            <MediaPlaceholder label="Story" kind="video" ratio="9 / 16" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
