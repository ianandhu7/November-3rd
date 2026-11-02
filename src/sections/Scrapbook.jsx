import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Camera, X, ZoomIn } from 'lucide-react';
import { SCRAPBOOK_MEMORIES } from '../data/memories';
import MemoryCard from '../components/MemoryCard';
import PhotoFrame from '../components/PhotoFrame';
import Sticker from '../components/Sticker';
import HandwrittenNote from '../components/HandwrittenNote';

export default function Scrapbook() {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <section id="scrapbook" className="section-wrapper" style={{ overflow: 'visible' }}>
      {/* Section Header */}
      <div className="section-heading">
        <span className="badge">
          <Camera size={14} /> Chapter II • Digital Scrapbook
        </span>
        <h2 className="title">The Scrapbook of Us</h2>
        <p className="subtitle">
          "Some moments are not just memories, they are pieces of my heart ♡"
        </p>
        <div className="divider">✦</div>
      </div>

      {/* Main Vintage Scrapbook Canvas */}
      <div
        className="scrapbook-canvas-board"
        style={{
          position: 'relative',
          padding: '40px 24px',
          maxWidth: '1080px',
          margin: '0 auto',
        }}
      >
        {/* Floating Background Adornments (Hearts, Stars, Pressed Flowers) */}
        <Sticker
          type="bow"
          size={58}
          rotation="12deg"
          style={{ position: 'absolute', top: '10px', right: '4%', zIndex: 12 }}
        />
        <Sticker
          type="rose"
          size={64}
          rotation="-15deg"
          style={{ position: 'absolute', top: '35%', left: '2%', zIndex: 12 }}
        />
        <Sticker
          type="heart"
          size={46}
          rotation="10deg"
          style={{ position: 'absolute', top: '65%', right: '3%', zIndex: 12 }}
        />
        <Sticker
          type="stamp"
          size={56}
          rotation="-8deg"
          style={{ position: 'absolute', bottom: '20px', left: '5%', zIndex: 12 }}
        />

        {/* Central Washi-Taped Intro Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scrapbook-paper"
          style={{
            maxWidth: '520px',
            margin: '0 auto 64px auto',
            padding: '24px 30px',
            textAlign: 'center',
            transform: 'rotate(-1.2deg)',
            boxShadow: 'var(--shadow-paper)',
            position: 'relative',
            zIndex: 15,
          }}
        >
          <div className="decorative-tape top-center" style={{ width: '90px' }} />
          <p
            className="font-handwritten"
            style={{
              fontSize: '2.1rem',
              color: 'var(--color-text-dark)',
              lineHeight: 1.25,
              margin: '6px 0 0 0',
              fontWeight: 400,
            }}
          >
            Same people. Same chaos. Same dreams. Different days — still us ♡
          </p>
        </motion.div>

        {/* Desktop Artistic Collage & Mobile Vertical Stack */}
        <div className="scrapbook-memory-container">
          {SCRAPBOOK_MEMORIES.map((memory, index) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              index={index}
              layoutMode="desktop-collage"
              onSelectPhoto={(mem) => setSelectedMemory(mem)}
            />
          ))}
        </div>

        {/* Bottom Handwritten Love Note on Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: '56px',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 15,
          }}
        >
          <HandwrittenNote
            note="Every picture tells a story, but my favorite is us ♡"
            subtext="Handcrafted with tape, love & pressed petals"
            variant="cream-parchment"
            rotation="1.8deg"
            tapePosition="top-center"
            hasPaperclip={true}
          />
        </motion.div>
      </div>

      {/* Lightbox Zoom Modal for Scrapbook Photos */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.88)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              zIndex: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="scrapbook-paper"
              style={{
                maxWidth: '640px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '28px',
                position: 'relative',
              }}
            >
              <button
                onClick={() => setSelectedMemory(null)}
                aria-label="Close memory view"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(0, 0, 0, 0.08)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'inherit',
                  zIndex: 10,
                }}
              >
                <X size={20} />
              </button>

              <div
                style={{
                  width: '100%',
                  maxHeight: '50vh',
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  background: '#000',
                }}
              >
                <img
                  src={selectedMemory.image}
                  alt={selectedMemory.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--color-accent)',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  {selectedMemory.date} • {selectedMemory.location}
                </span>

                <h3
                  className="font-heading"
                  style={{
                    fontSize: '1.8rem',
                    color: 'var(--color-text-dark)',
                    margin: '8px 0',
                  }}
                >
                  {selectedMemory.title}
                </h3>

                <p
                  className="font-handwritten"
                  style={{
                    fontSize: '1.9rem',
                    color: 'var(--color-accent)',
                    margin: '8px 0 14px 0',
                    lineHeight: 1.2,
                  }}
                >
                  "{selectedMemory.handwrittenNote}"
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    color: 'var(--color-text-dark-muted)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {selectedMemory.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
