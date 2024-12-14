import { GameState, DiceRoll } from '../types/game';

export const calculateWinnings = (
  roll: DiceRoll,
  gameState: GameState
): number => {
  let winnings = 0;
  const { sum } = roll;
  const { bets, point } = gameState;

  // Pass Line bet
  if (bets.pass.amount > 0) {
    if (point === null) {
      // Come out roll
      if (sum === 7 || sum === 11) {
        winnings += bets.pass.amount * 2;
      } else if (sum === 2 || sum === 3 || sum === 12) {
        // Loss handled by returning 0
      }
    } else {
      // Point is set
      if (sum === point) {
        winnings += bets.pass.amount * 2;
      } else if (sum === 7) {
        // Seven out, loss handled by returning 0
      }
    }
  }

  // Field bet
  if (bets.field.amount > 0) {
    if ([2, 3, 4, 9, 10, 11, 12].includes(sum)) {
      winnings += bets.field.amount * 2;
      if (sum === 2 || sum === 12) {
        winnings += bets.field.amount; // Triple for 2 and 12
      }
    }
  }

  return winnings;
};

export const getNextPoint = (
  roll: DiceRoll,
  currentPoint: number | null
): number | null => {
  const { sum } = roll;
  
  if (currentPoint === null) {
    // Come out roll
    if (![7, 11, 2, 3, 12].includes(sum)) {
      return sum; // Set point
    }
    return null;
  }
  
  // Point is set
  if (sum === 7 || sum === currentPoint) {
    return null; // Point is made or seven out
  }
  
  return currentPoint;
};