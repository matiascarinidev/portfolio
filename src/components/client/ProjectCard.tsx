"use client";

import { useState, useEffect } from "react";
import { Project, ProjectMetadata } from "@/lib/types";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [metadata, setMetadata] = useState<ProjectMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { messages } = useLocale();
  useEffect(() => {
    fetch(`/api/metadata?url=${encodeURIComponent(project.deployUrl)}`)
      .then((res) => res.json())
      .then((data) => {
        setMetadata(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [project.deployUrl]);

  if (isLoading) {
    return (
      <div className="bg-gray-900/40 border border-gray-800 rounded-xl animate-pulse h-full flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 h-48 md:h-full bg-gray-800 rounded-t-xl md:rounded-l-xl md:rounded-t-none" />
        <div className="flex-1 p-4 space-y-3">
          <div className="h-6 bg-gray-800 rounded w-3/4" />
          <div className="h-4 bg-gray-800 rounded w-full" />
          <div className="h-4 bg-gray-800 rounded w-2/3" />
          <div className="pt-4 mt-2 border-t border-gray-800 space-y-2">
            <div className="h-3 bg-gray-800 rounded w-1/2" />
            <div className="flex gap-2">
              <div className="h-6 bg-gray-800 rounded w-16" />
              <div className="h-6 bg-gray-800 rounded w-16" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 hover:bg-gray-900/90 transition-all duration-300 h-full flex flex-col md:flex-row">
      {/* Contenedor de imagen SIEMPRE presente, con o sin imagen */}
      <div className="w-full md:w-2/5 h-48 md:h-full overflow-hidden bg-gray-800 m-auto">
        {metadata?.image?.url ? (
          <Link
            href={project.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full"
          >
            <img
              src={metadata.image.url}
              alt={metadata.title || project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </Link>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-600 text-sm">No preview</span>
          </div>
        )}
      </div>

      {/* Contenido - siempre ocupa el espacio restante */}
      <div className="flex-1 p-4 flex flex-col min-w-0 overflow-hidden">
        <h3 className="text-lg font-semibold text-white mb-1 truncate">
          {metadata?.title || project.title}
        </h3>

        <p className="text-gray-400 text-xs mb-3 line-clamp-2 shrink-0">
          {metadata?.description || "Sin descripción disponible"}
        </p>

        <div className="flex-1 overflow-y-auto min-h-0 space-y-2 pr-1">
          <div>
            <p className="text-blue-400 text-sm font-semibold mb-0.5">
              {messages.projects.problem}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <p className="text-blue-400 text-sm font-semibold mb-0.5">
              {messages.projects.solution}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div>
            <p className="text-blue-400 text-sm font-semibold mb-0.5">
              {messages.projects.result}
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              {project.result}
            </p>
          </div>
        </div>

        <div className=" pt-3 mt-auto">
          <div className="mb-2">
            <p className="text-blue-400 text-sm font-semibold mb-1">Stack</p>
            <div className="flex flex-wrap gap-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-gray-800 px-2 py-0.5 rounded text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-2 border-t border-gray-800">
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-md hover:text-gray-300 transition-colors"
            >
              Source Code
            </Link>
            <Link
              href={project.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 text-md hover:text-[#0099cc] transition-colors font-medium"
            >
              Live Demo →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
