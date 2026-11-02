export const SONGS_DATA = [
  {
    id: 'song-1',
    title: 'Our Song (Acoustic)',
    artist: 'Taylor Swift / Cinematic Cover',
    duration: '3:45',
    src: '/music/our-song.mp3',
    coverArt: '/references/burgundy-reference.png',
    note: 'The song playing softly on the car radio the first night we drove without any destination.',
    isFeatured: true,
    chords: [261.63, 329.63, 392.00, 523.25] // C major chord frequencies for Web Audio synth
  },
  {
    id: 'song-2',
    title: 'Lover (First Dance)',
    artist: 'Romantic Orchestral',
    duration: '3:41',
    src: '/music/our-song.mp3',
    coverArt: '/references/midnight-reference.png',
    note: 'Can I go where you go? Can we always be this close forever and ever?',
    isFeatured: false,
    chords: [220.00, 277.18, 329.63, 440.00] // A chord
  },
  {
    id: 'song-3',
    title: 'Golden Hour (Piano Waltz)',
    artist: 'Midnight Strings',
    duration: '3:18',
    src: '/music/our-song.mp3',
    coverArt: '/images/couple/couple-1.jpg',
    note: 'Reminds me of watching the sun set across your shoulders on the river bridge.',
    isFeatured: false,
    chords: [349.23, 440.00, 523.25, 698.46] // F chord
  },
  {
    id: 'song-4',
    title: 'Until I Found You',
    artist: 'Stephen Sanchez / Vintage Lounge',
    duration: '2:57',
    src: '/music/our-song.mp3',
    coverArt: '/images/girlfriend/girlfriend-1.jpg',
    note: 'I would never fall in love until I found her... and everything changed.',
    isFeatured: false,
    chords: [196.00, 246.94, 293.66, 392.00] // G chord
  }
];
