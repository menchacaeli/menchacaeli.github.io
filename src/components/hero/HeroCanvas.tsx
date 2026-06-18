import { Canvas } from '@react-three/fiber';
import { useInView } from '../../hooks/useInView';
import { HeroScene } from './HeroScene';
import styles from './HeroCanvas.module.css';

export function HeroCanvas() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  return (
    <div ref={ref} className={styles.canvasWrapper}>
      {inView && (
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <HeroScene />
        </Canvas>
      )}
    </div>
  );
}
