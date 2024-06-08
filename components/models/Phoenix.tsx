"use client";

import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/phoenix_bird.glb");

export default function PhoenixModel() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF("/phoenix_bird.glb");
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    //@ts-ignore
    actions["Take 001"].play().paused = true;
  }, [actions]);
  useFrame(() => {
    if (actions) {
      const action = actions["Take 001"]!;
      const clipDuration = action.getClip().duration;
      action.time = (clipDuration * scroll.offset) / 1;

      // Move the model from right to left
      if (group.current) {
        group.current.position.x = 10 - 20 * scroll.offset; // Adjust this range as needed
        group.current.rotation.y = Math.PI * scroll.offset; // Adjust rotation if needed
      }
    }
  });

  return (
    <group ref={group} position={[10, -1.5, -10]} scale={[0.5, 0.5, 0.5]}>
      <primitive object={scene} />
    </group>
  );
}
