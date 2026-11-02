import React from 'react';
import { motion } from 'framer-motion';
import Envelope from '../components/Envelope';

export default function Hero({ currentTheme }) {
  const handleEnterWorld = () => {
    const memoriesEl = document.getElementById('memories') || document.getElementById('welcome');
    if (memoriesEl) {
      memoriesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '100px 20px 60px 20px',
        overflow: 'hidden',
      }}
    >
      {/* Immersive Subtle Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '580px',
          height: '580px',
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
          opacity: 0.14,
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Envelope currentTheme={currentTheme} onEnterWorld={handleEnterWorld} />
      </div>
    </section>
  );
}
