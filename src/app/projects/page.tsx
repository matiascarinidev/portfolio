import { projects } from "@/lib/projects";
import ProjectCard from "@/components/client/ProjectCard";
import Button from "@/components/shared/Button";

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-light mb-2">MATIAS CARINI</h1>
        <h2 className="text-xl md:text-2xl font-extralight text-white/80 mb-3">
          Full Stack Developer
        </h2>
        <p className="text-white/60 text-sm">
          Aquí hay algunos proyectos en los que he trabajado.
        </p>
      </div>

      <div className="grid max-h-120 gap-6 mb-10 overflow-y-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Button href="/contact">Trabajá conmigo</Button>
    </div>
  );
}
