import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

export default function NeuralCore() {
  const meshRef = useRef(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      
      // Subtle hover effect
      meshRef.current.position.y = Math.sin(time) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={1.2}>
      <MeshDistortMaterial
        color="#22d3ee"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0}
        metalness={1}
      />
    </Sphere>
  );
}
