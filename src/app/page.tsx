'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        // Acest div principal folosește flexbox pentru a aranja corect header, main și footer
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            {/* `flex-grow` este clasa magică ce face ca acest conținut să umple spațiul */}
            <main className="flex-grow">
                {/* Containerul centrează conținutul principal */}
                <div className="container mx-auto p-4 py-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 h-24 md:h-32"> {/* Am adăugat o înălțime fixă pentru a preveni salturile de layout */}
                        <TypeAnimation
                            sequence={[
                                // Începe cu textul tău principal
                                'Salut, numele meu este Paul.',
                                2000, // Așteaptă 2 secunde
                                'Sunt un Self-Taught Web Developer.',
                                2000, // Așteaptă 2 secunde

                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity} // Repetă animația la infinit
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