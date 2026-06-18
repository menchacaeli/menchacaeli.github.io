import { motion } from 'framer-motion';
import { HeroCanvas } from './HeroCanvas';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <HeroCanvas />
      <motion.div
        className={styles.availability}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className={styles.dot} />
        <span className={styles.availabilityText}>Available for freelance work</span>
      </motion.div>
      <motion.div
        className={styles.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </motion.div>
    </section>
  );
}
