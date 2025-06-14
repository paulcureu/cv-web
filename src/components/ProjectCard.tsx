// src/components/ProjectCard.tsx

import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

type ProjectProps = {
    project: {
        slug: string;
        title: string;
        description: string;
        imageUrl: string;
        technologies: string[];
        liveUrl?: string;
        githubUrl: string;
    }
}

export function ProjectCard({ project }: ProjectProps) {
    return (
        <div className="group bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:transform hover:-translate-y-2">

            <div className="relative w-full h-56 overflow-hidden">
                <Image
                    src={project.imageUrl}
                    alt={`Screenshot for ${project.title}`}
                    fill
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-in-out"
                />
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={`${tech}-${index}`}
                            className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t flex justify-between items-center">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
                    title="View on GitHub"
                >
                    <Github size={20} />
                    <span>Source Code</span>
                </a>

                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-black hover:text-gray-700 font-semibold transition-colors"
                        title="View Live Site"
                    >
                        <span>Live Demo</span>
                        <ExternalLink size={20} />
                    </a>
                )}
            </div>
        </div>
    );
}