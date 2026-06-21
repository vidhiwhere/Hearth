import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>

          {/* Column 1: Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <div className={styles.logoIcon}>🔥</div>
              <span className={styles.logoText}>Hearth</span>
            </Link>
            <p className={styles.desc}>
              Artisan baking rooted in tradition, crafted with love. Every loaf, every cake, every morning — made just for you.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialBtn} aria-label="Instagram">📸</a>
              <a href="#" className={styles.socialBtn} aria-label="Facebook">👥</a>
              <a href="#" className={styles.socialBtn} aria-label="Twitter">🐦</a>
              <a href="#" className={styles.socialBtn} aria-label="Pinterest">📌</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Menu Categories */}
          <div className={styles.col}>
            <h4>Our Menu</h4>
            <ul>
              <li><Link to="/menu">Breads &amp; Loaves</Link></li>
              <li><Link to="/menu">Pastries</Link></li>
              <li><Link to="/menu">Celebration Cakes</Link></li>
              <li><Link to="/menu">Coffee &amp; Drinks</Link></li>
              <li><Link to="/menu">Seasonal Specials</Link></li>
            </ul>
          </div>

          {/* Column 4: Visit Info */}
          <div className={styles.col}>
            <h4>Visit Us</h4>
            <ul>
              <li><span className={styles.address}>12 Sunshine Lane, Pune</span></li>
              <li><span>Tue – Sun, 7:30 AM – 8 PM</span></li>
              <li><a href="tel:+919876543210">+91 98765 43210</a></li>
              <li><a href="mailto:hello@hearthbakery.in">hello@hearthbakery.in</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className={styles.bottom}>
          <p>© 2024 Hearth Bakery. Baked with light &amp; love in Pune, India. 🔥</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
