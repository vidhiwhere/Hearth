import { useEffect, useRef, useState } from 'react';
import styles from './Stats.module.css';

const stats = [
  { count: 12,  suffix: '+', label: 'Years of Baking'       },
  { count: 48,  suffix: '',  label: 'Menu Items'             },
  { count: 500, suffix: '+', label: 'Happy Customers Daily'  },
  { count: 100, suffix: '%', label: 'Natural Ingredients'    },
];

function Counter({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setVal(Math.floor(ease * target));
          if (progress < 1) requestAnimationFrame(tick);
          else setVal(target);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.6 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className={styles.num}>{val}{suffix}</span>;
}

export default function Stats() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <div className={styles.item} key={i}>
            <Counter target={s.count} suffix={s.suffix} />
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
