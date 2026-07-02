export interface FaqItem {
  q: string;
  a: string;
}

// Fashion Studio SEO FAQs — sentence case, verbatim from the copy.
export const FAQ: FaqItem[] = [
  {
    q: "Can I reuse the same AI fashion model across different collections?",
    a: "Yes. Once you've built a model, it's saved to your library, so your spring drop and your fall drop can feature the exact same face, body, and skin tone without regenerating from scratch.",
  },
  {
    q: "Do I own the rights to the images and videos I generate with AI Fashion Studio?",
    a: "Yes. Every catalog and editorial shoot you create is yours to use commercially, across your store, ads, and social channels, with no licensing fees tied to the model or the shoot.",
  },
  {
    q: "How is AI Fashion Studio different from a virtual try-on tool?",
    a: "Virtual try-on tools are built for shoppers to preview fit on themselves. AI Fashion Studio is built for brands to produce finished, publishable fashion photography, with full control over the model, pose, background, and styling.",
  },
  {
    q: "Can multiple people on my team work on the same catalog project?",
    a: "Yes. Models, garments, and generated shoots can be shared across your team, so a designer and a merchandiser can work from the same catalog without duplicating setup.",
  },
  {
    q: "What aspect ratios and lengths are available for video?",
    a: "Advanced Controls let you set the aspect ratio to match wherever the video is going, whether that's a square product page, a vertical Reel, or a widescreen campaign, alongside custom timing for the clip.",
  },
  {
    q: "Does AI fashion photography from this tool work for both catalog and editorial in the same project?",
    a: "Yes. The same model, garment, and outfit setup carry over between catalog and editorial modes, so switching from a studio-style listing shot to an outdoor campaign shot doesn't mean starting over.",
  },
];
