import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerGroup, StaggerItem } from '../components/animations/StaggerGroup';
import { AnimatedCounter } from '../components/animations/AnimatedCounter';
import { Microscope, TestTube2, Dna, BrainCircuit, Target, CheckCircle2 } from 'lucide-react';

const AnimatedDnaHelix = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
      <svg viewBox="0 0 800 800" className="w-full h-full max-w-[800px] max-h-[800px]">
        <defs>
          <linearGradient id="dna-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <motion.g 
          animate={{ rotate: 360 }} 
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        >
          {[0, 1].map((strand) => (
            <motion.path
              key={strand}
              d={`M400 100 C${strand === 0 ? '600' : '200'} 250, ${strand === 0 ? '200' : '600'} 550, 400 700`}
              fill="none"
              stroke="url(#dna-glow)"
              strokeWidth="4"
              filter="url(#glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 4, delay: strand * 0.5, ease: "easeInOut" }}
            />
          ))}
          {/* Base Pairs */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.line
              key={`bp-${i}`}
              x1="300" y1={150 + i * 45} x2="500" y2={150 + i * 45}
              stroke="url(#dna-glow)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 0.5 }}
              transition={{ duration: 1, delay: 2 + i * 0.1 }}
              style={{ transformOrigin: "center" }}
            />
          ))}
        </motion.g>
      </svg>
    </div>
  );
};

const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { icon: BrainCircuit, title: "Discovery & Ideation", desc: "Identifying unmet medical needs and conceptualizing novel molecular targets." },
    { icon: Microscope, title: "Pre-Clinical Testing", desc: "Rigorous laboratory testing and in-vitro analysis to ensure safety and biological activity." },
    { icon: TestTube2, title: "Clinical Trials", desc: "Phased human trials monitored by global health authorities to prove efficacy." },
    { icon: Target, title: "Regulatory Approval", desc: "Comprehensive review by regulatory bodies ensuring strict compliance." },
    { icon: CheckCircle2, title: "Global Distribution", desc: "Manufacturing at scale and delivering life-saving medicine worldwide." },
  ];

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-12">
      {/* Scroll-animated line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 md:-ml-[2px] rounded-full overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-accent to-secondary w-full"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="space-y-24">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row items-center"
            >
              {/* Node Icon */}
              <div className="absolute left-8 md:left-1/2 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 shadow-[0_0_30px_rgba(20,184,166,0.3)] flex items-center justify-center text-accent z-10 transform -translate-x-1/2">
                <step.icon size={32} />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:ml-auto'}`}>
                <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl hover:bg-slate-800/50 transition-colors duration-500 relative overflow-hidden group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-accent/10 to-secondary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700"></div>
                  <div className="relative z-10">
                    <div className="text-primary font-bold tracking-widest text-sm mb-2 uppercase">Phase 0{index + 1}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const Research = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#020617] overflow-hidden selection:bg-primary/30">
      
      {/* Hero Section */}
      <Section className="relative min-h-[80vh] flex items-center">
        <AnimatedDnaHelix />
        
        {/* Particle Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-accent font-medium text-sm mb-6">
                <Dna size={16} /> Advanced Therapeutics
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Pioneering the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Medicine</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                Our state-of-the-art R&D centers are driven by a passion for scientific discovery. We constantly innovate to create more effective, safe, and targeted treatments.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Innovation Metrics */}
      <Section className="relative z-10 -mt-20">
        <Container>
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Annual R&D Investment", value: 50, prefix: "$", suffix: "M+" },
              { label: "Active Patents", value: 150, suffix: "+" },
              { label: "Clinical Trials", value: 45, suffix: "+" },
              { label: "Research Scientists", value: 200, suffix: "+" }
            ].map((metric, i) => (
              <StaggerItem key={i}>
                <div className="bg-slate-900/60 backdrop-blur-2xl border border-slate-800 p-8 rounded-[2rem] text-center hover:-translate-y-2 transition-transform duration-500 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-5xl font-bold text-white mb-2 tracking-tight">
                    <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                  </h4>
                  <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">{metric.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Process Timeline */}
      <Section className="relative">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

        <Container>
          <FadeIn className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Innovation Pipeline</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              From molecular conceptualization to global distribution, our research process is defined by rigorous methodology and scientific integrity.
            </p>
          </FadeIn>

          <ProcessTimeline />
        </Container>
      </Section>

    </div>
  );
};
