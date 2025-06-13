// src/components/CoverLetterSection.tsx

'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CoverLetterSectionProps {
    choice: 'red' | 'blue';
    onReturn?: () => void;
}
type SectionParagraph = { type: 'paragraph' | 'intro' | 'outro_title' | 'conclusion_link'; text: string; };
type SectionQuote = { type: 'quote'; text: string; author: string; };
type ContentSection = SectionParagraph | SectionQuote;
type PillContent = { title: string; sections: ContentSection[]; };

const redPillContent: PillContent = {
    title: "Red Pill — Origin Story",
    sections: [
        { type: 'intro', text: "Sometimes it takes just one spark of curiosity —  one incorrectly set “type” attribute — and the rabbit hole opens. It did not begin with a tutorial. Or a bootcamp. It started with an HTML tag." },
        { type: 'paragraph', text: "Back in high school, in computer lab, I noticed my computer science teacher had saved his password on a website — www.pbinfo.ro." },
        { type: 'paragraph', text: "One morning, I discovered Inspect Element and, being naturally curious, decided to explore. I found the input field and changed type=\"password\" to type=\"text\". Just like that — the universe aligned. The password appeared." },
        { type: 'paragraph', text: "At the time, I didn’t even really realize what I had done. But I knew it worked. I began to get all straight 10s on my tests since that day. Occasionally 8 or 9, just to make it … realistic." },
        { type: 'paragraph', text: "Ironically, I studied hard for the final exam and obtained a 8.50 on the CS Baccalaureate — fair and square." },
        { type: 'paragraph', text: "Fast forward to university" },
        { type: 'paragraph', text: "I started learning Python. After years of writing C/C++ and C#, it felt like switching from piano to guitar — same music, different rhythm. Then I discovered Selenium. Not for UI testing (like a normal human). But for scraping. HLTV.org (strictly for educational purposes, of course 😇). I scraped player stats, match data, team info — all neatly saved to .csv." },
        { type: 'paragraph', text: "The goal? Train an AI model to predict who would win future matches. (Once again: for learning. Not gambling. Definitely. 👀). But it all began with that one type=\"password\" moment. That was the spark." },
        { type: 'outro_title', text: "🌀 Return to the Blue Pill" },
        { type: 'quote', text: "“You can’t connect the dots looking forward; you can only connect them looking backwards.”", author: "Steve Jobs" },
        { type: 'paragraph', text: "These moments don’t define who I am. They don’t represent my ethics — they’re simply part of the journey." },
        { type: 'paragraph', text: "Without that bit of chaos, maybe I wouldn’t be here today — building real applications, learning modern stacks, understanding architecture, performance, accessibility, DevOps." },
        { type: 'conclusion_link', text: "You can now return to the structured world — the Blue Pill — where the story continues with focus, clarity, and purpose." }
    ]
};
const bluePillContent: { title: string; sections: ContentSection[] } = {
    title: "Povestea Structurată",
    sections: [
        { type: 'intro', text: "Sometimes, all it takes is one spark of curiosity — one misplaced “type” attribute — and the rabbit hole opens. It didn’t start with a tutorial. Or a bootcamp. It started with an HTML tag." },
        { type: 'paragraph', text: "Am aprofundat tehnologii moderne precum React, Next.js și TypeScript, cu un focus pe scrierea de cod curat, mentenabil și pe respectarea celor mai bune practici. Proiectele mele demonstrează o abordare disciplinată, orientată spre performanță și o arhitectură robustă." },
        { type: 'paragraph', text: "Cred cu tărie în procese bine definite și în dezvoltarea iterativă. Sunt o persoană organizată, atentă la detalii și pregătită să aducă stabilitate și calitate tehnică în cadrul unei echipe profesioniste. Vă invit să explorăm împreună cum pot contribui la proiectele dumneavoastră." }
    ]
};


export const CoverLetterSection = ({ choice, onReturn }: CoverLetterSectionProps) => {
    const content = choice === 'red' ? redPillContent : bluePillContent;

    const sectionRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            sectionRefs.current.forEach((p) => {
                if (p) {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: p,
                            start: 'top bottom-=100',
                            end: 'bottom top+=100',
                            scrub: 0.5,
                        },
                    });

                    tl.to(p, { autoAlpha: 1, y: 0, ease: 'power1.in' })
                        .to(p, { autoAlpha: 0.2, y: -50, ease: 'power1.out' });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [content]);

    return (
        <section id="cover-letter" ref={sectionRef} className="bg-black text-white py-24">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl font-bold">{content.title}</h2>
                    <div className={`mt-4 w-24 h-1 mx-auto ${choice === 'red' ? 'bg-red-500' : 'bg-blue-400'}`}></div>
                </div>

                <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
                    {content.sections.map((section, index) => {
                        let contentToShow;
                        switch (section.type) {
                            case 'intro':
                                contentToShow = <p className="text-2xl md:text-3xl font-light italic text-gray-100 leading-relaxed">{section.text}</p>;
                                break;
                            case 'quote':
                                contentToShow = (
                                    <figure className="my-8">
                                        <blockquote className="border-l-4 border-gray-500 pl-6 text-xl italic text-gray-300">
                                            <p>{section.text}</p>
                                        </blockquote>
                                        <figcaption className="mt-4 text-right text-gray-400">— {section.author}</figcaption>
                                    </figure>
                                );
                                break;
                            case 'outro_title':
                                contentToShow = <h3 className="text-3xl font-bold text-center pt-12">{section.text}</h3>;
                                break;
                            case 'conclusion_link':
                                contentToShow = (
                                    <div
                                        onClick={onReturn} // Apelăm funcția primită ca prop la click
                                        className="text-center text-blue-400 font-semibold cursor-pointer hover:underline transition-all duration-300 hover:scale-105"
                                    >
                                        <p>{section.text}</p>
                                    </div>
                                );
                                break;

                            default:
                                contentToShow = <p className="text-lg text-gray-300 leading-relaxed">{section.text}</p>;
                                break;
                        }
                        return (
                            <div key={index} ref={el => { if (el) sectionRefs.current[index] = el; }} className="opacity-20">
                                {contentToShow}
                            </div>
                        );
                    })}

                    <div className="h-[50vh]"></div>

                </div>
            </div>
        </section>
    );
};