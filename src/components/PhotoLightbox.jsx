import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * PhotoLightbox Component
 * Fullscreen vintage-framed modal with:
 * - Zero photograph distortion (object-fit: contain)
 * - Previous (<) and Next (>) navigation controls
 * - Escape key to close & Arrow keys for navigation
 * - Mobile touch swipe gestures (left/right to navigate, down to dismiss)
 * - Theme-adaptive styling (Burgundy Romance / Midnight Memories)
 */
export default function PhotoLightbox({
  isOpen,
  photo,
  onClose,
  onPrev,
  onNext,
  currentIndex = 0,
  totalCount = 1
}) {
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev?.();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onNext?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  // Touch swipe gesture handlers
  const handleTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Horizontal swipe threshold
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        onNext?.(); // Swiped left -> next photo
      } else {
        onPrev?.(); // Swiped right -> prev photo
      }
    } else if (deltaY > 80 && Math.abs(deltaX) < 50) {
      // Swiped down -> close modal
      onClose();
    }
  };

  if (!isOpen || !photo) return null;

  const imgSrc = photo.src || photo.image;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="lightbox-backdrop"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={photo.title || 'Photo details'}
      >
        {/* Navigation Previous Button */}
        {totalCount > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev?.();
            }}
            className="lightbox-btn-nav prev"
            aria-label="Previous photograph"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ scale: 0.92, y: 18 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.92, y: 18 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="lightbox-dialog"
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar with Category, Frame Counter, and Close Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(136, 19, 55, 0.15)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                  background: 'var(--color-gold, #D8B58A)',
                  color: '#1c100a',
                  fontWeight: 600
                }}
              >
                {photo.categoryLabel || 'Vintage Memory'}
              </span>

              {totalCount > 1 && (
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--color-gold, #D8B58A)',
                    letterSpacing: '1px'
                  }}
                >
                  {currentIndex + 1} / {totalCount}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="btn-icon"
              aria-label="Close modal (Escape)"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(0, 0, 0, 0.08)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'inherit'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Photograph Container (Pure Image View, Zero distortion) */}
          <div className="lightbox-image-box" style={{ padding: '8px 0' }}>
            <img
              src={imgSrc}
              alt={photo.title || 'Enlarged memory'}
              decoding="async"
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto',
                borderRadius: '4px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.5)'
              }}
            />
          </div>
        </motion.div>

        {/* Navigation Next Button */}
        {totalCount > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext?.();
            }}
            className="lightbox-btn-nav next"
            aria-label="Next photograph"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
