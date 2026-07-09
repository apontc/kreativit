// src/styles/designTokens.ts
// Shared Tailwind class strings — single source of truth for spacing, type, and color.
// Palette: WOOD — light cream base (#F8F4ED) with a wood-tan accent band (#E5D1B9),
// navy ink (#1E2A37), amber-wood accent (#A76731), slate-blue secondary (#666D76).

export const layout = {
  section: "scroll-mt-24 py-20 sm:py-28",
  container: "mx-auto w-full max-w-5xl px-6",
};

// Alternating section surfaces down the page: cream → plain → cream …
// Keys unchanged so existing section references (surfaces.cream / .plain) still resolve.
export const surfaces = {
  cream: "bg-[#F8F4ED]", // warm cream body
  plain: "bg-white",
  card: "bg-white border border-[#E7DAC6]", // lifts on cream sections
  cardMuted: "bg-[#E5D1B9] border border-[#D8C3A6]", // wood-tan tint (cards / blocks)
  band: "bg-[#E5D1B9] border-b border-[#D8C3A6]", // wood-tan navbar band (surface + bottom border)
};

export const text = {
  eyebrow: "text-sm font-semibold uppercase tracking-[0.25em] text-[#A76731]",
  heading: "text-[#1E2A37]", // navy ink (~slate-800)
  body: "text-[#5B6470]",
  link: "text-[#666D76] underline-offset-4 hover:underline hover:text-[#525963]",
};

const buttonBase =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium " +
  "transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export const buttons = {
  primary: `${buttonBase} bg-[#A76731] text-white shadow-sm hover:bg-[#8F5629] focus-visible:outline-[#A76731]`,
  // Secondary fill is the OPPOSITE surface of the section it sits in, so it never
  // blends into the background. Use `secondary` on cream sections, `secondaryOnPlain` on white.
  secondary: `${buttonBase} bg-white border border-slate-300 text-slate-950 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-slate-400`,
  secondaryOnPlain: `${buttonBase} bg-[#F8F4ED] border border-slate-300 text-slate-950 hover:border-slate-400 hover:bg-white focus-visible:outline-slate-400`,
};