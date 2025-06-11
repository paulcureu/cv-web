// src/types/three.d.ts

declare module 'three/examples/jsm/loaders/STLLoader' {
    import { Loader, LoadingManager, BufferGeometry } from 'three';

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