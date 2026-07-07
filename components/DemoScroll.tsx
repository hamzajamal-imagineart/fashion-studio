"use client";

import { useEffect } from "react";

/**
 * Scroll-driven stepper for the "Your AI Fashion Model, Start to Finish" demo.
 * On desktop the section pins (see .demo-track / sticky .demo-sec in tuning.css)
 * and the active step advances 1→6 as the user scrolls through the track; on the
 * way back up it reverses. Each change crossfades the preview for a smooth feel.
 * It reuses each step button's own click handler (preview image/video swap),
 * so manual clicking still works and re-syncs on the next scroll.
 */
export default function DemoScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const demo = document.querySelector<HTMLElement>("[data-demo]");
    if (!demo) return;
    const section = (demo.closest(".demo-sec") as HTMLElement) || demo;
    const track =
      (section.parentElement?.classList.contains("demo-track")
        ? section.parentElement
        : section) as HTMLElement;
    const steps = Array.from(demo.querySelectorAll<HTMLElement>(".demo-step"));
    if (steps.length < 2) return;

    let active = -1;
    let raf = 0;

    const goto = (idx: number) => {
      active = idx;
      steps[idx].click(); // update immediately so steps track the scroll
    };

    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      const vh = window.innerHeight;

      // only drive steps on the pinned desktop track; on tablet/mobile the steps
      // are a manual horizontal-scroll row (no sticky/scroll-driven stepping)
      if (r.height <= vh * 1.5) return;

      const scrollable = r.height - vh;
      const prog = Math.max(0, Math.min(0.9999, -r.top / scrollable));
      const idx = Math.min(steps.length - 1, Math.floor(prog * steps.length));
      if (idx !== active) goto(idx);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
