# Little Museum of Us 🏛️❤️

An intimate, interactive romantic digital museum built with React, Vite, and bespoke Vanilla CSS styling. Curated with scrapbook textures, vintage polaroids, an interactive 3D wax seal envelope, personalized love letters, dual romantic themes (**Burgundy Royale** & **Midnight Celestial**), vinyl music player, and a grand celebratory finale.

---

## ✨ Key Wings & Exhibits
1. **Interactive Wax Seal Envelope (`Hero.jsx` & `Envelope.jsx`)**: Break the wax seal to unfold your personal invitation to the museum.
2. **Welcome Hall (`Welcome.jsx`)**: Real-time counter of days together, romantic vows, and curated milestones.
3. **Curated Memory Gallery (`PhotoGallery.jsx` & `Memories.jsx`)**: Categorized photography exhibits (Girlfriend, Couple, Candid Memories) with polaroid styling and modal lightbox.
4. **Handcrafted Scrapbook (`Scrapbook.jsx` & `ScrapbookCard.jsx`)**: Washi tape, paperclips, vintage stamps, stickers, and interactive tilted journal cards.
5. **Vintage Photobooth (`Photobooth.jsx`)**: 4-frame retro filmstrip with camera shutter flash effect and cute stickers.
6. **Soundtrack Lounge (`Songs.jsx` & `MusicPlayer.jsx`)**: Spinning vinyl record player, ambient romantic background audio engine (with Web Audio synth fallback), and story annotations.
7. **The Love Letters (`BirthdayLetter.jsx` & `LoveLetter.jsx`)**: Parchment love letter with typewriter effect, handwritten typography, and interactive love pulse counter.
8. **Grand Finale Surprise (`FinalSurprise.jsx`)**: Mystery gift box unboxing, heart confetti explosion, and cinema memory video theater.
9. **Dual Aesthetics (`ThemeSwitcher.jsx`)**: Switch dynamically between velvet **Burgundy Royale** and starry **Midnight Celestial**.

---

## 🚀 Quick Start
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🎨 Adding Your Own Photos, Music & Videos
Replace the placeholder files in `public/`:
- **Photos**: Put high-res images in `public/images/girlfriend/`, `public/images/couple/`, `public/images/photobooth/`, and `public/images/memories/`.
- **Music**: Place your special song at `public/music/our-song.mp3`.
- **Video**: Place your favorite clip at `public/videos/our-memory.mp4`.
- **Custom Texts**: Edit `src/data/content.js`, `src/data/memories.js`, and `src/data/songs.js` with your personal names, dates, and memories!
