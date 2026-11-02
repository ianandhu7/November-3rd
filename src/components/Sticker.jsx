import React from 'react';
import { motion } from 'framer-motion';

const STICKER_MAP = {
  heart: '/stickers/hearts/heart-red.svg',
  'wax-seal': '/stickers/hearts/heart-wax-seal.svg',
  rose: '/stickers/flowers/rose.svg',
  flower: '/stickers/flowers/rose.svg',
  bow: '/stickers/bows/pink-bow.svg',
  stamp: '/stickers/decorations/stamp.svg',
  sparkles: '/stickers/decorations/sparkles.svg',
  star: '/stickers/decorations/sparkles.svg',
};

export default function Sticker({
  type = 'heart',
  src,
  size = 48,
  rotation = '0deg',
  interactive = true,
  style = {},
  className = '',
  alt = 'Decorative scrapbook sticker',
}) {
  const stickerSrc = src || STICKER_MAP[type] || STICKER_MAP.heart;

  return (
    <motion.div
      whileHover={interactive ? { scale: 1.15, rotate: 6 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`vintage-sticker ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${rotation})`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        pointerEvents: interactive ? 'auto' : 'none',
        ...style,
      }}
    >
      <img
        src={stickerSrc}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </motion.div>
  );
}
