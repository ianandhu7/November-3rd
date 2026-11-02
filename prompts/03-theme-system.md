# Prompt 03: Theme System (Burgundy & Midnight)

## Objective
Implement dual romantic color palettes that reflect different moods of the relationship:
1. **Burgundy Royale (`theme-burgundy`)**:
   - Deep rich wine red (`#4A0E17`, `#6b1d2f`), crimson rose (`#A52A42`), warm cream paper (`#FDFBF7`), champagne gold highlights (`#E2C275`), and dusty blush accents.
2. **Midnight Celestial (`theme-midnight`)**:
   - Deep midnight navy (`#0B1021`, `#161F38`), starlight sapphire (`#1E2E56`), ethereal moonlight gold (`#F4D06F`), luminescent cyan stardust, and obsidian dark glass cards.

## Features
- Seamless real-time switcher with smooth color interpolation.
- Persists user choice in `localStorage`.
- Affects root CSS variables: `--bg-primary`, `--bg-secondary`, `--accent`, `--accent-hover`, `--card-bg`, `--text-primary`, `--text-muted`, and `--border-color`.
