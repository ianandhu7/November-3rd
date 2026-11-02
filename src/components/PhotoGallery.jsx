import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn, Film, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/memories';
import PhotoLightbox from './PhotoLightbox';

/**
 * PhotoGallery Component
 * Horizontal 35mm film-strip gallery with:
 * - Authentic 35mm perforations & frame markings
 * - Printed photograph cards with realistic gloss sheen & handwriting
 * - Horizontal smooth scrolling with navigation arrows
 * - Interactive Lightbox with zero image distortion, keyboard navigation, and swipe gestures
 * - Category filter pills for All Pictures, Favourite Moments, Smiles
 */
export default function PhotoGallery({ onOpenPhoto }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Pictures' },
    { id: 'favourites', label: 'Favourite Moments' },
    { id: 'smiles', label: 'Smiles' }
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Horizontal scroll controls
  const handleScroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 320;
    scrollContainerRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth'
    });
  };

  // Lightbox handlers
  const handleOpenLightbox = (index) => {
    setActivePhotoIndex(index);
    if (onOpenPhoto) {
      onOpenPhoto(filteredItems[index]);
    }
  };

  const handleCloseLightbox = () => {
    setActivePhotoIndex(null);
  };

  const handlePrevPhoto = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNextPhoto = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="horizontal-film-gallery-section">
      {/* Category filter pills */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '28px'
        }}
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
              }}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: isActive ? 'var(--color-gold)' : 'rgba(216, 181, 138, 0.35)',
                background: isActive ? 'var(--color-gold)' : 'var(--theme-surface-glass, rgba(0,0,0,0.3))',
                color: isActive ? '#140c08' : 'var(--color-text-primary)',
                fontWeight: isActive ? 700 : 500,
                fontSize: '0.88rem',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s ease'
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* 35mm Continuous Horizontal Film Strip */}
      <div
        style={{
          position: 'relative',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          boxShadow: '0 16px 44px rgba(0, 0, 0, 0.65)'
        }}
      >
        {/* Top 35mm Sprocket Perforations */}
        <div className="film-sprocket-track" aria-hidden="true" />

        {/* Film Edge Markings Bar */}
        <div className="film-edge-markings">
          <span>KODAK PORTRA 400 • 35MM FILM ARCHIVE</span>
          <span>SAFETY FILM • ISO 400 • EXP 36</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Film size={12} /> SWEET MEMORIES
          </span>
        </div>

        {/* Left Floating Nav Arrow */}
        <button
          onClick={() => handleScroll('prev')}
          className="film-nav-arrow prev"
          aria-label="Scroll left in film gallery"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Horizontal Film Strip Scroll Area */}
        <div
          ref={scrollContainerRef}
          className="film-scroll-container"
          tabIndex={0}
          role="region"
          aria-label="Horizontal photograph gallery"
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="printed-photo-card"
              onClick={() => handleOpenLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenLightbox(idx);
                }
              }}
              aria-label={`Enlarge photograph ${idx + 1}`}
            >
              {/* Photo Image Frame (Only the images) */}
              <div className="printed-photo-frame">
                <img
                  src={item.src}
                  alt={item.title || `Photograph ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                {/* Glossy Photo Sheen */}
                <div className="photo-gloss-overlay" aria-hidden="true" />

                {/* Hover Zoom Overlay */}
                <div className="photo-zoom-hint" aria-hidden="true">
                  <ZoomIn size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Floating Nav Arrow */}
        <button
          onClick={() => handleScroll('next')}
          className="film-nav-arrow next"
          aria-label="Scroll right in film gallery"
        >
          <ChevronRight size={24} />
        </button>

        {/* Bottom Film Edge Markings Bar */}
        <div className="film-edge-markings" style={{ borderTop: '1px solid #1a1717', borderBottom: 'none' }}>
          <span>PORTRA 400-2</span>
          <span>◄ 1A • 2A • 3A • 4A • 5A • 6A • 7A • 8A ►</span>
          <span>© A DAY MADE FOR You</span>
        </div>

        {/* Bottom 35mm Sprocket Perforations */}
        <div className="film-sprocket-track" aria-hidden="true" />
      </div>

      {/* Interactive Lightbox Modal */}
      <PhotoLightbox
        isOpen={activePhotoIndex !== null}
        photo={activePhotoIndex !== null ? filteredItems[activePhotoIndex] : null}
        onClose={handleCloseLightbox}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
        currentIndex={activePhotoIndex || 0}
        totalCount={filteredItems.length}
      />
    </div>
  );
}
