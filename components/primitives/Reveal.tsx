"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "down";

const DIRECTION_CLASS: Record<Direction, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  down: "reveal-down",
};

/**
 * Reveal-on-scroll wrapper. Applies the `.reveal` utilities from globals.css
 * and toggles `.reveal-visible` when the element enters the viewport.
 * Respects prefers-reduced-motion via the CSS itself.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${DIRECTION_CLASS[direction]} ${visible ? "reveal-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
