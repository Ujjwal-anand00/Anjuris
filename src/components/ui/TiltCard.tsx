import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '../../lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ ease: "easeOut" }}
      className={cn("relative group cursor-pointer", className)}
    >
      {/* Glow Effect behind the card */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur opacity-0 group-hover:opacity-60 transition duration-500"></div>
      
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/0 rounded-3xl z-10 pointer-events-none"></div>

      <div 
        className="relative h-full bg-white rounded-3xl p-8 shadow-xl border border-slate-100 overflow-hidden"
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
      >
        {/* Subtle animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Inner Content translated forward for 3D effect */}
        <div style={{ transform: "translateZ(40px)" }} className="relative z-20 h-full flex flex-col">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
