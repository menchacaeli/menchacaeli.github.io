import { Suspense } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { HeroText3D } from './HeroText3D';

export function HeroScene() {
  const mousePosition = useMousePosition();

  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[-4, 4, 4]} color="#2563eb" intensity={3} />
      <pointLight position={[4, -2, 6]} color="#ffffff" intensity={0.8} />
      <Suspense fallback={null}>
        <HeroText3D mousePosition={mousePosition} />
      </Suspense>
    </>
  );
}
