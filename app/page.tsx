import fs from "node:fs";
import path from "node:path";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import "./original.css";
import "./original-overrides.css";
import "./tuning.css";

// Read fresh on every request (dev) so edits to original-body.html show on
// refresh without restarting the server. Frequently-tweaked hero styling
// lives in tuning.css (instant HMR); structure/content lives in map_seo.py.
export const dynamic = "force-dynamic";

export default function Home() {
  const originalBody = fs.readFileSync(
    path.join(process.cwd(), "app", "original-body.html"),
    "utf-8",
  );
  return (
    <>
      <SiteNav />
      {/* `body dark` = the original's light theme (white bg, near-black text)
          + its `font-size: 1vw` base that drives the fluid large type.
          Scoped to this wrapper so the kit nav/footer are unaffected. */}
      <div
        className="original-page body dark"
        dangerouslySetInnerHTML={{ __html: originalBody }}
      />
      <ScrollReveal />
      <SiteFooter />
    </>
  );
}
