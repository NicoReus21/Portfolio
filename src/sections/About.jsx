import { personal, education, languages } from '../data/Portfolio'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={`section section--alt`} id="about">
      <div className={styles.sectionLabel}>Sobre mí</div>
      <h2 className={styles.sectionTitle}>Quién soy</h2>
      <div className={styles.titleAccent} />
      <div className={styles.grid}>
        <div className={styles.text}>
          {personal.bio.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
          <div className={styles.badges}>
            {[
              { icon: '📍', label: personal.location },
              { icon: '🎓', label: `UCN ${education.period}` },
              { icon: '🌐', label: 'Inglés C1 EF SET' },
              { icon: '💼', label: 'Disponible' },
            ].map(({ icon, label }) => (
              <div className={styles.badge} key={label}><span>{icon}</span> {label}</div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.asideCard}>
            <h4>Educación</h4>
            <div className={styles.eduDegree}>{education.degree}</div>
            <div className={styles.eduSchool}>{education.school}</div>
            <div className={styles.eduPeriod}>{education.period} · {education.location}</div>
          </div>
          <div className={styles.asideCard}>
            <h4>Idiomas</h4>
            {languages.map(({ name, level, percent }) => (
              <div className={styles.langItem} key={name}>
                <div className={styles.langRow}>
                  <div className={styles.langName}>{name}</div>
                  <div className={styles.langLevel}>{level}</div>
                </div>
                <div className={styles.langBar}>
                  <div className={styles.langFill} style={{ width: `${percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}