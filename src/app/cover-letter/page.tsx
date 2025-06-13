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
            {!choice ? (
                <MatrixIntro onChoiceMade={handleChoice} />
            ) : (
                <CoverLetterSection />
            )}
        </main>
    );
}