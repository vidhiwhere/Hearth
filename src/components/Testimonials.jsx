import { useRef, useState } from 'react';
import styles from './Testimonials.module.css';
import useInView from '../hooks/useInView';

const reviews = [
  {
    rating: 5,
    text: 'The sourdough here is life-changing. I drive 40 minutes every Saturday just for a loaf and a caramel latte.',
    name: 'Anika Sharma',
    initials: 'AS',
    info: 'Regular since 2018',
    color: '#C47F2A',
  },
  {
    rating: 5,
    text: 'Ordered the Rose & Cardamom cake for my daughter\'s birthday. It was not just a cake — it was a memory.',
    name: 'Rohan Mehta',
    initials: 'RM',
    info: 'Loyal customer',
    color: '#8B5E3C',
  },
  {
    rating: 5,
    text: 'Walking into Hearth feels like being wrapped in a warm blanket. The smell, the people, the bread — perfection.',
    name: 'Divya Iyer',
    initials: 'DI',
    info: 'Food blogger',
    color: '#A0522D',
  },
  {
    rating: 5,
    text: 'I\'ve tried bakeries across three cities. Nothing comes close to the Butter Croissant here. Pure heaven in every flaky bite.',
    name: 'Kabir Nair',
    initials: 'KN',
    info: 'Pastry enthusiast',
    color: '#B8770A',
  },
  {
    rating: 5,
    text: 'The Masala Chai paired with a warm focaccia on a rainy morning — I\'ve found my happy place. Thank you, Hearth.',
    name: 'Sneha Pillai',
    initials: 'SP',
    info: 'Morning regular',
    color: '#7A5240',
  },
  {
    rating: 5,
    text: 'Ordered a custom wedding cake from Hearth. The team understood exactly what we envisioned. Guests are still talking about it.',
    name: 'Arjun & Meera',
    initials: 'AM',
    info: 'Wedding clients 2023',
    color: '#9B6B35',
  },
];

// Duplicate for seamless infinite loop
const allReviews = [...reviews, ...reviews];

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? styles.starFilled : styles.starEmpty}>★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.quoteIcon}>"</div>
        <Stars count={review.rating} />
      </div>
      <p className={styles.text}>{review.text}</p>
      <div className={styles.user}>
        <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${review.color}, ${review.color}cc)` }}>
          {review.initials}
        </div>
        <div>
          <div className={styles.name}>{review.name}</div>
          <div className={styles.info}>{review.info}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isVisible = useInView(sectionRef);
  const [paused, setPaused] = useState(false);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.bgDecor} />

      <div className={styles.container}>
        {/* Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
          <span className={styles.label}>What Our Guests Say</span>
          <h2 className={styles.title}>
            Baked into <em>Their Hearts</em>
          </h2>
          <p className={styles.subtitle}>
            Over 500 happy guests every morning. Here's what they tell their friends.
          </p>
        </div>

        {/* Rating summary bar */}
        <div className={`${styles.ratingBar} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ratingScore}>4.9</div>
          <div className={styles.ratingDetails}>
            <Stars count={5} />
            <span className={styles.ratingCount}>Based on 800+ reviews</span>
          </div>
          <div className={styles.platforms}>
            <span className={styles.platform}>📍 Google</span>
            <span className={styles.platform}>📘 Facebook</span>
            <span className={styles.platform}>🍽️ Zomato</span>
          </div>
        </div>
      </div>

      {/* Infinite marquee track */}
      <div
        className={styles.marqueeWrap}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={`${styles.marqueeTrack} ${paused ? styles.paused : ''}`}>
          {allReviews.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
    </section>
  );
}
