import Link from 'next/link';

export function Header() {
    return (
        <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-10 border-b shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="font-bold text-xl hover:text-gray-700 transition-colors">
                    BalkanCode
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