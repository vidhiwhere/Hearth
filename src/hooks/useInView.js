import { useState, useEffect } from 'react';

export default function useInView(ref, options = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Once in view, we can stop observing if we only want one-time animation
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return inView;
}
