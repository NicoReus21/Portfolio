import { skills } from '../data/Portfolio.js'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className={styles.sectionLabel}>Stack tecnológico</div>
      <h2 className={styles.sectionTitle}>Habilidades</h2>
      <div className={styles.titleAccent} />
      <div className={styles.grid}>
        {skills.map(({ icon, title, items }) => (
          <div className={styles.card} key={title}>
            <div className={styles.head}>
              <div className={styles.icon}>{icon}</div>
              <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.pills}>
              {items.map(({ name, hot }) => (
                <span className={`${styles.pill} ${hot ? styles.hot : ''}`} key={name}>{name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}