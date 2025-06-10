// src/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image'; // Importăm componenta Image

export function Header() {
    return (
        <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-10 border-b">
            <div className="container mx-auto flex justify-between items-center p-4">

                {/* Am înlocuit textul cu un link ce conține logo-ul și numele */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/balkancode-logo.png" // <-- Asigură-te că numele corespunde cu fișierul tău
                        alt="BalkanCode Logo"
                        width={130}
                        height={130}
                        priority
                    />
                </Link>

                <nav className="flex items-center gap-6 text-gray-600">
                    <Link href="#proiecte" className="hover:text-black transition-colors">
                        Proiecte
                    </Link>
                    <Link href="#competente" className="hover:text-black transition-colors">
                        Competențe
                    </Link>
                </nav>
            </div>
        </header>
    );
}