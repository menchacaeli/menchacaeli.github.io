import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Card } from '../ui/Card';
import { certifications } from '../../data/certifications';
import { fadeUp } from '../../lib/animations';
import styles from './Certifications.module.css';

export function Certifications() {
  const { ref, inView } = useInView<HTMLElement>(0.2);

  return (
    <section id="certifications" ref={ref} className={styles.certifications}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p className={styles.overline} variants={fadeUp}>Credentials</motion.p>
        <motion.h2 className={styles.heading} variants={fadeUp}>Certifications</motion.h2>
        <motion.div
          className={styles.grid}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {certifications.map((cert) => {
            const cardContent = (
              <Card>
                <p className={styles.certName}>{cert.name}</p>
                <div className={styles.meta}>
                  <span className={styles.issuer}>{cert.issuer}</span>
                  <span className={styles.date}>{cert.date}</span>
                </div>
              </Card>
            );
            return (
              <motion.div key={cert.name} variants={fadeUp} className={styles.item}>
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
