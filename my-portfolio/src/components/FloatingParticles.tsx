import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function FloatingParticles({ count = 100 }) {
  const points = useRef<THREE.Points>(null);

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      colors[i * 3] = 0.61; // R
      colors[i * 3 + 1] = 0.30; // G
      colors[i * 3 + 2] = 0.86; // B
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    return geometry;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y += 0.001;
      points.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={points}>
      <primitive object={particlesGeometry} attach="geometry" />
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
} 