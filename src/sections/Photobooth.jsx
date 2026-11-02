import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, Heart, Star, Film } from 'lucide-react';
import { PHOTOBOOTH_DATA } from '../data/memories';
import ScallopedFrame from '../components/ScallopedFrame';
import PhotoLightbox from '../components/PhotoLightbox';
import PhotoGallery from '../components/PhotoGallery';

/**
 * Photobooth Section
 * Recreates the printed vintage photobooth strip from the reference board:
 * - 6-photo photobooth arrangement (2 columns x 3 rows)
 * - Scalloped lace photo borders & white/cream outlines
 * - Burgundy decorative borders (charcoal in Midnight)
 * - Birthday stickers: "20" milestone badge with party hat, birthday cake, cute cat, tiny stars & flowers
 * - Birthday name label pill badge: "Nayana"
 * - 3 circular cutout mini-portraits
 * - Fullscreen camera flash trigger
 * - Horizontal 35mm film-strip gallery with lightbox and touch swipe gestures
 */
export default function Photobooth() {
  const [flashActive, setFlashActive] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Trigger retro camera flash animation
  const handleTriggerFlash = () => {
    setFlashActive(true);
    setTimeout(() => {
      setFlashActive(false);
    }, 650);
  };

  // Lightbox handlers for the 6 photobooth frames + 3 cutouts
  const allStripItems = [
    ...PHOTOBOOTH_DATA.frames.map((frame) => ({
      ...frame,
      categoryLabel: 'Photo Strip',
      quote: frame.caption
    })),
    ...PHOTOBOOTH_DATA.cutouts.map((cutout) => ({
      id: cutout.id,
      title: `Cutout Portrait • ${cutout.label}`,
      image: cutout.image,
      caption: `A delicate vintage cutout portrait of ${cutout.label}.`,
      quote: 'Small pieces of happiness captured on paper.',
      categoryLabel: 'Cutout Portrait',
      date: 'Special Edition'
    }))
  ];

  const handleOpenStripPhoto = (index) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handlePrevPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev > 0 ? prev - 1 : allStripItems.length - 1));
  };

  const handleNextPhoto = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev < allStripItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="photobooth" className="section-wrapper">
      {/* Camera Flash Screen Overlay */}
      <div className={`camera-flash-overlay ${flashActive ? 'active' : ''}`} />

      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">
          <Camera size={14} /> 02 • Captured Smiles
        </span>
        <h2 className="section-title">Captured Smiles</h2>
        <p className="section-subtitle">
          "A gallery celebrating her smile, personality and favourite pictures."
        </p>
      </div>

      {/* Main Composition: Photobooth Strip + Artistic Collage Story Card */}
      <div
        className="photobooth-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '64px',
          position: 'relative'
        }}
      >
        {/* ========================================================
            THE VINTAGE PHOTOBOOTH STRIP BOARD
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="photobooth-strip-board"
        >
          {/* Top Vintage Stickers on Strip */}
          {/* 1. "20" Milestone Badge with Party Hat (Top-Left) */}
          <div
            className="vintage-sticker"
            style={{
              position: 'absolute',
              top: '-18px',
              left: '-22px',
              width: '68px',
              height: '68px',
              zIndex: 15,
              transform: 'rotate(-10deg)'
            }}
          >
            <img
              src="/stickers/decorations/badge-20.svg"
              alt="20th Birthday Badge"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* 2. Tiny Stars & Sparkles Sticker (Top-Right) */}
          <div
            className="vintage-sticker"
            style={{
              position: 'absolute',
              top: '-12px',
              right: '-14px',
              width: '46px',
              height: '46px',
              zIndex: 15,
              transform: 'rotate(8deg)'
            }}
          >
            <img
              src="/stickers/decorations/tiny-stars.svg"
              alt="Tiny stars"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* 3. Cute Illustrated Cat Sticker (Mid-Left) */}
          <div
            className="vintage-sticker"
            style={{
              position: 'absolute',
              top: '46%',
              left: '-26px',
              width: '56px',
              height: '56px',
              zIndex: 15,
              transform: 'rotate(-8deg)'
            }}
          >
            <img
              src="/stickers/decorations/cat-sticker.svg"
              alt="Cute illustrated cat sticker"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* 4. Birthday Cake with Candles Sticker (Mid-Right) */}
          <div
            className="vintage-sticker"
            style={{
              position: 'absolute',
              top: '52%',
              right: '-24px',
              width: '60px',
              height: '60px',
              zIndex: 15,
              transform: 'rotate(9deg)'
            }}
          >
            <img
              src="/stickers/decorations/birthday-cake.svg"
              alt="Birthday cake sticker"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          {/* Photobooth Strip Header */}
          <div className="photobooth-strip-header">
            <h3 className="photobooth-brand-title">
              {PHOTOBOOTH_DATA.headerTitle}
            </h3>
            <p className="photobooth-brand-sub">
              {PHOTOBOOTH_DATA.editionTag} • 35MM AUTOMATED BOOTH
            </p>
          </div>

          {/* Six-Photo Photobooth Grid (2 columns x 3 rows) */}
          <div className="photobooth-grid-6">
            {PHOTOBOOTH_DATA.frames.map((frame, idx) => (
              <ScallopedFrame
                key={frame.id}
                image={frame.image}
                title={frame.title}
                caption={frame.caption}
                date={frame.date}
                aspectRatio="4 / 3"
                onClick={() => handleOpenStripPhoto(idx)}
              />
            ))}
          </div>

          {/* Strip Footer: Birthday Text, Name Pill & 3 Circular Cutouts */}
          <div className="photobooth-strip-footer">
            <p className="photobooth-birthday-text">
              {PHOTOBOOTH_DATA.birthdayWish}
            </p>

            {/* Birthday Name Label Pill */}
            <div>
              <div className="photobooth-name-pill">
                <Heart size={14} fill="currentColor" />
                <span>{PHOTOBOOTH_DATA.birthdayName}</span>
                <Sparkles size={14} />
              </div>
            </div>

            {/* 3 Circular Cutout Mini-Portraits */}
            <div className="photobooth-cutouts-row">
              {PHOTOBOOTH_DATA.cutouts.map((cutout, cIdx) => (
                <motion.div
                  key={cutout.id}
                  whileHover={{ scale: 1.15, rotate: cIdx === 0 ? -4 : cIdx === 2 ? 4 : 0 }}
                  whileTap={{ scale: 0.95 }}
                  className="photobooth-cutout-avatar"
                  onClick={() => handleOpenStripPhoto(PHOTOBOOTH_DATA.frames.length + cIdx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View cutout portrait: ${cutout.label}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOpenStripPhoto(PHOTOBOOTH_DATA.frames.length + cIdx);
                    }
                  }}
                >
                  <img src={cutout.image} alt={cutout.label} loading="lazy" decoding="async" />
                </motion.div>
              ))}
            </div>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '1.5px',
                color: 'rgba(247, 234, 219, 0.65)',
                textTransform: 'uppercase',
                marginTop: '12px',
                marginBottom: 0
              }}
            >
              Curated Photo Strip • A Day Made for You ♡
            </p>
          </div>
        </motion.div>

        {/* ========================================================
            ARTISTIC COLLAGE STORY & CAMERA SHUTTER CARD
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="photo-card"
          style={{
            maxWidth: '480px',
            position: 'relative',
            padding: '32px 28px'
          }}
        >
          {/* Decorative Washi Tape on Top Center */}
          <div className="washi-tape top-center" style={{ top: '-14px' }} />

          {/* Vintage Stamp on Top Right */}
          <div
            className="vintage-sticker"
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '42px',
              height: '42px'
            }}
          >
            <img
              src="/stickers/decorations/stamp.svg"
              alt="Airmail stamp"
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <div className="photo-card-inner" style={{ padding: '20px 16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: 'var(--color-gold, #D8B58A)',
                fontWeight: 700,
                display: 'block',
                marginBottom: '8px'
              }}
            >
              A Special Memory • Snapshot № 1103
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.1rem',
                color: 'var(--color-text-dark, #241915)',
                margin: '0 0 16px 0',
                lineHeight: 1.2
              }}
            >
              That One Smile ♡
            </h3>

            <div
              style={{
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-text-dark)',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                margin: '0 0 20px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <p style={{ margin: 0 }}>
                I still remember the day we met.
              </p>
              <p style={{ margin: 0 }}>
                I was so shy to talk to you. I couldn't even say all the things I wanted to. But there's one thing I still remember clearly — your smile.
              </p>
              <p style={{ margin: 0 }}>
                Maybe you were thinking, 'Ee chekkan entha ingane?' 😂
              </p>
              <p style={{ margin: 0 }}>
                I don't know what you were thinking at that moment, but I still remember that smile.
              </p>
              <p style={{ margin: 0 }}>
                Even today, when I think about that day, it makes me smile too.
              </p>
              <p
                className="handwritten-note"
                style={{
                  fontSize: '1.5rem',
                  color: '#881337',
                  lineHeight: 1.3,
                  margin: '8px 0 0 0'
                }}
              >
                "Sometimes, even small moments become the sweetest memories. ♡"
              </p>
            </div>

            {/* Vintage Camera Shutter Flash Button */}
            <button
              id="photobooth-flash-btn"
              onClick={handleTriggerFlash}
              className="btn-primary"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px 22px',
                fontSize: '0.95rem'
              }}
            >
              <Camera size={18} />
              <span>Flash The Shutter 📸</span>
            </button>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '14px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-gold, #D8B58A)',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}
            >
              <Film size={12} />
              <span>Tap any photo frame to inspect memory</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========================================================
          HORIZONTAL FILM-STRIP GALLERY
          ======================================================== */}
      <PhotoGallery />

      {/* Interactive Lightbox for the Photobooth Strip Items */}
      <PhotoLightbox
        isOpen={selectedPhotoIndex !== null}
        photo={selectedPhotoIndex !== null ? allStripItems[selectedPhotoIndex] : null}
        onClose={handleCloseLightbox}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
        currentIndex={selectedPhotoIndex || 0}
        totalCount={allStripItems.length}
      />
    </section>
  );
}
