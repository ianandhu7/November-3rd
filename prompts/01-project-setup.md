# Prompt 01: Project Setup & Architecture

## Objective
Initialize the React + Vite application for **Little Museum of Us**, an intimate, interactive digital celebration and memory archive designed with romantic nostalgia, scrapbook tactile feels, and audio-visual storytelling.

## Tech Stack
- **Framework**: Vite + React 18
- **Styling**: Vanilla CSS with scoped design tokens, custom properties, glassmorphism, and responsive layout grids.
- **Icons**: Lucide React
- **Celebration Effects**: canvas-confetti
- **Audio Engine**: HTML5 Audio & Web Audio API fallback synthesizer (plays gentle romantic acoustic melody if local MP3 is not provided)

## Directory Structure
- `public/` - Media references, curated photography folders (`girlfriend`, `couple`, `photobooth`, `memories`), vector stickers (`hearts`, `flowers`, `bows`, `decorations`), audio track (`music/our-song.mp3`), and video (`videos/our-memory.mp4`).
- `src/components/` - Atomic reusable UI modules (Navbar, Envelope, ThemeSwitcher, ScrapbookCard, PhotoGallery, LoveLetter, MusicPlayer, Footer).
- `src/sections/` - Narrative-driven story chapters (Hero, Welcome, Memories, Scrapbook, Photobooth, Songs, BirthdayLetter, FinalSurprise).
- `src/themes/` - Theme configurations: **Burgundy Royale** (romantic velvet wine red & champagne gold) & **Midnight Celestial** (deep starry navy & moonlight gold).
- `src/hooks/` - Custom state hooks like `useTheme`.
- `src/data/` - Content models, timelines, quotes, songs, and memories.
- `src/styles/` - Global styling, keyframes, transitions, and responsive rules.

## Setup Instructions
1. Run `npm install`
2. Start dev server: `npm run dev`
3. Verify asset directories in `public/` are mapped properly.
