import { SectionTitleProps } from "@/lib/types";

export default function SectionTitle({ description }: SectionTitleProps) {
  return (
    <header className="mb-8">
      <p className="text-xl md:text-2xl mb-4 text-white/80 ">
        Hola mundo! Soy
      </p>
      <h1 className="text-2xl md:text-4xl font-light">MATIAS CARINI</h1>
      <h2 className="text-xl md:text-2xl font-extralight mt-2">
        Full Stack Developer
      </h2>
      {description && (
        <p className="text-gray-400 text-lg md:text-xl mt-4 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </header>
  );
}
