import type { CSSProperties } from "react";

/**
 * Copyright-safe gray placeholder box — stands in for the original page's
 * product/model photos. Plain neutral fill, kit-styled corners + border.
 * `label` (optional) names the slot; `kind="video"` shows a play glyph.
 */
export function MediaPlaceholder({
  label,
  kind = "image",
  ratio,
  className = "",
}: {
  label?: string;
  kind?: "image" | "video";
  ratio?: string;
  className?: string;
}) {
  const style: CSSProperties | undefined = ratio ? { aspectRatio: ratio } : undefined;

  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-2xl border border-border-primary bg-neutral-20 ${className}`}
      style={style}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-4 text-center">
        {kind === "video" ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.06] text-content-tertiary">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M5 3.5v9l7-4.5-7-4.5z" fill="currentColor" />
            </svg>
          </span>
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.06] text-content-tertiary">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect x="1.5" y="2.5" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="6" cy="6.5" r="1.4" fill="currentColor" />
              <path d="M2 12l4-3.5 3.5 3 3-2.5L16 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
        {label ? (
          <span className="font-mono text-[9.5px] font-semibold uppercase tracking-[1.4px] text-content-tertiary">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
