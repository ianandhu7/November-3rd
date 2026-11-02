import React from 'react';
import { motion } from 'framer-motion';

export default function HandwrittenNote({
  note,
  subtext,
  rotation = '0deg',
  tapePosition = 'top-center',
  hasPaperclip = false,
  variant = 'cream-parchment', // 'cream-parchment' | 'yellow-postit' | 'transparent-ink' | 'dark-chalk'
  style = {},
  className = '',
}) {
  const variantStyles = {
    'cream-parchment': {
      backgroundColor: 'var(--color-paper)',
      color: 'var(--color-text-dark)',
      border: '1px solid var(--color-paper-soft)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
      padding: '18px 22px',
    },
    'yellow-postit': {
      backgroundColor: '#fef08a',
      color: '#713f12',
      border: '1px solid #fde047',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.18)',
      padding: '16px 20px',
    },
    'transparent-ink': {
      backgroundColor: 'transparent',
      color: 'var(--color-text-dark)',
      border: 'none',
      boxShadow: 'none',
      padding: '8px 12px',
    },
    'dark-chalk': {
      backgroundColor: 'rgba(255, 255, 255, 0.06)',
      color: 'var(--color-gold)',
      border: '1px dashed var(--color-surface-glass-border)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
      padding: '18px 22px',
      backdropFilter: 'blur(8px)',
    },
  }[variant] || {};

  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`handwritten-note-container ${className}`}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-xs)',
        transform: `rotate(${rotation})`,
        display: 'inline-block',
        maxWidth: '360px',
        ...variantStyles,
        ...style,
      }}
    >
      {/* Decorative Washi Tape */}
      {tapePosition !== 'none' && (
        <div
          className={`decorative-tape ${tapePosition}`}
          style={{ width: '70px', height: '22px' }}
        />
      )}

      {/* Brass Paperclip Accent */}
      {hasPaperclip && <div className="paperclip-accent" />}

      {/* Handwritten Text */}
      <p
        className="font-handwritten"
        style={{
          fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)',
          lineHeight: 1.25,
          margin: 0,
          letterSpacing: '0.5px',
        }}
      >
        {note}
      </p>

      {/* Optional subtext */}
      {subtext && (
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            opacity: 0.75,
            display: 'block',
            marginTop: '8px',
          }}
        >
          {subtext}
        </span>
      )}
    </motion.div>
  );
}
