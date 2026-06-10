import React from 'react';
import { cn } from '../../lib/utils';

export const Section = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";
