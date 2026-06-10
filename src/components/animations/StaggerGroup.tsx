import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface StaggerGroupProps extends HTMLMotionProps<"div"> {
  staggerDelay?: number;
}

export const StaggerGroup = React.forwardRef<HTMLDivElement, StaggerGroupProps>(
  ({ className, staggerDelay = 0.1, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: staggerDelay,
            },
          },
          hidden: {},
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
StaggerGroup.displayName = "StaggerGroup";

export const StaggerItem = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
StaggerItem.displayName = "StaggerItem";
