import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { THEMES } from '../themes/themes';

export default function ThemeSwitcher({ currentTheme, targetTheme, onSetTheme, onToggleTheme }) {
  const activeTheme = targetTheme || currentTheme;
  const isBurgundy = activeTheme === THEMES.BURGUNDY;
  const isMidnight = activeTheme === THEMES.MIDNIGHT;

  const burgRef = useRef(null);
  const midRef = useRef(null);

  // Handle keyboard navigation (ArrowLeft / ArrowRight / ArrowUp / ArrowDown)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      onSetTheme ? onSetTheme(THEMES.MIDNIGHT) : onToggleTheme();
      if (midRef.current) midRef.current.focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      onSetTheme ? onSetTheme(THEMES.BURGUNDY) : onToggleTheme();
      if (burgRef.current) burgRef.current.focus();
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Theme selector"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="vintage-theme-switcher"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px',
        borderRadius: '9999px',
        backgroundColor: 'var(--color-surface-glass)',
        border: '1px solid var(--color-surface-glass-border)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25), inset 0 1px 2px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        position: 'relative',
        userSelect: 'none',
        outline: 'none',
        gap: '2px',
        transition: 'border-color 0.3s ease, background-color 0.3s ease',
      }}
    >
      {/* Option 1: BURGUNDY ♥ */}
      <button
        ref={burgRef}
        type="button"
        role="radio"
        id="theme-option-burgundy"
        aria-checked={isBurgundy}
        aria-label="Switch to Burgundy Romance theme"
        tabIndex={isBurgundy ? 0 : -1}
        onClick={() => (onSetTheme ? onSetTheme(THEMES.BURGUNDY) : onToggleTheme())}
        className="theme-switch-btn"
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '9999px',
          border: 'none',
          background: 'transparent',
          color: isBurgundy ? '#F7EADB' : 'var(--color-text-secondary)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          zIndex: 2,
          transition: 'color 0.25s ease',
          outline: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Animated active indicator sliding pill */}
        {isBurgundy && (
          <motion.div
            layoutId="activeThemePill"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #801420 0%, #500d16 100%)',
              border: '1px solid #D8B58A',
              borderRadius: '9999px',
              boxShadow: '0 2px 8px rgba(67, 13, 20, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              zIndex: -1,
            }}
          />
        )}
        <span
          className="active-theme-indicator-dot"
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: isBurgundy ? '#D8B58A' : 'transparent',
            display: isBurgundy ? 'inline-block' : 'none',
            boxShadow: '0 0 6px #D8B58A',
          }}
        />
        <span>BURGUNDY ♥</span>
      </button>

      {/* Option 2: MIDNIGHT ✦ */}
      <button
        ref={midRef}
        type="button"
        role="radio"
        id="theme-option-midnight"
        aria-checked={isMidnight}
        aria-label="Switch to Midnight Memories theme"
        tabIndex={isMidnight ? 0 : -1}
        onClick={() => (onSetTheme ? onSetTheme(THEMES.MIDNIGHT) : onToggleTheme())}
        className="theme-switch-btn"
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '9999px',
          border: 'none',
          background: 'transparent',
          color: isMidnight ? '#F5EEE7' : 'var(--color-text-secondary)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          zIndex: 2,
          transition: 'color 0.25s ease',
          outline: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        {/* Animated active indicator sliding pill */}
        {isMidnight && (
          <motion.div
            layoutId="activeThemePill"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #1c1818 0%, #0d0a0a 100%)',
              border: '1px solid #C3A58A',
              borderRadius: '9999px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
              zIndex: -1,
            }}
          />
        )}
        <span
          className="active-theme-indicator-dot"
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: isMidnight ? '#C3A58A' : 'transparent',
            display: isMidnight ? 'inline-block' : 'none',
            boxShadow: '0 0 6px #C3A58A',
          }}
        />
        <span>MIDNIGHT ✦</span>
      </button>
    </div>
  );
}
