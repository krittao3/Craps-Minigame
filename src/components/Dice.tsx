import React from 'react';
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

interface DiceProps {
  value: number;
  isRolling: boolean;
}

const diceIcons = {
  1: Dice1,
  2: Dice2,
  3: Dice3,
  4: Dice4,
  5: Dice5,
  6: Dice6,
};

export const Dice: React.FC<DiceProps> = ({ value, isRolling }) => {
  const DiceIcon = diceIcons[value as keyof typeof diceIcons];
  
  return (
    <div className={`transform transition-transform duration-500 ${
      isRolling ? 'animate-bounce' : ''
    }`}>
      <DiceIcon className="w-16 h-16 md:w-24 md:h-24 text-gold-600" />
    </div>
  );
};