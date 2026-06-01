"use client";

import { useState, useEffect } from "react";
import { Project, ProjectMetadata } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [metadata, setMetadata] = useState<ProjectMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
      <div className="bg-gray-900/40 border border-gray-800 rounded-xl animate-pulse">
        <div className="h-32 bg-gray-800 rounded-t-xl" />
        <div className="p-4 space-y-2">
          <div className="h-5 bg-gray-800 rounded w-3/4" />
          <div className="h-3 bg-gray-800 rounded w-full" />
          <div className="h-3 bg-gray-800 rounded w-2/3" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 hover:bg-gray-900/60 transition-all duration-300">
      {metadata?.image?.url && (
        <a
          href={project.deployUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden"
        >
          <img
            src={metadata.image.url}
            alt={metadata.title || project.title}
            className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
          />
        </a>
      )}

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1">
          {metadata?.title || project.title}
        </h3>

        <p className="text-gray-400 text-xs mb-3 line-clamp-2">
          {metadata?.description || "Sin descripción disponible"}
        </p>

        <div className="mb-2">
          <p className="text-blue-400 text-xs font-semibold mb-1">Objetivo</p>
          <p className="text-gray-300 text-xs">{project.goal}</p>
        </div>

        <div className="mb-3">
          <p className="text-blue-400 text-xs font-semibold mb-1">Stack</p>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-gray-800 px-2 py-0.5 rounded text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-2 border-t border-gray-800">
          <a
            href={project.deployUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-xs hover:text-[#0099cc] transition-colors font-medium"
          >
            Ver proyecto →
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-xs hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
