// src/components/ProjectsSection.tsx
import { projects } from '@/lib/data';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
    return (
        <section id="proiecte" className="bg-gradient-to-b from-gray-50 to-gray-200 px-4 py-16 md:py-24">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Proiecte Recente
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map(project => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}