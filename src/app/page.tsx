import Button from "@/components/shared/Button";
import SectionTitle from "@/components/shared/SectionTitle";

export default function HomePage() {
  return (
    <div className="text-contrast">
      <SectionTitle
        name="MATIAS CARINI"
        title="Full Stack Developer"
        description="Construyo aplicaciones fullstack con Next.js, React, Node.js y PostgreSQL. He desarrollado un sistema de gestión empresarial (inventario, compras, producción, proveedores) y un POS con manejo de mesas, pedidos y cierre de caja. Ambos en producción."
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
