import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
          {
            "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg": variant === 'primary',
            "bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg": variant === 'secondary',
            "border-2 border-primary text-primary hover:bg-primary/5": variant === 'outline',
            "hover:bg-slate-100 text-slate-700": variant === 'ghost',
            "h-9 px-4 text-sm": size === 'sm',
            "h-12 px-8 text-base": size === 'md',
            "h-14 px-10 text-lg": size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
