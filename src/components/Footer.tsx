import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-center p-6 border-t text-sm text-gray-500">
            <p>© {currentYear} Paul C. Toate drepturile rezervate.</p>
            <div className="flex justify-center gap-4 mt-2">
                <Link href="https://github.com/paulcureu" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    GitHub
                </Link>
                <Link href="https://www.linkedin.com/in/paul-cureu-183863228/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn
                </Link>
            </div>
        </footer>
    );
}