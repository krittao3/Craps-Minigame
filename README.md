# 🎲 Luxury Craps

A luxurious and interactive web-based Craps game built with React, TypeScript, and Tailwind CSS.

![Luxury Craps Game](https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?auto=format&fit=crop&q=80&w=1000)

## ✨ Features

- 🎲 Realistic dice rolling animation with sound effects
- 💰 Multiple betting options with accurate payouts
- 📊 Roll history tracking
- 📱 Fully responsive design for all devices
- 🎮 Authentic casino sound effects
- 💎 Luxurious UI with gold accents
- 📖 Comprehensive betting guide for new players

## 🎯 Betting Options

- Pass Line (1:1)
- Don't Pass (1:1)
- Field (2:1, 3:1)
- Hard Way Bets (7:1, 9:1)

## 🛠️ Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons
- Web Audio API

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/luxury-craps.git
```

2. Install dependencies:
```bash
cd luxury-craps
bun install
```

3. Start the development server:
```bash
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎮 How to Play

1. Start with your initial bankroll of $1,000
2. Place your bets using the betting table
3. Click the "Roll Dice" button to roll the dice
4. Watch for winning combinations and collect your winnings
5. Use the betting guide to learn about different bet types

## 🧪 Game Rules

### Pass Line Bet
- Win on 7 or 11 on come-out roll
- Lose on 2, 3, or 12 on come-out roll
- Point is established on other numbers
- Win if point is made before 7

### Field Bet
- Win on 2, 3, 4, 9, 10, 11, 12
- 2 and 12 pay triple
- Lose on 5, 6, 7, 8

For complete rules, check the in-game betting guide.

## 📱 Responsive Design

The game is optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Full-screen mode

## 🔊 Sound Effects

- Dice rolling sounds
- Winning celebration
- Loss indication

## 🛠️ Development

### Project Structure
```
src/
├── components/     # React components
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── main.tsx       # Application entry point
```

### Key Components
- `GameBoard`: Main game interface
- `BettingTable`: Betting options and controls
- `History`: Roll history tracking
- `BettingGuide`: Game rules and payouts

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Dice icons by [Lucide Icons](https://lucide.dev)
- Sound effects from [Mixkit](https://mixkit.co)
- Background image from [Unsplash](https://unsplash.com)
