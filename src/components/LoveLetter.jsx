import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { NAYANA_DATA } from '../data/content';

export default function LoveLetter() {
  const { noteForYou } = NAYANA_DATA;
  const { firstNote, secondNote } = noteForYou;
  const [wishesCount, setWishesCount] = useState(128);
  const [sparklesList, setSparklesList] = useState([]);

  const handleSendWish = () => {
    setWishesCount((c) => c + 1);
    const id = Date.now() + Math.random();
    setSparklesList((prev) => [...prev, { id, x: (Math.random() - 0.5) * 80 }]);
    setTimeout(() => {
      setSparklesList((prev) => prev.filter((s) => s.id !== id));
    }, 1400);
  };

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '920px',
        margin: '0 auto',
        padding: '20px 0',
      }}
    >
      {/* 2 Note Cards: Side by side on desktop, stacked on mobile */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          alignItems: 'stretch',
        }}
      >
        {/* ========================================================
            CARD 1: Little Things I Appreciate ♡
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="vintage-paper love-letter-parchment"
          style={{
            padding: '42px 34px',
            position: 'relative',
            borderRadius: '4px',
            boxShadow: '0 16px 45px rgba(0,0,0,0.3)',
            border: '1px solid var(--theme-surface-paper-border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Brass Paperclip Accent */}
          <div className="paperclip-accent" />

          {/* Pressed Rose Flower Decoration */}
          <div
            style={{
              position: 'absolute',
              top: '-18px',
              right: '-14px',
              width: '58px',
              height: '68px',
              zIndex: 20,
              transform: 'rotate(12deg)',
              filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.25))',
              pointerEvents: 'none',
            }}
          >
            <img
              src="/stickers/flowers/rose.svg"
              alt="Pressed rose"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <div>
            {/* Header Stamp */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px dashed rgba(140, 100, 80, 0.35)',
                paddingBottom: '12px',
                marginBottom: '22px',
              }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: '1rem',
                  color: 'var(--color-accent)',
                  fontWeight: 700,
                }}
              >
                Note 01 • Appreciation
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-dark-muted)',
                }}
              >
                Dispatch № 01
              </span>
            </div>

            {/* Note Title */}
            <h3
              className="font-handwriting"
              style={{
                fontSize: '2.1rem',
                color: 'var(--color-text-dark)',
                marginBottom: '18px',
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              {firstNote.title}
            </h3>

            {/* Note Body */}
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.08rem',
                lineHeight: 1.85,
                color: 'var(--color-text-dark)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {firstNote.paragraphs.map((p, idx) => (
                <p key={idx} style={{ margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Footer touch */}
          <div
            style={{
              marginTop: '28px',
              paddingTop: '14px',
              borderTop: '1px dashed rgba(140, 100, 80, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span
              className="font-handwriting"
              style={{ fontSize: '1.3rem', color: 'var(--color-accent)', fontWeight: 600 }}
            >
              Stay the way you are. ♡
            </span>
            <Heart size={16} color="var(--color-accent)" fill="var(--color-accent)" />
          </div>
        </motion.div>

        {/* ========================================================
            CARD 2: A Wish for Your Future ♡
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="vintage-paper love-letter-parchment"
          style={{
            padding: '42px 34px',
            position: 'relative',
            borderRadius: '4px',
            boxShadow: '0 16px 45px rgba(0,0,0,0.3)',
            border: '1px solid var(--theme-surface-paper-border)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Top Washi Tape */}
          <div className="washi-tape top-center" style={{ top: '-14px', width: '100px' }} />

          {/* Pink Ribbon Bow Decoration */}
          <div
            style={{
              position: 'absolute',
              top: '-16px',
              right: '-14px',
              width: '54px',
              height: '54px',
              zIndex: 20,
              filter: 'drop-shadow(1px 3px 5px rgba(0,0,0,0.25))',
              pointerEvents: 'none',
            }}
          >
            <img
              src="/stickers/bows/pink-bow.svg"
              alt="Ribbon bow"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <div>
            {/* Header Stamp */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px dashed rgba(140, 100, 80, 0.35)',
                paddingBottom: '12px',
                marginBottom: '22px',
              }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: '1rem',
                  color: 'var(--color-accent)',
                  fontWeight: 700,
                }}
              >
                Note 02 • Warm Wishes
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-dark-muted)',
                }}
              >
                Dispatch № 02
              </span>
            </div>

            {/* Note Title */}
            <h3
              className="font-handwriting"
              style={{
                fontSize: '2.1rem',
                color: 'var(--color-text-dark)',
                marginBottom: '18px',
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              {secondNote.title}
            </h3>

            {/* Note Body */}
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.08rem',
                lineHeight: 1.85,
                color: 'var(--color-text-dark)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {secondNote.paragraphs.map((p, idx) => (
                <p key={idx} style={{ margin: 0 }}>
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Footer touch */}
          <div
            style={{
              marginTop: '28px',
              paddingTop: '14px',
              borderTop: '1px dashed rgba(140, 100, 80, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span
              className="font-handwriting"
              style={{ fontSize: '1.3rem', color: 'var(--color-accent)', fontWeight: 600 }}
            >
              You've got this, Nayana! ❤️
            </span>
            <Sparkles size={16} color="var(--color-accent)" />
          </div>
        </motion.div>
      </div>

      {/* Interactive Birthday Wishes Button */}
      <div
        style={{
          marginTop: '44px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <button
          id="send-birthday-wishes-btn"
          onClick={handleSendWish}
          className="btn-primary"
          style={{
            padding: '12px 28px',
            fontSize: '0.95rem',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <Sparkles size={18} />
          <span>Send Birthday Wishes to Nayana ({wishesCount})</span>
        </button>

        {/* Floating animated sparkles on tap */}
        {sparklesList.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 1, y: 0, x: s.x, scale: 0.8 }}
            animate={{ opacity: 0, y: -75, scale: 1.4 }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: '-10px',
              pointerEvents: 'none',
              zIndex: 30,
              color: 'var(--color-gold)',
            }}
          >
            <Sparkles size={22} fill="currentColor" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
