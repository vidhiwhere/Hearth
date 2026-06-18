import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home','menu','about','contact'];
      let curr = 'home';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) curr = id;
      });
      setActive(curr);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home','Menu','About','Contact'];

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <a href="#home" className={styles.logo}>
            <span className={styles.logoIcon}>🔥</span>
            <span className={styles.logoText}>Hearth</span>
          </a>

          <ul className={styles.links}>
            {links.map(l => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className={`${styles.link} ${active === l.toLowerCase() ? styles.linkActive : ''}`}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>

          <a href="#menu" className={styles.cta}>Order Now</a>

          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`${styles.overlay} ${mobileOpen ? styles.overlayOpen : ''}`}>
        <button className={styles.overlayClose} onClick={() => setMobileOpen(false)}>✕</button>
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className={styles.overlayLink}
            onClick={() => setMobileOpen(false)}
          >
            {l}
          </a>
        ))}
        <a href="#menu" className={styles.cta} style={{ marginTop: '1.5rem' }} onClick={() => setMobileOpen(false)}>
          Order Now
        </a>
      </div>
    </>
  );
}
