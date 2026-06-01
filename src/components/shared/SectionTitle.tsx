interface SectionTitleProps {
  name: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  name,
  title,
  description,
}: SectionTitleProps) {
  return (
    <header className="mb-8">
      <h1 className="text-3xl md:text-4xl font-light">{name}</h1>
      <h2 className="text-xl md:text-2xl font-extralight mt-2">{title}</h2>
      {description && (
        <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </header>
  );
}
