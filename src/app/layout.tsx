import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BalkanCode",
    description: "Portofoliul personal al lui Paul C., un dezvoltator pasionat.",
    icons: {
        icon: '/balkancode-logo-ico.png', // <-- Asigură-te că numele fișierului și calea sunt corecte
        // Poți adăuga și alte dimensiuni sau tipuri de iconițe dacă vrei
        // apple: '/apple-icon.png',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ro">
        <body className={`${inter.className} antialiased`}>
        {children}
        </body>
        </html>
    );
}