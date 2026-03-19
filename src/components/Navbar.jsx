import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#about',      label: 'Sobre mí' },
  { href: '#experience', label: 'Experiencia' },
  { href: '#projects',   label: 'Proyectos' },
  { href: '#skills',     label: 'Habilidades' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={e => handleLink(e, l.href)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className={styles.cta} onClick={e => handleLink(e, '#contact')}>
            Contacto
          </a>
        </li>
      </ul>
      <button
        className={styles.burger}
        onClick={() => setMenuOpen(p => !p)}
        aria-label="Menú"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}