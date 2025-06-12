// src/app/cover-letter/page.tsx

'use client';

import { useState } from 'react';
import { CoverLetterSection } from "@/components/CoverLetterSection";
import { MatrixIntro } from "@/components/MatrixIntro";

export default function CoverLetterPage() {
    // State pentru a ști ce a ales utilizatorul
    const [choice, setChoice] = useState<'red' | 'blue' | null>(null);

    // Funcție care va fi apelată din MatrixIntro când se alege o pastilă
    const handleChoice = (madeChoice: 'red' | 'blue') => {
        setChoice(madeChoice);
    };

    return (
        <main>
            {/*
        Dacă nu s-a făcut nicio alegere, afișăm intro-ul.
        Altfel, afișăm scrisoarea de intenție.
      */}
            {!choice ? (
                <MatrixIntro onChoiceMade={handleChoice} />
            ) : (
                <CoverLetterSection />
            )}
        </main>
    );
}