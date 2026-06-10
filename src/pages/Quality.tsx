import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerGroup, StaggerItem } from '../components/animations/StaggerGroup';
import { AnimatedCounter } from '../components/animations/AnimatedCounter';
import { ShieldCheck, CheckCircle2, Award, FileCheck, SearchCheck, Building2, FlaskConical, BadgeCheck } from 'lucide-react';

const AnimatedCheckmark = ({ delay = 0 }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 200, damping: 20, delay }}
    className="relative flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full text-primary shrink-0"
  >
    <motion.div
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay + 0.2, ease: "easeOut" }}
    >
      <CheckCircle2 size={24} />
    </motion.div>
  </motion.div>
);

const QualityTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { title: "Raw Material Sourcing", desc: "Rigorous vendor audits and strict API quality assessments before procurement." },
    { title: "In-Process Testing", desc: "Continuous monitoring and sampling during every stage of manufacturing." },
    { title: "Finished Product Analysis", desc: "Comprehensive lab testing to ensure 100% compliance with pharmacopeial standards." },
    { title: "Final Release", desc: "Detailed batch record review and QA sign-off before market distribution." },
  ];

  return (
    <div ref={containerRef} className="relative max-w-3xl mx-auto py-12">
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-slate-100 rounded-full overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-primary w-full"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="space-y-16">
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start pl-24"
          >
            <div className="absolute left-6 w-5 h-5 rounded-full bg-white border-4 border-primary z-10 shadow-[0_0_15px_rgba(15,118,110,0.5)] transform -translate-x-[2px] mt-1.5"></div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group w-full">
              <div className="text-primary font-bold text-sm mb-2 uppercase tracking-wider">Step 0{index + 1}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Quality = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#020617] overflow-hidden selection:bg-primary/20">
      
      {/* Hero Section */}
      <Section className="relative bg-[#020617] pb-24 overflow-hidden border-b border-slate-900">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-slate-950 to-[#020617]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-slate-300 font-medium text-sm mb-6 shadow-sm border border-slate-800">
                  <ShieldCheck size={16} className="text-primary" /> Uncompromising Standards
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                  Quality is Not an Act, <br/>It is Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">Habit.</span>
                </h1>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  At Anjuris Lifesciences, quality assurance is embedded in our DNA. We adhere to the highest international regulatory standards to ensure that every product we manufacture is completely safe, highly effective, and deeply trusted.
                </p>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={36} className="text-primary" />
                    <div>
                      <div className="text-2xl font-bold text-white"><AnimatedCounter value={100} suffix="%" /></div>
                      <div className="text-sm text-slate-400 font-medium">Compliance</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FlaskConical size={36} className="text-accent" />
                    <div>
                      <div className="text-2xl font-bold text-white"><AnimatedCounter value={500} suffix="+" /></div>
                      <div className="text-sm text-slate-400 font-medium">Daily QA Checks</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            {/* Hero Visual: Trust Badge */}
            <FadeIn direction="left" delay={0.2} className="relative hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                {/* Outer Ring */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-accent/80 rounded-full shadow-[0_0_30px_rgba(20,184,166,0.4)]"
                ></motion.div>
                
                {/* Inner Ring */}
                <motion.div 
                  animate={{ rotate: -360 }} 
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-secondary/60 rounded-full"
                ></motion.div>
                
                {/* Central Circle */}
                <div className="absolute inset-8 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full backdrop-blur-3xl flex items-center justify-center shadow-[0_0_50px_rgba(20,184,166,0.4)] border border-white/20 group overflow-hidden">
                  {/* Glowing background behind icon */}
                  <div className="absolute inset-0 bg-primary/40 rounded-full blur-2xl animate-pulse"></div>
                  
                  {/* Icon */}
                  <ShieldCheck size={110} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Four Pillars of Quality */}
      <Section className="relative z-10 -mt-10">
        <Container>
          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "GMP Compliance", desc: "Facilities operating under strict Good Manufacturing Practices." },
              { icon: SearchCheck, title: "Quality Testing", desc: "Rigorous analytical testing at every phase of production." },
              { icon: ShieldCheck, title: "Safety Standards", desc: "Prioritizing patient safety above all other metrics." },
              { icon: FileCheck, title: "Regulatory Compliance", desc: "100% adherence to global pharmacopeial guidelines." }
            ].map((pillar, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition-all duration-300 group">
                  <AnimatedCheckmark delay={0.3 + i * 0.1} />
                  <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3 group-hover:text-primary transition-colors">{pillar.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Certifications Section */}
      <Section className="bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Global Certifications</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our commitment to excellence is validated by recognized international regulatory authorities.</p>
          </FadeIn>

          <StaggerGroup className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "WHO-GMP", desc: "Certified Manufacturing Facility" },
              { name: "ISO 9001:2015", desc: "Quality Management System" },
              { name: "GLP Certified", desc: "Good Laboratory Practice" }
            ].map((cert, i) => (
              <StaggerItem key={i}>
                <div className="group relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] text-center hover:bg-white/20 transition-all duration-500 overflow-hidden cursor-default">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <Award size={48} className="mx-auto text-accent mb-6 group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="text-2xl font-bold text-white mb-2">{cert.name}</h4>
                    <p className="text-slate-300 text-sm">{cert.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Verification Timeline */}
      <Section className="bg-white">
        <Container>
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Quality Control Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">A systematic, foolproof approach to ensuring that every product leaving our facility is flawless.</p>
          </FadeIn>

          <QualityTimeline />
        </Container>
      </Section>

    </div>
  );
};
