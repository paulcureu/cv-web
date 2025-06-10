'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-grow">
                <div className="container mx-auto p-4 py-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 h-24 md:h-32">
                        <TypeAnimation
                            sequence={[
                                'Salut, numele meu este Paul.',
                                2000,
                                'Sunt un Self-Taught Web Developer.',
                                2000,

                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600">
                        Sunt un software developer pasionat de crearea unor aplicații web moderne.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}