import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

/**
 * ScallopedFrame Component
 * Renders an authentic vintage photobooth photo cell with:
 * - Scalloped lace outer border ruffles along all four edges
 * - Crisp white darkroom print mat outline
 * - Glossy photographic sheen overlay
 * - Non-distorting object-fit: cover display
 * - Hover elevation and tap-to-expand trigger
 */
export default function ScallopedFrame({
  image,
  title,
  caption,
  date,
  onClick,
  aspectRatio = '4 / 3',
  className = '',
  style = {}
}) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`scalloped-photo-wrapper ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`View photo: ${title || caption || 'Photobooth photo'}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...style
      }}
    >
      {/* 4-Edge Scalloped Lace Ruffles */}
      <span className="scallop-edge-top" aria-hidden="true" />
      <span className="scallop-edge-bottom" aria-hidden="true" />
      <span className="scallop-edge-left" aria-hidden="true" />
      <span className="scallop-edge-right" aria-hidden="true" />

      {/* Inner Photograph Frame */}
      <div
        className="scalloped-photo-inner"
        style={{ aspectRatio }}
      >
        <img
          src={image}
          alt={title || caption || 'Photobooth memory'}
          loading="lazy"
          decoding="async"
        />

        {/* Glossy Photo Reflection */}
        <div className="photo-gloss-overlay" aria-hidden="true" />

        {/* Hover Zoom Hint */}
        <div className="photo-zoom-hint" aria-hidden="true">
          <ZoomIn size={22} />
        </div>
      </div>

      {/* Optional Frame Date Stamp beneath photo */}
      {date && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '4px',
            padding: '0 2px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'var(--color-text-dark, #4a352c)',
            opacity: 0.75,
            letterSpacing: '0.5px'
          }}
        >
          <span>{date}</span>
          <span style={{ fontSize: '0.55rem' }}>35MM</span>
        </div>
      )}
    </motion.div>
  );
}
