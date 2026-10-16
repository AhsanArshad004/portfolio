import { useEffect, useRef } from 'react';

export function useAnimateOnScroll(options = {}) {
  const ref = useRef(null);
  const { threshold = 0.3 } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    }, { threshold });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
