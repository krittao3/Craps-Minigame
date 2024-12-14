import React from 'react';
import { Dice } from './Dice';

interface GameBoardProps {
  dice1: number;
  dice2: number;
  isRolling: boolean;
  onRoll: () => void;
  rollCount: number;
}

export const GameBoard: React.FC<GameBoardProps> = ({
  dice1,
  dice2,
  isRolling,
  onRoll,
  rollCount,
}) => {
  return (
    <div className="bg-green-950/90 p-8 rounded-xl shadow-2xl mb-8">
      <div className="flex justify-center gap-8 mb-8">
        <Dice value={dice1} isRolling={isRolling} />
        <Dice value={dice2} isRolling={isRolling} />
      </div>
      <div className="text-center">
        <button
          onClick={onRoll}
          disabled={isRolling}
          className="bg-gold-600 text-black px-8 py-3 rounded-full text-xl font-bold
                   hover:bg-gold-500 transition-colors disabled:opacity-50"
        >
          {isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
        <p className="mt-4 text-gold-400">Roll Count: {rollCount}</p>
      </div>
    </div>
  );
};