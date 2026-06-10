import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DnaStrand = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 100 400" className={className} preserveAspectRatio="none">
      <defs>
        <linearGradient id="dna-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
      </defs>
      
      {/* Strand 1 */}
      <motion.path 
        d="M50 0 C80 25 80 75 50 100 C20 125 20 175 50 200 C80 225 80 275 50 300 C20 325 20 375 50 400" 
        fill="none" 
        stroke="url(#dna-grad)" 
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      {/* Strand 2 */}
      <motion.path 
        d="M50 0 C20 25 20 75 50 100 C80 125 80 175 50 200 C20 225 20 275 50 300 C80 325 80 375 50 400" 
        fill="none" 
        stroke="url(#dna-grad)" 
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
      />
      
      {/* Connecting bonds */}
      {[25, 50, 75, 125, 150, 175, 225, 250, 275, 325, 350, 375].map((y, i) => (
        <motion.line 
          key={i}
          x1="35" y1={y} x2="65" y2={y} 
          stroke="url(#dna-grad)" 
          strokeWidth="1.5"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 0.5, scaleX: 1 }}
          transition={{ duration: 1, delay: 1 + i * 0.1 }}
        />
      ))}
    </svg>
  );
};

export const HeroBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020617] pointer-events-none z-0">
      {/* Medical glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[180px] mix-blend-screen opacity-60" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Floating Molecular Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full shadow-[0_0_15px_rgba(20,184,166,0.8)]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: Math.random() > 0.5 ? '#14B8A6' : '#2563EB',
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Parallax DNA Strands */}
      <motion.div style={{ y: y1 }} className="absolute -right-20 top-[-10%] opacity-30 blur-[2px]">
        <DnaStrand className="w-[300px] h-[1200px]" />
      </motion.div>
      
      <motion.div style={{ y: y2 }} className="absolute -left-32 top-[20%] opacity-20 rotate-12 blur-[4px]">
        <DnaStrand className="w-[400px] h-[1500px]" />
      </motion.div>

      {/* High-tech grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
    </div>
  );
};
