// src/components/CoverLetterSection.tsx

'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CoverLetterSectionProps {
    choice: 'red' | 'blue';
}

const bluePillContent = {
    title: "Povestea Structurată",
    paragraphs: [
        "Pasiunea pentru tehnologie și pentru soluții clare m-a condus pe un drum autodidact în lumea dezvoltării web. Am urmat un parcurs logic, învățând fundamentalul și construind pe o bază solidă, de la HTML, CSS și JavaScript la ecosisteme avansate.",
        "Am aprofundat tehnologii moderne precum React, Next.js și TypeScript, cu un focus pe scrierea de cod curat, mentenabil și pe respectarea celor mai bune practici. Proiectele mele demonstrează o abordare disciplinată, orientată spre performanță și o arhitectură robustă.",
        "Cred cu tărie în procese bine definite și în dezvoltarea iterativă. Sunt o persoană organizată, atentă la detalii și pregătită să aducă stabilitate și calitate tehnică în cadrul unei echipe profesioniste. Vă invit să explorăm împreună cum pot contribui la proiectele dumneavoastră."
    ]
};

const redPillContent = {
    title: "Creativitatea Brută",
    paragraphs: [
        "Dincolo de framework-uri și documentație, pentru mine, programarea este un act de creație. Am fost atras de dezvoltarea web din dorința de a construi, de a experimenta și de a transforma idei abstracte în experiențe interactive tangibile.",
        "Calea mea a fost una a explorării: nopți târzii petrecute depanând erori obscure, soluții neconvenționale găsite sub presiune și bucuria de a vedea o animație complexă sau o logică dificilă funcționând perfect. Acest portofoliu este o colecție a acelor momente de 'Evrika!'.",
        "Sunt motivat de provocări și prosper într-un mediu care încurajează inovația și gândirea 'out-of-the-box'. Aduc cu mine nu doar competențe tehnice, ci și o curiozitate nesfârșită și pasiunea de a împinge limitele posibilului. Haideți să vedem 'cât de adâncă este vizuina iepurelui'."
    ]
};


export const CoverLetterSection = ({ choice }: CoverLetterSectionProps) => {
    const content = choice === 'red' ? redPillContent : bluePillContent;

    const sectionRef = useRef<HTMLDivElement>(null);
    const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            paragraphRefs.current.forEach((p) => {
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
        <section id="cover-letter" ref={sectionRef} className="bg-black text-white py-24">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">{content.title}</h2>
                    <div className={`mt-4 w-24 h-1 mx-auto ${choice === 'red' ? 'bg-red-500' : 'bg-blue-400'}`}></div>
                </div>

                <div className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed space-y-8">
                    {content.paragraphs.map((text, index) => (
                        <p key={index} ref={el => { paragraphRefs.current[index] = el; }} className="opacity-0">
                            {text}
                        </p>
                    ))}
                </div>

            </div>
        </section>
    );
};