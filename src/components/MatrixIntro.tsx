// src/components/MatrixIntro.tsx

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import type { Mesh } from 'three';

// Componenta Pill rămâne neschimbată...
const Pill = ({ color, onPillClick }: { color: 'red' | 'blue', onPillClick: (choice: 'red' | 'blue') => void }) => {
    const meshRef = useRef<Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.x += 0.005;
        }
    });

    return (
        <mesh ref={meshRef} onClick={() => onPillClick(color)} scale={1.5}>
            <capsuleGeometry args={[0.3, 0.7, 4, 16]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} toneMapped={false} />
        </mesh>
    );
};


export const MatrixIntro = ({ onChoiceMade }: { onChoiceMade: (choice: 'red' | 'blue') => void }) => {
    const [videoFinished, setVideoFinished] = useState(false);
    const pillsSectionRef = useRef<HTMLDivElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const toggleSound = () => {
        setIsMuted(currentMutedState => !currentMutedState);
        setIsButtonVisible(false);
    };

    const handleVideoEnd = () => {
        setVideoFinished(true);
    };

    useEffect(() => {
        if (videoFinished) {
            pillsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [videoFinished]);

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-black z-40 transition-opacity duration-1000 ${videoFinished ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            >
                <video
                    src="/matrix-scene.mp4"
                    autoPlay
                    muted={isMuted}
                    playsInline
                    onEnded={handleVideoEnd}
                    className="w-full h-full object-contain"
                />

                {isButtonVisible && (
                    <button
                        onClick={toggleSound}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white/20 text-white font-semibold py-2 px-4 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                        {isMuted ? 'Sound On' : 'Sound Off'}
                    </button>
                )}
            </div>

            <div ref={pillsSectionRef} className="h-screen bg-black flex flex-col justify-center items-center text-white">
                <h2 className="text-4xl font-bold mb-16 text-center px-4">This is your last chance. After this, there is no turning back.</h2>
                <div className="w-full h-64">
                    <Canvas camera={{ fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <group position={[-2.5, 0, 0]}>
                            <Pill color="blue" onPillClick={onChoiceMade} />
                        </group>
                        <group position={[2.5, 0, 0]}>
                            <Pill color="red" onPillClick={onChoiceMade} />
                        </group>
                    </Canvas>
                </div>

                {/* --- AICI ESTE SECȚIUNEA RESPONSIVĂ NOUĂ --- */}
                <div className="w-full max-w-5xl mt-8 px-4 flex flex-col md:flex-row gap-8 lg:gap-16">
                    {/* Descrierea pentru pastila albastră */}
                    <div className="flex-1 text-center md:text-right">
                        <p className="text-lg text-blue-400 font-semibold">You take the blue pill...</p>
                        <p className="mt-2 text-gray-400">
                            ...și vei vedea povestea mea structurată — cum am învățat, am construit aplicații reale și am urmat cele mai bune practici.
                        </p>
                    </div>

                    {/* Descrierea pentru pastila roșie */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-lg text-red-500 font-semibold">You take the red pill...</p>
                        <p className="mt-2 text-gray-400">
                            ...și vei vedea creativitatea brută — experimentele, soluțiile neconvenționale și pasiunea care mă motivează să construiesc.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};