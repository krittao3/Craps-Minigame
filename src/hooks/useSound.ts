import { useCallback } from 'react';

const SOUNDS = {
  roll: new Audio('https://assets.mixkit.co/active_storage/sfx/2004/2004-preview.mp3'),
  win: new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3'),
  lose: new Audio('https://assets.mixkit.co/active_storage/sfx/2020/2020-preview.mp3')
};

export const useSound = () => {
  const playSound = useCallback((sound: keyof typeof SOUNDS) => {
    SOUNDS[sound].currentTime = 0;
    SOUNDS[sound].play().catch(() => {
      // Handle autoplay restrictions
    });
  }, []);

  return { playSound };
};