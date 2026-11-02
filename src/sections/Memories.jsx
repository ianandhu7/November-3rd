import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, MapPin, Calendar } from 'lucide-react';
import { NAYANA_DATA } from '../data/content';

export default function Memories() {
  const { littleMoments } = NAYANA_DATA;

  return (
    <section id="memories" className="section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <Sparkles size={14} /> {littleMoments.sectionTag}
        </span>
        <h2 className="section-title">{littleMoments.sectionTitle}</h2>
        <p className="section-subtitle">
          "{littleMoments.subtitle}"
        </p>
      </div>

      {/* Open Book Spread */}
      <div
        className="open-book-spread vintage-paper"
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          display: 'flex',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
          position: 'relative'
        }}
      >
        {/* Left Book Page: Vintage Polaroid Snapshot */}
        <div
          className="book-page-left"
          style={{
            flex: '1 1 45%',
            padding: '42px 36px',
            borderRight: '1px solid rgba(140, 100, 70, 0.25)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to right, #f8f2e4 0%, #fdf9f0 95%, #eae1ce 100%)'
          }}
        >
          {/* Polaroid on page */}
          <div
            className="polaroid-frame"
            style={{
              width: '100%',
              maxWidth: '310px',
              transform: 'rotate(-2deg)',
              boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
              padding: '12px 12px 28px 12px'
            }}
          >
            <div className="washi-tape top-center" />
            <div
              style={{
                width: '100%',
                height: '240px',
                borderRadius: '2px',
                overflow: 'hidden',
                background: '#1a1818'
              }}
            >
              <img
                src="/images/nayana/nayana-portrait-bw.png"
                alt="Your Special Day • November 3"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <p className="polaroid-caption" style={{ margin: '10px 0 0 0', fontSize: '1.15rem' }}>
              November 3, 2026
            </p>
          </div>

          {/* Sticky Note */}
          <div
            style={{
              marginTop: '20px',
              background: '#fef08a',
              color: '#713f12',
              padding: '8px 18px',
              borderRadius: '2px',
              fontFamily: 'var(--font-handwriting)',
              fontSize: '1.25rem',
              fontWeight: 700,
              boxShadow: '0 4px 10px rgba(0,0,0,0.12)',
              transform: 'rotate(2deg)'
            }}
          >
            {littleMoments.stickyNote}
          </div>
        </div>

        {/* Right Book Page: Personal Handwritten Story */}
        <div
          className="book-page-right"
          style={{
            flex: '1 1 55%',
            padding: '46px 42px',
            position: 'relative',
            background: 'linear-gradient(to right, #eae1ce 0%, #fdf9f0 5%, #f8f2e4 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          {/* Pressed Flower Sticker in top right */}
          <div
            style={{
              position: 'absolute',
              top: '18px',
              right: '18px',
              width: '56px',
              height: '66px',
              pointerEvents: 'none'
            }}
          >
            <img
              src="/stickers/flowers/rose.svg"
              alt="Rose flower"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <div>
            {/* Date & Location Pill Badge */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px'
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: '#8b5e67',
                  fontWeight: 600
                }}
              >
              
              </span>
            </div>

            {/* Subheading Date */}
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                letterSpacing: '1.2px',
                color: 'var(--color-accent, #8b1e32)',
                fontWeight: 700,
                margin: '0 0 10px 0'
              }}
            >
              November 3, 2026 • ♡
            </p>

            <h3
              className="font-handwriting"
              style={{
                fontSize: '2.4rem',
                color: 'var(--theme-text-dark)',
                margin: '0 0 20px 0',
                fontWeight: 700,
                lineHeight: 1.15
              }}
            >
              It's Your Day!
            </h3>

            {/* Exact personal birthday paragraphs */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                fontFamily: 'var(--font-serif)',
                fontSize: '1.12rem',
                lineHeight: 1.8,
                color: 'var(--theme-text-dark)',
              }}
            >
              {littleMoments.paragraphs.map((p, index) => (
                <p
                  key={index}
                  style={{
                    margin: 0,
                    fontWeight: index === 0 ? 600 : 400
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Bottom Divider & Touch */}
          <div
            style={{
              borderTop: '1px dashed rgba(140, 100, 70, 0.3)',
              paddingTop: '16px',
              marginTop: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <span
              className="font-handwriting"
              style={{ fontSize: '1.35rem', color: '#8b1e32', fontWeight: 600 }}
            >
              November 3, 2026 • ♡
            </span>
            <Heart size={18} color="#8b1e32" fill="#8b1e32" />
          </div>
        </div>
      </div>
    </section>
  );
}
