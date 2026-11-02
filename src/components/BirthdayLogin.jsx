import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Lock, Unlock, Sparkles, Heart, Calendar as CalendarIcon, AlertCircle } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import { BIRTHDAY_AUTH_CONFIG } from '../config/birthdayAuth';

/**
 * Vintage Birthday Cake with Animated Flickering Glowing Candles
 */
function VintageCake({ isUnlocking }) {
  return (
    <div className={`vintage-cake-illustration ${isUnlocking ? 'cake-glowing-bright' : ''}`}>
      <svg
        viewBox="0 0 160 160"
        className="vintage-cake-svg"
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Flame Glow Filter */}
          <filter id="flame-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={isUnlocking ? '5' : '2.5'} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Candle Flame Gradients */}
          <radialGradient id="flame-grad-1" cx="50%" cy="65%" r="55%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="35%" stopColor="#FBBF24" />
            <stop offset="85%" stopColor="#F97316" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Cake Shading Gradients */}
          <linearGradient id="cake-base-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#550D15" />
            <stop offset="35%" stopColor="#781320" />
            <stop offset="70%" stopColor="#68151D" />
            <stop offset="100%" stopColor="#430D14" />
          </linearGradient>

          <linearGradient id="cake-cream-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E9D7C0" />
            <stop offset="40%" stopColor="#FDF8F0" />
            <stop offset="75%" stopColor="#F4E8D5" />
            <stop offset="100%" stopColor="#D8B58A" />
          </linearGradient>

          <linearGradient id="gold-trim-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D8B58A" />
            <stop offset="50%" stopColor="#F7EADB" />
            <stop offset="100%" stopColor="#C3A58A" />
          </linearGradient>
        </defs>

        {/* Vintage Ceramic Cake Stand */}
        <ellipse cx="80" cy="142" rx="55" ry="8" fill="#EFE5D5" stroke="var(--color-surface-glass-border, #D8B58A)" strokeWidth="1.5" />
        <path d="M72 142 L70 152 L90 152 L88 142 Z" fill="#D8B58A" opacity="0.8" />
        <ellipse cx="80" cy="152" rx="26" ry="4" fill="#C3A58A" />

        {/* Bottom Tier (Burgundy Velvet) */}
        <path
          d="M32 98 C32 90, 128 90, 128 98 L128 134 C128 142, 32 142, 32 134 Z"
          fill="url(#cake-base-grad)"
          stroke="#FAF0E6"
          strokeWidth="1.8"
        />
        <ellipse cx="80" cy="98" rx="48" ry="7" fill="#68151D" stroke="url(#gold-trim-grad)" strokeWidth="1.5" />

        {/* Decorative Gold Beads around Bottom Tier */}
        <circle cx="42" cy="122" r="2" fill="#D8B58A" />
        <circle cx="58" cy="126" r="2" fill="#D8B58A" />
        <circle cx="80" cy="128" r="2.2" fill="#F7EADB" />
        <circle cx="102" cy="126" r="2" fill="#D8B58A" />
        <circle cx="118" cy="122" r="2" fill="#D8B58A" />

        {/* Top Tier (Cream Chiffon) */}
        <path
          d="M44 68 C44 61, 116 61, 116 68 L116 98 C116 105, 44 105, 44 98 Z"
          fill="url(#cake-cream-grad)"
          stroke="#FAF0E6"
          strokeWidth="1.5"
        />
        <ellipse cx="80" cy="68" rx="36" ry="6" fill="#FFFDF8" stroke="url(#gold-trim-grad)" strokeWidth="1.2" />

        {/* Scalloped Piped Frosting Drips */}
        <path
          d="M44 70 Q51 79 58 70 Q66 82 74 70 Q81 81 88 70 Q96 82 104 70 Q110 78 116 70"
          fill="none"
          stroke="#FAF0E6"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Delicate Cherries / Rosettes */}
        <circle cx="56" cy="67" r="3" fill="#9F1239" />
        <circle cx="80" cy="66" r="3.2" fill="#9F1239" />
        <circle cx="104" cy="67" r="3" fill="#9F1239" />

        {/* CANDLE 1 (Left) */}
        <rect x="58" y="44" width="4.5" height="22" rx="1.5" fill="#E11D48" stroke="#FFF" strokeWidth="0.8" />
        <line x1="58" y1="50" x2="62.5" y2="47" stroke="#FFF" strokeWidth="1" opacity="0.8" />
        <line x1="58" y1="58" x2="62.5" y2="55" stroke="#FFF" strokeWidth="1" opacity="0.8" />
        {/* Wick 1 */}
        <line x1="60.25" y1="44" x2="60.25" y2="40" stroke="#333" strokeWidth="1.2" />
        {/* Flame 1 */}
        <g className="candle-flame flame-1" filter="url(#flame-glow)">
          <path
            d="M60.25 24 C57 32, 57 38, 60.25 40 C63.5 38, 63.5 32, 60.25 24 Z"
            fill="url(#flame-grad-1)"
          />
          <ellipse cx="60.25" cy="36" rx="1.5" ry="3" fill="#FFF" opacity="0.85" />
        </g>

        {/* CANDLE 2 (Center - Taller) */}
        <rect x="77.5" y="38" width="5" height="28" rx="1.5" fill="#D8B58A" stroke="#FFF" strokeWidth="0.8" />
        <line x1="77.5" y1="46" x2="82.5" y2="43" stroke="#FFF" strokeWidth="1.2" opacity="0.9" />
        <line x1="77.5" y1="54" x2="82.5" y2="51" stroke="#FFF" strokeWidth="1.2" opacity="0.9" />
        {/* Wick 2 */}
        <line x1="80" y1="38" x2="80" y2="33" stroke="#333" strokeWidth="1.2" />
        {/* Flame 2 */}
        <g className="candle-flame flame-2" filter="url(#flame-glow)">
          <path
            d="M80 16 C76 25, 76 32, 80 34 C84 32, 84 25, 80 16 Z"
            fill="url(#flame-grad-1)"
          />
          <ellipse cx="80" cy="30" rx="1.8" ry="3.5" fill="#FFF" opacity="0.9" />
        </g>

        {/* CANDLE 3 (Right) */}
        <rect x="97" y="44" width="4.5" height="22" rx="1.5" fill="#E11D48" stroke="#FFF" strokeWidth="0.8" />
        <line x1="97" y1="50" x2="101.5" y2="47" stroke="#FFF" strokeWidth="1" opacity="0.8" />
        <line x1="97" y1="58" x2="101.5" y2="55" stroke="#FFF" strokeWidth="1" opacity="0.8" />
        {/* Wick 3 */}
        <line x1="99.25" y1="44" x2="99.25" y2="40" stroke="#333" strokeWidth="1.2" />
        {/* Flame 3 */}
        <g className="candle-flame flame-3" filter="url(#flame-glow)">
          <path
            d="M99.25 24 C96 32, 96 38, 99.25 40 C102.5 38, 102.5 32, 99.25 24 Z"
            fill="url(#flame-grad-1)"
          />
          <ellipse cx="99.25" cy="36" rx="1.5" ry="3" fill="#FFF" opacity="0.85" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Vintage Wrapped Birthday Gift with Ribbon & Tag
 */
function VintageGiftBox({ isUnlocking }) {
  return (
    <div className={`vintage-gift-box ${isUnlocking ? 'gift-unlocked-glow' : ''}`}>
      <svg
        viewBox="0 0 140 140"
        className="vintage-gift-svg"
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="gift-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000" floodOpacity="0.35" />
          </filter>
          <linearGradient id="box-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9F1E4" />
            <stop offset="50%" stopColor="#F4E8D5" />
            <stop offset="100%" stopColor="#E2CCA8" />
          </linearGradient>
          <linearGradient id="ribbon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D8B58A" />
            <stop offset="50%" stopColor="#F7EADB" />
            <stop offset="100%" stopColor="#C3A58A" />
          </linearGradient>
          <radialGradient id="sparkle-beam" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE082" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FFB300" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Glow Beam escaping upon unlock */}
        {isUnlocking && (
          <circle cx="70" cy="55" r="50" fill="url(#sparkle-beam)" className="gift-light-burst" />
        )}

        <g filter="url(#gift-shadow)">
          {/* Main Gift Box Body */}
          <rect
            x="28"
            y="54"
            width="84"
            height="70"
            rx="5"
            fill="url(#box-grad)"
            stroke="var(--color-surface-glass-border, #D8B58A)"
            strokeWidth="1.5"
          />

          {/* Delicate Burgundy Pinstripes on Box */}
          <line x1="42" y1="54" x2="42" y2="124" stroke="#881337" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3" />
          <line x1="56" y1="54" x2="56" y2="124" stroke="#881337" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3" />
          <line x1="84" y1="54" x2="84" y2="124" stroke="#881337" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3" />
          <line x1="98" y1="54" x2="98" y2="124" stroke="#881337" strokeWidth="0.8" opacity="0.3" strokeDasharray="3 3" />

          {/* Vertical Satin Ribbon Cross */}
          <rect x="63" y="54" width="14" height="70" fill="url(#ribbon-grad)" stroke="#FAF0E6" strokeWidth="0.8" />

          {/* Horizontal Satin Ribbon Cross */}
          <rect x="28" y="82" width="84" height="14" fill="url(#ribbon-grad)" stroke="#FAF0E6" strokeWidth="0.8" />

          {/* Box Lid (animates lifting slightly on unlock) */}
          <g className={`gift-lid-group ${isUnlocking ? 'lid-lifting' : ''}`}>
            <rect
              x="22"
              y="44"
              width="96"
              height="14"
              rx="3"
              fill="#FAF0E6"
              stroke="#D8B58A"
              strokeWidth="1.5"
            />
            {/* Ribbon over lid */}
            <rect x="63" y="44" width="14" height="14" fill="url(#ribbon-grad)" stroke="#FAF0E6" strokeWidth="0.8" />

            {/* Satin Ribbon Loops Bow on Top */}
            <g transform="translate(70, 44)">
              {/* Left Bow Loop */}
              <path
                d="M-2 -2 C-14 -18, -28 -10, -22 2 C-18 8, -6 0, -2 -2 Z"
                fill="#C53043"
                stroke="#FAF0E6"
                strokeWidth="1.2"
              />
              <path
                d="M-4 -2 C-12 -12, -22 -6, -18 1 Z"
                fill="#F472B6"
                opacity="0.6"
              />

              {/* Right Bow Loop */}
              <path
                d="M2 -2 C14 -18, 28 -10, 22 2 C18 8, 6 0, 2 -2 Z"
                fill="#C53043"
                stroke="#FAF0E6"
                strokeWidth="1.2"
              />
              <path
                d="M4 -2 C12 -12, 22 -6, 18 1 Z"
                fill="#F472B6"
                opacity="0.6"
              />

              {/* Center Ribbon Knot */}
              <circle cx="0" cy="-2" r="5" fill="#D8B58A" stroke="#FAF0E6" strokeWidth="1" />

              {/* Left Ribbon Tail */}
              <path
                d="M-4 2 Q-16 16 -12 28 Q-6 22 -2 18 Z"
                fill="#C53043"
                stroke="#FAF0E6"
                strokeWidth="0.8"
              />

              {/* Right Ribbon Tail */}
              <path
                d="M4 2 Q16 16 12 28 Q6 22 2 18 Z"
                fill="#C53043"
                stroke="#FAF0E6"
                strokeWidth="0.8"
              />
            </g>
          </g>

          {/* Hanging Gift Tag "For Nayana ♡" */}
          <g transform="translate(86, 70) rotate(16)">
            <line x1="-8" y1="-8" x2="0" y2="0" stroke="#C3A58A" strokeWidth="1.2" strokeDasharray="1.5 1.5" />
            <polygon
              points="0,-4 22,-4 28,5 22,14 0,14"
              fill="#FAF0E6"
              stroke="#D8B58A"
              strokeWidth="1.2"
            />
            <circle cx="3" cy="5" r="1.5" fill="#881337" />
            <text
              x="6"
              y="8"
              fontFamily="var(--font-handwriting, cursive)"
              fontSize="7.5"
              fill="#68151D"
              fontWeight="bold"
            >
              For Nayana ♡
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

/**
 * Floating Helium Balloon SVG with String and Soft Gradient Highlight
 */
function FloatingBalloon({ color, x, y, scale = 1, delay = 0 }) {
  // Themes: burgundy, blush, cream, gold
  const colorMap = {
    burgundy: {
      gradStart: '#9F1239',
      gradMid: '#68151D',
      gradEnd: '#430D14',
      sheen: 'rgba(255, 255, 255, 0.45)'
    },
    blush: {
      gradStart: '#FDA4AF',
      gradMid: '#F472B6',
      gradEnd: '#BE185D',
      sheen: 'rgba(255, 255, 255, 0.65)'
    },
    cream: {
      gradStart: '#FFFDF9',
      gradMid: '#F4E8D5',
      gradEnd: '#D8B58A',
      sheen: 'rgba(255, 255, 255, 0.7)'
    },
    gold: {
      gradStart: '#FEF3C7',
      gradMid: '#D8B58A',
      gradEnd: '#B45309',
      sheen: 'rgba(255, 255, 255, 0.6)'
    }
  };

  const c = colorMap[color] || colorMap.burgundy;
  const gradId = `balloon-grad-${color}-${x.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div
      className="floating-balloon-item"
      style={{
        left: x,
        top: y,
        transform: `scale(${scale})`,
        animationDelay: `${delay}s`
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 60 140"
        width="60"
        height="140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="balloon-svg"
      >
        <defs>
          <radialGradient id={gradId} cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor={c.gradStart} />
            <stop offset="45%" stopColor={c.gradMid} />
            <stop offset="100%" stopColor={c.gradEnd} />
          </radialGradient>
          <filter id={`balloon-blur-${gradId}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.25" />
          </filter>
        </defs>

        <g filter={`url(#balloon-blur-${gradId})`}>
          {/* Balloon Body */}
          <path
            d="M 30 8 C 14 8, 8 32, 17 52 C 23 64, 27 69, 30 72 C 33 69, 37 64, 43 52 C 52 32, 46 8, 30 8 Z"
            fill={`url(#${gradId})`}
          />

          {/* Balloon Soft Gloss Sheen */}
          <ellipse
            cx="22"
            cy="24"
            rx="6"
            ry="11"
            transform="rotate(-28, 22, 24)"
            fill={c.sheen}
            opacity="0.75"
          />

          {/* Knot */}
          <polygon points="28,72 32,72 34,76 26,76" fill={c.gradMid} />
          <circle cx="30" cy="74" r="1.5" fill={c.gradStart} />

          {/* Dangling String */}
          <path
            d="M 30 76 Q 36 94, 26 112 T 32 138"
            stroke="rgba(216, 181, 138, 0.6)"
            strokeWidth="1.2"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}

export default function BirthdayLogin({
  onUnlock,
  currentTheme,
  targetTheme,
  onSetTheme,
  onToggleTheme
}) {
  // Input mode: 'segmented' (Day / Month / Year selectors) or 'calendar' (native date picker)
  const [inputMode, setInputMode] = useState('segmented');

  // Input states
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [calendarDate, setCalendarDate] = useState('');

  // UI state
  const [errorMessage, setErrorMessage] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  // Month options (1-indexed)
  const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  // Day options (1-31)
  const days = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1).padStart(2, '0')
  }));

  // Year options (centered around 2005 / 2006)
  const years = Array.from({ length: 16 }, (_, i) => {
    const yr = 1998 + i;
    return { value: String(yr), label: String(yr) };
  });

  // Handle native date picker change (YYYY-MM-DD)
  const handleCalendarChange = (e) => {
    const val = e.target.value;
    setCalendarDate(val);
    setErrorMessage('');
    if (val) {
      const [y, m, d] = val.split('-');
      if (y && m && d) {
        setSelectedYear(y);
        setSelectedMonth(String(parseInt(m, 10)));
        setSelectedDay(String(parseInt(d, 10)));
      }
    }
  };

  // Sync segmented selectors to native calendar format when altered
  const updateSegmented = (type, val) => {
    setErrorMessage('');
    let d = selectedDay;
    let m = selectedMonth;
    let y = selectedYear;

    if (type === 'day') {
      setSelectedDay(val);
      d = val;
    } else if (type === 'month') {
      setSelectedMonth(val);
      m = val;
    } else if (type === 'year') {
      setSelectedYear(val);
      y = val;
    }

    if (d && m && y) {
      const formatted = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
      setCalendarDate(formatted);
    }
  };

  // Verification & submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUnlocking) return;

    const dayNum = parseInt(selectedDay, 10);
    const monthNum = parseInt(selectedMonth, 10);
    const yearNum = parseInt(selectedYear, 10);

    // Empty or invalid check
    if (!selectedDay || !selectedMonth || !selectedYear || isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) {
      triggerError();
      return;
    }

    // Verify against centralized config
    const isDayCorrect = dayNum === BIRTHDAY_AUTH_CONFIG.day;
    const isMonthCorrect = monthNum === BIRTHDAY_AUTH_CONFIG.month;
    const isYearCorrect =
      yearNum === BIRTHDAY_AUTH_CONFIG.year ||
      (BIRTHDAY_AUTH_CONFIG.acceptedYears && BIRTHDAY_AUTH_CONFIG.acceptedYears.includes(yearNum));

    if (isDayCorrect && isMonthCorrect && isYearCorrect) {
      // SUCCESS!
      setIsUnlocking(true);
      setErrorMessage('');

      // Confetti shower
      try {
        confetti({
          particleCount: 95,
          spread: 75,
          origin: { y: 0.58 },
          colors: ['#D8B58A', '#A84E53', '#F4E8D5', '#68151D', '#E9D7C0', '#F472B6']
        });
      } catch (err) {
        // Fallback silently if canvas-confetti is not loaded
      }

      // Smooth transition delay to allow the glowing candle & gift reveal animation to delight the user
      setTimeout(() => {
        onUnlock();
      }, 850);
    } else {
      triggerError();
    }
  };

  const triggerError = () => {
    setErrorMessage(BIRTHDAY_AUTH_CONFIG.errorMessage);
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 600);
  };

  return (
    <div className="birthday-login-screen">
      {/* Top Bar with brand label & theme switcher */}
      <header className="birthday-login-header">
        <div className="birthday-login-brand">
          <div className="birthday-login-seal-dot">
            <Heart size={14} fill="currentColor" />
          </div>
          <span className="font-handwriting">A Day Made for You ♡</span>
        </div>

        <ThemeSwitcher
          currentTheme={currentTheme}
          targetTheme={targetTheme}
          onSetTheme={onSetTheme}
          onToggleTheme={onToggleTheme}
        />
      </header>

      {/* Floating Burgundy, Blush Pink and Cream Balloons */}
      <div className="login-balloon-field" aria-hidden="true">
        <FloatingBalloon color="burgundy" x="7%" y="22%" scale={0.95} delay={0} />
        <FloatingBalloon color="blush" x="14%" y="62%" scale={0.85} delay={1.8} />
        <FloatingBalloon color="cream" x="84%" y="18%" scale={0.9} delay={0.9} />
        <FloatingBalloon color="burgundy" x="91%" y="58%" scale={0.8} delay={2.4} />
        <FloatingBalloon color="gold" x="3%" y="48%" scale={0.7} delay={3.2} />
      </div>

      {/* Ambient Floating Sparkles, Stars, and Heart Particles */}
      <div className="login-ambient-stars" aria-hidden="true">
        <span className="star-dot dot-1">✦</span>
        <span className="star-dot dot-2">♡</span>
        <span className="star-dot dot-3">✦</span>
        <span className="star-dot dot-4">✨</span>
        <span className="star-dot dot-5">♡</span>
        <span className="star-dot dot-6">✦</span>
      </div>

      {/* Main Celebration Stage: Left Side Wing + Center Login Card + Right Side Wing */}
      <div className="login-celebration-stage">
        {/* ========================================================
            LEFT SIDE WING: VINTAGE CAKE WITH GLOWING CANDLES
            ======================================================== */}
        <div className={`login-side-wing wing-left ${isUnlocking ? 'wing-unlocked' : ''}`}>
          <div className="side-decor-card vintage-paper">
            <div className="washi-tape top-center" />
            <VintageCake isUnlocking={isUnlocking} />
            <p className="side-card-caption font-handwriting">Make a wish ♡</p>
          </div>
        </div>

        {/* ========================================================
            CENTER: THE BIRTHDAY LOGIN CARD
            ======================================================== */}
        <motion.div
          className={`birthday-login-card vintage-paper ${isUnlocking ? 'unlock-success-glow' : ''}`}
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          animate={
            isShaking
              ? { x: [-12, 12, -8, 8, -4, 4, 0], opacity: 1, y: 0, scale: 1 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={isShaking ? { duration: 0.5 } : { duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Washi Tape Strip on Top */}
          <div className="washi-tape top-center" />

          {/* Decorative Corner Flowers & Bows */}
          <div className="login-corner-rose" aria-hidden="true">
            <img
              src="/stickers/flowers/rose.svg"
              alt="Pressed rose"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          <div className="login-corner-bow" aria-hidden="true">
            <img
              src="/stickers/bows/pink-bow.svg"
              alt="Pink satin bow"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>

          {/* Card Header Section */}
          <div className="login-card-content">
            <span className="login-small-heading font-mono">
              {BIRTHDAY_AUTH_CONFIG.smallHeading}
            </span>

            <h1 className="login-main-heading font-handwriting">
              {BIRTHDAY_AUTH_CONFIG.mainHeading}
            </h1>

            <p className="login-description font-serif">
              "{BIRTHDAY_AUTH_CONFIG.description}"
            </p>

            <div className="login-divider-flourish" aria-hidden="true">
              <span>♡</span>
              <span className="flourish-line" />
              <span>♡</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="login-form">
              <div className="login-field-group">
                <label htmlFor="bday-month" className="login-input-label font-serif">
                  {BIRTHDAY_AUTH_CONFIG.inputLabel}
                </label>

                {/* Input Mode Selector Pills */}
                <div className="login-mode-pills" role="tablist">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={inputMode === 'segmented'}
                    onClick={() => setInputMode('segmented')}
                    className={`login-mode-tab ${inputMode === 'segmented' ? 'active' : ''}`}
                  >
                    Day / Month / Year
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={inputMode === 'calendar'}
                    onClick={() => setInputMode('calendar')}
                    className={`login-mode-tab ${inputMode === 'calendar' ? 'active' : ''}`}
                  >
                    <CalendarIcon size={12} /> Calendar Picker
                  </button>
                </div>

                {/* Segmented Selectors Mode */}
                {inputMode === 'segmented' ? (
                  <div className="login-selectors-row">
                    {/* Month */}
                    <div className="login-select-col">
                      <label htmlFor="bday-month" className="login-mini-sublabel">Month</label>
                      <div className="login-select-wrap">
                        <select
                          id="bday-month"
                          value={selectedMonth}
                          onChange={(e) => updateSegmented('month', e.target.value)}
                          className="login-vintage-select"
                          required
                        >
                          <option value="">Month</option>
                          {months.map((m) => (
                            <option key={m.value} value={m.value}>
                              {m.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Day */}
                    <div className="login-select-col">
                      <label htmlFor="bday-day" className="login-mini-sublabel">Day</label>
                      <div className="login-select-wrap">
                        <select
                          id="bday-day"
                          value={selectedDay}
                          onChange={(e) => updateSegmented('day', e.target.value)}
                          className="login-vintage-select"
                          required
                        >
                          <option value="">Day</option>
                          {days.map((d) => (
                            <option key={d.value} value={d.value}>
                              {d.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Year */}
                    <div className="login-select-col">
                      <label htmlFor="bday-year" className="login-mini-sublabel">Year</label>
                      <div className="login-select-wrap">
                        <select
                          id="bday-year"
                          value={selectedYear}
                          onChange={(e) => updateSegmented('year', e.target.value)}
                          className="login-vintage-select"
                          required
                        >
                          <option value="">Year</option>
                          {years.map((y) => (
                            <option key={y.value} value={y.value}>
                              {y.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Native Date Picker Mode */
                  <div className="login-calendar-wrap">
                    <input
                      id="bday-calendar-input"
                      type="date"
                      value={calendarDate}
                      onChange={handleCalendarChange}
                      className="login-native-date-input"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Error Message Display */}
              <AnimatePresence>
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -5, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="login-error-badge"
                    role="alert"
                  >
                    <AlertCircle size={15} />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Unlock Button */}
              <button
                type="submit"
                disabled={isUnlocking}
                className={`btn-primary login-unlock-btn ${isUnlocking ? 'btn-unlocking' : ''}`}
              >
                {isUnlocking ? (
                  <>
                    <Unlock size={17} />
                    <span>Surprise Unlocked! ♡</span>
                  </>
                ) : (
                  <>
                    <Lock size={17} />
                    <span>{BIRTHDAY_AUTH_CONFIG.buttonText}</span>
                  </>
                )}
              </button>
            </form>

            {/* Small text below */}
            <p className="login-small-footer-text font-handwriting">
              {BIRTHDAY_AUTH_CONFIG.footerHint}
            </p>
          </div>
        </motion.div>

        {/* ========================================================
            RIGHT SIDE WING: WRAPPED BIRTHDAY GIFT WITH RIBBON & TAG
            ======================================================== */}
        <div className={`login-side-wing wing-right ${isUnlocking ? 'wing-unlocked' : ''}`}>
          <div className="side-decor-card vintage-paper">
            <div className="washi-tape top-center" />
            <VintageGiftBox isUnlocking={isUnlocking} />
            <p className="side-card-caption font-handwriting">A gift for you ♡</p>
          </div>
        </div>
      </div>
    </div>
  );
}
