import { Project } from "@/lib/types";
export const projects = {
  description:
    "Each project represents a real business challenge solved through software, combining technical implementation with a deep understanding of business needs.",
  cta: "See my work",
  
  problem: "The Challenge",
  solution: "The Solution",
  result: "The Impact",
};

export const projectsList: Project[] = [
  {
    id: "1",
    title: "Metalúrgica Lobato",
    deployUrl: "https://www.metalurgicalobato.com.ar/",
    repoUrl: "https://github.com/matiascarinidev/mel_webpage",

    techStack: ["Next.js", "React", "Node.js", "TailwindCSS", "Vercel"],

    problem:
      "The company needed a modern corporate website to improve its online presence and make it easier for potential clients to contact them.",

    solution:
      "Designed a new responsive website and later rebuilt the entire project using Next.js to deliver a faster, cleaner and more professional experience.",

    result:
      "Modern corporate presence, improved performance and a website aligned with the company's identity.",
  },

  {
    id: "2",
    title: "Lentejuelas Core",

    deployUrl: "https://lentejuelas-core.vercel.app/",

    repoUrl:
      "https://github.com/matiascarinidev/lentejuelas/tree/main/apps/core",

    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM"],

    problem:
      "Restaurant operations were managed through disconnected manual processes involving inventory, purchasing and production.",

    solution:
      "Designed and developed an ERP that centralizes inventory, suppliers, recipes, purchasing, production and cost management in a single platform.",

    result:
      "The business now manages its internal operations through a unified system that improves organization and operational control.",
  },

  {
    id: "3",
    title: "Lentejuelas Ventas",

    deployUrl: "https://lentejuelas-ventas.vercel.app/",

    repoUrl:
      "https://github.com/matiascarinidev/lentejuelas/tree/main/apps/ventas",

    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM"],

    problem:
      "Daily sales, orders and table management required a faster workflow connected with the business management system.",

    solution:
      "Developed a POS application integrated with the ERP, including tables, kitchen workflow, orders, customers and cash closing.",

    result:
      "Sales operations became centralized, reducing manual work and improving daily service.",
  },
];
