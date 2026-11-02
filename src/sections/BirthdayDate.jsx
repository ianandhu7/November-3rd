import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Calendar as CalendarIcon,
  Heart,
  Sparkles,
  PartyPopper,
  CheckCircle,
  Gift
} from 'lucide-react';

/**
 * BirthdayDate Section
 * Faithfully inspired by Screen 7 ("Final Surprise / Birthday") from the supplied scrapbook references:
 * - Authentic vintage wall calendar plaque with deckled parchment texture
 * - November 3rd hand-circled with a sketched red heart felt-pen outline & soft watercolor blush
 * - Prominent Display:
 *    • Birthday Date: November 3rd
 *    • Month: November
 *    • Year: Dynamic year (e.g. 2026)
 *    • Heartfelt Personal Birthday Message with romantic calligraphy signoff
 * - Interactive Timeline Awareness:
 *    • Upcoming: Dynamic vintage countdown timer (Days, Hours, Minutes, Seconds)
 *    • Passed: Heartfelt birthday celebration retrospective message & confetti launcher
 *    • Today: Grand birthday celebration proclamation with celebratory confetti shower
 * - Scrapbook Embellishments:
 *    • Top washi tape binding
 *    • "It's your day ♡" pinned badge
 *    • Vintage postmark airmail cancellation stamp (NOV 03)
 *    • Pressed dried rose sprig
 *    • Keepsake couple Polaroid photo with washi tape ("Our favorite day ♡")
 *    • Pink satin ribbon bow sticker
 * - Timeline View switcher pills (Live, Countdown, Celebration) for seamless preview
 * - 100% responsive and fully compatible with Burgundy Romance & Midnight Memories themes
 */
export default function BirthdayDate() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Keep live time ticking every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Target birthday calculation (November 3rd of current year)
  const birthdayYear = currentTime.getFullYear();
  const birthdayMonth = 10; // November (0-indexed: 0=Jan ... 10=Nov)
  const birthdayDay = 3;

  const birthdayDateObj = useMemo(() => {
    return new Date(birthdayYear, birthdayMonth, birthdayDay, 0, 0, 0);
  }, [birthdayYear]);

  const birthdayEndDateObj = useMemo(() => {
    return new Date(birthdayYear, birthdayMonth, birthdayDay, 23, 59, 59);
  }, [birthdayYear]);

  // Determine current timeline status
  const isToday = useMemo(() => {
    return currentTime >= birthdayDateObj && currentTime <= birthdayEndDateObj;
  }, [currentTime, birthdayDateObj, birthdayEndDateObj]);

  const isUpcomingLive = useMemo(() => {
    return currentTime < birthdayDateObj;
  }, [currentTime, birthdayDateObj]);

  // Effective mode based on live time
  const effectiveMode = useMemo(() => {
    if (isToday) return 'today';
    return isUpcomingLive ? 'upcoming' : 'passed';
  }, [isToday, isUpcomingLive]);

  // Dynamic countdown calculations
  const countdown = useMemo(() => {
    const diff = birthdayDateObj.getTime() - currentTime.getTime();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }, [currentTime, birthdayDateObj]);

  // Celebratory confetti shower
  const triggerBirthdayConfetti = () => {
    // Stage 1: Central explosion of heart/gold/rose particles
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#E11D48', '#D8B58A', '#F4E8D5', '#881337', '#FBBF24']
    });

    // Stage 2: Dual side heart cannons
    setTimeout(() => {
      confetti({
        particleCount: 45,
        angle: 60,
        spread: 55,
        origin: { x: 0.15, y: 0.7 },
        colors: ['#E11D48', '#FDA4AF', '#BE123C']
      });
      confetti({
        particleCount: 45,
        angle: 120,
        spread: 55,
        origin: { x: 0.85, y: 0.7 },
        colors: ['#D8B58A', '#FBBF24', '#E11D48']
      });
    }, 220);

    // Stage 3: Gentle star rain
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 90,
        startVelocity: 22,
        origin: { y: 0.45 },
        shapes: ['circle'],
        colors: ['#FDE047', '#E11D48', '#F43F5E']
      });
    }, 450);
  };

  // Days in November (30 days)
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  // November 1st weekday offset (0=Sun, 1=Mon, ..., 6=Sat)
  const firstDayOfMonthIndex = new Date(birthdayYear, birthdayMonth, 1).getDay();
  const leadingBlanks = Array.from({ length: firstDayOfMonthIndex });

  return (
    <section id="calendar" className="section-wrapper calendar-section-container">
      {/* Chapter Section Header */}
      <div className="section-header">
        <span className="section-tag">
          <CalendarIcon size={14} /> 04 • Your Day
        </span>
        <h2 className="section-title">The Day the World Got a Little Brighter</h2>
        <p className="section-subtitle">
          "November 3rd — a special day to celebrate someone truly wonderful."
        </p>
      </div>

      <div className="calendar-outer-box">
        {/* ========================================================
            THE VINTAGE SCRAPBOOK CALENDAR PLAQUE
            ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="vintage-paper calendar-parchment-card"
        >
          {/* Top Decorative Washi Tape Strip */}
          <div className="washi-tape top-center" style={{ top: '-14px', width: '120px' }} />

          {/* Pressed Dried Rose Flower Embellishment (Top Right) */}
          <div className="calendar-rose-sticker" aria-hidden="true">
            <img
              src="/stickers/flowers/rose.svg"
              alt="Pressed rose"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Vintage Airmail / Postmark Stamp (Top Left) */}
          <div className="calendar-postmark-stamp" aria-hidden="true">
            <span className="postmark-line">SPECIAL DISPATCH</span>
            <span className="postmark-date">NOV 03</span>
            <span className="postmark-city">WITH WARM WISHES</span>
          </div>

          {/* Top Pinned Tag ("It's your day ♡" from Scrapbook Reference) */}
          <div className="calendar-pill-badge-wrap">
            <span className="calendar-pill-badge">
              <Sparkles size={13} />
              It's your day ♡
              <Sparkles size={13} />
            </span>
          </div>

          {/* Prominent Month Title with Heart Flourish */}
          <h3 className="calendar-month-title">
            November <span className="calendar-month-heart">♡</span>
          </h3>


          {/* Calendar 7-Day Header (Sun - Sat) */}
          <div className="calendar-days-header">
            <span>Sun</span>
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
          </div>

          {/* Calendar Day Grid (1 - 30) */}
          <div className="calendar-grid">
            {/* Blank leading slots for month start alignment */}
            {leadingBlanks.map((_, bIdx) => (
              <span key={`blank-${bIdx}`} aria-hidden="true" />
            ))}

            {/* Days 1 to 30 */}
            {daysInMonth.map((day) => {
              const isSpecialDay = day === birthdayDay;

              return (
                <div
                  key={day}
                  className={`calendar-day-cell ${isSpecialDay ? 'birthday-heart-cell' : ''}`}
                  onClick={isSpecialDay ? triggerBirthdayConfetti : undefined}
                  role={isSpecialDay ? 'button' : undefined}
                  tabIndex={isSpecialDay ? 0 : undefined}
                  onKeyDown={
                    isSpecialDay
                      ? (e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            triggerBirthdayConfetti();
                          }
                        }
                      : undefined
                  }
                  title={
                    isSpecialDay
                      ? "November 3rd — Nayana's Birthday! Tap for confetti ♡"
                      : `November ${day}`
                  }
                >
                  {/* Authentic Sketched Red Heart Outline around November 3rd */}
                  {isSpecialDay && (
                    <motion.div
                      className="calendar-heart-stamp"
                      animate={{
                        scale: [1, 1.07, 1],
                        rotate: [-3, -1, -3]
                      }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      whileHover={{ scale: 1.18, rotate: 0 }}
                      whileTap={{ scale: 0.94 }}
                    >
                      <svg
                        viewBox="0 0 52 52"
                        className="calendar-heart-svg"
                        aria-label="Circled with red heart"
                      >
                        {/* Soft translucent crimson watercolor wash */}
                        <path
                          d="M 26,14 C 22,7 13.5,6.5 9,13 C 3.5,21 11.5,31.5 25.5,42.5 C 25.8,42.8 26.2,42.8 26.5,42.5 C 40.5,31.5 48.5,21 43,13 C 38.5,6.5 30,7 26,14 Z"
                          className="calendar-heart-wash"
                        />
                        {/* Hand-drawn sketchy red felt-pen heart outline */}
                        <path
                          d="M 25.8,14.2 C 22.2,7.5 13.8,7.2 9.2,13.4 C 4.2,20.5 10.5,31.2 25.2,42.4 C 25.7,42.8 26.3,42.8 26.8,42.4 C 41.5,31.2 47.8,20.5 42.8,13.4 C 38.2,7.2 29.8,7.5 26.2,14.2 L 25.8,14.8 Z"
                          className="calendar-heart-stroke-primary"
                        />
                        {/* Secondary textured sketch stroke for scrapbook feel */}
                        <path
                          d="M 26,14.8 C 23.2,8.8 14.8,8.2 10.8,14 C 6,21.2 12,31 25.8,41.8 C 39.8,31 45.8,21.2 41.2,14 C 37.2,8.2 28.8,8.8 26,14.8"
                          className="calendar-heart-stroke-secondary"
                        />
                      </svg>

                      {/* Tooltip badge on hover/focus */}
                      <span className="calendar-heart-badge">Nayana's Birthday ♡</span>
                    </motion.div>
                  )}

                  {/* Day Number */}
                  <span className={`calendar-day-num ${isSpecialDay ? 'birthday-day-num' : ''}`}>
                    {day}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Marked Date Callout Banner */}
          <div className="calendar-date-callout">
            <Heart size={14} fill="currentColor" color="var(--color-accent, #A84E53)" />
            <span>November 3rd — a special day to celebrate someone truly wonderful.</span>
            <Heart size={14} fill="currentColor" color="var(--color-accent, #A84E53)" />
          </div>

          {/* ========================================================
              DYNAMIC CONDITIONAL BLOCK:
              UPCOMING COUNTDOWN vs PASSED CELEBRATION MESSAGE
              ======================================================== */}
          <div className="calendar-status-box">
            {/* 1. UPCOMING STATE: VINTAGE COUNTDOWN TIMER */}
            {effectiveMode === 'upcoming' && (
              <div className="calendar-countdown-wrap">
                <div className="calendar-status-header">
                  <Clock size={15} />
                  <span>Counting Down To Her Birthday</span>
                </div>

                {/* 4 Vintage Countdown Tiles */}
                <div className="calendar-countdown-grid">
                  {[
                    { label: 'Days', val: countdown.days },
                    { label: 'Hours', val: countdown.hours },
                    { label: 'Mins', val: countdown.minutes },
                    { label: 'Secs', val: countdown.seconds }
                  ].map((unit) => (
                    <div key={unit.label} className="calendar-countdown-tile">
                      <span className="calendar-countdown-num">
                        {String(unit.val).padStart(2, '0')}
                      </span>
                      <span className="calendar-countdown-label">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="calendar-countdown-note font-handwriting">
                  "Counting down until your special day ✨"
                </p>

                <p className="calendar-countdown-hint">
                  Tap the red heart on November 3rd above for an early confetti shower!
                </p>
              </div>
            )}

            {/* 2. TODAY STATE: GRAND BIRTHDAY PROCLAMATION */}
            {effectiveMode === 'today' && (
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="calendar-today-wrap"
              >
                <div className="calendar-today-banner">
                  <PartyPopper size={22} />
                  <span>🎉 Today Is The Day! 🎉</span>
                  <PartyPopper size={22} />
                </div>

                <p className="calendar-today-headline font-handwriting">
                  Happy Birthday, Nayana! 🎂
                </p>

                <p className="calendar-today-subtext font-serif">
                  The most wonderful day of the year is finally here! May your special day be filled with endless joy, sweet laughter, and beautiful moments.
                </p>

                <button
                  onClick={triggerBirthdayConfetti}
                  className="btn-primary calendar-celebrate-btn"
                >
                  <Sparkles size={16} />
                  <span>Shower Birthday Confetti!</span>
                </button>
              </motion.div>
            )}

            {/* 3. PASSED STATE: HEARTFELT CELEBRATION RETROSPECTIVE */}
            {effectiveMode === 'passed' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="calendar-passed-wrap"
              >
                <div className="calendar-passed-header">
                  <CheckCircle size={15} />
                  <span>A Special Day Celebrated</span>
                </div>

                <div className="calendar-celebration-badge">
                  <PartyPopper size={18} />
                  <span>Another Beautiful Year Celebrated!</span>
                  <PartyPopper size={18} />
                </div>

                <p className="calendar-passed-message font-serif">
                  "Another wonderful year of celebrating someone truly special! May your days ahead be filled with countless reasons to smile, great success, and all the happiness in the world."
                </p>

                <p className="calendar-passed-submessage font-handwriting">
                  "Keep smiling, keep shining, and always be yourself. Happy Birthday, Nayana! ♡"
                </p>

                <button
                  onClick={triggerBirthdayConfetti}
                  className="btn-primary calendar-celebrate-btn"
                >
                  <Heart size={15} fill="currentColor" />
                  <span>Celebrate Again 💖</span>
                </button>
              </motion.div>
            )}
          </div>

          {/* ========================================================
              PERSONAL BIRTHDAY MESSAGE
              ======================================================== */}
          <div className="calendar-message-section">
            {/* Birthday Cake Illustration */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '16px'
              }}
            >
              <img
                src="/stickers/decorations/birthday-cake.svg"
                alt="Birthday Cake illustration"
                style={{ width: '64px', height: '64px', filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.15))' }}
              />
            </div>

            <div className="calendar-quote-marks font-serif" aria-hidden="true">“</div>
            <div
              className="calendar-personal-quote font-serif"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontSize: '1.08rem',
                lineHeight: 1.8,
                color: 'var(--color-text-dark)'
              }}
            >
              <p style={{ margin: 0 }}>
                On your special day, I hope you get countless reasons to smile.
              </p>
              <p style={{ margin: 0 }}>
                May your dreams come true, your efforts bring success, and your days be filled with happiness.
              </p>
              <p style={{ margin: 0 }}>
                Keep smiling, keep shining, and always be yourself.
              </p>
            </div>

            <p
              className="calendar-personal-signoff font-handwriting"
              style={{
                fontSize: '2.2rem',
                color: 'var(--color-accent)',
                marginTop: '16px',
                marginBottom: '8px',
                fontWeight: 700
              }}
            >
              Happy Birthday, Nayana! ♡
            </p>

            {/* Cute Sketched Hearts flourish */}
            <div className="calendar-heart-flourish" aria-hidden="true">
              <span>♡</span>
              <span className="calendar-flourish-dot">•</span>
              <span>♡</span>
            </div>

            {/* Bottom Satin Ribbon Bow Sticker */}
            <div className="calendar-bow-sticker" aria-hidden="true">
              <img
                src="/stickers/bows/pink-bow.svg"
                alt="Satin ribbon bow"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* ========================================================
              KEEPSAKE COUPLE POLAROID TUCKED AT THE CORNER
              (Directly from Scrapbook Reference Screen 7)
              ======================================================== */}
          <motion.div
            className="calendar-polaroid-keepsake"
            initial={{ opacity: 0, rotate: 5, y: 15 }}
            whileInView={{ opacity: 1, rotate: 3, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            <div className="calendar-polaroid-tape washi-tape" />
            <div className="calendar-polaroid-photo-wrap">
              <img
                src="/images/nayana/nayana-blue-saree.png"
                alt="Happy Birthday, Nayana"
                className="calendar-polaroid-img"
              />
            </div>
            <p className="calendar-polaroid-caption font-handwriting">
              Happy Birthday, Nayana ♡
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
