import { personal } from '../data/Portfolio'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        © {new Date().getFullYear()} {personal.fullName} · Ingeniero en Computación e Informática · Antofagasta, Chile
      </div>
      <div className={styles.right}>
        <a href={`mailto:${personal.email}`}>Email</a>
        <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href="#hero" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          ↑ Volver arriba
        </a>
      </div>
    </footer>
  )
}