export const THEMES = {
  BURGUNDY: 'burgundy',
  MIDNIGHT: 'midnight',
};

export const THEME_CONFIG = {
  [THEMES.BURGUNDY]: {
    id: THEMES.BURGUNDY,
    name: 'Burgundy Romance',
    subtitle: 'Vintage Romantic Scrapbook',
    icon: 'Heart',
    colors: {
      background: '#68151D',
      darkBackground: '#430D14',
      paper: '#F4E8D5',
      softPaper: '#E9D7C0',
      gold: '#D8B58A',
      accentRed: '#A84E53',
      text: '#F7EADB'
    },
    bgPreview: 'linear-gradient(135deg, #430D14 0%, #68151D 50%, #29080c 100%)',
    description: 'Vintage romantic scrapbook, cream paper textures, handwritten captions, polaroid photographs, decorative flowers, ribbons and bows, red hearts and stars.'
  },
  [THEMES.MIDNIGHT]: {
    id: THEMES.MIDNIGHT,
    name: 'Midnight Memories',
    subtitle: 'Cinematic Dark Scrapbook',
    icon: 'Moon',
    colors: {
      background: '#100E0E',
      darkBackground: '#080707',
      paper: '#E9DFD2',
      softPaper: '#D5C8B9',
      accent: '#A94D50',
      gold: '#C3A58A',
      text: '#F5EEE7'
    },
    bgPreview: 'linear-gradient(135deg, #080707 0%, #100E0E 50%, #000000 100%)',
    description: 'Cinematic dark scrapbook, black paper backgrounds, vintage film photography, grey and ivory photo frames, muted red decorative stickers, handwritten notes.'
  }
};
