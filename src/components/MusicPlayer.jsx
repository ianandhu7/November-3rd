import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Disc3, Heart } from 'lucide-react';
import { SONGS_DATA } from '../data/songs';
import { romanticAudio } from '../utils/audioEngine';

export default function MusicPlayer({ isPlaying, onTogglePlay }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [progress, setProgress] = useState(30);

  const currentTrack = SONGS_DATA[currentTrackIndex] || SONGS_DATA[0];

  useEffect(() => {
    if (isPlaying) {
      romanticAudio.playTrack(currentTrack.src, currentTrack.chords, handleNext);
    } else {
      romanticAudio.stop();
    }
  }, [isPlaying, currentTrackIndex]);

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % SONGS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + SONGS_DATA.length) % SONGS_DATA.length);
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    romanticAudio.setVolume(val);
  };

  return (
    <div
      className="vinyl-player-card glass-panel"
      style={{
        padding: '36px',
        maxWidth: '780px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
        position: 'relative'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px'
        }}
      >
        {/* Left: Spinning Vinyl Disc & Stylus */}
        <div
          style={{
            position: 'relative',
            width: '210px',
            height: '210px',
            margin: '0 auto'
          }}
        >
          {/* Vinyl Disc */}
          <div
            className={`vinyl-record-disc animate-spin-vinyl ${!isPlaying ? 'paused' : ''}`}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, #222 20%, #111 21%, #090909 60%, #1a1a1a 100%)',
              border: '4px solid #333',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Grooves concentric rings */}
            <div
              style={{
                position: 'absolute',
                inset: '20px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.06)',
                pointerEvents: 'none'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: '45px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.06)',
                pointerEvents: 'none'
              }}
            />
            {/* Center Label */}
            <div
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: 'var(--theme-wax-seal)',
                border: '2px solid var(--theme-accent-gold)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
                color: 'var(--theme-accent-gold)',
                textAlign: 'center',
                padding: '4px'
              }}
            >
              <Heart size={16} fill="currentColor" />
              <span style={{ fontSize: '8px', letterSpacing: '1px', marginTop: '2px' }}>US • 33 RPM</span>
            </div>
            {/* Center spindle hole */}
            <div
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#ffffff'
              }}
            />
          </div>

          {/* Tonearm Stylus */}
          <div
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '80px',
              height: '110px',
              pointerEvents: 'none',
              transformOrigin: 'top right',
              transform: isPlaying ? 'rotate(18deg)' : 'rotate(0deg)',
              transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: 10
            }}
          >
            <svg viewBox="0 0 80 110" style={{ width: '100%', height: '100%' }}>
              <circle cx="70" cy="15" r="10" fill="#888" stroke="#555" strokeWidth="2" />
              <path d="M70,15 L25,85 L18,95" stroke="#aaa" strokeWidth="3" fill="none" />
              <rect x="12" y="90" width="12" height="16" fill="#333" rx="2" />
            </svg>
          </div>
        </div>

        {/* Right: Track Information & Audio Spectrum */}
        <div style={{ flex: '1 1 300px' }}>
          <span
            style={{
              fontSize: '0.8rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--theme-accent-gold)',
              fontWeight: 600
            }}
          >
            Now Playing • Memory Soundtrack
          </span>

          <h3
            className="font-serif"
            style={{
              fontSize: '1.9rem',
              color: 'var(--theme-text-primary)',
              marginTop: '4px',
              marginBottom: '4px'
            }}
          >
            {currentTrack.title}
          </h3>

          <p style={{ color: 'var(--theme-text-secondary)', fontSize: '0.95rem', marginBottom: '14px' }}>
            {currentTrack.artist}
          </p>

          <p
            className="font-handwriting"
            style={{
              fontSize: '1.25rem',
              color: 'var(--theme-text-muted)',
              marginBottom: '20px',
              lineHeight: 1.3
            }}
          >
            "{currentTrack.note}"
          </p>

          {/* Visualizer Spectrum Bars */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '4px',
              height: '32px',
              marginBottom: '18px'
            }}
          >
            {[18, 28, 14, 32, 22, 30, 16, 26, 12, 24, 32, 20].map((h, idx) => (
              <div
                key={idx}
                style={{
                  flex: 1,
                  background: 'var(--theme-accent-gold)',
                  borderRadius: '2px',
                  height: isPlaying ? `${h}px` : '4px',
                  transition: 'height 0.3s ease',
                  opacity: 0.8
                }}
              />
            ))}
          </div>

          {/* Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button
                onClick={handlePrev}
                title="Previous track"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--theme-text-primary)',
                  cursor: 'pointer',
                  padding: '6px'
                }}
              >
                <SkipBack size={20} />
              </button>

              <button
                id="main-play-pause-btn"
                onClick={onTogglePlay}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'var(--theme-accent-gold)',
                  color: 'var(--theme-text-dark)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px var(--theme-accent-gold-glow)'
                }}
              >
                {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
              </button>

              <button
                onClick={handleNext}
                title="Next track"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--theme-text-primary)',
                  cursor: 'pointer',
                  padding: '6px'
                }}
              >
                <SkipForward size={20} />
              </button>
            </div>

            {/* Volume Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                aria-label="Volume slider"
                style={{
                  width: '85px',
                  accentColor: 'var(--theme-accent-gold)',
                  cursor: 'pointer'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
