import React from 'react';

export const BettingGuide: React.FC = () => {
  return (
    <div className="bg-black/50 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gold-400 mb-4">Betting Guide</h2>
      
      <div className="space-y-6">
        <div className="border-b border-gold-500/30 pb-4">
          <h3 className="text-xl text-gold-300 font-bold mb-2">Pass Line (1:1)</h3>
          <div className="text-white">
            <div>The most fundamental bet in craps. On the come-out roll (first roll):</div>
            <ul className="list-disc ml-6 mt-2">
              <li>Win: If 7 or 11 is rolled</li>
              <li>Lose: If 2, 3, or 12 is rolled (called "craps")</li>
              <li>Any other number (4, 5, 6, 8, 9, 10) becomes the "point"</li>
            </ul>
            <div className="mt-2">After point is established:</div>
            <ul className="list-disc ml-6 mt-2">
              <li>Win: If the point is rolled again before a 7</li>
              <li>Lose: If 7 is rolled before the point (called "seven out")</li>
            </ul>
          </div>
        </div>

        <div className="border-b border-gold-500/30 pb-4">
          <h3 className="text-xl text-gold-300 font-bold mb-2">Don't Pass (1:1)</h3>
          <div className="text-white">
            <div>The opposite of Pass Line. On the come-out roll:</div>
            <ul className="list-disc ml-6 mt-2">
              <li>Win: If 2 or 3 is rolled</li>
              <li>Push: If 12 is rolled (this is the house edge)</li>
              <li>Lose: If 7 or 11 is rolled</li>
            </ul>
            <div className="mt-2">After point is established:</div>
            <ul className="list-disc ml-6 mt-2">
              <li>Win: If 7 is rolled before the point</li>
              <li>Lose: If the point is rolled before 7</li>
            </ul>
          </div>
        </div>

        <div className="border-b border-gold-500/30 pb-4">
          <h3 className="text-xl text-gold-300 font-bold mb-2">Field (2:1, 3:1)</h3>
          <div className="text-white">
            <div>A single-roll bet that wins if:</div>
            <ul className="list-disc ml-6 mt-2">
              <li>2 or 12 is rolled (pays 3:1)</li>
              <li>3, 4, 9, 10, or 11 is rolled (pays 2:1)</li>
              <li>Lose: If 5, 6, 7, or 8 is rolled</li>
            </ul>
            <div className="mt-2">This bet is resolved immediately after each roll.</div>
          </div>
        </div>

        <div className="pb-4">
          <h3 className="text-xl text-gold-300 font-bold mb-2">Hard Way (7:1)</h3>
          <div className="text-white">
            <div>Betting that a number will be rolled as pairs:</div>
            <ul className="list-disc ml-6 mt-2">
              <li>Hard 4: Two 2s (2-2)</li>
              <li>Hard 6: Two 3s (3-3)</li>
              <li>Hard 8: Two 4s (4-4)</li>
              <li>Hard 10: Two 5s (5-5)</li>
            </ul>
            <div className="mt-2">You lose if:</div>
            <ul className="list-disc ml-6 mt-2">
              <li>7 is rolled before your hard way number</li>
              <li>Your number is rolled "easy" (not as pairs)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};