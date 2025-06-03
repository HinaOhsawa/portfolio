"use client";

import {
  OrbitControls,
  useGLTF,
  useAnimations,
  PerspectiveCamera,
  Center,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { Group } from "three";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

function ToneMappingSetup() {
  const { gl } = useThree();

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.2; // 露出の調整
  }, [gl]);

  return null;
}

function Model() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF("/models/ikea-same01.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions["typing"]) {
      actions["typing"].play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} scale={1} />;
}

export default function ModelScene() {
  return (
    <>
      <ToneMappingSetup />
      {/* カメラの設定 [x, y, z] */}
      <PerspectiveCamera makeDefault position={[3, 0, 3]} fov={50} />{" "}
      <ambientLight intensity={0.5} />
      {/* <directionalLight position={[5, 5, 5]} castShadow /> */}
      <Suspense fallback={null}>
        {/* <Environment preset="apartment" background /> */}
        <Environment files="models/marry_hall_1k.hdr" />

        <ContactShadows
          position={[0, -1, 0]}
          opacity={0.2}
          blur={2}
          scale={10}
        />
        <Center>
          {/* モデルの中心をワールドの中心に揃える */}
          <Model />
        </Center>
      </Suspense>
      <OrbitControls
        autoRotate
        autoRotateSpeed={1.5}
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
      />
    </>
  );
}
