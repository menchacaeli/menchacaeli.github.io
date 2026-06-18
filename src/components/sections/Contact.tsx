import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Button } from '../ui/Button';
import { fadeUp } from '../../lib/animations';
import styles from './Contact.module.css';

export function Contact() {
  const { ref, inView } = useInView<HTMLElement>(0.3);

  return (
    <section id="contact" ref={ref} className={styles.contact}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.h2 className={styles.heading} variants={fadeUp}>
          Let's build something.
        </motion.h2>
        <motion.p className={styles.subline} variants={fadeUp}>
          Open to freelance projects, contracts, and collaborations.
        </motion.p>
        <motion.div className={styles.ctas} variants={fadeUp}>
          <Button variant="primary" href="mailto:menchacaeli@gmail.com">
            Email Me
          </Button>
          <Button variant="secondary" href="https://github.com/menchacaeli">
            GitHub
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
