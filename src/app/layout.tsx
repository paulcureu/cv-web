import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Încarcă fontul Inter de la Google
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Paul C. - Software Developer",
    description: "Portofoliul personal al lui Paul C., un dezvoltator pasionat.",
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