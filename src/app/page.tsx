// src/app/page.tsx

'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from '@/components/ProjectsSection';
import Hero from '@/components/Hero';
import { TypeAnimation } from 'react-type-animation';
import dynamic from 'next/dynamic';
import { Download } from 'lucide-react';


const Hand3D = dynamic(() => import('@/components/Hand3D'), {
    ssr: false
});

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <Hero />
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <figure className="max-w-4xl mx-auto mb-12">
                        <blockquote className="text-xl md:text-2xl italic text-center text-gray-700 leading-relaxed">
                            <p>&#34;Everything around you that you call life was made up by people that were no smarter than you, and you can change it, you can influence it, you can build your own things that other people can use.&#34;</p>
                        </blockquote>
                        <figcaption className="mt-4 text-right font-semibold text-gray-800">
                            — Steve Jobs
                        </figcaption>
                    </figure>
                    <Hand3D />
                    <div className="mt-12">
                        <a
                            href="/Paul-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-gray-800 to-black px-8 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <Download className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
                            Curriculum Vitæ
                        </a>
                    </div>

                </div>
            </section>
            <SkillsSection />
            <ProjectsSection />
            <Footer />
        </div>
    );
}