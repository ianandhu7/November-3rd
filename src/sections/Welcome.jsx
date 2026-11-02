import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { NAYANA_DATA } from '../data/content';

export default function Welcome() {
  const { hero } = NAYANA_DATA;

  const handleNextSection = () => {
    const memEl = document.getElementById('memories');
    if (memEl) {
      memEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="welcome" className="section-wrapper">
      <div
        style={{
          maxWidth: '780px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Vintage Paper Plaque */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="vintage-paper"
          style={{
            padding: '52px 42px',
            position: 'relative',
            borderRadius: '4px',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Main Title */}
          <h2
            className="font-handwriting"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 3.4rem)',
              color: 'var(--theme-text-dark)',
              fontWeight: 700,
              marginBottom: '14px',
              lineHeight: 1.15,
            }}
          >
            {hero.mainHeading}
          </h2>

          {/* Subtitle / Intro Quote */}
          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.15rem, 3vw, 1.4rem)',
              color: '#6b2031',
              fontStyle: 'italic',
              maxWidth: '580px',
              margin: '0 auto 24px auto',
              lineHeight: 1.6,
            }}
          >
            {hero.quote}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.02rem',
              color: 'var(--theme-text-dark-muted)',
              lineHeight: 1.8,
              maxWidth: '560px',
              margin: '0 auto 36px auto',
            }}
          >
            {hero.description}
          </p>

          {/* Next Button */}
          <button
            id="welcome-lets-go-btn"
            onClick={handleNextSection}
            className="btn-primary"
            style={{
              padding: '13px 34px',
              fontSize: '1.05rem',
              boxShadow: '0 6px 20px rgba(139, 30, 50, 0.4)',
            }}
          >
            <span>Begin the journey</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
