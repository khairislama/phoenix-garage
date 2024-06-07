"use client";

import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { AnimationAction, Group, MathUtils } from "three";

useGLTF.preload("/exploding_cube.glb");

export default function Cube() {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 20 });
  const group = useRef<Group>(null);
  const { nodes, animations, scene } = useGLTF("/exploding_cube.glb");
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  //   useEffect(() => {
  //     //@ts-ignore
  //     actions["Take 001"].play().paused = true;
  //   }, [actions]);
  useFrame(({ camera }) => {
    group.current?.rotateY(MathUtils.degToRad(0.2));
    Object.keys(actions).forEach((key) => {
      const action = actions[key] as AnimationAction;
      action.play().paused = true;
      action.time = spring.get();
    });
  });

  return (
    <group
      onPointerUp={() => motionVal.set(0)}
      onPointerDown={() => motionVal.set(0.8)}
      ref={group}
    >
      <primitive object={scene} />
    </group>
  );
}
