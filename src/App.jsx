import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeTransitionOverlay from './components/ThemeTransitionOverlay';
import BirthdayLogin from './components/BirthdayLogin';

// Personal Birthday Sections for Nayana
import Hero from './sections/Hero';
import Memories from './sections/Memories';
import Photobooth from './sections/Photobooth';
import BirthdayLetter from './sections/BirthdayLetter';
import BirthdayDate from './sections/BirthdayDate';
import Farewell from './sections/Farewell';

// Theme & Global Stylesheets
import './themes/burgundy.css';
import './themes/midnight.css';
import './styles/global.css';
import './styles/animations.css';
import './styles/responsive.css';
import './styles/login.css';

export default function App() {
  const { theme, targetTheme, isTransitioning, setTheme, toggleTheme } = useTheme();
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`museum-app-root theme-${theme}`}>
      {/* Cinematic Theme Chapter Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <ThemeTransitionOverlay
            targetTheme={targetTheme}
            currentTheme={theme}
          />
        )}
      </AnimatePresence>

      {/* Main Flow: Login Screen Gate vs Full Birthday Surprise Website */}
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="birthday-login-gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <BirthdayLogin
              onUnlock={handleUnlock}
              currentTheme={theme}
              targetTheme={targetTheme}
              onSetTheme={setTheme}
              onToggleTheme={toggleTheme}
            />
          </motion.div>
        ) : (
          <motion.div
            key="unlocked-birthday-website"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Persistent Floating Navigation Bar */}
            <Navbar
              currentTheme={theme}
              targetTheme={targetTheme}
              onSetTheme={setTheme}
              onToggleTheme={toggleTheme}
            />

            {/* Main Birthday Exhibition Sections */}
            <main>
              {/* 1. Opening / Hero Section: Envelope with Nayana's Birthday Surprise */}
              <Hero currentTheme={theme} />

              {/* 2. Chapter 1 — It's Your Day! */}
              <Memories />

              {/* 3. Chapter 2 — Captured Smiles (That One Smile ♡) */}
              <Photobooth />

              {/* 4. Chapter 3 — A Note for You (Two heartfelt notes) */}
              <BirthdayLetter />

              {/* 5. Chapter 4 — Your Day (The Day the World Got a Little Brighter) */}
              <BirthdayDate />

              {/* 6. Final Section — Until We Meet Again ♡ */}
              <Farewell />
            </main>

            {/* 7. Footer: A Day Made for You ♡ */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

