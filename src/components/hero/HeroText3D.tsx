import { useRef } from 'react';
import { Text3D, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import type { Group } from 'three';
import type { MutableRefObject } from 'react';

interface HeroText3DProps {
  mousePosition: MutableRefObject<{ x: number; y: number }>;
}

export function HeroText3D({ mousePosition }: HeroText3DProps) {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    const { x, y } = mousePosition.current;
    groupRef.current.rotation.x += (y * 0.08 - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (x * 0.08 - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <Center>
        <group>
          <Text3D
            font="/fonts/helvetiker_bold.typeface.json"
            size={0.7}
            height={0.12}
            curveSegments={12}
          >
            Eli Menchaca
            <meshStandardMaterial color="#f0f0f0" />
          </Text3D>
          <Text3D
            font="/fonts/helvetiker_bold.typeface.json"
            size={0.35}
            height={0.06}
            curveSegments={12}
            position={[0, -0.9, 0]}
          >
            Frontend Engineer
            <meshStandardMaterial color="#2563eb" emissive="#2563eb" emissiveIntensity={0.3} />
          </Text3D>
        </group>
      </Center>
    </group>
  );
}
