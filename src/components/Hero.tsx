// components/Hero.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { X, Mail, Phone, Linkedin, Github, RotateCcw } from 'lucide-react';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [ended,  setEnded]  = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleReplay = () => {
        const v = videoRef.current;
        if (!v) return;
        v.currentTime = 0;
        v.play().catch(() => {});
        setEnded(false);
    };

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsModalOpen(false);
            }
        };
        if (isModalOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isModalOpen]);

    return (
        <>
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
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    Contact me
                                </button>
                                <a
                                    href="#proiecte"
                                    className="bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                                >
                                    Look at my projects
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center">
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
                                        className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                                    >
                                        <RotateCcw className="w-5 h-5 text-gray-700" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {isModalOpen && (
                <div
                    onClick={() => setIsModalOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 relative"
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
                            aria-label="Close contact modal"
                        >
                            <X size={24} />
                        </button>
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact</h2>
                        <div className="space-y-4 text-lg">
                            <a href="mailto:cureu.paul.ioan@gmail.com" className="flex items-center gap-4 group">
                                <Mail className="text-gray-500 group-hover:text-black transition-colors" size={24}/>
                                <span className="text-gray-700 group-hover:text-black transition-colors">cureu.paul.ioan@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-4">
                                <Phone className="text-gray-500" size={24}/>
                                <span className="text-gray-700">0749 402 786</span>
                            </div>
                            <a href="https://www.linkedin.com/in/paul-cureu-183863228/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <Linkedin className="text-gray-500 group-hover:text-black transition-colors" size={24}/>
                                <span className="text-gray-700 group-hover:text-black transition-colors">Paul</span>
                            </a>
                            <a href="https://github.com/paulcureu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                                <Github className="text-gray-500 group-hover:text-black transition-colors" size={24}/>
                                <span className="text-gray-700 group-hover:text-black transition-colors">Paul</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}