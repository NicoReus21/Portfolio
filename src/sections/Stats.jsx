import { stats } from '../data/Portfolio'
import styles from './Stats.module.css'

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.grid}>
        {stats.map(({ number, label }) => (
          <div className={styles.item} key={label}>
            <div className={styles.number}>{number}</div>
            <div className={styles.label}>{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}