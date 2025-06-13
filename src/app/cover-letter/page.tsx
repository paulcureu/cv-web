// src/app/cover-letter/page.tsx

'use client';

import { useState } from 'react';
import { CoverLetterSection } from "@/components/CoverLetterSection";
import { MatrixIntro } from "@/components/MatrixIntro";

export default function CoverLetterPage() {
    const [choice, setChoice] = useState<'red' | 'blue' | null>(null);

    const handleChoice = (madeChoice: 'red' | 'blue') => {
        setChoice(madeChoice);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleReturnToBluePill = () => {
        setChoice('blue');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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