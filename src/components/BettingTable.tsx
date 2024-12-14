import React from 'react';
import { BetType } from '../types/game';

interface BettingTableProps {
  bets: Record<string, BetType>;
  onPlaceBet: (betType: string, amount: number) => void;
  bankroll: number;
}

export const BettingTable: React.FC<BettingTableProps> = ({
  bets,
  onPlaceBet,
  bankroll,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-green-900/90 rounded-lg shadow-xl">
      {Object.entries(bets).map(([betType, bet]) => (
        <div
          key={betType}
          className="bg-green-800/80 p-4 rounded-lg border border-gold-500"
        >
          <h3 className="text-gold-400 font-bold">{bet.name}</h3>
          <p className="text-sm text-gold-300">Pays: {bet.payout}</p>
          <div className="mt-2 flex gap-2">
            {[5, 25, 100].map((amount) => (
              <button
                key={amount}
                onClick={() => onPlaceBet(betType, amount)}
                disabled={amount > bankroll}
                className="px-2 py-1 bg-gold-600 text-black rounded hover:bg-gold-500 
                         disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                ${amount}
              </button>
            ))}
          </div>
          {bet.amount > 0 && (
            <p className="mt-2 text-white">Bet: ${bet.amount}</p>
          )}
        </div>
      ))}
    </div>
  );
};