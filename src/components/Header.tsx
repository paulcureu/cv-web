// src/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    return (
        <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-10 border-b">
            <div className="container mx-auto flex justify-between items-center p-4">

                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/balkancode-logo.png"
                        alt="BalkanCode Logo"
                        width={130}
                        height={130}
                        priority
                    />
                </Link>

                <nav className="flex items-center gap-6 text-gray-600">
                    <Link href="/about" className="hover:text-black transition-colors">
                        About Me
                    </Link>
                    <Link href="/cover-letter" className="hover:text-black transition-colors">
                        Cover Letter
                    </Link>
                </nav>
            </div>
        </header>
    );
}