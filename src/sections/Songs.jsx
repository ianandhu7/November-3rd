import React from 'react';
import { motion } from 'framer-motion';
import { Music, Disc, Heart, Sparkles } from 'lucide-react';
import MusicPlayer from '../components/MusicPlayer';
import { SONGS_DATA } from '../data/songs';

export default function Songs({ isPlaying, onTogglePlay }) {
  return (
    <section id="songs" className="section-wrapper">
      <div className="section-header">
        <span className="section-tag">
          <Music size={14} /> Chapter V • Soundtrack Lounge
        </span>
        <h2 className="section-title">Songs That Remind Me Of You</h2>
        <p className="section-subtitle">
          "Every song carries a whisper of where we were when we first listened to it."
        </p>
      </div>

      {/* Main Interactive Music Player */}
      <MusicPlayer isPlaying={isPlaying} onTogglePlay={onTogglePlay} />

      {/* Tracklist Journal Card Pinned Below */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="vintage-paper"
        style={{
          maxWidth: '680px',
          margin: '48px auto 0 auto',
          padding: '36px 32px',
          position: 'relative',
          borderRadius: '4px',
          boxShadow: '0 12px 36px rgba(0,0,0,0.25)'
        }}
      >
        <div className="paperclip-accent" />
        <div className="washi-tape top-left" />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(140, 100, 70, 0.25)',
            paddingBottom: '12px',
            marginBottom: '20px'
          }}
        >
          <span
            className="font-handwriting"
            style={{ fontSize: '1.6rem', color: '#8b1e32', fontWeight: 700 }}
          >
            Our Curated Tracklist ♡
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.78rem',
              color: '#666',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            Exhibition Soundtrack
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {SONGS_DATA.map((song, i) => (
            <div
              key={song.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                borderRadius: '4px',
                background: 'rgba(140, 100, 70, 0.05)',
                border: '1px dashed rgba(140, 100, 70, 0.2)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#8b1e32',
                    width: '20px'
                  }}
                >
                  {i + 1}.
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      color: 'var(--theme-text-dark)',
                      margin: 0
                    }}
                  >
                    {song.title}
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#685044', margin: 0 }}>{song.artist}</p>
                </div>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.82rem',
                  color: '#8b5e67',
                  fontWeight: 500
                }}
              >
                {song.duration}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <p
            className="font-handwriting"
            style={{ fontSize: '1.35rem', color: '#8b1e32', margin: 0 }}
          >
            "Every melody holds a piece of our story."
          </p>
        </div>
      </motion.div>
    </section>
  );
}
