// src/app/cover-letter/page.tsx

'use client';

import { useState } from 'react';
import { CoverLetterSection } from "@/components/CoverLetterSection";
import { MatrixIntro } from "@/components/MatrixIntro";

export default function CoverLetterPage() {
    const [choice, setChoice] = useState<'red' | 'blue' | null>(null);

    const handleChoice = (madeChoice: 'red' | 'blue') => {
        setChoice(madeChoice);
    };

    // MODIFICARE 1: Creăm o funcție nouă pentru a ne întoarce la "blue pill"
    const handleReturnToBluePill = () => {
        setChoice('blue');
        // Bonus: Facem scroll lin înapoi la începutul paginii
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
                // MODIFICARE 2: Trimitem noua funcție ca o proprietate 'onReturn'
                <CoverLetterSection choice={choice} onReturn={handleReturnToBluePill} />
            )}
        </main>
    );
}