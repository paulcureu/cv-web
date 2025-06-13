// src/app/cover-letter/page.tsx

'use client';

import { useState } from 'react';
import { CoverLetterSection } from "@/components/CoverLetterSection";
import { MatrixIntro } from "@/components/MatrixIntro";
// Nu mai avem nevoie de Header și Footer aici dacă vrem o experiență imersivă

export default function CoverLetterPage() {
    const [choice, setChoice] = useState<'red' | 'blue' | null>(null);

    const handleChoice = (madeChoice: 'red' | 'blue') => {
        setChoice(madeChoice);
    };

    return (
        <main className="bg-black min-h-screen">
            {!choice ? (
                <MatrixIntro onChoiceMade={handleChoice} />
            ) : (
                <CoverLetterSection choice={choice} />
            )}
        </main>
    );
}