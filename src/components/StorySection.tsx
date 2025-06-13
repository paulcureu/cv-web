// src/components/StorySection.tsx

'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const storyChapters = [
    {
        text: "\"As far back as I can remember, I always wanted to be a gangster\" - Founder of BalkanCode ~ MVP",
        imageUrl: "/poza-1.jpg",
        alt: "Imagine reprezentând începuturile"
    },
    {
        text: "After a gangsta childhood, I needed to bring this chapter into my life — sports.",
        imageUrl: "/poza-2.jpg",
        alt: "Imagine cu un proiect complex"
    },
    {
        text: "If coding doesn’t work out, I’m safe — I can cook, and I make sarmale like a pro.",
        imageUrl: "/poza-3.jpg",
        alt: "Imagine despre viitor sau tehnologii moderne"
    },
    {
        text: "I enjoy chess — it’s a game that trains your patience. And I really need that patience when I run npm build 30 times, only to realize I misspelled the filename.",
        imageUrl: "/poza-4.jpg",
        alt: "Imagine despre viitor sau tehnologii moderne"
    },
    {
        text: "I used to work in dental technology — a beautiful craft. Much like chess, it sharpened my patience and taught me to value the art of working with my hands. In today’s fast-paced world, that feels like something deeply grounding.",
        imageUrl: "/poza-5.jpg",
        alt: "Imagine despre viitor sau tehnologii moderne"
    },

];

export const StorySection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
    // MODIFICARE 1: Adăugăm un ref pentru textul de final
    const conclusionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        chapterRefs.current = [];

        const ctx = gsap.context(() => {
            // Animația pentru capitolele principale (neschimbată)
            chapterRefs.current.forEach((chapter) => {
                if (chapter) {
                    gsap.fromTo(chapter,
                        { autoAlpha: 0, y: 100 },
                        {
                            autoAlpha: 1,
                            y: 0,
                            duration: 1.2,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: chapter,
                                start: 'top 85%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                }
            });

            if (conclusionRef.current) {
                gsap.fromTo(conclusionRef.current,
                    { autoAlpha: 0, y: 100 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: conclusionRef.current,
                            start: 'top 95%', // Îl facem să apară când e aproape de finalul paginii
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-black text-white py-16 md:py-24">
            <div className="container mx-auto px-4">

                <div className="space-y-24 md:space-y-32">
                    {storyChapters.map((chapter, index) => (
                        <div
                            key={index}
                            ref={el => { if(el) chapterRefs.current[index] = el; }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
                        >
                            <div className="md:order-1">
                                <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-300">
                                    {chapter.text}
                                </p>
                            </div>

                            <div className="md:order-2">
                                <div className="relative w-full aspect-square">
                                    <Image
                                        src={chapter.imageUrl}
                                        alt={chapter.alt}
                                        fill
                                        className="object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    <div ref={conclusionRef} className="text-center pt-16 md:pt-24">
                        <p className="text-2xl italic text-gray-400 max-w-2xl mx-auto">
                            "If you want to know more, call my mom — she’s got the archive."
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};