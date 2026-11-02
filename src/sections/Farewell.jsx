import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { NAYANA_DATA } from '../data/content';

export default function Farewell() {
  const { untilWeMeetAgain } = NAYANA_DATA;

  return (
    <section id="farewell" className="section-wrapper" style={{ padding: '70px 20px 40px 20px' }}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">
          <Sparkles size={14} /> {untilWeMeetAgain.sectionTag}
        </span>
        <h2 className="section-title">{untilWeMeetAgain.sectionTitle}</h2>
      </div>

      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        {/* Vintage Parchment Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="vintage-paper"
          style={{
            padding: '52px 44px',
            position: 'relative',
            borderRadius: '6px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.4)',
            border: '1px solid var(--theme-surface-paper-border)',
            textAlign: 'center'
          }}
        >
          {/* Top Washi Tape */}
          <div className="washi-tape top-center" style={{ top: '-14px', width: '130px' }} />

          {/* Top Right Pressed Rose Flower */}
          <div
            style={{
              position: 'absolute',
              top: '-18px',
              right: '-16px',
              width: '64px',
              height: '76px',
              zIndex: 15,
              transform: 'rotate(14deg)',
              filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.25))',
              pointerEvents: 'none'
            }}
          >
            <img
              src="/stickers/flowers/rose.svg"
              alt="Pressed dried flower decoration"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Handwritten Subtitle Greeting */}
          <p
            className="font-handwriting"
            style={{
              fontSize: '2.1rem',
              color: 'var(--color-accent)',
              marginBottom: '20px',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            One last thing, Nayana...
          </p>

          {/* Emotional Message Paragraphs */}
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.18rem',
              lineHeight: 1.9,
              color: 'var(--color-text-dark)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              maxWidth: '560px',
              margin: '0 auto'
            }}
          >
            <p style={{ margin: 0 }}>
              I really hope we get to meet again someday.
            </p>
            <p style={{ margin: 0 }}>
              Maybe we'll have more time to talk, laugh and create some new memories.
            </p>
            <p style={{ margin: 0 }}>
              Until then, let's keep in touch just like we do now.
            </p>
            <p style={{ margin: 0 }}>
              Take care, keep smiling, and all the very best for everything ahead.
            </p>
          </div>

          {/* Warm Calligraphic Sign-off */}
          <div
            style={{
              marginTop: '34px',
              paddingTop: '20px',
              borderTop: '1px dashed rgba(140, 100, 70, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <p
              className="font-handwriting"
              style={{
                fontSize: '2.3rem',
                color: 'var(--color-accent)',
                margin: 0,
                fontWeight: 700
              }}
            >
              Hope to see you again soon! ♡
            </p>

            <div style={{ display: 'flex', gap: '8px', color: 'var(--color-accent)', marginTop: '4px' }}>
              <Heart size={18} fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
