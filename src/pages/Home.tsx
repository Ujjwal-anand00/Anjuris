
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Activity, CheckCircle2, HeartPulse, Microscope, Leaf, Target } from 'lucide-react';
import { AnimatedCounter } from '../components/animations/AnimatedCounter';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { TiltCard } from '../components/ui/TiltCard';
import { Card } from '../components/ui/Card';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerGroup, StaggerItem } from '../components/animations/StaggerGroup';
import { HeroBackground } from '../components/animations/HeroBackground';
import { motion } from 'framer-motion';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Anjuris Lifesciences | Premium Healthcare Innovation</title>
        <meta name="description" content="Anjuris Lifesciences is a leading pharmaceutical company committed to nurturing life with trust, uncompromising quality, and global healthcare solutions." />
      </Helmet>
      <div className="flex flex-col w-full">
        {/* Premium Fortune 500 Hero Section */}
        <section className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
          <HeroBackground />

          <Container className="relative z-10 mt-8 md:mt-0">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Left Content Area */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <FadeIn direction="up" delay={0.2}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-primary-50 font-medium text-sm mb-4 text-white shadow-lg">
                    <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                    Pioneering Healthcare Innovation
                  </div>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white text-balance leading-[1.1]">
                    Nurturing Life With <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">Trust</span>
                  </h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.4}>
                  <p className="text-lg md:text-xl text-slate-300 max-w-2xl text-balance leading-relaxed">
                    Welcome to Anjuris Lifesciences Pvt. Ltd. – Your trusted partner in high-quality, affordable, and innovative pharmaceutical solutions.
                  </p>
                  <p className="text-lg text-slate-400 max-w-2xl text-balance leading-relaxed mt-4">
                    Driven by science, inspired by care, and committed to excellence, we strive to improve lives through advanced healthcare products and patient-centric solutions.
                  </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.6}>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                      {/* <Button size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(15,118,110,0.4)] hover:shadow-[0_0_30px_rgba(15,118,110,0.6)] border border-primary/50" onClick={() => navigate('/products')}>
                      Explore Products
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button> */}
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:border-white/40 backdrop-blur-sm" onClick={() => navigate('/contact')}>
                        Contact Us
                      </Button>
                    </motion.div>
                  </div>
                </FadeIn>
              </div>

              {/* Right Stats Card - Glassmorphism */}
              <div className="lg:col-span-5">
                <FadeIn direction="left" delay={0.8}>
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-500"></div>
                    <div className="relative bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
                      <h3 className="text-xl font-heading font-semibold text-white mb-6 flex items-center gap-3">
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <Activity className="text-accent" size={24} />
                        </div>
                        Our Commitment
                      </h3>

                      <StaggerGroup staggerDelay={0.15} className="space-y-6">
                        {[
                          { title: '100% Quality Focus', desc: 'Rigorous manufacturing standards' },
                          { title: 'Patient-Centric Approach', desc: 'Improving lives globally' },
                          { title: 'Research Driven', desc: 'Advanced scientific innovation' },
                          { title: 'Trusted Healthcare Solutions', desc: 'Reliable & affordable medicine' }
                        ].map((stat, i) => (
                          <StaggerItem key={i}>
                            <div className="flex items-start gap-4 group/stat cursor-default">
                              <div className="mt-1 bg-white/5 p-2 rounded-lg text-slate-400 group-hover/stat:bg-primary group-hover/stat:text-white transition-all duration-300">
                                <CheckCircle2 size={20} />
                              </div>
                              <div>
                                <h4 className="text-lg font-semibold text-slate-200 group-hover/stat:text-white transition-colors">{stat.title}</h4>
                                <p className="text-sm text-slate-400">{stat.desc}</p>
                              </div>
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerGroup>
                    </div>
                  </div>
                </FadeIn>
              </div>

            </div>
          </Container>

          {/* Scroll down indicator */}
          <motion.div
            className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/50"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </motion.div>
        </section>

        {/* Core Pillars */}
        <Section className="bg-slate-50 relative z-10 -mt-4 rounded-t-3xl pt-24">
          <Container>
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Our Core Pillars</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">Built on a foundation of scientific excellence, rigorous standards, and unwavering patient care.</p>
              </div>
            </FadeIn>

            <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-[2000px]">
              <StaggerItem>
                <TiltCard className="h-full">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary shadow-inner">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Uncompromising Quality</h3>
                  <p className="text-slate-600 leading-relaxed">We adhere to stringent quality standards and regulatory guidelines across all our processes, ensuring that every product we deliver is safe, effective, and reliable.</p>
                </TiltCard>
              </StaggerItem>

              <StaggerItem>
                <TiltCard className="h-full">
                  <div className="h-16 w-16 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl flex items-center justify-center mb-6 text-secondary shadow-inner">
                    <Microscope size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation & Research</h3>
                  <p className="text-slate-600 leading-relaxed">Science continues to evolve, and so do we. Our commitment to research and innovation enables us to explore advanced formulations and healthcare solutions that address emerging medical needs.</p>
                </TiltCard>
              </StaggerItem>

              <StaggerItem>
                <TiltCard className="h-full">
                  <div className="h-16 w-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6 text-accent shadow-inner">
                    <HeartPulse size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Patient-Centric Approach</h3>
                  <p className="text-slate-600 leading-relaxed">Patients are at the heart of everything we do. We work diligently to provide healthcare products that improve treatment outcomes and enhance quality of life.</p>
                </TiltCard>
              </StaggerItem>

              <StaggerItem>
                <TiltCard className="h-full">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-primary shadow-inner">
                    <Leaf size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Nutraceuticals & Wellness</h3>
                  <p className="text-slate-600 leading-relaxed">We support preventive healthcare through scientifically developed nutraceutical and wellness products that promote overall health and well-being.</p>
                </TiltCard>
              </StaggerItem>
            </StaggerGroup>
          </Container>
        </Section>

        {/* Stats Section */}
        {/* <Section className="relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-slate-900/90"></div>
          <Container className="relative z-10">
            <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <StaggerItem>
                <div className="text-5xl font-bold text-accent mb-2">20+</div>
                <div className="text-slate-300 font-medium">Years Experience</div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-5xl font-bold text-accent mb-2">150+</div>
                <div className="text-slate-300 font-medium">Products</div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-5xl font-bold text-accent mb-2">50+</div>
                <div className="text-slate-300 font-medium">Countries</div>
              </StaggerItem>
              <StaggerItem>
                <div className="text-5xl font-bold text-accent mb-2">3</div>
                <div className="text-slate-300 font-medium">R&D Centers</div>
              </StaggerItem>
            </StaggerGroup>
          </Container>
        </Section> */}

        {/* TRUST & QUALITY SECTION */}
        <Section className="bg-white dark:bg-slate-950">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn direction="right">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Unwavering Commitment to Quality</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  Our nutraceuticals are manufactured alongside our pharmaceutical products, ensuring they meet the same exacting standards of quality assurance, safety, and research excellence.
                </p>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">
                      <AnimatedCounter value={100} suffix="%" />
                    </div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Quality Assurance</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">
                      <AnimatedCounter value={0} />
                    </div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Compromises</div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Quality Assurance", icon: ShieldCheck },
                    { title: "Safety Standards", icon: Activity },
                    { title: "Research Excellence", icon: Microscope },
                    { title: "Ethical Practices", icon: Target }
                  ].map((badge, i) => (
                    <div key={i} className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl flex flex-col items-center text-center border border-slate-100 dark:border-slate-800">
                      <badge.icon size={32} className="text-accent mb-4" />
                      <h4 className="font-bold text-slate-900 dark:text-white">{badge.title}</h4>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Call to Action */}
        <Section className="bg-slate-50">
          <Container>
            <FadeIn>
              <Card className="bg-gradient-to-br from-primary to-secondary text-white border-none p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Building a Healthier Tomorrow</h2>
                  <p className="text-lg text-primary-50 max-w-2xl mx-auto mb-4 text-slate-100">
                    At Anjuris Lifesciences, we believe healthcare is more than medicine—it is about improving lives, empowering communities, and creating sustainable healthcare solutions for future generations.
                  </p>
                  <p className="text-xl font-medium max-w-2xl mx-auto mb-8 text-white">
                    Together, we are building a healthier tomorrow.
                  </p>
                  <Button variant="ghost" size="lg" className="bg-white text-primary hover:bg-slate-50 shadow-lg" onClick={() => navigate('/contact')}>
                    Get in Touch
                  </Button>
                </div>
              </Card>
            </FadeIn>
          </Container>
        </Section>
      </div>
    </>
  );
};
