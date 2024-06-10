import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

let frame = 1;

function TextAnimation() {
  const { nodes } = useGLTF("text-over-torus.glb");
  const { viewport } = useThree();
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    mesh.current.rotation.y += 0.008;

    if (frame > 480) {
      mesh.current.rotation.x += 0.012;
    }

    frame++;
  });

  const materialProps = useControls({
    thickness: { value: 0.3, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
    transmission: { value: 0.9, min: 0, max: 3, step: 0.1 },
    ior: { value: 0.8, min: 0, max: 3, step: 0.1 },
    ChromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 6.5}>
      <Text fontSize={1} position={[0, 0, -0.5]}>
        Awesome 3D
      </Text>
      <mesh ref={mesh} {...nodes.Base} rotation={[0.1, 0, 0]}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

export default TextAnimation;
