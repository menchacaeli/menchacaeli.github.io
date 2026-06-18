import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { Tag } from '../ui/Tag';
import { skills } from '../../data/skills';
import styles from './Skills.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
} as const;

export function Skills() {
  const { ref, inView } = useInView<HTMLElement>(0.2);

  return (
    <section id="skills" ref={ref} className={styles.skills}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.p className={styles.overline} variants={fadeUp}>Skills</motion.p>
        <motion.h2 className={styles.heading} variants={fadeUp}>What I build with</motion.h2>
        <motion.div className={styles.grid} variants={fadeUp}>
          {skills.map(({ category, skills: skillList }) => (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.tags}>
                {skillList.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
