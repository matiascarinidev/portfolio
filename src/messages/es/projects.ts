import { Project } from "@/lib/types";
export const projects = {
  description:
    "Estos proyectos representan distintos desafíos reales donde el objetivo fue resolver problemas concretos mediante software, priorizando siempre la experiencia del usuario y las necesidades del negocio.",
  cta: "Ver mi trabajo",
  problem: "El desafío",
  solution: "La solución",
  result: "El impacto",
};

export const projectsList: Project[] = [
  {
    id: "1",

    title: "Metalúrgica Lobato",

    deployUrl: "https://www.metalurgicalobato.com.ar/",

    repoUrl: "https://github.com/matiascarinidev/mel_webpage",

    techStack: ["Next.js", "React", "Node.js", "TailwindCSS", "Vercel"],

    problem:
      "La empresa contaba con un sitio web desactualizado que no reflejaba la calidad de sus servicios ni transmitía una imagen profesional a potenciales clientes.",

    solution:
      "Diseñé una nueva experiencia web completamente responsive y posteriormente reconstruí el proyecto utilizando Next.js para ofrecer una solución más rápida, moderna y alineada con la identidad de la empresa.",

    result:
      "La empresa obtuvo una presencia digital más sólida, mejorando su imagen profesional y facilitando el contacto con nuevos clientes.",
  },

  {
    id: "2",

    title: "Lentejuelas Core",

    deployUrl: "https://lentejuelas-core.vercel.app/",

    repoUrl:
      "https://github.com/matiascarinidev/lentejuelas/tree/main/apps/core",

    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM"],

    problem:
      "Las operaciones del negocio se realizaban mediante procesos manuales y herramientas desconectadas, dificultando el control de inventario, compras, producción y costos.",

    solution:
      "Diseñé y desarrollé un sistema ERP que centraliza la gestión de inventario, proveedores, compras, recetas, producción y costos dentro de una única plataforma.",

    result:
      "El negocio pasó a gestionar sus operaciones internas desde un único sistema, mejorando la organización de la información y el control operativo diario.",
  },

  {
    id: "3",

    title: "Lentejuelas Ventas",

    deployUrl: "https://lentejuelas-ventas.vercel.app/",

    repoUrl:
      "https://github.com/matiascarinidev/lentejuelas/tree/main/apps/ventas",

    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma ORM"],

    problem:
      "El proceso de ventas requería una herramienta que permitiera gestionar pedidos, mesas y cocina de forma rápida e integrada con el sistema de gestión.",

    solution:
      "Desarrollé un sistema POS conectado con el ERP, incorporando gestión de mesas, pedidos, clientes, cocina, caja y flujo completo de ventas.",

    result:
      "Las operaciones comerciales quedaron integradas con el resto del negocio, reduciendo tareas manuales y facilitando el seguimiento de cada venta.",
  },
];
