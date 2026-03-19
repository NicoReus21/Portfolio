import { personal } from '../data/Portfolio'
import styles from './Hero.module.css'

export default function Hero() {
  const scroll = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.left}>
        <div className={`${styles.eyebrow} fade-up`}>
          <div className={styles.line} />
          <span>Portafolio profesional · 2025</span>
        </div>

        <h1 className={`${styles.name} fade-up delay-1`}>
          {personal.name.split(' ')[0]}<br />
          <span>{personal.name.split(' ')[1]}</span>
        </h1>

        <p className={`${styles.title} fade-up delay-2`}>{personal.title}</p>

        <p className={`${styles.desc} fade-up delay-3`}>
          Desarrollo soluciones Full Stack enfocadas en resolver necesidades reales del negocio.
          Experiencia en ERPs institucionales, APIs RESTful y automatización con Microsoft 365.
          Inglés C1 · Antofagasta, Chile.
        </p>

        <div className={`${styles.ctas} fade-up delay-4`}>
          <button className="btn-warm" onClick={() => scroll('#experience')}>
            Ver experiencia
          </button>
          <button className="btn-ghost" onClick={() => scroll('#contact')}>
            Contactarme
          </button>
          <a className="btn-ghost" href={personal.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>

      <div className={`${styles.right} fade-up delay-2`}>
        <div className={styles.card}>
          <div className={styles.cardTop} />
          <div className={styles.available}>
            <span className={styles.dot} />
            Disponible para oportunidades
          </div>
          <div className={styles.avatar}>NC</div>
          <div className={styles.cardName}>{personal.fullName}</div>
          <div className={styles.cardRole}>Ing. Computación e Informática · UCN</div>
          <hr className={styles.divider} />
          <div className={styles.info}>
            {[
              { icon: '📍', text: personal.location },
              { icon: '✉️', text: personal.email, href: `mailto:${personal.email}` },
              { icon: '📞', text: personal.phone, href: `tel:${personal.phone}` },
              { icon: '💼', text: personal.githubHandle, href: personal.github },
            ].map(({ icon, text, href }) => (
              <div className={styles.row} key={text}>
                <div className={styles.icon}>{icon}</div>
                {href
                  ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{text}</a>
                  : <span>{text}</span>
                }
              </div>
            ))}
          </div>
          <hr className={styles.divider} />
          <div className={styles.tags}>
            {['Laravel', 'Angular', 'React', 'Node.js', 'PowerApps', 'JWT'].map(t => (
              <span className={styles.tag} key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.ornament} />
    </section>
  )
}