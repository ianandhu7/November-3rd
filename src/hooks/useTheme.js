import { useState, useEffect, useCallback, useRef } from 'react';
import { THEMES } from '../themes/themes';

const THEME_STORAGE_KEY = 'museum_of_us_theme';

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved && (saved === THEMES.BURGUNDY || saved === THEMES.MIDNIGHT)) {
        return saved;
      }
    } catch {
      // LocalStorage unavailable or restricted
    }
    return THEMES.BURGUNDY;
  });

  const [targetTheme, setTargetTheme] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitionTimersRef = useRef({ commit: null, finish: null });

  // Clean up any pending transition timers on unmount
  useEffect(() => {
    return () => {
      if (transitionTimersRef.current.commit) clearTimeout(transitionTimersRef.current.commit);
      if (transitionTimersRef.current.finish) clearTimeout(transitionTimersRef.current.finish);
    };
  }, []);

  const applyThemeToDOM = useCallback((newTheme) => {
    const root = document.documentElement;
    const body = document.body;

    // Set data-theme attribute
    root.setAttribute('data-theme', newTheme);
    if (body) {
      body.setAttribute('data-theme', newTheme);
    }

    // Toggle theme-burgundy and theme-midnight classes
    if (newTheme === THEMES.BURGUNDY) {
      root.classList.add('theme-burgundy');
      root.classList.remove('theme-midnight');
      if (body) {
        body.classList.add('theme-burgundy');
        body.classList.remove('theme-midnight');
      }
    } else {
      root.classList.add('theme-midnight');
      root.classList.remove('theme-burgundy');
      if (body) {
        body.classList.add('theme-midnight');
        body.classList.remove('theme-burgundy');
      }
    }
  }, []);

  // Sync theme changes with DOM and localStorage
  useEffect(() => {
    applyThemeToDOM(theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // LocalStorage quota or permission issue
    }
  }, [theme, applyThemeToDOM]);

  /**
   * Request theme change with cinematic love-story chapter transition
   * Sequence:
   * 1. Slowly darken current screen & animate floating stars/hearts (0ms - 520ms)
   * 2. Commit theme to DOM: background transitions & paper/photo colors transform (at 520ms)
   * 3. Gently lift veil and reveal the new theme (520ms - 1350ms)
   */
  const changeTheme = useCallback((newTheme, withTransition = true) => {
    if (newTheme !== THEMES.BURGUNDY && newTheme !== THEMES.MIDNIGHT) return;
    if (newTheme === theme) return;
    if (isTransitioning) return;

    if (!withTransition) {
      setThemeState(newTheme);
      return;
    }

    // Start transition
    setIsTransitioning(true);
    setTargetTheme(newTheme);

    // Clear any previous timers
    if (transitionTimersRef.current.commit) clearTimeout(transitionTimersRef.current.commit);
    if (transitionTimersRef.current.finish) clearTimeout(transitionTimersRef.current.finish);

    // At 520ms (while screen is softly veiled), commit new theme to DOM
    transitionTimersRef.current.commit = setTimeout(() => {
      setThemeState(newTheme);
    }, 520);

    // At 1350ms, the veil has fully lifted and reveal is complete
    transitionTimersRef.current.finish = setTimeout(() => {
      setIsTransitioning(false);
      setTargetTheme(null);
    }, 1350);
  }, [theme, isTransitioning]);

  const setTheme = useCallback((newTheme) => {
    changeTheme(newTheme, true);
  }, [changeTheme]);

  const toggleTheme = useCallback(() => {
    const next = theme === THEMES.BURGUNDY ? THEMES.MIDNIGHT : THEMES.BURGUNDY;
    changeTheme(next, true);
  }, [theme, changeTheme]);

  return {
    theme,
    targetTheme,
    isTransitioning,
    setTheme,
    toggleTheme,
    isBurgundy: theme === THEMES.BURGUNDY,
    isMidnight: theme === THEMES.MIDNIGHT,
    themes: THEMES,
  };
}
