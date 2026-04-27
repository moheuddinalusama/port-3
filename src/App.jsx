/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import UniverseBackground from './components/UniverseBackground.jsx';
import GlowCursor from './components/GlowCursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Stats from './sections/Stats.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial sequence loading
    const timer = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 1, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[1000] bg-universe-base flex flex-col items-center justify-center p-4"
          >
            <div className="w-16 h-16 border-2 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin mb-8" />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-[1px] bg-neon-cyan/50 mb-4"
            />
            <span className="font-display text-[10px] tracking-[0.5em] uppercase text-white/50 animate-pulse">
              Initializing Digital Space
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <UniverseBackground />
      <GlowCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        
        <div id="about">
          <About />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <Stats />

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
