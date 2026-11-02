import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Heart, Sparkles, Calendar as CalendarIcon, Check } from 'lucide-react';
import { MUSEUM_DATA } from '../data/content';

export default function FinalSurprise() {
  const { finalSurprise } = MUSEUM_DATA;
  const [isUnlocked, setIsUnlocked] = useState(false);

  const triggerConfettiExplosion = () => {
    // Grand celebratory confetti burst
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#c93b58', '#e2c275', '#f472b6', '#801026', '#ffffff']
    });

    // Secondary delayed heart shower
    setTimeout(() => {
      confetti({
        particleCount: 70,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors: ['#e2c275', '#ff758c']
      });
      confetti({
        particleCount: 70,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors: ['#c93b58', '#fce7f3']
      });
    }, 400);
  };

  const handleUnlockBox = () => {
    setIsUnlocked(true);
    triggerConfettiExplosion();
  };

  return (
    <section id="surprise" className="section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <Gift size={14} /> Chapter VIII • The Final Surprise
        </span>
        <h2 className="section-title">{finalSurprise.heading}</h2>
        <p className="section-subtitle">"{finalSurprise.subheading}"</p>
      </div>

      <div
        className="surprise-grid-layout"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start',
          maxWidth: '920px',
          margin: '0 auto'
        }}
      >
        {/* Left: Romantic Lifetime Golden Museum Keepsake Pass */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="vintage-paper"
          style={{
            padding: '36px 28px',
            borderRadius: '4px',
            position: 'relative',
            boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
            transform: 'rotate(-1deg)'
          }}
        >
          <div className="washi-tape top-center" />

          {/* Ticket Header */}
          <div style={{ textAlign: 'center', marginBottom: '18px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'var(--color-accent, #A84E53)',
                fontWeight: 700
              }}
            >
              ★ Official Keepsake Pass ★
            </span>
            <h3
              className="font-serif"
              style={{
                fontSize: '2rem',
                color: 'var(--color-text-dark, #261914)',
                fontWeight: 700,
                margin: '6px 0 2px 0',
                lineHeight: 1.15
              }}
            >
              Lifetime Admission
            </h3>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--color-text-dark-muted, #725b50)',
                letterSpacing: '1px'
              }}
            >
              Ticket № 1103-FOREVER
            </span>
          </div>

          {/* Ticket Details Box */}
          <div
            style={{
              padding: '16px',
              borderRadius: '4px',
              background: 'rgba(216, 181, 138, 0.12)',
              border: '1px dashed rgba(140, 100, 70, 0.35)',
              marginBottom: '20px',
              textAlign: 'left'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-dark-muted)' }}>HOLDER:</span>
              <strong style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-dark)' }}>The Birthday Girl ♡</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-dark-muted)' }}>VALID FOR:</span>
              <strong style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-accent)' }}>Eternity & Beyond</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-dark-muted)' }}>PRIVILEGES:</span>
              <strong style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-dark)' }}>Unlimited Love & Hugs</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-dark-muted)' }}>ISSUED DATE:</span>
              <strong style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-text-dark)' }}>November 3rd</strong>
            </div>
          </div>

          {/* Ticket Stamp & Message */}
          <div
            style={{
              borderTop: '1px dashed rgba(140, 100, 70, 0.3)',
              paddingTop: '16px',
              textAlign: 'center'
            }}
          >
            <p
              className="font-serif"
              style={{
                fontSize: '1.05rem',
                fontStyle: 'italic',
                color: 'var(--color-text-dark)',
                lineHeight: 1.5,
                marginBottom: '10px'
              }}
            >
              "This ticket grants you all of my heart, every single second of every single day."
            </p>
            <p
              className="font-handwriting"
              style={{ fontSize: '1.65rem', color: 'var(--color-accent, #A84E53)', fontWeight: 700, margin: 0 }}
            >
              Yours Always & Forever ♡
            </p>
          </div>
        </motion.div>

        {/* Right: Secret Gift Box Unboxing */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{
            padding: '38px 30px',
            borderRadius: '12px',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <AnimatePresence mode="wait">
            {!isUnlocked ? (
              <motion.div
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '20px 0'
                }}
              >
                {/* Velvet Gift Box Graphic */}
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #801026 0%, #4a0e17 100%)',
                    boxShadow: '0 16px 36px rgba(0,0,0,0.5)',
                    border: '2px solid var(--theme-accent-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onClick={handleUnlockBox}
                >
                  <Gift size={54} color="var(--theme-accent-gold)" />
                  {/* Ribbon cross */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '16px',
                      background: 'var(--theme-accent-gold)',
                      opacity: 0.7
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '16px',
                      background: 'var(--theme-accent-gold)',
                      opacity: 0.7
                    }}
                  />
                </div>

                <h3
                  className="font-serif"
                  style={{ fontSize: '1.9rem', color: 'var(--theme-text-primary)', marginBottom: '8px' }}
                >
                  Locked Museum Exhibit
                </h3>

                <p
                  className="font-handwriting"
                  style={{ fontSize: '1.35rem', color: 'var(--theme-accent-gold)', marginBottom: '24px' }}
                >
                  {finalSurprise.boxPrompt}
                </p>

                <button
                  id="unlock-final-surprise-btn"
                  onClick={handleUnlockBox}
                  className="btn-primary"
                  style={{ padding: '14px 32px', fontSize: '1rem' }}
                >
                  <Sparkles size={18} />
                  <span>Untie The Ribbon</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="unlocked"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {/* Heart Silhouette Cutout Frame (Matching Screen 8 Reference) */}
                <div
                  style={{
                    position: 'relative',
                    width: '180px',
                    height: '165px',
                    marginBottom: '20px',
                    filter: 'drop-shadow(0 10px 28px rgba(0, 0, 0, 0.5))'
                  }}
                >
                  <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
                    <defs>
                      <clipPath id="heart-frame-clip" clipPathUnits="objectBoundingBox">
                        <path d="M 0.5, 0.92 C 0.12, 0.62 0, 0.44 0, 0.28 C 0, 0.12 0.12, 0 0.28, 0 C 0.38, 0 0.46, 0.06 0.5, 0.16 C 0.54, 0.06 0.62, 0 0.72, 0 C 0.88, 0 1, 0.12 1, 0.28 C 1, 0.44 0.88, 0.62 0.5, 0.92 Z" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      clipPath: 'url(#heart-frame-clip)',
                      WebkitClipPath: 'url(#heart-frame-clip)',
                      background: '#111',
                      border: '3px solid var(--theme-accent-gold)'
                    }}
                  >
                    <img
                      src="/images/couple/couple-1.jpg"
                      alt="You make everything better"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>

                <h3
                  className="font-serif"
                  style={{ fontSize: '2rem', color: 'var(--theme-accent-gold)', marginBottom: '8px' }}
                >
                  {finalSurprise.unlockedTitle}
                </h3>

                <p
                  className="font-handwriting"
                  style={{
                    fontSize: '1.5rem',
                    color: 'var(--theme-text-primary)',
                    lineHeight: 1.4,
                    marginBottom: '16px'
                  }}
                >
                  "You make everything better ♡"
                </p>

                <div
                  className="vintage-paper"
                  style={{
                    padding: '16px 20px',
                    borderRadius: '6px',
                    marginBottom: '20px',
                    textAlign: 'left'
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.9rem',
                      color: 'var(--theme-text-dark)',
                      lineHeight: 1.6,
                      margin: 0
                    }}
                  >
                    {finalSurprise.unlockedMessage}
                  </p>
                </div>

                <p
                  className="font-handwriting"
                  style={{
                    fontSize: '1.6rem',
                    color: 'var(--theme-text-secondary)',
                    margin: 0
                  }}
                >
                  Thank you for being you. I love you. Always. ♡
                </p>

                <button
                  onClick={triggerConfettiExplosion}
                  className="btn-secondary"
                  style={{ marginTop: '20px' }}
                >
                  <Heart size={16} fill="currentColor" color="#f43f5e" />
                  <span>Celebrate Again!</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
