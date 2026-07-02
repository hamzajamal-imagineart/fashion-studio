# Layout Reference — the base layout system

This is the layout/typography system we're standardizing on, extracted from the
original "AI Product Generation" page's own CSS. Use these values for new pages.
It pairs with the design-system-kit (kit = nav/footer/tokens/components; this doc
= the page **layout + type scale**).

> **Font family:** `"Sf Pro Display", Arial, sans-serif` (the original). The kit's
> Google Sans Flex is an acceptable swap — both are neutral geometric sans. Only
> two weights are ever used: **400 (regular)** and **500 (medium)**. **No bold.**

---

## 1. Type scale

All sizes are **rem (relative to the 16px root)**, with three breakpoints. Headings
use tight **negative letter-spacing** and near-1 line-height; body is looser.

| Token | Class | Desktop | ≤991 (tablet) | ≤767 (mobile) | line-height | tracking | weight | case |
|-------|-------|--------:|-----:|-----:|---|---|---|---|
| **h1** | `u-h1` | **88px** (5.5rem) | 72px | 40px | 0.94 | −0.165rem (−2.6px) | 400 | sentence |
| **h2** | `u-h2` | **120px** (7.5rem) | 88px | 36px | 1.0 | −0.225rem (−3.6px) | 400 | sentence |
| **h3** | `u-h3` | 52px (3.25rem) | 52px | 24px | 1.05 | −0.1rem | 500 | sentence |
| **h4** | `u-h4` | 36px (2.25rem) | 36px | 32px | 1.2 | −0.027rem | 500 | sentence |
| title-3 | `u-title-3` | 24px (1.5rem) | 24px | 24px | 1.5 | −0.013rem | 500 | — |
| title-1 | `u-title-1` | 16px | 16px | 16px | 1.5 | −0.015rem | 500 | — |
| title-2 | `u-title-2` | 14px (.875rem) | 14px | 14px | 1.5 | −0.013rem | 500 | — |
| tag | `u-tag` | 18px (1.125rem) | 18px | 16px | 1.5 | — | 400 | — |
| body-1 | `u-body-1` | 18px | 18px | 16px | 1.4 | — | 400 | — |
| body-2 | `u-body-2` | 16px | 16px | 14px | 1.25 | — | 400 | — |
| body-3 | `u-body-3` | 20px (1.25rem) | 20px | 16px | 1.25 | — | 500 | — |
| btn | — | 17px (1.0625rem) | 17px | 17px | — | — | 500 | — |
| small-1 | `u-small-text-1` | 12px | 12px | 12px | 1.5 | −0.0075rem | 400 | — |
| small-2 (eyebrow) | `u-small-text-2` | **10px** (.625rem) | 10px | 10px | 1.0 | −0.0125rem | 500 | **UPPERCASE** |

**Takeaways**
- **Display headings are huge**: h2 = **120px** desktop, h1 = **88px**. This is the
  "large text" that defines the look. They scale down hard on mobile (h2 → 36px).
- Headings are **sentence case** here (the original is lowercase editorial: "your
  catalog, instantly re-shot."). The eyebrow (`small-text-2`) is the only UPPERCASE.
- Emphasis/two-tone is done with **color**, never weight (max weight = 500).

---

## 2. Layout & spacing

**Full-width, not a fixed max-width container.** Unlike the kit's 1240px
`.container-page`, this system runs edge-to-edge with small rem gutters:

| Region | Rule |
|--------|------|
| `.page` | `display:flex; flex-direction:column; min-height:100svh` |
| `.hero` | `height:100svh; min-height:56rem (896px)`; content **bottom-aligned** (`align-items:flex-end`); padding `2rem 2rem 4rem` |
| `.ai` (galleries) | near full-bleed — `padding:0 .5rem`, `gap:.5rem` (8px gutters) |
| Section rhythm | big vertical gaps: `.how` = `padding:10rem 0` (160px); `.list` & `.faq` = `margin-top:10rem` |

**Rules of thumb for new pages**
- Hero = **full viewport height**, headline pinned to the **bottom-left**, huge.
- Content is **full-width**; gutters are small (`0.5–2rem`), not a centered column.
- Separate major sections with **~10rem (160px)** vertical space.
- Corners are generous: cards/pills use `2.5rem` (40px) radii on media, smaller on tags.

---

## 3. Image / media slots (what images we use)

Every image is a placeholder box today; here's the real inventory, sizes, and what
each slot represents. All use `object-fit: cover`.

| Section | Slot(s) | Count | Size / ratio | Content |
|---------|---------|------:|--------------|---------|
| **Hero** | `hero__carousel__item` (radial ring around upload) | **8** | 7.8×9.2rem (~125×147px), radius 2.5rem, portrait | model / lifestyle shots fanned in a circle |
| **AI Fashion Photoshoot** | `ai__grid-card` (hero card) | 1 | 17.5×26.5rem (280×424px) portrait, has **dark + light** variants | studio look |
| | `ai__grid-alt__img` (gallery) | **6** | 13×13rem (208px) **square**, radius .5rem | 3-col × 2-row grid of looks |
| **AI Product Shots** | `ai__grid-small` collage | **5** | container 37.5rem tall; left/right tall (~20rem), center = 1 wide + 2 square | packshot + lifestyle + detail shots |
| **AI Video Production** | `ai__grid-small` (video) | **3** | left / large-center / right | `<video>` clips (Reels/ads) |
| **Steps (list)** | `list__main__bottom` image | **4** | full-width-ish (`info-img-wrap` 80rem), landscape | one hero image per step (01–04) |
| **Trusted By** | `how__bottom-logo` | ~20 | small SVG marks, 2 rows | brand/client logos (marquee) |

**Aspect-ratio cheatsheet for placeholders**
- Hero ring & fashion card & product collage: **portrait** (~3:4 to 4:5).
- Fashion gallery: **1:1 square**.
- Step images: **landscape** (~4:3 / 16:9).
- Videos: mixed (center larger/landscape, sides portrait).

---

## 3b. Content-page heading scale (added for SEO pages)

Long SEO headings don't hold at the display sizes (88/120px). For copy-heavy
pages (e.g. `/ai-fashion-studio`) we use a **reduced heading scale** — a
documented, approved divergence from §1:

| Role | Size | weight | notes |
|------|------|--------|-------|
| H1 | `clamp(32px, 4.6vw, 52px)` | 500 | holds a full sentence in ~4–5 lines |
| H2 (section) | `clamp(28px, 4vw, 56px)` | 500 | full-sentence section titles |
| H3 (sub-block) | `clamp(19px, 1.6–2vw, 24–28px)` | 500 | benefit/use-case/studio/step titles |
| eyebrow | 10.5px, uppercase, `tracking:1.8px` | 500 | section kicker |
| body | 16–18px, `leading:1.65` | 400 | paragraphs |

Still **no bold** (max 500), tight negative tracking on headings. Use the
**display scale (§1)** for short punchy headlines; use **this scale** when the
copy is a full sentence.

## 3c. Section types (page pattern library)

Beyond hero + FAQ + footer, these are approved section types (all full-width,
gray placeholders, reduced scale). First used on `/ai-fashion-studio`:

- **Steps** — numbered cards (`01…`), supports **6+** steps (guide's original
  `list` was 4). Each: number + H3 + body + optional image (4:3).
- **Benefits** — text-only grid of H3 + body blocks, hairline top-border per item.
- **Use-case gallery** — grid of **1:1 square** cards (image + H3 + body).
- **Feature/cross-sell cards** — 3-up cards (image 16:10 + H3 + body).
- **Motion** — 2-col: copy + a single video placeholder (16:10).
- **Testimonials** — grid of quote cards (blockquote + avatar dot + name/role).
  Distinct from the "Trusted By" logo strip.
- **CTA band** — centered H2 + body + primary button, generous vertical padding.

## 4. How it's wired in this repo

- `app/original.css` — the original page's own stylesheet (source of the values above).
- `app/original-body.html` — sanitized markup (JS + hidden-states stripped, images →
  `.ph-box` gray placeholders, brand neutralized).
- `app/original-overrides.css` — placeholder styling + reveal-visibility overrides.
- `app/page.tsx` — wraps the body in `body dark` (light theme + `font-size:1vw` base)
  between the kit `SiteNav` / `SiteFooter`.
- Theme: `.body` = dark theme (white text); **`.body.dark` = light theme** (white bg,
  `#020108` text) — we use `.dark` to match the kit's black-on-white.
