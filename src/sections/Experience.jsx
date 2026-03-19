import { experience } from '../data/Portfolio'
import styles from './Experience.module.css'

function renderBullet(text) {
  return <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className={styles.sectionLabel}>// Trayectoria</div>
      <h2 className={styles.sectionTitle}>Experiencia Profesional</h2>
      <div className={styles.titleAccent} />
      <div className={styles.grid}>
        {experience.map((exp) => (
          <div className={styles.card} key={exp.id}>
            <div className={styles.iconWrap}>{exp.icon}</div>
            <div className={styles.body}>
              <div className={styles.header}>
                <div className={styles.role}>{exp.role}</div>
                <div className={styles.period}>{exp.period}</div>
              </div>
              <div className={styles.company}>{exp.company}</div>
              <ul className={styles.bullets}>
                {exp.bullets.map((b, i) => <li key={i}>{renderBullet(b)}</li>)}
              </ul>
              <div className={styles.tags}>
                {exp.tags.map(t => <span className={styles.tag} key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}