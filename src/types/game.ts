export interface DiceRoll {
    dice1: number;
    dice2: number;
    sum: number;
    timestamp: number;
  }
  
  export interface BetType {
    name: string;
    payout: string;
    active: boolean;
    amount: number;
  }
  
  export interface GameState {
    point: number | null;
    history: DiceRoll[];
    bankroll: number;
    bets: Record<string, BetType>;
    isRolling: boolean;
    rollCount: number;
  }