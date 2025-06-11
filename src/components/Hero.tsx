// components/Hero.tsx
'use client';

import { useRef, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { RotateCcw } from 'lucide-react';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isReady, setReady] = useState(false);
    const [ended,  setEnded]  = useState(false);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;

        const onCanPlay = () => {
            setReady(true);
            v.play().catch(() => {});
        };

        v.addEventListener('canplay', onCanPlay);
        return () => v.removeEventListener('canplay', onCanPlay);
    }, []);
    const handleReplay = () => {
        const v = videoRef.current;
        if (!v) return;
        v.currentTime = 0;
        v.play().catch(() => {});
        setEnded(false);
    };

    return (
        <main className="flex-grow flex items-center">
            <div className="container mx-auto p-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 flex items-center justify-center md:justify-start h-28 md:h-32">
                            <TypeAnimation
                                sequence={["Hi, I'm Paul.", 2000, "Self-Taught Web Developer.", 2000]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8">
                            If you think math is hard, try web design.
                        </p>

                        <div className="flex justify-center md:justify-start gap-4">
                            <a
                                href="#contact"
                                className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                            >
                                Contact me
                            </a>
                            <a
                                href="#proiecte"
                                className="bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                            >
                                Look at my projects
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="relative w-[300px] h-[300px]">
                            <video
                                ref={videoRef}
                                src="/hero-video.mp4"
                                width={300}
                                height={300}
                                muted
                                autoPlay
                                playsInline
                                preload="auto"
                                className="rounded-full shadow-lg object-cover w-full h-full border-4 border-white"
                                onEnded={() => setEnded(true)}
                            >
                                Your browser does not support the video tag.
                            </video>

                            {ended && (
                                <button
                                    onClick={handleReplay}
                                    aria-label="Replay video"
                                    className="absolute bottom-0 right-0  -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lgflex items-center justify-centerhover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 "
                                >
                                    <RotateCcw className="w-5 h-5 text-gray-700" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
