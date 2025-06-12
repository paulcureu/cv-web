// src/components/CoverLetterSection.tsx

'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CoverLetterSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const paragraph1Ref = useRef<HTMLParagraphElement>(null);
    const paragraph2Ref = useRef<HTMLParagraphElement>(null);
    const paragraph3Ref = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        const paragraphs = [paragraph1Ref.current, paragraph2Ref.current, paragraph3Ref.current];

        const ctx = gsap.context(() => {
            paragraphs.forEach((p) => {
                if (p) {
                    gsap.fromTo(p,
                        { autoAlpha: 0, y: 50 },
                        {
                            autoAlpha: 1, y: 0,
                            duration: 1,
                            scrollTrigger: {
                                trigger: p,
                                start: "top 80%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    );
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        // MODIFICARE: Fundal negru și text principal deschis la culoare
        <section id="cover-letter" ref={sectionRef} className="bg-black text-gray-200 py-24">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    {/* MODIFICARE: Titlu alb */}
                    <h2 className="text-4xl font-bold text-white">Scrisoare de Intenție</h2>
                    {/* MODIFICARE: Linie despărțitoare albă */}
                    <div className="mt-4 w-24 h-1 bg-white mx-auto"></div>
                </div>

                {/* Textul va moșteni culoarea 'text-gray-200' de la secțiunea părinte */}
                <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-24">
                    <p ref={paragraph1Ref} className="opacity-0">
                        Pasiunea mea pentru tehnologie și pentru crearea de soluții digitale inovatoare m-a condus pe un drum autodidact în lumea dezvoltării web. Acest portofoliu reprezintă nu doar o colecție de proiecte, ci și o dovadă a dedicării mele continue de a învăța și de a mă perfecționa în acest domeniu dinamic.
                    </p>
                    <p ref={paragraph2Ref} className="opacity-0">
                        Am aprofundat tehnologii moderne precum React și Next.js, cu un focus pe crearea de interfețe de utilizator intuitive, performante și responsive. Abordez fiecare provocare cu o mentalitate orientată spre rezolvarea problemelor și sunt un adept al învățării continue.
                    </p>
                    <p ref={paragraph3Ref} className="opacity-0">
                        Sunt convins că abilitățile mele tehnice, combinate cu entuziasmul și dorința de a crește, pot aduce o contribuție valoroasă echipei dumneavoastră. Vă mulțumesc pentru timpul acordat și sunt nerăbdător să discutăm mai multe.
                    </p>
                </div>

            </div>
        </section>
    );
};