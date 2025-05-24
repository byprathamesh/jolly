# Jolly - Fashion Companion App

A modern React Native mobile application for fashion enthusiasts, featuring AI-powered outfit try-on, virtual wardrobe management, social sharing, and outfit swapping.

## 🌟 Features

- 🤖 **AI Try-On**: Visualize outfits using advanced AI technology
- 👗 **Virtual Wardrobe**: Manage and organize your clothing inventory
- 🔄 **Swap Feed**: GRWM (Get Ready With Me) content and outfit inspiration
- 📱 **Social Features**: Pinterest-style profiles and outfit sharing
- 🎨 **Modern UI**: Dark theme with accent colors (#181818 background, #FF5CA7 accent)

## 📁 Project Structure

```
Jolly/
├── 📱 App.tsx                    # Main app entry point
├── 📦 package.json               # Dependencies and scripts
├── ⚙️ tsconfig.json              # TypeScript configuration
├── 🔧 babel.config.js            # Babel configuration
├── 📋 metro.config.js            # Metro bundler config
├── 📱 app.json                   # React Native app config
├── 📖 README.md                  # Project documentation
├── 🚫 .gitignore                 # Git ignore rules
├── 🤖 .github/                   # GitHub Actions CI/CD
│   └── workflows/
│       └── ci.yml                # Continuous integration
└── 📂 src/                       # Source code directory
    ├── 🎨 theme/                 # Colors, fonts, spacing
    ├── 🏪 store/                 # Redux state management
    ├── 🧭 navigation/            # Navigation logic
    ├── 📱 screens/               # Main app screens
    ├── 🧩 components/            # Reusable UI components
    ├── 🚀 features/              # Feature modules
    │   ├── aiTryOn/             # AI outfit visualization
    │   ├── swap/                # GRWM feed and affiliate links
    │   ├── wardrobe/            # Inventory management
    │   └── social/              # Social features
    ├── 🌐 services/             # API integrations
    ├── 🛠️ utils/                # Helper functions
    ├── 📝 types/                # TypeScript types
    └── 📋 constants/            # App-wide constants
```

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 18)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Jolly
```

2. Install dependencies:
```bash
npm install
```

3. Install iOS dependencies (macOS only):
```bash
cd ios && pod install && cd ..
```

### Running the App

#### Android
```bash
npm run android
```

#### iOS
```bash
npm run ios
```

#### Development Server
```bash
npm start
```

## 🛠️ Development

### Available Scripts

- `npm start` - Start the Metro bundler
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run typecheck` - Run TypeScript type checking

### Code Style

This project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Strict TypeScript configuration

### State Management

The app uses Redux Toolkit for state management with the following slices:
- `authSlice` - User authentication
- `wardrobeSlice` - Clothing inventory
- `socialSlice` - Social features and posts

### Theme System

The app uses a centralized theme system with:
- Dark background (#181818)
- Pink accent color (#FF5CA7)
- Consistent spacing and typography
- Responsive design tokens

## 🎨 Design System

### Colors
- **Background**: `#181818` (Dark)
- **Accent**: `#FF5CA7` (Pink)
- **Text Primary**: `#FFFFFF`
- **Surface**: `#2A2A2A`

### Typography
- System fonts with multiple weight variants
- Responsive font sizes (xs to 6xl)
- Consistent line heights

### Spacing
- 4px base unit scaling (xs: 4px to 6xl: 64px)
- Consistent border radius system
- Elevation shadows for depth

## 🏗️ Architecture

### Modular Feature Structure

Each feature is self-contained with its own:
- Components
- Hooks
- Services
- Types
- State management

### Features

1. **AI Try-On** (`src/features/aiTryOn/`)
   - AI outfit visualization
   - Virtual try-on technology
   - Outfit recommendations

2. **Wardrobe** (`src/features/wardrobe/`)
   - Clothing inventory management
   - Item categorization
   - Favorites and tags

3. **Swap** (`src/features/swap/`)
   - GRWM feed
   - Outfit swapping
   - Affiliate links

4. **Social** (`src/features/social/`)
   - Pinterest-style profiles
   - Outfit sharing
   - Social interactions

## 📦 Dependencies

### Core
- React Native 0.75.2
- TypeScript 5.0.4
- React Navigation 6.x

### State Management
- Redux Toolkit
- React Redux

### UI & Navigation
- React Navigation (Stack, Tabs)
- React Native Safe Area Context
- React Native Screens
- React Native Gesture Handler

### Development
- ESLint
- Prettier
- Jest
- Babel

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ for fashion enthusiasts 