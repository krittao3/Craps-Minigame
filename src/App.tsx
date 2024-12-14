import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { GameBoard } from './components/GameBoard';
import { BettingTable } from './components/BettingTable';
import { History } from './components/History';
import { BettingGuide } from './components/BettingGuide';
import { DiceRoll, GameState } from './types/game';
import { useSound } from './hooks/useSound';
import { calculateWinnings, getNextPoint } from './utils/gameLogic';

const INITIAL_STATE: GameState = {
  point: null,
  history: [],
  bankroll: 1000,
  bets: {
    pass: { name: 'Pass Line', payout: '1:1', active: true, amount: 0 },
    dontPass: { name: "Don't Pass", payout: '1:1', active: true, amount: 0 },
    field: { name: 'Field', payout: '2:1/3:1', active: true, amount: 0 },
    hardWay4: { name: 'Hard 4', payout: '7:1', active: true, amount: 0 },
    hardWay6: { name: 'Hard 6', payout: '9:1', active: true, amount: 0 },
    hardWay8: { name: 'Hard 8', payout: '9:1', active: true, amount: 0 },
    hardWay10: { name: 'Hard 10', payout: '7:1', active: true, amount: 0 },
  },
  isRolling: false,
  rollCount: 0,
};

function App() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const { playSound } = useSound();

  const rollDice = useCallback(() => {
    if (gameState.isRolling) return;

    setGameState(prev => ({ ...prev, isRolling: true }));
    playSound('roll');

    setTimeout(() => {
      const newDice1 = Math.floor(Math.random() * 6) + 1;
      const newDice2 = Math.floor(Math.random() * 6) + 1;
      const roll: DiceRoll = {
        dice1: newDice1,
        dice2: newDice2,
        sum: newDice1 + newDice2,
        timestamp: Date.now(),
      };

      setDice1(newDice1);
      setDice2(newDice2);

      const winnings = calculateWinnings(roll, gameState);
      const nextPoint = getNextPoint(roll, gameState.point);

      if (winnings > 0) {
        playSound('win');
      } else if (roll.sum === 7 && gameState.point !== null) {
        playSound('lose');
      }

      setGameState(prev => ({
        ...prev,
        point: nextPoint,
        history: [roll, ...prev.history],
        bankroll: prev.bankroll + winnings,
        bets: Object.keys(prev.bets).reduce((acc, key) => ({
          ...acc,
          [key]: { ...prev.bets[key], amount: 0 },
        }), {} as GameState['bets']),
        isRolling: false,
        rollCount: prev.rollCount + 1,
      }));
    }, 1000);
  }, [gameState, playSound]);

  const placeBet = useCallback((betType: string, amount: number) => {
    setGameState(prev => ({
      ...prev,
      bankroll: prev.bankroll - amount,
      bets: {
        ...prev.bets,
        [betType]: {
          ...prev.bets[betType],
          amount: prev.bets[betType].amount + amount,
        },
      },
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <Header bankroll={gameState.bankroll} />
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <GameBoard
              dice1={dice1}
              dice2={dice2}
              isRolling={gameState.isRolling}
              onRoll={rollDice}
              rollCount={gameState.rollCount}
            />
            <BettingTable
              bets={gameState.bets}
              onPlaceBet={placeBet}
              bankroll={gameState.bankroll}
            />
          </div>
          <div className="space-y-8">
            <History rolls={gameState.history} />
            <BettingGuide />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;