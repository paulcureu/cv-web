// src/components/SkillsSection.tsx
import Image from 'next/image';

const skillCategories = [
    {
        title: "Front-End",
        skills: [
            { name: 'React', icon: 'react.svg' },
            { name: 'Next.js', icon: 'nextdotjs.svg' },
            { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
            { name: 'Vite', icon: 'vite.svg' },
        ]
    },
    {
        title: "Back-End",
        skills: [
            { name: 'Node.js', icon: 'nodedotjs.svg' },
            { name: 'Express', icon: 'express.svg' },
            { name: 'Flask', icon: 'flask.svg' },
            { name: 'TypeScript', icon: 'typescript.svg' },
        ]
    },
    {
        title: "Databases & ORMs",
        skills: [
            { name: 'PostgreSQL', icon: 'postgresql.svg' },
            { name: 'Prisma', icon: 'prisma.svg' },
        ]
    },
    {
        title: "DevOps & Tooling",
        skills: [
            {name: 'Swagger', icon: 'swagger.svg' },
            { name: 'Git', icon: 'git.svg' },
            { name: 'GitHub', icon: 'github.svg' },
            { name: 'Docker', icon: 'docker.svg' },
            { name: 'Figma', icon: 'figma.svg' },
            { name: 'Vercel', icon: 'vercel.svg' },
            { name: 'Railway', icon: 'railway.svg' },
            { name: 'Postman', icon: 'postman.svg' },
        ]
    },
    {
        title: "Testing & Quality Assurance",
        skills: [
            { name: 'Jest', icon: 'jest.svg' },
            { name: 'Selenium', icon: 'selenium.svg' },
            { name: 'Faith', icon: 'faith.svg' },
        ]
    },
];

export function SkillsSection() {
    return (
        <section id="competente" className="bg-white px-4 py-16 md:py-24">
    <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-16">
        Technologies I Use to Build Meaning
    </h2>

    <div className="space-y-12">
        {skillCategories.map((category) => (
                <div key={category.title}>
                <h3 className="text-xl font-semibold text-center mb-8">{category.title}</h3>
                    <div className="flex flex-wrap justify-center gap-8">
            {category.skills.map((skill) => (
                    <div
                        key={skill.name}
                className="flex items-center gap-4 p-4 pr-6 bg-gray-50 border rounded-full shadow-sm hover:shadow-md hover:bg-gray-100 transition-all duration-300"
                >
                <Image
                    src={`/icons/${skill.icon}`}
            alt={`Logo ${skill.name}`}
    width={32}
    height={32}
    />
    <span className="font-medium">{skill.name}</span>
        </div>
))}
    </div>
    </div>
))}
    </div>
    </div>
    </section>
);
}