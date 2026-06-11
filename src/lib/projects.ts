import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Metalúrgica Lobato",
    deployUrl: "https://www.metalurgicalobato.com.ar/",
    repoUrl: "https://github.com/matiascarinidev/mel_webpage",
    techStack: ["React", "Tailwind", "Node.js"],
    goal: "Sitio web corporativo para taller metalúrgico",
  },
  {
    id: "2",
    title: "Lentejuelas Core",
    deployUrl: "https://lentejuelas-core.vercel.app/",
    repoUrl:
      "https://github.com/matiascarinidev/lentejuelas/tree/main/apps/core",
    techStack: ["React", "Next.js", "PostgreSQL", "Prisma"],
    goal: "Sistema de gestión empresarial",
  },
  {
    id: "3",
    title: "Lentejuelas Ventas",
    deployUrl: "https://lentejuelas-ventas.vercel.app/",
    repoUrl:
      "https://github.com/matiascarinidev/lentejuelas/tree/main/apps/ventas",
    techStack: ["React", "Node.js", "PostgreSQL", "Prisma"],
    goal: "POS con manejo de mesas y pedidos",
  },
  {
    id: "4",
    title: "Restaurant App",
    deployUrl: "https://restaurant-lilac-five.vercel.app/",
    repoUrl: "https://github.com/matiascarinidev/restaurant",
    techStack: ["Next.js", "Tailwind"],
    goal: "Aplicación de reservas y menú digital (Incompleto)",
  },
];
