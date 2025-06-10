// src/app/page.tsx

'use client'; // Necesar pentru componenta de animație

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkillsSection } from "@/components/SkillsSection"; // <-- Pasul 1: Importăm noua componentă
import { TypeAnimation } from 'react-type-animation';
import dynamic from 'next/dynamic';

const Hand3D = dynamic(() => import('@/components/Hand3D'), {
    ssr: false
});

import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            {/* ======== Secțiunea Hero ======== */}
            <main className="flex-grow flex items-center">
                <div className="container mx-auto p-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Coloana Stânga: Textul */}
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 h-32">
                                <TypeAnimation
                                    sequence={[
                                        "Hi, I'm Paul.",
                                        2000,
                                        'Self-Taught Web Developer.',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 mb-8">
                                Pasionat de crearea unor aplicații web moderne, performante și intuitive.
                            </p>
                            <div className="flex justify-center md:justify-start gap-4">
                                <a href="#contact" className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
                                    Contactează-mă
                                </a>
                                <a href="#proiecte" className="bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">
                                    Vezi Proiectele
                                </a>
                            </div>
                        </div>

                        {/* Coloana Dreapta: Imaginea */}
                        <div className="flex justify-center">
                            <Image
                                src="/avatar.png"
                                alt="Fotografia lui Paul C."
                                width={300}
                                height={300}
                                className="rounded-full shadow-lg"
                                priority
                            />
                        </div>

                    </div>
                </div>
            </main>

            {/* ======== Secțiunea Citat & 3D ======== */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">

                    {/* Citatul de la Steve Jobs */}
                    <figure className="max-w-4xl mx-auto mb-12">
                        <blockquote className="text-xl md:text-2xl italic text-center text-gray-700 leading-relaxed">
                            <p>&#34;Everything around you that you call life was made up by people that were no smarter than you, and you can change it, you can influence it, you can build your own things that other people can use.&#34;</p>
                        </blockquote>
                        <figcaption className="mt-4 text-right font-semibold text-gray-800">
                            — Steve Jobs
                        </figcaption>
                    </figure>

                    {/* Modelul 3D */}
                    <Hand3D />

                    {/* --- AICI ADAUGĂM BUTONUL --- */}
                    <div className="mt-12">
                        <a
                            href="/CV_Cureu_Paul.pdf"
                            download="CV-Paul-Cazacu.pdf"
                            className="inline-block bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-xl hover:bg-gray-300 transition-colors duration-200 text-lg"
                        >
                            C&#39;est ma Vie (CV)
                        </a>
                    </div>

                </div>
            </section>
            <SkillsSection />

            <Footer />
        </div>
    );
}