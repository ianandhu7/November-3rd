import React from 'react';
import { motion } from 'framer-motion';

export default function ScrapbookCard({ item, index = 0, onClick }) {
  const { title, date, note, image, fallbackUrl, rotation = '0deg', tapeColor, sticker } = item;

  const handleImageError = (e) => {
    if (fallbackUrl && e.target.src !== fallbackUrl) {
      e.target.src = fallbackUrl;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="polaroid-frame tilt-on-hover"
      onClick={onClick}
      style={{
        transform: `rotate(${rotation})`,
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative',
        maxWidth: '320px',
        margin: '0 auto',
      }}
    >
      {/* Washi Tape strip */}
      <div
        className="washi-tape top-center"
        style={{
          backgroundColor: tapeColor || 'rgba(244, 208, 111, 0.75)',
        }}
      />

      {/* Decorative sticker */}
      {sticker && (
        <div
          className="vintage-sticker"
          style={{
            position: 'absolute',
            bottom: '-14px',
            right: '-14px',
            width: '46px',
            height: '46px',
            zIndex: 15,
            pointerEvents: 'none'
          }}
        >
          <img
            src={sticker}
            alt="Scrapbook sticker decoration"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      )}

      {/* Polaroid Photo Frame */}
      <div
        style={{
          width: '100%',
          height: '270px',
          overflow: 'hidden',
          borderRadius: 'var(--radius-xs)',
          background: '#1a1a1a',
        }}
      >
        <img
          src={image}
          alt={title}
          onError={handleImageError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease'
          }}
        />
      </div>

      {/* Handwritten caption & Date */}
      <div style={{ marginTop: '12px', textAlign: 'center' }}>
        <p className="polaroid-caption" style={{ margin: 0 }}>
          {title}
        </p>
        {date && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              display: 'block',
              marginTop: '4px'
            }}
          >
            {date}
          </span>
        )}
        {note && (
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.84rem',
              color: 'var(--color-text-dark-muted)',
              marginTop: '6px',
              lineHeight: 1.45,
              padding: '0 4px'
            }}
          >
            {note}
          </p>
        )}
      </div>
    </motion.div>
  );
}
