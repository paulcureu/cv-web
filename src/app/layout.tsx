import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BalkanCode",
    description: "The personal portfolio of BalkanCode — a web developer crafting clarity, discipline, and purpose through code.",
    icons: {
        icon: '/balkancode-logo-ico.png',
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