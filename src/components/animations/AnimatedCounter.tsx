import { useEffect, useState, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter = ({ value, duration = 2, delay = 0, suffix = '', prefix = '' }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
        onUpdate: (val) => {
          setDisplayValue(Math.floor(val));
        }
      });
      return controls.stop;
    }
  }, [inView, value, duration, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  );
};
