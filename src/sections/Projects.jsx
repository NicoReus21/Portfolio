import { projects } from '../data/Portfolio.js'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <div className={styles.sectionLabel}>Portafolio</div>
      <h2 className={styles.sectionTitle}>Proyectos</h2>
      <div className={styles.titleAccent} />
      <div className={styles.grid}>
        {projects.map((project) => (
          <div className={styles.card} key={project.id}>
            <div className={styles.banner} />
            <div className={styles.body}>
              <div className={styles.top}>
                <div className={styles.iconWrap}>{project.icon}</div>
                <div className={styles.links}>
                  {project.github
                    ? <a href={project.github} target="_blank" rel="noreferrer" className={styles.link}>GitHub ↗</a>
                    : <span className={`${styles.link} ${styles.private}`}>Privado</span>}
                  {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className={styles.link}>Demo ↗</a>}
                </div>
              </div>
              <div className={styles.name}>{project.name}</div>
              <p className={styles.desc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(t => <span className={styles.tag} key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}