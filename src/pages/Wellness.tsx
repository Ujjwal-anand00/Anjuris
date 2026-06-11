import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerGroup, StaggerItem } from '../components/animations/StaggerGroup';
import { TiltCard } from '../components/ui/TiltCard';
import { Button } from '../components/ui/Button';
import {
  HeartPulse, ShieldCheck, Activity, Leaf, Zap, Brain,
  Target, SearchCheck, CheckCircle2, Dna,
  TestTube2, Bone, Users
} from 'lucide-react';

const AbstractWellnessGraphics = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen" />
    <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen" />
    {/* Floating Particles */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-accent/40 shadow-[0_0_10px_rgba(20,184,166,0.8)]"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          y: [null, Math.random() * -200],
          x: [null, Math.random() * 100 - 50],
          opacity: [0, 0.8, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 5,
        }}
      />
    ))}
  </div>
);

const WellnessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { title: "Research & Development", desc: "Identifying optimal botanical extracts and micronutrient synergies." },
    { title: "Quality Testing", desc: "Rigorous purity checks and standardization of active ingredients." },
    { title: "Safety Validation", desc: "Comprehensive clinical evaluation for tolerability and efficacy." },
    { title: "Product Excellence", desc: "Manufacturing in highly regulated, GMP-certified facilities." },
    { title: "Customer Well-being", desc: "Delivering proactive health solutions to communities globally." },
  ];

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-12">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-ml-[2px] rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent to-primary w-full"
          style={{ height: lineHeight }}
        />
      </div>

      <div className="space-y-16">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex flex-col md:flex-row items-center"
            >
              <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-accent shadow-[0_0_15px_rgba(20,184,166,0.5)] z-10 transform -translate-x-1/2"></div>

              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-100 dark:border-slate-800 p-8 rounded-3xl hover:shadow-xl hover:border-accent/30 transition-all duration-300">
                  <div className="text-accent font-bold text-sm mb-2 uppercase tracking-wider">Phase 0{index + 1}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const Wellness = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden selection:bg-accent/30">

      {/* HERO SECTION */}
      <Section className="relative min-h-[90vh] pt-32 flex items-center bg-[#020617] border-b border-slate-900">
        <AbstractWellnessGraphics />

        {/* Floating background illustration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMxNEI4QTYiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC41Ij48Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjE1MCIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iMTAwIi8+PGNpcmNoZSBjeD0iMjAwIiBjeT0iMjAwIiByPSI1MCIvPjwvZz48L3N2Zz4=')] bg-no-repeat bg-center bg-contain"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <div className="inline-flex items-center mt-20 gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm mb-6 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                <Leaf size={16} /> Preventive Healthcare
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Empowering Health Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Science & Nutrition</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
                At Anjuris Lifesciences, we believe prevention is the foundation of wellness. Our scientifically formulated nutraceutical products are designed to support healthy living, strengthen immunity, and promote overall well-being.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  {/* <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white shadow-[0_0_20px_rgba(20,184,166,0.4)] border-none">
                    Explore Wellness Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button> */}
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full text-white border-white/20 hover:bg-white/10" onClick={() => navigate('/contact')}>
                    Contact Us
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ABOUT NUTRACEUTICALS */}
      <Section className="relative bg-white dark:bg-slate-950 py-24 z-10">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-3">What Are Nutraceuticals?</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Bridging the Gap Between <br />Nutrition and Medicine
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Nutraceuticals offer scientifically developed products that support health, wellness, and disease prevention. Extracted from natural food sources, these specialized formulations provide physiological benefits extending far beyond basic nutritional value.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Our wellness solutions are meticulously designed to complement modern lifestyles, providing the essential biological building blocks your body needs to maintain homeostasis and thrive.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
                <div className="relative h-full w-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl border border-white/40 dark:border-slate-800 rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-10 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl"
                  >
                    <Leaf size={32} className="text-accent" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 right-10 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-xl"
                  >
                    <Dna size={32} className="text-primary" />
                  </motion.div>
                  <div className="w-48 h-48 rounded-full border-4 border-dashed border-accent/40 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-[0_0_40px_rgba(20,184,166,0.5)] text-white">
                      <Activity size={48} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* OUR WELLNESS FOCUS AREAS */}
      <Section className="bg-slate-50 dark:bg-slate-900 relative">
        <Container>
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Wellness Focus Areas</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Targeted nutritional support tailored to optimize every aspect of human health.</p>
          </FadeIn>

          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
            {[
              { icon: ShieldCheck, title: "Immunity Support", desc: "Fortify your body's natural defenses with concentrated micronutrients." },
              { icon: Zap, title: "Energy & Vitality", desc: "Combating modern fatigue with scientifically proven metabolic boosters." },
              { icon: Brain, title: "Daily Nutrition", desc: "Filling the critical dietary gaps present in modern eating habits." },
              { icon: Bone, title: "Bone & Joint Health", desc: "Preserving mobility and skeletal strength as you age." },
              { icon: HeartPulse, title: "Heart Wellness", desc: "Cardiovascular support for long-term physiological resilience." },
              { icon: Target, title: "Women's & Men's Health", desc: "Gender-specific formulations addressing unique biological needs." }
            ].map((area, i) => (
              <StaggerItem key={i}>
                <TiltCard className="h-full">
                  <div className="h-16 w-16 bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 text-accent shadow-inner">
                    <area.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{area.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{area.desc}</p>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* WHY CHOOSE OUR WELLNESS PRODUCTS */}
      <Section className="relative bg-white dark:bg-slate-950 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

        <Container className="relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Why Choose Our Wellness Products</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">The Anjuris difference lies in our uncompromising commitment to pharmaceutical-grade quality in the nutritional supplement space.</p>
          </FadeIn>

          <StaggerGroup className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: TestTube2, title: "Scientifically Formulated", desc: "Developed by medical experts based on the latest clinical research." },
              { icon: CheckCircle2, title: "Premium Quality Ingredients", desc: "Sourcing only the highest bioavailable compounds globally." },
              { icon: SearchCheck, title: "Research-Driven Development", desc: "Continuous innovation ensuring cutting-edge product efficacy." },
              { icon: Users, title: "Patient-Centric Solutions", desc: "Designed for optimal absorption and real-world results." }
            ].map((feature, i) => (
              <StaggerItem key={i}>
                <div className="group bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:border-accent/30 transition-all duration-300 flex items-start gap-6">
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-accent group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <feature.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{feature.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* OUR APPROACH TO WELLNESS (TIMELINE) */}
      <Section className="bg-slate-50 dark:bg-slate-900">
        <Container>
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Approach to Wellness</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">A rigorous, multi-stage methodology ensuring maximum safety and effectiveness.</p>
          </FadeIn>

          <WellnessTimeline />
        </Container>
      </Section>

      {/* HEALTHY LIVING SECTION */}
      <Section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-fixed"></div>
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>

        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-16 rounded-[3rem] shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Building a <span className="text-accent">Healthier Tomorrow</span></h2>
              <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                Wellness is more than the absence of illness—it is the active pursuit of health. Through nutrition awareness, preventive healthcare education, and promoting balanced lifestyles, we are dedicated to transforming global well-being.
              </p>
              <ul className="space-y-4 mb-8">
                {['Nutrition awareness', 'Preventive healthcare', 'Balanced lifestyle', 'Wellness education'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="text-accent" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </Container>
      </Section>


      {/* CALL TO ACTION */}
      <Section className="relative overflow-hidden bg-[#020617] py-24 border-t border-slate-900">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[100px] mix-blend-screen" />
        </div>

        <Container className="relative z-10 text-center">
          <FadeIn>
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-12 md:p-20 rounded-[3rem] shadow-2xl max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Partner With Us For Better Health</h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Discover scientifically backed wellness solutions designed to support healthier lives and stronger communities globally.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white shadow-[0_0_20px_rgba(20,184,166,0.4)] border-none" onClick={() => navigate('/contact')}>
                  Contact Us
                </Button>
                {/* <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10" onClick={() => navigate('/products')}>
                  Explore Products
                </Button> */}
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>

    </div>
  );
};
