import Button from "@/components/shared/Button";
import SectionTitle from "@/components/shared/SectionTitle";

export default function AboutPage() {
  return (
    <div className="text-contrast">
      <p className="text-2xl md:text-3xl mb-4 text-white/80">Hola mundo! Soy</p>
      <SectionTitle
        name="MATIAS CARINI"
        title="Full Stack Developer"
        description="Full stack developer con proyectos funcionales desplegados. Stack: Next.js, React, Node.js, MongoDB, PostgreSQL, REST APIs. Desarrollo desde la arquitectura de base de datos hasta la interfaz de usuario. Código disponible en GitHub."
      />
      <div className="flex flex-wrap gap-4 mt-2">
        <Button href="/contact">Trabajá conmigo</Button>
        <Button href="/projects" variant="secondary">
          Ver mi trabajo
        </Button>
      </div>
    </div>
  );
}
