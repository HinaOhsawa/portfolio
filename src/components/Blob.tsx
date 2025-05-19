"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function BlobBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Sphere visible args={[1, 64, 64]} scale={2}>
        <MeshDistortMaterial
          color="#fff2a1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          transparent={true}
          opacity={0.5} // 0.0 ~ 1.0 で透明度指定
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
