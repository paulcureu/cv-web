// src/components/Hand3D.tsx
// noinspection JSVoidFunctionReturnValueUsed

'use client';

import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Stage } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import {  Group } from 'three';
import { useDrag } from '@use-gesture/react';

const Model = () => {
    const geom = useLoader(STLLoader, '/hand-3d.stl');
    const groupRef = useRef<Group>(null!);
    const isDragging = useRef(false);


    const bind = useDrag(({ down, delta: [dx] }) => {
        isDragging.current = down;
        if (groupRef.current) {
            groupRef.current.rotation.z += dx / 100;
        }
    });

    useFrame(() => {
        if (groupRef.current && !isDragging.current) {

            groupRef.current.rotation.z -= 0.025;
        }
    });

    return (
        <group
            ref={groupRef}
            {...bind()}
            rotation={[
                Math.PI / 2 + (20 * Math.PI / 180),
                0,
                15 * (Math.PI / 180)
            ]}
        >
            <mesh
                geometry={geom}
                scale={0.05}
                position={[-0.4, 0, 0]}
            >
                <meshStandardMaterial color={'gray'} />
            </mesh>
        </group>
    );
};

const Hand3D = () => {
    return (
        <div style={{ height: '400px', width: '100%', cursor: 'grab' }}>
            <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6} shadows={false}>
                        <Model />
                    </Stage>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Hand3D;