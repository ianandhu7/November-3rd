import React from 'react';
import { motion } from 'framer-motion';

export default function PhotoFrame({
  src,
  alt = 'Scrapbook memory photo',
  caption,
  date,
  size = 'medium',
  rotation = '0deg',
  tapePosition = 'top-center',
  tapeColor,
  fallbackUrl,
  className = '',
  onClick,
}) {
  const handleImageError = (e) => {
    if (fallbackUrl && e.target.src !== fallbackUrl) {
      e.target.src = fallbackUrl;
    }
  };

  const sizeStyles = {
    large: { width: '100%', maxWidth: '340px', photoHeight: '270px' },
    medium: { width: '100%', maxWidth: '270px', photoHeight: '210px' },
    small: { width: '100%', maxWidth: '200px', photoHeight: '160px' },
  }[size] || { width: '100%', maxWidth: '270px', photoHeight: '210px' };

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02, rotate: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`polaroid-frame ${className}`}
      onClick={onClick}
      style={{
        ...sizeStyles,
        transform: `rotate(${rotation})`,
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative',
        display: 'inline-block',
      }}
    >
      {/* Decorative Washi Tape */}
      {tapePosition !== 'none' && (
        <div
          className={`decorative-tape ${tapePosition}`}
          style={{
            backgroundColor: tapeColor || 'var(--color-tape)',
          }}
        />
      )}

      {/* Photo Frame Window */}
      <div
        style={{
          width: '100%',
          height: sizeStyles.photoHeight,
          overflow: 'hidden',
          borderRadius: 'var(--radius-xs)',
          background: '#121010',
          position: 'relative',
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={handleImageError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease',
          }}
        />
        {/* Subtle photo film sheen */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Caption & Date */}
      {(caption || date) && (
        <div style={{ marginTop: '12px', textAlign: 'center', padding: '0 4px' }}>
          {caption && <p className="polaroid-caption" style={{ margin: 0 }}>{caption}</p>}
          {date && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                display: 'block',
                marginTop: '4px',
              }}
            >
              {date}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
}
