import React, { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ currentTheme, targetTheme, onSetTheme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Little Moments', href: '#memories' },
    { label: 'Captured Smiles', href: '#photobooth' },
    { label: 'A Note for You', href: '#letter' },
    { label: 'Your Day', href: '#calendar' },
    { label: 'Until We Meet Again', href: '#farewell' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        zIndex: 100,
        background: 'var(--theme-surface-glass)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--theme-surface-glass-border)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        transition: 'var(--transition-theme)'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--theme-wax-seal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--theme-glow)',
              border: '1px solid var(--theme-accent-gold)'
            }}
          >
            <Heart size={18} color="var(--theme-accent-gold)" fill="var(--theme-accent-gold)" />
          </div>
          <span
            className="font-serif navbar-brand-title"
            style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              letterSpacing: '0.5px',
              color: 'var(--color-text-primary)'
            }}
          >
            A Day Made for You ♡
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="desktop-nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: 'var(--theme-text-secondary)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--theme-accent-gold)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--theme-text-secondary)')}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Switcher */}
          <ThemeSwitcher
            currentTheme={currentTheme}
            targetTheme={targetTheme}
            onSetTheme={onSetTheme}
            onToggleTheme={onToggleTheme}
          />

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open mobile navigation menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--theme-text-primary)',
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--header-height)',
            left: 0,
            right: 0,
            background: 'var(--theme-surface-glass)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--theme-surface-glass-border)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: 'var(--theme-card-shadow)'
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              style={{
                color: 'var(--theme-text-primary)',
                textDecoration: 'none',
                fontSize: '1.05rem',
                fontFamily: 'var(--font-serif)',
                padding: '8px 0',
                borderBottom: '1px dashed var(--theme-surface-glass-border)'
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
