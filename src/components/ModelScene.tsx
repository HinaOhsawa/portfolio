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
import {
  Suspense,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
} from "react";
import { Group } from "three";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { forwardRef } from "react";

// -------------------------------------------
// トーンマッピングの設定
// -------------------------------------------
function ToneMappingSetup() {
  const { gl } = useThree();

  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.2; // 露出の調整
  }, [gl]);

  return null;
}

// -------------------------------------------
// モデルのコンポーネント
// -------------------------------------------
const Model = forwardRef<Group, object>((_, ref) => {
  const group = useRef<Group>(null);
  useImperativeHandle(ref, () => group.current!, []);
  const { scene, animations } = useGLTF("/models/ikea-same01.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions?.["typing"]) {
      actions["typing"].play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} scale={1} />;
});
Model.displayName = "Model";

// -------------------------------------------
// モデルのズームを制御するコンポーネント
// -------------------------------------------
export default function ModelScene() {
  const [enableZoom, setEnableZoom] = useState(false);
  const modelRef = useRef<THREE.Group>(null);
  const raycaster = useRef(new THREE.Raycaster());
  const mouse = useRef(new THREE.Vector2());

  const { camera, gl } = useThree();

  // マウスの動きで位置を記録
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    gl.domElement.addEventListener("mousemove", handleMouseMove);
    return () =>
      gl.domElement.removeEventListener("mousemove", handleMouseMove);
  }, [gl]);

  // 毎フレーム当たり判定を実行
  useFrame(() => {
    if (!modelRef.current) return;

    raycaster.current.setFromCamera(mouse.current, camera);
    const intersects = raycaster.current.intersectObject(
      modelRef.current,
      true
    );
    setEnableZoom(intersects.length > 0);
  });

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
          <Model ref={modelRef} />
        </Center>
      </Suspense>
      <OrbitControls
        autoRotate
        autoRotateSpeed={1.5}
        enablePan={true}
        enableZoom={enableZoom}
        enableRotate={true}
        minDistance={2} // 最小ズーム距離（近づける限界）
        maxDistance={6} // 最大ズーム距離（遠ざける限界）
      />
    </>
  );
}
