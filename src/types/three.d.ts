// src/types/three.d.ts

declare module 'three/examples/jsm/loaders/STLLoader' {
    // Am adăugat BufferGeometry la import
    import { Loader, LoadingManager, BufferGeometry } from 'three';

    // Aici este modificarea cheie: specificăm că Loader produce un BufferGeometry
    export class STLLoader extends Loader<BufferGeometry> {
        constructor(manager?: LoadingManager);

        load(
            url: string,
            onLoad: (geometry: BufferGeometry) => void,
            onProgress?: (event: ProgressEvent) => void,
            onError?: (event: ErrorEvent) => void
        ): void;

        parse(data: ArrayBuffer | string): BufferGeometry;
    }
}