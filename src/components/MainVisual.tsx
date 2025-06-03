"use client";

import { Canvas } from "@react-three/fiber";
import ModelScene from "./ModelScene";

export default function MainVisual() {
  return (
    <>
      {/* 3D背景 */}
      <div className="relative h-[80vh] w-9/10 mx-auto rounded-4xl overflow-hidden">
        <Canvas className="absolute inset-0 " style={{ background: "#fff394" }}>
          <ModelScene />
        </Canvas>

        {/* コンテンツ */}
        <div className="pointer-events-none w-full absolute top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg font-bold mb-6">YOROSHIKU ONEGAISHIMASU.</p>
        </div>
      </div>
    </>
  );
}
