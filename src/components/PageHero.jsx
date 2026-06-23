import styles from './PageHero.module.css';

export default function PageHero({ label, title, subtitle }) {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
