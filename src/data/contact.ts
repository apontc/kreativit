type ContactLink = {
  label: string;
  href: string;
};

type ContactContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  email: string;
  links: ContactLink[];
};

export const contact: ContactContent = {
  eyebrow: "Contact",
  heading: "Have a project in mind?",
  intro:
    "Tell me a little about what you need, and I’ll get back to you as soon as I can.",
  email: "kreativit.berlin@gmail.com",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-profile",
    },
    {
      label: "GitHub",
      href: "https://github.com/carinvazef",
    },
  ],
};