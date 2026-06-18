import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Tag } from '../ui/Tag';
import styles from './About.module.css';

const PASSIONS = ['Street Art', 'Hip-Hop', 'Three.js', 'Design Systems', 'Open Source'];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function About() {
  const { ref, inView } = useInView<HTMLElement>(0.2);

  return (
    <section id="about" ref={ref} className={styles.about}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p className={styles.overline} variants={fadeUp}>About</motion.p>
        <div className={styles.grid}>
          <motion.div className={styles.bio} variants={fadeUp}>
            <p>
              I'm Eli Menchaca, a frontend engineer based in New Mexico with a passion
              for building expressive, high-performance web experiences. I specialize in
              React, Vue 3, and TypeScript — with a serious interest in 3D on the web
              via Three.js.
            </p>
            <p>
              My work sits at the intersection of engineering and design. I build design
              systems, interactive UIs, and creative experiments that blur the line between
              art and code. Street art and hip-hop inform how I think about authenticity,
              craft, and impact.
            </p>
          </motion.div>
          <motion.div className={styles.passions} variants={fadeUp}>
            {PASSIONS.map((p) => (
              <Tag key={p}>{p}</Tag>
            ))}
          </motion.div>
        </div>
        <motion.div className={styles.footer} variants={fadeUp}>
          <hr className={styles.rule} />
          <p className={styles.location}>Based in New Mexico. Building for the web.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
