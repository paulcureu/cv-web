// src/app/about/page.tsx

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StorySection } from "@/components/StorySection";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-black">

                <div className="text-white text-center pt-20 pb-12 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">console.log("Me")</h1>

                    <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
                        Code, chess, and sarmale — the Balkan trilogy that raised me.
                    </p>

                    <p className="italic text-gray-500 mt-8">
                        A picture is worth a thousand words.
                    </p>
                </div>

                <StorySection />

            </main>
            <Footer />
        </div>
    );
}