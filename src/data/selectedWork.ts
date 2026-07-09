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
    "A closer look at practical web applications I have designed and built.",

  projects: [
    {
      title: "Lineup",
      summary:
        "A custom web application that helps organise lineup information in a clearer and more manageable way.",
      problem:
        "Lineup information can easily become scattered across messages, documents, and spreadsheets. The goal was to create a more structured way to manage the process.",
      role:
        "I designed and built the application, focusing on usability, clear structure, and maintainable frontend code.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      challenges: [
        "Turning a loose workflow into a clear interface",
        "Keeping important information easy to scan",
        "Building reusable pieces that can support future improvements",
      ],
      screenshots: [],
    },
  ],
};