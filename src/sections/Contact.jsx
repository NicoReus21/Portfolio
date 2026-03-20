import { personal } from '../data/Portfolio.js'
import styles from './Contact.module.css'

const cards = [
  { icon: '✉️', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: '📞', label: 'Teléfono', value: personal.phone, href: `tel:${personal.phone}` },
  { icon: '💼', label: 'LinkedIn', value: personal.linkedinHandle, href: personal.linkedin },
  { icon: '👤', label: 'GitHub', value: personal.githubHandle, href: personal.github },
]

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.sectionLabel}>Contacto</div>
      <h2 className={`${styles.sectionTitle} ${styles.title}`}>Trabajemos juntos</h2>
      <div className={styles.titleAccent} />
      <p className={styles.desc}>
        Estoy disponible para nuevas oportunidades laborales, proyectos freelance
        o simplemente conversar sobre tecnología. No dudes en escribirme.
      </p>
      <div className={styles.cards}>
        {cards.map(({ icon, label, value, href }) => (
          <a key={label} href={href} className={styles.card}
            target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            <div className={styles.cardIcon}>{icon}</div>
            <div className={styles.cardLabel}>{label}</div>
            <div className={styles.cardValue}>{value}</div>
          </a>
        ))}
      </div>
      <div className={styles.ctas}>
        <a href={`mailto:${personal.email}`} className="btn-warm">Enviar mensaje</a>
        <a href={personal.linkedin} target="_blank" rel="noreferrer"
          className={`btn-ghost ${styles.ghostLight}`}>LinkedIn ↗</a>
      </div>
    </section>
  )
}