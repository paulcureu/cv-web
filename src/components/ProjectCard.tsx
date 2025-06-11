// src/components/ProjectCard.tsx
import Image from 'next/image';
// Nu mai avem nevoie de `Link` din Next.js, deoarece folosim un link extern
import type { projects } from '@/lib/data';

type ProjectType = (typeof projects)[number] & { imageGray?: string };

type ProjectCardProps = {
    project: ProjectType;
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group bg-white rounded-lg border border-gray-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >

            <div className="relative h-48">
                <Image
                    src={project.image}
                    alt={`Imagine pentru ${project.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {project.imageGray && (
                    <Image
                        src={project.imageGray}
                        alt={`Imagine blurată pentru ${project.title}`}
                        fill
                        className="object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                    />
                )}
            </div>


            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 mb-4 h-12">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </a>
    );
}