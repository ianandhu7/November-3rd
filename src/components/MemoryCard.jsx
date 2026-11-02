import React from 'react';
import { motion } from 'framer-motion';
import PhotoFrame from './PhotoFrame';
import Sticker from './Sticker';
import HandwrittenNote from './HandwrittenNote';
import { MapPin, Calendar } from 'lucide-react';

export default function MemoryCard({
  memory,
  index = 0,
  layoutMode = 'desktop-collage',
  onSelectPhoto,
}) {
  const {
    title,
    date,
    location,
    caption,
    handwrittenNote,
    image,
    fallbackUrl,
    size = 'medium',
    rotation = '0deg',
    tapePosition = 'top-center',
    tapeColor,
    sticker = 'heart',
  } = memory;

  const isDesktop = layoutMode === 'desktop-collage';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
      className="memory-card-cluster"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: isDesktop && index % 2 !== 0 ? 'row-reverse' : isDesktop ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isDesktop ? '28px' : '20px',
        margin: isDesktop ? '20px 0 60px 0' : '0 0 48px 0',
        width: '100%',
      }}
    >
      {/* Photo Frame with Polaroid styling & rotation */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <PhotoFrame
          src={image}
          alt={title}
          caption={title}
          date={date}
          size={size}
          rotation={rotation}
          tapePosition={tapePosition}
          tapeColor={tapeColor}
          fallbackUrl={fallbackUrl}
          onClick={onSelectPhoto ? () => onSelectPhoto(memory) : undefined}
        />

        {/* Decorative corner sticker overlapping the photo */}
        {sticker && (
          <Sticker
            type={sticker}
            size={52}
            rotation={index % 2 === 0 ? '-14deg' : '16deg'}
            style={{
              position: 'absolute',
              bottom: '-12px',
              right: index % 2 === 0 ? '-14px' : 'auto',
              left: index % 2 === 0 ? 'auto' : '-14px',
              zIndex: 20,
            }}
          />
        )}
      </div>

      {/* Overlapping Paper Story Card & Handwritten Note */}
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3 }}
        className="scrapbook-paper"
        style={{
          maxWidth: isDesktop ? '380px' : '100%',
          width: '100%',
          padding: '28px 24px',
          borderRadius: 'var(--radius-sm)',
          position: 'relative',
          zIndex: 8,
          transform: isDesktop ? `rotate(${index % 2 === 0 ? '1.5deg' : '-2deg'})` : 'none',
          boxShadow: 'var(--shadow-paper)',
        }}
      >
        {/* Masking tape on story card */}
        <div
          className={`decorative-tape ${index % 2 === 0 ? 'top-right' : 'top-left'}`}
          style={{ width: '80px', height: '24px' }}
        />

        {/* Header Metadata: Date & Location */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            borderBottom: '1px dashed rgba(140, 100, 70, 0.28)',
            paddingBottom: '10px',
            marginBottom: '16px',
          }}
        >
          {date && (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: 600,
              }}
            >
              <Calendar size={12} />
              {date}
            </span>
          )}

          {location && (
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.76rem',
                color: 'var(--color-text-dark-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <MapPin size={12} />
              {location}
            </span>
          )}
        </div>

        {/* Memory Title in Playfair Display */}
        <h4
          className="font-heading"
          style={{
            fontSize: '1.45rem',
            color: 'var(--color-text-dark)',
            fontWeight: 600,
            marginBottom: '10px',
            lineHeight: 1.25,
          }}
        >
          {title}
        </h4>

        {/* Caption Story */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.88rem',
            lineHeight: 1.65,
            color: 'var(--color-text-dark-muted)',
            marginBottom: '18px',
          }}
        >
          {caption}
        </p>

        {/* Handwritten Personal Note in Sacramento cursive */}
        {handwrittenNote && (
          <div
            style={{
              borderTop: '1px solid rgba(140, 100, 70, 0.18)',
              paddingTop: '12px',
            }}
          >
            <p
              className="font-handwritten"
              style={{
                fontSize: '1.75rem',
                color: 'var(--color-accent)',
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              "{handwrittenNote}"
            </p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
