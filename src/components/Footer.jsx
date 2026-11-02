import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { MUSEUM_DATA } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        borderTop: '1px solid var(--theme-surface-glass-border)',
        background: 'var(--theme-surface-glass)',
        padding: '50px 24px',
        textAlign: 'center',
        marginTop: '80px',
        zIndex: 10
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px'
        }}
      >
        {/* Wax Stamp Centerpiece */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--theme-wax-seal)',
            border: '2px solid var(--theme-accent-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--theme-glow)'
          }}
        >
          <Heart size={20} color="var(--theme-accent-gold)" fill="var(--theme-accent-gold)" />
        </div>

        <h3
          className="font-serif"
          style={{
            fontSize: '1.6rem',
            color: 'var(--theme-text-primary)',
            letterSpacing: '0.5px'
          }}
        >
          A Day Made for You ♡
        </h3>

        <p
          className="font-handwriting"
          style={{
            fontSize: '1.5rem',
            color: 'var(--theme-accent-gold)',
            margin: '0',
            maxWidth: '520px'
          }}
        >
          "A little collection of happiness, memories and birthday wishes."
        </p>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.88rem',
            color: 'var(--theme-text-muted)',
            letterSpacing: '0.5px',
            margin: '4px 0 0 0'
          }}
        >
        
        </p>

        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            color: 'var(--theme-text-muted)',
            opacity: 0.8,
            letterSpacing: '0.5px',
            margin: 0
          }}
        >
          Curated for November 3, 2026.
        </p>

        <button
          onClick={scrollToTop}
          className="btn-secondary"
          style={{ marginTop: '10px', fontSize: '0.85rem', padding: '8px 20px' }}
        >
          <span>Return to Entrance</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
