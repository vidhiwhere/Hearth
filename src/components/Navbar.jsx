import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const links = [
  { label: 'Home',    to: '/'        },
  { label: 'Menu',    to: '/menu'    },
  { label: 'About',   to: '/about'   },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <NavLink to="/" className={styles.logo}>
            <span className={styles.logoIcon}>🔥</span>
            <span className={styles.logoText}>Hearth</span>
          </NavLink>

          <ul className={styles.links}>
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ''}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/contact" className={styles.cta}>Order Now</NavLink>

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
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) =>
              `${styles.overlayLink} ${isActive ? styles.overlayLinkActive : ''}`
            }
          >
            {l.label}
          </NavLink>
        ))}
        <NavLink to="/contact" className={styles.cta} style={{ marginTop: '1.5rem' }}>
          Order Now
        </NavLink>
      </div>
    </>
  );
}
