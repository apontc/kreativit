// src/styles/designTokens.ts
// Shared Tailwind class strings — single source of truth for spacing, type, and color.
//
// Palette: WOOD — every color is referenced through the tokens below. Keep a
// critical eye on contrast (WCAG AA: 4.5:1 for normal text) before adding or
// reusing a color, and never let a control blend into its background.
//   Base ramp:  #F8F4ED cream · #FFFFFF white · #F2E7D5 chip tint · #EADFCB focus ring
//   Wood-tan:   #E7DAC6 hairline · #E5D1B9 band/surface · #D8C3A6 strong border
//   Amber:      #A76731 accent (fills / large text / on white) · #8F5629 amber-dark
//               (button hover, and AA-safe small text — e.g. the eyebrow on cream)
//   Ink/slate:  #1E2A37 navy heading · #5B6470 slate body & muted text

// Side gutter — single source for horizontal breathing room. Baked into
// `container`; apply `layout.gutter` directly on any wrapper that sets its own
// max-width (Navbar / Footer / Contact) so the mobile gutter stays consistent.
const gutter = "px-6";

export const layout = {
  gutter,
  section: "scroll-mt-16 py-20 sm:py-28",
  container: `mx-auto w-full max-w-5xl ${gutter}`,
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

// Wood-tan hairlines. Each string includes the `border` width, so use them alone
// (e.g. `${borders.hair} bg-white`). For a single edge, inline the color instead
// (e.g. `border-t border-[#D8C3A6]`).
export const borders = {
  hair: "border border-[#E7DAC6]", // subtle hairline on cream/white (cards, images)
  strong: "border border-[#D8C3A6]", // deeper wood-tan (inputs, buttons)
};

export const text = {
  eyebrow: "text-sm font-semibold uppercase tracking-[0.25em] text-[#8F5629]", // amber-dark: AA-safe for small text on cream
  heading: "text-[#1E2A37]", // navy ink (~slate-800)
  body: "text-[#5B6470]", // one muted slate; body, link, and interactive all share it
  link: "text-[#5B6470] underline-offset-4 hover:underline hover:text-[#1E2A37]",
  interactive: "text-[#5B6470] hover:text-[#1E2A37]", // muted → ink on hover (nav, footer, inline links)
};

// Amber-wood accent — the single "pop" color across the page.
export const accent = {
  text: "text-[#A76731]",
  hover: "hover:text-[#A76731]",
  dot: "bg-[#A76731]", // filled markers (bullets)
  chip: "bg-[#F2E7D5] text-[#A76731]", // soft wood-tint pill (tags)
  ring: "focus:ring-[#EADFCB]", // pale wood focus ring (form inputs / buttons)
};

const buttonBase =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium " +
  "transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export const buttons = {
  primary: `${buttonBase} bg-[#A76731] text-white shadow-sm hover:bg-[#8F5629] focus-visible:outline-[#A76731]`,
  // Secondary fill is the OPPOSITE surface of the section it sits in, so it never
  // blends into the background. Use `secondary` on cream sections, `secondaryOnPlain` on white.
  secondary: `${buttonBase} bg-white ${borders.strong} text-[#1E2A37] hover:border-[#A76731] hover:bg-[#F2E7D5] focus-visible:outline-[#A76731]`,
  secondaryOnPlain: `${buttonBase} bg-[#F8F4ED] ${borders.strong} text-[#1E2A37] hover:border-[#A76731] hover:bg-[#F2E7D5] focus-visible:outline-[#A76731]`,
};
