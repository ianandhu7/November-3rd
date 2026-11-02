import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Moon } from 'lucide-react';
import { THEMES } from '../themes/themes';

/**
 * Custom SVG Particles for Theme Chapter Transitions
 */
function StarlightParticle({ size = 24, color = '#F4D06F' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ color }}>
      <path
        d="M12 0L14.4 9.6L24 12L14.4 14.4L12 24L9.6 14.4L0 12L9.6 9.6L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CrescentParticle({ size = 22, color = '#E0B0FF' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
      <path d="M12.3 2a10 10 0 0 0-.19 14 10 10 0 0 0 10.7 3.5 10 10 0 1 1-10.51-17.5z" />
    </svg>
  );
}

function DiamondParticle({ size = 20, color = '#F5EEE7' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
    </svg>
  );
}

function RomanticHeartParticle({ size = 24, color = '#E11D48' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function HeartOutlineParticle({ size = 22, color = '#FDA4AF' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ color }}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function RosePetalParticle({ size = 20, color = '#BE123C' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ color }}>
      <path d="M12 3C8 3 4 7 4 12c0 4 3 7.5 8 9.5 5-2 8-5.5 8-9.5 0-5-4-9-8-9zm0 15.2C8.5 16.5 6 14 6 12c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2-2.5 4.5-6 6.2z" />
    </svg>
  );
}

/**
 * Predefined particle configurations for each theme transition
 */
const MIDNIGHT_PARTICLES = [
  { id: 'm1', type: StarlightParticle, x: 12, delay: 0.05, duration: 1.25, size: 28, color: '#F4D06F', sway: 18, rot: 45 },
  { id: 'm2', type: CrescentParticle, x: 24, delay: 0.12, duration: 1.3, size: 24, color: '#E0B0FF', sway: -16, rot: -20 },
  { id: 'm3', type: DiamondParticle, x: 38, delay: 0.08, duration: 1.2, size: 18, color: '#F5EEE7', sway: 14, rot: 30 },
  { id: 'm4', type: StarlightParticle, x: 50, delay: 0.18, duration: 1.35, size: 32, color: '#C3A58A', sway: -22, rot: -40 },
  { id: 'm5', type: DiamondParticle, x: 64, delay: 0.1, duration: 1.25, size: 20, color: '#A94D50', sway: 16, rot: 25 },
  { id: 'm6', type: CrescentParticle, x: 76, delay: 0.15, duration: 1.3, size: 26, color: '#F4D06F', sway: -18, rot: 15 },
  { id: 'm7', type: StarlightParticle, x: 88, delay: 0.06, duration: 1.2, size: 22, color: '#E0B0FF', sway: 12, rot: -35 },
  { id: 'm8', type: DiamondParticle, x: 18, delay: 0.22, duration: 1.28, size: 16, color: '#F5EEE7', sway: -15, rot: 40 },
  { id: 'm9', type: StarlightParticle, x: 32, delay: 0.2, duration: 1.32, size: 24, color: '#C3A58A', sway: 20, rot: -25 },
  { id: 'm10', type: CrescentParticle, x: 82, delay: 0.25, duration: 1.25, size: 22, color: '#F4D06F', sway: -14, rot: 20 },
];

const BURGUNDY_PARTICLES = [
  { id: 'b1', type: RomanticHeartParticle, x: 14, delay: 0.05, duration: 1.25, size: 26, color: '#E11D48', sway: 16, rot: 25 },
  { id: 'b2', type: RosePetalParticle, x: 26, delay: 0.12, duration: 1.3, size: 22, color: '#BE123C', sway: -18, rot: -30 },
  { id: 'b3', type: HeartOutlineParticle, x: 40, delay: 0.08, duration: 1.2, size: 24, color: '#FDA4AF', sway: 14, rot: 20 },
  { id: 'b4', type: RomanticHeartParticle, x: 52, delay: 0.18, duration: 1.35, size: 30, color: '#881337', sway: -20, rot: -35 },
  { id: 'b5', type: StarlightParticle, x: 62, delay: 0.1, duration: 1.25, size: 22, color: '#D8B58A', sway: 15, rot: 30 },
  { id: 'b6', type: RosePetalParticle, x: 74, delay: 0.15, duration: 1.3, size: 24, color: '#E11D48', sway: -16, rot: 15 },
  { id: 'b7', type: HeartOutlineParticle, x: 86, delay: 0.06, duration: 1.2, size: 26, color: '#FDA4AF', sway: 12, rot: -25 },
  { id: 'b8', type: RomanticHeartParticle, x: 20, delay: 0.22, duration: 1.28, size: 20, color: '#BE123C', sway: -14, rot: 35 },
  { id: 'b9', type: StarlightParticle, x: 34, delay: 0.2, duration: 1.32, size: 20, color: '#D8B58A', sway: 18, rot: -20 },
  { id: 'b10', type: RosePetalParticle, x: 80, delay: 0.25, duration: 1.25, size: 22, color: '#E11D48', sway: -15, rot: 25 },
];

/**
 * ThemeTransitionOverlay Component
 * Renders the cinematic love story chapter transition when switching between
 * Burgundy Romance and Midnight Memories.
 *
 * Sequence:
 * 1. Slowly darkens current screen with rich vignette
 * 2. Floats animated stars / crescent sparkles or romantic hearts / rose petals
 * 3. Transitions the background beneath the veil
 * 4. Transforms paper and photo colors seamlessly
 * 5. Gently lifts the veil revealing the new theme
 */
export default function ThemeTransitionOverlay({ targetTheme, currentTheme }) {
  const isToMidnight = targetTheme === THEMES.MIDNIGHT;
  const particles = isToMidnight ? MIDNIGHT_PARTICLES : BURGUNDY_PARTICLES;

  return (
    <div
      className="theme-transition-root"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9990,
        pointerEvents: 'none',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* ========================================================
          1. CINEMATIC DARKENING CURTAIN (Vignette & Soft Film Grain)
          ======================================================== */}
      <motion.div
        className="theme-transition-curtain"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.94, 0.94, 0] }}
        transition={{
          duration: 1.35,
          times: [0, 0.35, 0.65, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: 'absolute',
          inset: 0,
          background: isToMidnight
            ? 'radial-gradient(ellipse at 50% 50%, rgba(16, 14, 14, 0.92) 0%, rgba(8, 7, 7, 0.98) 100%)'
            : 'radial-gradient(ellipse at 50% 50%, rgba(67, 13, 20, 0.92) 0%, rgba(35, 6, 11, 0.98) 100%)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
        }}
      />

      {/* Atmospheric center aura glow */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{
          scale: [0.7, 1.4, 1.4, 1.8],
          opacity: [0, 0.35, 0.35, 0],
        }}
        transition={{
          duration: 1.35,
          times: [0, 0.35, 0.65, 1],
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: isToMidnight
            ? 'radial-gradient(circle, rgba(195, 165, 138, 0.35) 0%, rgba(224, 176, 255, 0.15) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(225, 29, 72, 0.35) 0%, rgba(216, 181, 138, 0.2) 45%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* ========================================================
          2. FLOATING STARS / HEARTS ANIMATION
          ======================================================== */}
      <div
        className="theme-transition-particles"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      >
        {particles.map((p) => {
          const ParticleComponent = p.type;
          return (
            <motion.div
              key={p.id}
              initial={{
                x: 0,
                y: 120,
                opacity: 0,
                scale: 0.5,
                rotate: 0,
              }}
              animate={{
                x: [0, p.sway, -p.sway, p.sway * 0.5],
                y: [120, -140],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1.15, 1, 0.6],
                rotate: [0, p.rot],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                position: 'absolute',
                bottom: '15%',
                left: `${p.x}%`,
                filter: `drop-shadow(0 0 10px ${p.color})`,
              }}
            >
              <ParticleComponent size={p.size} color={p.color} />
            </motion.div>
          );
        })}
      </div>

      {/* ========================================================
          STORYBOOK CHAPTER TITLE CARD
          "Entering another chapter of the same love story"
          ======================================================== */}
      <motion.div
        className="theme-chapter-card"
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.92, 1, 1, 1.04],
          y: [16, 0, 0, -10],
        }}
        transition={{
          duration: 1.3,
          times: [0, 0.28, 0.72, 1],
          ease: 'easeInOut',
        }}
        style={{
          position: 'relative',
          zIndex: 9995,
          padding: '24px 34px',
          borderRadius: '12px',
          background: isToMidnight
            ? 'rgba(18, 16, 16, 0.82)'
            : 'rgba(67, 13, 20, 0.85)',
          border: isToMidnight
            ? '1.5px solid rgba(195, 165, 138, 0.45)'
            : '1.5px solid rgba(216, 181, 138, 0.45)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
          textAlign: 'center',
          maxWidth: '460px',
          margin: '0 20px',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        {/* Chapter pill header */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 16px',
            borderRadius: '9999px',
            background: isToMidnight
              ? 'rgba(195, 165, 138, 0.15)'
              : 'rgba(216, 181, 138, 0.18)',
            border: isToMidnight
              ? '1px solid rgba(195, 165, 138, 0.35)'
              : '1px solid rgba(216, 181, 138, 0.4)',
            color: isToMidnight ? '#C3A58A' : '#D8B58A',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          {isToMidnight ? (
            <>
              <Sparkles size={12} />
              <span>Chapter II • Midnight Memories</span>
              <Sparkles size={12} />
            </>
          ) : (
            <>
              <Heart size={12} fill="currentColor" />
              <span>Chapter I • Burgundy Romance</span>
              <Heart size={12} fill="currentColor" />
            </>
          )}
        </div>

        {/* Chapter headline */}
        <h3
          style={{
            fontFamily: 'var(--font-heading, serif)',
            fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)',
            fontWeight: 700,
            color: isToMidnight ? '#F5EEE7' : '#F7EADB',
            margin: '0 0 8px 0',
            lineHeight: 1.2,
            letterSpacing: '0.5px',
          }}
        >
          {isToMidnight ? 'Under The Midnight Stars' : 'In The Warmth Of Our Love'}
        </h3>

        {/* Poetic quote */}
        <p
          className="font-handwriting"
          style={{
            fontSize: 'clamp(1.15rem, 3vw, 1.45rem)',
            color: isToMidnight ? '#E0B0FF' : '#FDA4AF',
            margin: '0 0 14px 0',
            lineHeight: 1.3,
          }}
        >
          {isToMidnight
            ? '“When the night turns quiet, every memory turns into starlight...”'
            : '“Every heartbeat carries the fragrance of our sweetest days...”'}
        </p>

        {/* Delicate divider flourish */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            color: isToMidnight ? '#C3A58A' : '#D8B58A',
            opacity: 0.75,
            fontSize: '0.85rem',
          }}
        >
          <span style={{ width: '40px', height: '1px', background: 'currentColor' }} />
          <span>{isToMidnight ? '✦' : '♥'}</span>
          <span style={{ width: '40px', height: '1px', background: 'currentColor' }} />
        </div>
      </motion.div>
    </div>
  );
}
