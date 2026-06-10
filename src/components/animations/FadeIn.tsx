import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export const FadeIn = React.forwardRef<HTMLDivElement, FadeInProps>(
  ({ className, delay = 0, direction = 'up', duration = 0.5, children, ...props }, ref) => {
    const directions = {
      up: { y: 40, x: 0 },
      down: { y: -40, x: 0 },
      left: { x: 40, y: 0 },
      right: { x: -40, y: 0 },
      none: { x: 0, y: 0 }
    };

    return (
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          ...directions[direction]
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration,
          delay,
          ease: "easeOut"
        }}
        className={cn("", className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

FadeIn.displayName = "FadeIn";
