import React from 'react';
import { DiceRoll } from '../types/game';

interface HistoryProps {
  rolls: DiceRoll[];
}

export const History: React.FC<HistoryProps> = ({ rolls }) => {
  return (
    <div className="bg-black/50 p-4 rounded-lg max-h-60 overflow-auto">
      <h2 className="text-gold-400 font-bold mb-2">Previous Rolls</h2>
      <div className="space-y-2">
        {rolls.map((roll, index) => (
          <div
            key={roll.timestamp}
            className="flex justify-between items-center bg-green-900/50 p-2 rounded"
          >
            <span className="text-white">Roll #{rolls.length - index}</span>
            <span className="text-gold-300">
              {roll.dice1} + {roll.dice2} = {roll.sum}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};