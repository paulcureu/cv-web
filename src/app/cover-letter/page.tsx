// src/app/cover-letter/page.tsx

'use client';

import { useState, useLayoutEffect, useEffect } from 'react';
import { CoverLetterSection } from "@/components/CoverLetterSection";
import { MatrixIntro } from "@/components/MatrixIntro";

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function CoverLetterPage() {
    useIsomorphicLayoutEffect(() => {
        gsap.registerPlugin(ScrollToPlugin);
    }, []);

    const [choice, setChoice] = useState<'red' | 'blue' | null>(null);

    const handleChoice = (madeChoice: 'red' | 'blue') => {
        setChoice(madeChoice);
        gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2.inOut' });
    };

    const handleReturnToBluePill = () => {
        setChoice('blue');
        gsap.to(window, { duration: 1, scrollTo: 0, ease: 'power2.inOut' });
    };

    return (
        <main className="bg-black min-h-screen">
            {!choice ? (
                <MatrixIntro onChoiceMade={handleChoice} />
            ) : (
                <CoverLetterSection choice={choice} onReturn={handleReturnToBluePill} />
            )}
        </main>
    );
}