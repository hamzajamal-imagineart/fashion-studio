import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // page.tsx reads app/original-body.html from disk at request time. Vercel's
  // serverless file-tracing won't bundle a file read via a runtime-constructed
  // path, so include it explicitly (otherwise the route 500s with ENOENT).
  outputFileTracingIncludes: {
    "/": ["./app/original-body.html"],
  },
};

export default nextConfig;
