// src/app/page.tsx

'use client'; // Necesar pentru componenta de animație

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkillsSection } from "@/components/SkillsSection"; // <-- Pasul 1: Importăm noua componentă
import { TypeAnimation } from 'react-type-animation';
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
                                        'Salut, numele meu este Paul.',
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

            {/* ======== Secțiunea Competențe ======== */}
            {/* Pasul 2: Adăugăm componenta aici, între Main și Footer */}
            <SkillsSection />

            <Footer />
        </div>
    );
}