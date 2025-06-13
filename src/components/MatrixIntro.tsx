// src/components/MatrixIntro.tsx

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { Mesh } from 'three';
import { useCursor } from '@react-three/drei';

const Pill = ({ color, onPillClick }: { color: 'red' | 'blue', onPillClick: (choice: 'red' | 'blue') => void }) => {
    const meshRef = useRef<Mesh>(null);

    const [isHovered, setIsHovered] = useState(false);
    useCursor(isHovered);


    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
        }
    });

    return (
        <mesh
            ref={meshRef}
            onClick={() => onPillClick(color)}
            scale={isHovered ? 1.7 : 1.5}
            onPointerOver={(e) => { e.stopPropagation(); setIsHovered(true); }}
            onPointerOut={() => setIsHovered(false)}
        >
            <capsuleGeometry args={[0.3, 0.7, 20, 32]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={isHovered ? 1.2 : 0.5}
                toneMapped={false}
                metalness={0.1}
                roughness={0.1}
            />
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

            <div ref={pillsSectionRef} className="min-h-screen bg-black flex flex-col justify-center items-center text-white py-24 px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center">This is your last chance. After this, there is no turning back.</h2>
                <div className="w-full h-56 md:h-64">
                    <Canvas camera={{ fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <group position={[-1.8, 0, 0]}>
                            <Pill color="blue" onPillClick={onChoiceMade} />
                        </group>
                        <group position={[1.8, 0, 0]}>
                            <Pill color="red" onPillClick={onChoiceMade} />
                        </group>
                    </Canvas>
                </div>
                <div className="w-full max-w-5xl mt-8">
                    <div className="md:hidden text-center space-y-6">
                        <div>
                            <p className="text-lg text-blue-400 font-semibold">You take the blue pill...</p>
                            <p className="mt-1 text-gray-400 text-base">
                                ...and you’ll see the neat progression — tutorials, frameworks, tools. A developer’s journey, explained.
                            </p>
                        </div>
                        <div>
                            <p className="text-lg text-red-500 font-semibold">You take the red pill...</p>
                            <p className="mt-1 text-gray-400 text-base">
                                ...and you’ll see the moments that mattered — the errors I learned from, the late realizations, and the inner war to create something that feels alive.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:flex md:flex-row gap-8 lg:gap-16">
                        <div className="flex-1 text-right">
                            <p className="text-lg text-blue-400 font-semibold">You take the blue pill...</p>
                            <p className="mt-2 text-gray-400">
                                ...and you’ll see the neat progression — tutorials, frameworks, tools. A developer’s journey, explained.
                            </p>
                        </div>
                        <div className="flex-1 text-left">
                            <p className="text-lg text-red-500 font-semibold">You take the red pill...</p>
                            <p className="mt-2 text-gray-400">
                                ...and you’ll see the moments that mattered — the errors I learned from, the late realizations, and the inner war to create something that feels alive.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};