import { useRef } from 'react';
import styles from './Testimonials.module.css';
import useInView from '../hooks/useInView';

const reviews = [
  {
    rating: '★★★★★',
    text: '"The sourdough here is life-changing. I drive 40 minutes every Saturday just for a loaf and a caramel latte."',
    avatar: '👩',
    name: 'Anika Sharma',
    info: 'Regular since 2018',
  },
  {
    rating: '★★★★★',
    text: '"Ordered the Rose & Cardamom cake for my daughter\'s birthday. It was not just a cake — it was a memory."',
    avatar: '👨',
    name: 'Rohan Mehta',
    info: 'Loyal customer',
  },
  {
    rating: '★★★★★',
    text: '"Walking into Hearth feels like being wrapped in a warm blanket. The smell, the people, the bread — perfection."',
    avatar: '👩',
    name: 'Divya Iyer',
    info: 'Food blogger',
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);

  return (
    <div className={styles.strip} ref={sectionRef}>
      <div className={styles.pattern} />
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>What Our Guests Say</span>
          <h2 className={styles.title}>Baked into Their Hearts</h2>
        </div>

        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`${styles.card} ${isVisible ? styles.visible : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              <div className={styles.rating}>{r.rating}</div>
              <p className={styles.text}>{r.text}</p>
              <div className={styles.user}>
                <div className={styles.avatar}>{r.avatar}</div>
                <div>
                  <div className={styles.name}>{r.name}</div>
                  <div className={styles.info}>{r.info}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
