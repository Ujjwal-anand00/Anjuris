import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { LoadingScreen } from './components/ui/LoadingScreen';

import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Products } from './pages/Products';
import { Research } from './pages/Research';
import { Quality } from './pages/Quality';
import { Wellness } from './pages/Wellness';
import { Contact } from './pages/Contact';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Sitemap } from './pages/Sitemap';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/research" element={<PageTransition><Research /></PageTransition>} />
        <Route path="/quality" element={<PageTransition><Quality /></PageTransition>} />
        <Route path="/wellness" element={<PageTransition><Wellness /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/sitemap" element={<PageTransition><Sitemap /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-body bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
