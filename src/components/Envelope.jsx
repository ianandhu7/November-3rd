import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';
import { Sparkles, Heart, ArrowDown, Gift, Star } from 'lucide-react';
import { THEMES } from '../themes/themes';

export default function Envelope({ currentTheme, onEnterWorld }) {
  const [isOpen, setIsOpen] = useState(false);
  const isBurgundy = currentTheme === THEMES.BURGUNDY;
  const shouldReduceMotion = useReducedMotion();

  // Subtle mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [6, -6]);
  const rotateY = useTransform(mouseX, [-300, 300], [-6, 6]);

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleOpenSurprise = () => {
    setIsOpen(true);
  };

  // Floating background sparkles & hearts coordinates
  const floatingDecorations = [
    { id: 1, type: 'heart', top: '12%', left: '10%', size: 16, delay: 0 },
    { id: 2, type: 'star', top: '22%', right: '12%', size: 14, delay: 1.2 },
    { id: 3, type: 'star', top: '75%', left: '14%', size: 18, delay: 0.6 },
    { id: 4, type: 'heart', top: '82%', right: '15%', size: 20, delay: 1.8 },
    { id: 5, type: 'star', top: '35%', left: '6%', size: 12, delay: 2.2 },
    { id: 6, type: 'heart', top: '65%', right: '8%', size: 15, delay: 0.9 },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        padding: '10px 0',
      }}
    >
      {/* Floating ambient decorative particles */}
      {!shouldReduceMotion &&
        floatingDecorations.map((item) => (
          <motion.div
            key={item.id}
            animate={{
              y: [0, -12, 0],
              opacity: [0.35, 0.85, 0.35],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: item.delay,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              top: item.top,
              left: item.left,
              right: item.right,
              pointerEvents: 'none',
              zIndex: 1,
              color: item.type === 'heart' ? 'var(--color-accent)' : 'var(--color-gold)',
            }}
          >
            {item.type === 'heart' ? (
              <Heart size={item.size} fill="currentColor" />
            ) : (
              <Star size={item.size} fill="currentColor" />
            )}
          </motion.div>
        ))}

      {/* Top Handwritten Cursive Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '28px', position: 'relative', zIndex: 10 }}
      >
        <p
          className="font-serif"
          style={{
            fontSize: '1.05rem',
            color: 'var(--color-text-secondary)',
            marginBottom: '6px',
            fontStyle: 'italic',
            letterSpacing: '0.5px'
          }}
        >
          A Little Birthday Surprise for You...
        </p>
        <h1
          className="font-handwritten"
          style={{
            fontSize: 'clamp(2.3rem, 6vw, 3.2rem)',
            color: 'var(--color-text-primary)',
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            lineHeight: 1.2,
            margin: 0,
            fontWeight: 400
          }}
        >
          A Day Made for You ♡
        </h1>
      </motion.div>

      {/* 3D Envelope Container with gentle parallax */}
      <motion.div
        className="envelope-3d-scene"
        style={{
          perspective: 1200,
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          position: 'relative',
          width: '100%',
          maxWidth: '470px',
          height: '290px',
          margin: '0 auto',
          cursor: isOpen ? 'default' : 'pointer',
          zIndex: 15,
        }}
        onClick={!isOpen ? handleOpenSurprise : undefined}
      >
        {/* Envelope Base Body */}
        <div
          className="envelope-container"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '260px',
            background: isBurgundy
              ? 'linear-gradient(145deg, #F4E8D5 0%, #E9D7C0 100%)'
              : 'linear-gradient(145deg, #181515 0%, #0d0b0b 100%)',
            border: isBurgundy ? '1px solid #D8B58A' : '1px solid #2e2828',
            borderRadius: '6px',
            boxShadow: isBurgundy
              ? '0 20px 48px rgba(67, 13, 20, 0.65), 0 2px 8px rgba(0,0,0,0.1)'
              : '0 20px 48px rgba(0, 0, 0, 0.9), 0 2px 8px rgba(0,0,0,0.4)',
            overflow: 'visible',
            transition: 'background 0.5s ease, border-color 0.5s ease',
            zIndex: 10,
          }}
        >
          {/* Decorative Velvet Ribbon Wrap across Envelope */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '32px',
              transform: 'translateY(-50%)',
              background: isBurgundy
                ? 'linear-gradient(to bottom, #801420 0%, #A84E53 50%, #68151D 100%)'
                : 'linear-gradient(to bottom, #4a1518 0%, #A94D50 50%, #29080a 100%)',
              boxShadow: '0 3px 8px rgba(0, 0, 0, 0.35)',
              borderTop: '1px dashed rgba(255, 255, 255, 0.25)',
              borderBottom: '1px dashed rgba(255, 255, 255, 0.25)',
              zIndex: 22,
              pointerEvents: 'none',
              opacity: isOpen ? 0.4 : 0.92,
              transition: 'opacity 0.6s ease',
            }}
          />

          {/* Handwritten greeting on envelope front */}
          <div
            style={{
              position: 'absolute',
              bottom: '22px',
              left: '26px',
              fontFamily: 'var(--font-handwritten)',
              color: isBurgundy ? '#430D14' : '#F5EEE7',
              fontSize: '1.45rem',
              lineHeight: 1.2,
              pointerEvents: 'none',
              transform: 'rotate(-4deg)',
              zIndex: 25,
            }}
          >
            <span>For Nayana ♡</span>
          </div>

          {/* Pressed flower sticker tucked into the corner */}
          <div
            className="vintage-sticker"
            style={{
              position: 'absolute',
              top: '-18px',
              right: '-14px',
              width: '68px',
              height: '78px',
              pointerEvents: 'none',
              zIndex: 26,
              transform: 'rotate(14deg)',
            }}
          >
            <img
              src="/stickers/flowers/rose.svg"
              alt="Pressed dried flower"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Envelope Pocket Cutouts (Front Flaps) */}
          <svg
            viewBox="0 0 460 260"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 20,
            }}
          >
            {/* Left triangle flap */}
            <polygon
              points="0,0 230,130 0,260"
              fill={isBurgundy ? '#efe3ce' : '#141212'}
              stroke={isBurgundy ? '#e0d1bb' : '#221e1e'}
              strokeWidth="0.8"
            />
            {/* Right triangle flap */}
            <polygon
              points="460,0 230,130 460,260"
              fill={isBurgundy ? '#e9dcbf' : '#110f0f'}
              stroke={isBurgundy ? '#e0d1bb' : '#221e1e'}
              strokeWidth="0.8"
            />
            {/* Bottom triangle flap */}
            <polygon
              points="0,260 230,120 460,260"
              fill={isBurgundy ? '#f4e8d5' : '#161414'}
              stroke={isBurgundy ? '#d8b58a' : '#2c2525'}
              strokeWidth="0.8"
            />
          </svg>

          {/* Wax Seal Button (Centered) */}
          {!isOpen && (
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: [0.96, 1.04, 0.96] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="wax-seal-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleOpenSurprise();
              }}
              title="Click to break the wax seal and open surprise"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 35,
                width: '78px',
                height: '78px',
              }}
            >
              <img
                src="/stickers/hearts/heart-wax-seal.svg"
                alt="Embossed Wax Seal"
                style={{
                  width: '100%',
                  height: '100%',
                  filter: 'drop-shadow(0 6px 16px rgba(0, 0, 0, 0.7))',
                }}
              />
            </motion.div>
          )}
        </div>

        {/* 3D Top Flap */}
        <div
          className={`envelope-flap-3d ${isOpen ? 'open' : ''}`}
          style={{
            position: 'absolute',
            top: '30px',
            left: 0,
            right: 0,
            height: '140px',
            zIndex: isOpen ? 5 : 23,
            transformOrigin: 'top center',
            transition: 'transform 0.85s cubic-bezier(0.4, 0, 0.2, 1)',
            transformStyle: 'preserve-3d',
            transform: isOpen ? 'rotateX(180deg)' : 'rotateX(0deg)',
          }}
        >
          <svg viewBox="0 0 460 140" style={{ width: '100%', height: '100%', display: 'block' }}>
            <polygon
              points="0,0 230,135 460,0"
              fill={isBurgundy ? '#f6ebe0' : '#1b1717'}
              stroke={isBurgundy ? '#d8b58a' : '#302828'}
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Letter Card that slides out upon opening */}
        <motion.div
          className="envelope-letter-card scrapbook-paper"
          initial={{ y: 0, opacity: 0, scale: 0.95 }}
          animate={
            isOpen
              ? {
                  y:
                    typeof window !== 'undefined' && window.innerWidth < 480
                      ? -55
                      : typeof window !== 'undefined' && window.innerWidth < 768
                      ? -85
                      : -165,
                  opacity: 1,
                  scale: 1,
                }
              : { y: 0, opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            bottom: '20px',
            width: '92%',
            maxWidth: '430px',
            boxSizing: 'border-box',
            padding: '28px 24px',
            zIndex: isOpen ? 30 : 2,
            textAlign: 'center',
            boxShadow: '0 20px 48px rgba(0, 0, 0, 0.4)',
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
        >
          {/* Decorative washi tape at top */}
          <div className="decorative-tape top-center" />

          {/* Birthday Message Title */}
          <h3
            className="font-handwritten"
            style={{
              fontSize: '2.1rem',
              color: 'var(--color-text-dark)',
              fontWeight: 700,
              marginBottom: '10px',
              lineHeight: 1.1,
            }}
          >
            A Day Made for You ♡
          </h3>

          {/* Emotional Birthday Quote */}
          <p
            className="font-heading"
            style={{
              fontSize: '1.02rem',
              fontStyle: 'italic',
              color: 'var(--color-accent)',
              marginBottom: '14px',
              lineHeight: 1.5,
            }}
          >
            “November 3rd — a special day, because it's your birthday!”
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              color: 'var(--color-text-dark-muted)',
              lineHeight: 1.6,
              marginBottom: '22px',
            }}
          >
            “I made this little website just for you, with some pictures, memories, and a few words I wanted to share. Hope you enjoy going through it and that it makes your birthday a little more special. ♡”
          </p>

          {/* Button: Enter Your Little Surprise */}
          <button
            id="enter-our-little-world-btn"
            className="btn-primary"
            onClick={onEnterWorld}
            style={{
              width: '100%',
              padding: '13px 24px',
              fontSize: '0.96rem',
              boxShadow: '0 6px 20px var(--glow-accent)',
            }}
          >
            <span>Enter Your Little Surprise</span>
            <ArrowDown size={17} />
          </button>
        </motion.div>
      </motion.div>

      {/* Button 1: "Open your surprise" (Visible when sealed) */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            marginTop: '38px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            zIndex: 20,
          }}
        >
          <button
            id="open-surprise-btn"
            onClick={handleOpenSurprise}
            className="btn-primary"
            style={{
              padding: '14px 34px',
              fontSize: '1.02rem',
              letterSpacing: '0.5px',
              boxShadow: '0 8px 24px var(--glow-accent)',
            }}
          >
            <Gift size={19} />
            <span>Open your surprise</span>
          </button>

          <span
            className="font-handwritten"
            style={{
              fontSize: '1.4rem',
              color: 'var(--color-gold)',
              letterSpacing: '0.5px',
            }}
          >
            Click the wax seal or button above ♡
          </span>
        </motion.div>
      )}
    </div>
  );
}
