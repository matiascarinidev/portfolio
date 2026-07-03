"use client";

import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "@/components/client/ProjectCard";
import Button from "@/components/shared/Button";
import SectionTitle from "@/components/shared/SectionTitle";
import { useLocale } from "@/context/LocaleContext";

export default function ProjectsPage() {
  const { locale, messages } = useLocale();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    dragFree: false,
    loop: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    const onInit = () => {
      setSlidesCount(emblaApi.slideNodes().length);
      onSelect();
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("init", onInit);
    onInit();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("init", onInit);
    };
  }, [emblaApi]);

  const hasProjects = messages.projectsList && messages.projectsList.length > 0;
  const isSingleProject = messages.projectsList?.length === 1;

  return (
    <div className=" flex-1 flex flex-col  ">
      <SectionTitle description={messages.projects.description} />

      <div className="flex-1 relative min-h-0">
        {/* Viewport - ocupa todo el espacio disponible */}
        <div className="h-full overflow-hidden px-4 md:px-8" ref={emblaRef}>
          <div className="flex h-full gap-4 md:gap-6">
            {messages.projectsList.map((project) => (
              <div
                key={project.id}
                className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center"
              >
                <div className="w-full max-w-5xl mx-auto">
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {hasProjects && !isSingleProject && (
          <div>
            <button
              onClick={scrollPrev}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/90 hover:bg-gray-800 text-white border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-all z-10 ${
                canScrollPrev
                  ? "opacity-100 hover:scale-105"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-label="Previous project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={scrollNext}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/90 hover:bg-gray-800 text-white border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center transition-all z-10 ${
                canScrollNext
                  ? "opacity-100 hover:scale-105"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-label="Next project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center justify-between mt-6 w-full">
        {/* Dots */}
        {hasProjects && !isSingleProject && slidesCount > 1 && (
          <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-800">
            <span className="text-xs text-gray-400 mr-1">
              {selectedIndex + 1}/{slidesCount}
            </span>
            {messages.projectsList.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-blue-500 w-5"
                    : "bg-gray-600 w-1.5 hover:bg-gray-400"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="mt-6 flex-shrink-0  flex justify-end">
          <Button href={`/${locale}/contact`}>{messages.contact.cta}</Button>
        </div>
      </div>
    </div>
  );
}
