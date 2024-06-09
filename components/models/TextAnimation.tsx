import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useRef } from "react";

function TextAnimation() {
  const { nodes } = useGLTF("text-over-torus.glb");
  const { viewport } = useThree();
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.016;
  });

  const materialProps = useControls({
    thickness: { value: 0.3, min: 0, max: 3, step: 0.05 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
    transmission: { value: 0.9, min: 0, max: 3, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    ChromaticAberration: { value: 0.02, min: 0, max: 1 },
    backside: { value: true },
  });

  return (
    <group scale={viewport.width / 6.5}>
      <Text fontSize={0.7} position={[0, 0, -0.5]}>
        Awsome 3D
      </Text>
      <mesh ref={mesh} {...nodes.Base}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

export default TextAnimation;
