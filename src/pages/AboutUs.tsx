
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { FadeIn } from '../components/animations/FadeIn';
import { StaggerGroup, StaggerItem } from '../components/animations/StaggerGroup';
import { AnimatedCounter } from '../components/animations/AnimatedCounter';
import { HeartPulse, ShieldCheck, Microscope, Users, Globe2, Target, Leaf, Eye } from 'lucide-react';

const AbstractMedicalIllustration = () => {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
      {/* Floating background shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-40 h-40 bg-primary/30 rounded-full blur-[60px] mix-blend-screen"
      />
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-56 h-56 bg-secondary/20 rounded-full blur-[80px] mix-blend-screen"
      />

      {/* Glassmorphism Panel enclosing the illustration */}
      <div className="relative w-full max-w-sm aspect-square bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[3rem] shadow-[0_0_50px_rgba(15,118,110,0.15)] p-8 flex items-center justify-center overflow-hidden group">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSAwIDEwIEwgMjAgMTAgTSAxMCAwIEwgMTAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>

        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>

        {/* Central Core */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative z-10 w-56 h-56 border border-dashed border-primary/30 rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: -720 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-40 h-40 border border-secondary/30 rounded-full flex items-center justify-center relative"
          >
            {/* Inner pulsating glow */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>

            <div className="relative z-20 w-20 h-20 bg-gradient-to-tr from-primary to-accent rounded-full shadow-[0_0_40px_rgba(20,184,166,0.6)] flex items-center justify-center text-white border border-white/20">
              <HeartPulse size={36} className="animate-pulse drop-shadow-md" />
            </div>
          </motion.div>

          {/* Orbiting nodes */}
          {[0, 120, 240].map((deg, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white border-2 border-primary rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              style={{
                top: '50%',
                left: '50%',
                marginTop: '-8px',
                marginLeft: '-8px',
                transform: `rotate(${deg}deg) translateX(112px)`
              }}
            >
              {/* Node trail/glow */}
              <div className="absolute inset-0 bg-white rounded-full blur-sm"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const AboutUs = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#020617] overflow-hidden selection:bg-primary/30">
      <SEO
        title="About Us | Anjuris Lifesciences Pvt. Ltd."
        description="Learn about Anjuris Lifesciences, our vision, mission, commitment to quality, innovation, and patient-centric healthcare solutions."
        path="/about"
      />

      {/* Hero Section */}
      <Section className="relative z-10">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Company Story */}
            <div className="space-y-8">
              <FadeIn direction="up" delay={0.1}>
                <h4 className="text-primary font-semibold tracking-wider uppercase text-sm mb-2">Who We Are</h4>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  A Legacy of Trust,<br />A Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary">Innovation.</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div className="prose prose-lg text-slate-300">
                  <p className="mb-4">
                    Anjuris Lifesciences Pvt. Ltd. is built on a foundation of integrity, quality, and forward-thinking science. We specialize in developing, marketing, and delivering high-quality healthcare products designed to improve patient outcomes and enhance quality of life.
                  </p>
                  <p>
                    While we are a new and emerging name in the pharmaceutical industry, our team consists of experienced professionals, passionate researchers, and visionary leaders dedicated to creating a positive impact in healthcare through innovation and excellence.
                  </p>
                </div>
              </FadeIn>

              {/* Stats Timeline / Counters */}
              <FadeIn direction="up" delay={0.3}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
                  {/* <div>
                    <div className="text-3xl font-bold text-white mb-1">
                      <AnimatedCounter value={1995} />
                    </div>
                    <div className="text-sm text-slate-400 font-medium">Year Established</div>
                  </div> */}
                  {/* <div>
                    <div className="text-3xl font-bold text-white mb-1">
                      <AnimatedCounter value={50} suffix="+" />
                    </div>
                    <div className="text-sm text-slate-400 font-medium">Countries Reached</div>
                  </div> */}
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">
                      <AnimatedCounter value={100} suffix="k+" />
                    </div>
                    <div className="text-sm text-slate-400 font-medium">Lives Improved</div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: Animated Medical Illustration */}
            <FadeIn direction="left" delay={0.4}>
              <AbstractMedicalIllustration />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission Section */}
      <Section className="relative bg-white overflow-hidden py-24">
        {/* Floating background elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[50%] -left-[20%] w-[1200px] h-[1200px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzBGNzY2RSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-60 pointer-events-none"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* Vision Card */}
            <FadeIn direction="right">
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-[3rem] blur opacity-25 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/80 p-10 lg:p-14 rounded-[3rem] shadow-2xl overflow-hidden">
                  {/* Large background watermark icon */}
                  <div className="absolute top-0 right-0 p-8 text-primary opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 transform translate-x-12 -translate-y-12">
                    <Eye size={250} />
                  </div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                      <Eye size={36} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Our Vision</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      To become a leading global healthcare company recognized for innovation, quality, integrity, and commitment to making high-quality medicines accessible and affordable to every section of society.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Mission Card */}
            <FadeIn direction="left" delay={0.2}>
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-secondary to-primary rounded-[3rem] blur opacity-25 group-hover:opacity-60 transition duration-700"></div>
                <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/80 p-10 lg:p-14 rounded-[3rem] shadow-2xl overflow-hidden">
                  {/* Large background watermark icon */}
                  <div className="absolute top-0 right-0 p-8 text-secondary opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 transform translate-x-12 -translate-y-12">
                    <Target size={250} />
                  </div>

                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-3xl flex items-center justify-center text-secondary mb-8 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-inner">
                      <Target size={36} />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Our Mission</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      To enhance human life by delivering superior pharmaceutical products through strategic partnerships, stringent quality controls, and an efficient distribution network while maintaining the highest standards of professional ethics.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </Container>
      </Section>

      {/* Core Values Section - Alternating & Hover Cards */}
      <Section className="bg-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <Container className="relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400 text-lg">The foundational principles that guide every decision we make at Anjuris.</p>
          </FadeIn>

          <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Adhering to the strictest global manufacturing standards to ensure total safety." },
              { icon: Microscope, title: "Relentless Innovation", desc: "Continuously pushing the boundaries of pharmaceutical science." },
              { icon: Users, title: "Patient-Centric", desc: "Putting human lives at the center of our development and delivery." },
              { icon: Globe2, title: "Global Accessibility", desc: "Making premium healthcare affordable and available worldwide." },
              { icon: Target, title: "Absolute Integrity", desc: "Operating with transparency, ethics, and trust in all our partnerships." },
              { icon: Leaf, title: "Sustainable Practices", desc: "Committed to environmentally friendly manufacturing and operations." },
            ].map((value, i) => (
              <StaggerItem key={i}>
                <div className="group relative h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                      <value.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-100">{value.title}</h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Timeline Section */}
      {/* <Section className="bg-white">
        <Container>
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Journey</h2>
            <p className="text-slate-500 mt-2">Decades of progress and innovation</p>
          </FadeIn>

          <div className="max-w-4xl mx-auto relative">
           
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-100 md:-ml-[2px]"></div>

            
            <motion.div
              className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-primary md:-ml-[2px] origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />

            <StaggerGroup className="space-y-12">
              {[
                { year: "1995", title: "Foundation", desc: "Anjuris Lifesciences was established with a vision to revolutionize local healthcare." },
                { year: "2005", title: "Global Expansion", desc: "Began exporting high-quality formulations to over 15 countries." },
                { year: "2012", title: "State-of-the-Art R&D", desc: "Inaugurated our premier research facility dedicated to advanced therapeutics." },
                { year: "2024", title: "Pioneering the Future", desc: "Launched our innovative nutraceuticals line, embracing holistic wellness." }
              ].map((milestone, i) => (
                <StaggerItem key={i} className="relative flex flex-col md:flex-row items-center group">
                
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary md:-ml-4 z-10 group-hover:scale-125 transition-transform shadow-lg shadow-primary/20"></div>

                 
                  <div className={`ml-12 md:ml-0 md:w-5/12 w-full ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="text-primary font-bold text-xl mb-1">{milestone.year}</div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{milestone.title}</h4>
                    <p className="text-slate-600 bg-slate-50 p-4 rounded-xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow group-hover:border-primary/20">
                      {milestone.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </Container>
      </Section> */}
    </div>
  );
};
