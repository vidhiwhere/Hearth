import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.06) translateY(${window.scrollY * 0.25}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg} ref={bgRef} />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} /> Artisan · Handcrafted · Fresh Daily
        </div>

        <h1 className={styles.title}>
          Baked with<br />
          <em className={styles.titleItalic}>Light.</em>
        </h1>

        <p className={styles.sub}>Where every loaf holds a little warmth of home.</p>

        <p className={styles.desc}>
          At Hearth, we rise before the sun to craft breads, pastries, and cakes
          using time-honoured techniques and the finest local ingredients.
          Every bite is a moment of comfort.
        </p>

        <div className={styles.actions}>
          <Link to="/menu" className={styles.btnPrimary} id="hero-menu-btn">
            <span>🍞</span> Explore Menu
          </Link>
          <Link to="/about" className={styles.btnGhost} id="hero-story-btn">
            Our Story
          </Link>
        </div>
      </div>

      <Link to="/menu" className={styles.scrollCue} aria-label="Scroll down">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </Link>
    </section>
  );
}
