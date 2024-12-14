import React from 'react';
import { Dices } from 'lucide-react';

interface HeaderProps {
  bankroll: number;
}

export const Header: React.FC<HeaderProps> = ({ bankroll }) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        <Dices className="w-8 h-8 text-gold-400 mr-2" />
        <h1 className="text-3xl font-bold text-gold-400">Luxury Craps</h1>
      </div>
      <div className="text-xl font-bold text-gold-400">
        Bankroll: ${bankroll}
      </div>
    </div>
  );
};