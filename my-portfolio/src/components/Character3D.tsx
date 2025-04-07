import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

export function Character3D() {
  const characterRef = useRef<Group>(null);
  const { scene } = useGLTF('/character.glb');

  useFrame((state) => {
    if (characterRef.current) {
      characterRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <primitive
      ref={characterRef}
      object={scene}
      scale={2}
      position={[0, -1, 0]}
    />
  );
} 