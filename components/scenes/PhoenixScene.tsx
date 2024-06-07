"use client";

import { Suspense, useEffect, useRef } from "react";
import { Html, ScrollControls, useProgress, Stats } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import PhoenixModel from "../models/Phoenix";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

function CameraControls() {
  const { camera } = useThree();

  // Set initial camera position and look at the model
  useEffect(() => {
    camera.position.set(0, 0, 500); // Adjust this position to move the camera back
    camera.lookAt(0, 0, 0); // Ensure the camera looks at the center of the scene
  }, [camera]);

  // Optionally, animate the camera if needed
  useFrame(() => {
    camera.position.x = Math.sin(Date.now() / 1000) * 5;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function PhoenixScene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <Stats showPanel={0} />
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <CameraControls />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={3}>
          <PhoenixModel />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
