type Screenshot = {
  src: string;
  alt: string;
};

type Project = {
  title: string;
  summary: string;
  problem: string;
  role: string;
  technologies: string[];
  challenges: string[];
  screenshots: Screenshot[];
};

type SelectedWorkContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  projects: Project[];
};

export const selectedWork: SelectedWorkContent = {
  eyebrow: "Selected Work",
  heading: "Real projects, built with care.",
  intro:
    "A closer look at a full product I designed and built end to end — from database to interface.",

  projects: [
    {
      title: "Lineup",
      summary:
        "A music-event discovery and social app. Fans discover shows by the artists they follow, see who else is going, and coordinate through per-event meet chats, while artists claim and manage their own profiles. A self-initiated product I designed and built solo, currently in active development.",
      problem:
        "Event details are scattered across Bandsintown, Instagram, and ticketing sites — and none of them show which fans are actually going or make it easy to coordinate meeting up beforehand.",
      role:
        "I built the whole product solo: a React and TypeScript frontend, a Supabase (Postgres) backend with auth and storage, and every third-party music-data integration. Built at a deliberate, quality-first pace rather than rushed to launch.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Edge Functions",
      ],
      challenges: [
        "Resolving a single artist's identity across four music APIs (MusicBrainz, Spotify, Discogs, Last.fm) — handling namesake collisions and missing records.",
        "Routing every third-party call through Edge Function proxies with a server-side cache, keeping API keys off the browser and staying within rate limits.",
        "A complete account-deletion lifecycle — 7-day deferral, 30-day recovery window, automated teardown — that still preserves shared chat history through a durable audit trail.",
        "Locking data access down at the database layer with a full row-level-security audit.",
        "A disciplined SQL migration system with a rollback file for every change.",
      ],
      screenshots: [],
    },
  ],
};
