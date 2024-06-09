"use client";

import { Canvas } from "@react-three/fiber";
import TextAnimation from "../models/TextAnimation";
import { Environment } from "@react-three/drei";

function TextAnimationScene() {
  return (
    <Canvas>
      <directionalLight intensity={2} position={[0, 3, 2]} />
      <Environment preset="forest" />
      <TextAnimation />
    </Canvas>
  );
}

export default TextAnimationScene;
