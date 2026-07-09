export const layout = {
  section: 'scroll-mt-20 px-6 py-20 sm:py-28',
  container: 'mx-auto max-w-6xl',
  narrowContainer: 'mx-auto max-w-3xl',
}

export const text = {
  eyebrow: 'text-sm font-semibold uppercase tracking-[0.25em] text-orange-700',
}

// Section background surfaces. Sections alternate cream → plain down the page;
// change a background here rather than in individual sections.
export const surfaces = {
  cream: 'bg-orange-50',
  plain: 'bg-white',
}

const buttonBase =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

export const buttons = {
  primary: `${buttonBase} bg-orange-600 text-white shadow-sm hover:bg-orange-700 focus-visible:outline-orange-600`,
  secondary: `${buttonBase} border border-slate-300 text-slate-950 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-slate-400`,
}