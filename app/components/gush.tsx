"use client";

import { Center, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GushText } from "./gush-text";

export function Gush() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <fog attach="fog" color="#eee" near={1} far={10} />
        <OrbitControls />
        <ambientLight intensity={0.3} />
        <directionalLight color="white" position={[0, 10, 5]} />
        <PerspectiveCamera makeDefault position={[0, -0.5, 10]} />
        <Center>
          <GushText />
        </Center>
      </Canvas>
    </div>
  );
}
