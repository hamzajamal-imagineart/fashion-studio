"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal for the injected (dangerouslySetInnerHTML) page.
 * The original GSAP/Webflow JS was stripped, so this re-adds a lightweight
 * reveal: each targeted block fades + slides into place as it enters the
 * viewport, and reverses when it leaves — so scrolling back up replays it.
 *
 * Direction is chosen by the element's horizontal position:
 *   left half  -> slide in from the left
 *   right half -> slide in from the right
 *   full width -> rise from the bottom
 */
const SELECTOR = [
  ".whyai__intro",
  ".whyai__x",
  ".sgrid__intro",
  ".sgrid__card",
  ".uses__intro",
  ".how__title",
  ".how__left",
  "[data-demo] > div",
  ".faq__title",
  ".faq__item",
  ".ai__txt",
].join(",");

export default function ScrollReveal() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const root = document.querySelector(".original-page");
    if (!root) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>(SELECTOR));
    if (!els.length) return;

    const vw = window.innerWidth;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      const center = r.left + r.width / 2;
      el.classList.add("sr");
      if (r.width > vw * 0.72) el.classList.add("sr-u");
      else if (center < vw * 0.5) el.classList.add("sr-l");
      else el.classList.add("sr-r");
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          e.target.classList.toggle("sr-in", e.isIntersecting);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
