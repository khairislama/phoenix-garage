"use client";

import { Suspense, useEffect, useRef } from "react";
import {
  Html,
  ScrollControls,
  useProgress,
  Stats,
  Center,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import Cube from "../models/Cube";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function PhoenixScene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <Stats showPanel={0} />
      <directionalLight position={[-5, -5, 5]} intensity={2} />
      <Suspense fallback={<Loader />}>
        <Center>
          <ScrollControls damping={0.5} pages={3}>
            <Cube />
          </ScrollControls>
        </Center>
      </Suspense>
    </Canvas>
  );
}
