import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Section } from './Section';
import { Container } from './Container';
import { ChevronRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../SEO';

interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  introduction: string;
  sections: LegalSection[];
  path: string;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, lastUpdated, introduction, sections, path }) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(section.id);
              }
            });
          },
          { rootMargin: '-20% 0px -60% 0px' }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [sections]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 selection:bg-teal-600/20 selection:text-teal-900 dark:selection:text-teal-100">
      <SEO
        title={`${title} | Anjuris Lifesciences Pvt. Ltd.`}
        description={introduction}
        path={path}
      />

      {/* Reading Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-blue-600 transform origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Header */}
      <Section className="relative pt-32 pb-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
              <Link to="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-slate-900 dark:text-slate-200">{title}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
              {title}
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium text-sm mb-8 shadow-sm border border-slate-200 dark:border-slate-700">
              Last Updated: {lastUpdated}
            </div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
              {introduction}
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Main Content Area */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Sticky Sidebar (Table of Contents) */}
            <div className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-32 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                  Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-semibold shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Mobile TOC */}
            <div className="lg:hidden mb-10">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Table of Contents</h3>
                <select 
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                  onChange={(e) => scrollToSection(e.target.value)}
                  value={activeSection}
                >
                  {sections.map(section => (
                    <option key={section.id} value={section.id}>{section.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Content Sections */}
            <div className="lg:w-3/4 max-w-[900px]">
              <div className="space-y-12 md:space-y-16">
                {sections.map((section) => (
                  <motion.div 
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="scroll-mt-32"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                      <span className="text-teal-600 dark:text-teal-400 text-xl md:text-2xl opacity-50 font-light">#</span>
                      {section.title}
                    </h2>
                    <div className="prose prose-slate dark:prose-invert prose-lg max-w-none 
                      prose-headings:text-slate-900 dark:prose-headings:text-white 
                      prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-500 
                      prose-strong:text-slate-900 dark:prose-strong:text-white 
                      prose-ul:marker:text-teal-500
                      leading-relaxed text-slate-600 dark:text-slate-300"
                    >
                      {section.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 rounded-full shadow-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center z-50 transition-colors hover:shadow-teal-500/20"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </div>
  );
};
