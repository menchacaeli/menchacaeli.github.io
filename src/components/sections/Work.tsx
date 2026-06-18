import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { projects } from '../../data/projects';
import { fadeUp } from '../../lib/animations';
import styles from './Work.module.css';

export function Work() {
  const { ref, inView } = useInView<HTMLElement>(0.1);

  return (
    <section id="work" ref={ref} className={styles.work}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.p className={styles.overline} variants={fadeUp}>Work</motion.p>
        <motion.h2 className={styles.heading} variants={fadeUp}>Selected Work</motion.h2>
        <motion.div className={styles.grid} variants={{ visible: { transition: { staggerChildren: 0.07 } } }}>
          {projects.map((project) => (
            <motion.div key={project.name} variants={fadeUp} className={styles.item}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                <Card>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <Tag>{project.language}</Tag>
                  </div>
                  <p className={styles.description}>{project.description}</p>
                  <span className={styles.githubLink}>View on GitHub →</span>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
