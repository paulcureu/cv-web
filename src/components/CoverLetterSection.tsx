// src/components/CoverLetterSection.tsx

'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CoverLetterSectionProps {
    choice: 'red' | 'blue';
    onReturn?: () => void;
}

type SectionParagraph = { type: 'paragraph' | 'intro' | 'outro_title' | 'emphasis' | 'conclusion_link' | 'homepage_link'; text: string; };
type SectionQuote = { type: 'quote'; text: string; author: string; };
type SectionList = { type: 'list'; items: string[]; };
type SectionCode = { type: 'code'; lang: string; content: string; };
type ContentSection = SectionParagraph | SectionQuote | SectionList | SectionCode;

type PillContent = {
    title: string;
    sections: ContentSection[];
};

const bluePillContent: PillContent = {
    title: "Blue Pill — Order, Logic, and Learning",
    sections: [
        { type: 'intro', text: "It all started with one simple question:\n\"How do I go from solving algorithms… to actually making things happen?\"" },
        { type: 'paragraph', text: "I was tired of typing numbers into a console and watching them go through a sorting algorithm or a binary search, just to get a line of output.\nI wanted more. I wanted to build things, see them move, click, change, respond — I wanted code to come alive." },
        { type: 'paragraph', text: "The answer? Libraries and frameworks. Once I found that out, the path became clearer." },
        { type: 'paragraph', text: "I started exploring libraries in Python — from matplotlib, to tkinter, to manim. I played, experimented, visualized. But eventually I thought:" },
        { type: 'quote', text: "If I only do linear and polynomial regressions in scikit-learn… I’ll starve to death. 😅", author: "" },
        { type: 'paragraph', text: "So I turned to the web — the wild, beautiful chaos where" },
        { type: 'quote', text: "JavaScript is the duct tape of the Internet.", author:"Charlie Campbell" },
        { type: 'paragraph', text: "And it was love at first sight. Why? Because this time, code didn’t just compute — it appeared. It moved, it changed color, it animated. It did something." },
        { type: 'paragraph', text: "I started learning through The Odin Project, built little games — Tic Tac Toe, a calculator, a digital library. I practiced vanilla CSS by copying images, converting them into HTML layouts pixel by pixel." },
        { type: 'paragraph', text: "Then I got bored again." },
        { type: 'intro', text: "New question: How do I build a site like Facebook? Or something full-stack?" },
        { type: 'paragraph', text: "At first, I thought servers were these complicated hardware machines you had to own. —\nlike you had to own a machine room or some blinking Linux tower." },
        { type: 'paragraph', text: "But then I wrote:" },
        { type: 'code', lang: 'bash', content: 'npm init -y\nnpm install express' },
        { type: 'paragraph', text: "And boom — \"I had a server.\"\n\nToo good. Too Baia Mare to be true. 😄" },
        { type: 'paragraph', text: "I started building cooler and cooler projects —\nas you've probably seen on the homepage of my portfolio." },
        { type: 'emphasis', text: "But now that this is a cover letter, I guess I should convince you that I’m the perfect candidate and that you should definitely pick me for this internship.\n\nWell… I’ll skip that part." },
        { type: 'paragraph', text: "Instead, let me tell you why I want to be part of this internship:" },
        { type: 'list', items: [
                "I want proper guidance.",
                "I want to learn where to direct my focus.",
                "I don’t want to be blinded by the \"magic\" of some trendy framework.",
                "I don’t want to fall into the trap of \"vibe coding\" and chaotic learning."
            ]},
        { type: 'emphasis', text: "I need a model to learn from — someone who can teach me best practices and help me grow not just as a developer, but as a builder who thinks clearly." },
        { type: 'outro_title', text: "🎤 Final words – Thunder, this is your moment" },
        { type: 'paragraph', text: "So Thunder, imagine this is X Factor. I heard you sing (aka I joined your workshop and loved the whole team vibe). I hit the buzzer. The chair turned. Now it’s your turn to choose:" },
        { type: 'list', items: [
                "Will you go forward with me — just a boy from Baia Mare dreaming of coding like Michael B. Paulson?",
                "Or will you pick someone who might already be just as good as Michael B. Paulson today? 🥲"
            ]},
        { type: 'homepage_link', text: "Thank you for taking the time to read my story.\n" +
                "If you'd like, feel free to return to the homepage." }
    ]
};

const redPillContent: PillContent = {
    title: "Red Pill — Breaking the Pattern",
    sections: [
        { type: 'intro', text: "Sometimes, all it takes is one spark of curiosity — one misplaced “type” attribute — and the rabbit hole opens. It didn’t start with a tutorial. Or a bootcamp. It started with an HTML tag." },
        { type: 'paragraph', text: "Back in high school, in a computer lab, I noticed my computer science teacher had saved his password on a website — www.pbinfo.ro." },
        { type: 'paragraph', text: "One morning, driven by pure curiosity, I opened Inspect Element, found the input field, and changed type=\"password\" to type=\"text\". And just like that — the stars aligned. The password appeared." },
        { type: 'paragraph', text: "I didn’t fully understand what I had done. But I knew it worked. From that point on, I started getting 10s (straight A’s). Sometimes 8 or 9, just to keep things... realistic." },
        { type: 'paragraph', text: "Ironically? I studied hard for the final exam and passed the CS Baccalaureate with an 8.50 — fair and square. Fast forward to university." },
        { type: 'paragraph', text: "I started learning Python. After years of writing C/C++ and C#, it felt like switching from piano to guitar — same music, different rhythm." },
        { type: 'paragraph', text: "Then I discovered Selenium. Not for UI testing (like a normal human). But for scraping. HLTV.org (strictly for educational purposes, of course 😇). I scraped player stats, match data, team info — all neatly saved to .csv." },
        { type: 'paragraph', text: "The goal? Train an AI model to predict who would win future matches. (Once again: for learning. Not gambling. Definitely. 👀). But it all began with that one type=\"password\" moment. That was the spark." },
        { type: 'outro_title', text: "🌀 Return to the Blue Pill" },
        { type: 'quote', text: "“You can’t connect the dots looking forward; you can only connect them looking backwards.”", author: "Steve Jobs" },
        { type: 'paragraph', text: "These moments don’t define who I am. They don’t represent my ethics — they’re simply part of the journey." },
        { type: 'paragraph', text: "Without that bit of chaos, maybe I wouldn’t be here today — building real applications, learning modern stacks, understanding architecture, performance, accessibility, DevOps." },
        { type: 'conclusion_link', text: "You can now return to the structured world — the Blue Pill — where the story continues with focus, clarity, and purpose." }
    ]
};


export const CoverLetterSection = ({ choice, onReturn }: CoverLetterSectionProps) => {
    const content = choice === 'red' ? redPillContent : bluePillContent;

    const sectionRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    sectionRefs.current = [];

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            sectionRefs.current.forEach((p) => {
                if (p) {
                    gsap.to(p, {
                        autoAlpha: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: p,
                            start: 'top 80%',
                            end: 'bottom 60%',
                            scrub: 0.5,
                        },
                    });
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
                                        {section.author && <figcaption className="mt-4 text-right text-gray-400">— {section.author}</figcaption>}
                                    </figure>
                                );
                                break;

                            case 'code':
                                contentToShow = (
                                    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 my-6">
                                        <pre className="font-mono text-sm text-green-400 whitespace-pre-wrap"><code>{section.content}</code></pre>
                                    </div>
                                );
                                break;

                            case 'list':
                                contentToShow = (
                                    <ul className="list-disc list-inside space-y-3 my-4 pl-4 text-lg">
                                        {section.items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                );
                                break;

                            case 'emphasis':
                                contentToShow = <p className="text-lg text-white font-semibold leading-relaxed">{section.text}</p>;
                                break;

                            case 'outro_title':
                                contentToShow = <h3 className="text-3xl font-bold text-center pt-12">{section.text}</h3>;
                                break;

                            case 'conclusion_link':
                                contentToShow = (
                                    <div
                                        onClick={onReturn}
                                        className="text-center text-blue-400 font-semibold cursor-pointer hover:underline transition-all duration-300 hover:scale-105 pt-12"
                                        title="Go to the Blue Pill story"
                                    >
                                        <p>{section.text}</p>
                                    </div>
                                );
                                break;

                            case 'homepage_link':
                                contentToShow = (
                                    <div className="text-center pt-12">
                                        <Link href="/" className="text-gray-400 font-semibold cursor-pointer hover:text-white transition-colors duration-300 inline-block">
                                            <p>{section.text}</p>
                                            <span className="mt-2 block">&larr; EXIT THE MATRIX</span>
                                        </Link>
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