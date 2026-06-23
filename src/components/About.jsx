import { useRef } from 'react';
import styles from './About.module.css';
import useInView from '../hooks/useInView';
import PageHero from './PageHero';

const values = [
  { icon: '🌾', title: 'Locally Sourced', text: 'We partner with farms within 100 km for the freshest flour, eggs, and dairy.' },
  { icon: '⏳', title: 'Slow Fermentation', text: 'Our sourdoughs ferment 18–24 hours, building deep flavour the way nature intended.' },
  { icon: '💚', title: 'Zero Food Waste', text: 'Day-old bread goes to local shelters. All our packaging is 100% compostable.' },
];

export default function About({ standalone }) {
  const imgRef  = useRef(null);
  const txtRef  = useRef(null);
  const imgVis  = useInView(imgRef);
  const txtVis  = useInView(txtRef);

  return (
    <>
    {standalone && (
      <PageHero
        label="Our Story"
        title={<>A Warm Place <em>Called Home</em></>}
        subtitle="Born in 2012 from a small kitchen in Pune, grown into a gathering place built on bread and belonging."
      />
    )}
    <section id="about" className={styles.section}>
      <div className={styles.decor} />
      <div className={styles.container}>

        <div className={styles.grid}>
          {/* Image side */}
          <div
            ref={imgRef}
            className={`${styles.imgWrap} ${imgVis ? styles.imgVisible : ''}`}
          >
            <img src="/about.png" alt="Baker at Hearth crafting fresh bread" className={styles.img} />
            <div className={styles.badge}>
              <span className={styles.badgeYear}>2012</span>
              <span className={styles.badgeText}>Est. with love</span>
            </div>
            <div className={styles.imgAccent} />
          </div>

          {/* Text side */}
          <div
            ref={txtRef}
            className={`${styles.content} ${txtVis ? styles.contentVisible : ''}`}
          >
            <span className={styles.label}>Our Story</span>
            <h2 className={styles.title}>
              A Warm Place<br />
              <em>Called Home</em>
            </h2>

            <p className={styles.body}>
              Hearth was born in 2012 from a small kitchen in Pune, where our founder Priya
              baked her grandmother's recipes every Sunday morning. What started as loaves
              shared with neighbours grew into something far bigger than she imagined —
              a gathering place built on the simple belief that{' '}
              <em>good bread brings people together.</em>
            </p>
            <p className={styles.body} style={{ marginTop: '1rem' }}>
              Today, our team of passionate bakers wakes before sunrise, kneads by hand,
              and lets time do the rest. No shortcuts. No preservatives. Just honest,
              beautiful baking — the way it was always meant to be.
            </p>

            <div className={styles.values}>
              {values.map((v, i) => (
                <div
                  key={i}
                  className={styles.value}
                  style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
                >
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <div>
                    <div className={styles.valueTitle}>{v.title}</div>
                    <div className={styles.valueText}>{v.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
