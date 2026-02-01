# Light/Dark Theme Feature

## Overview
Added a beautiful light/dark theme toggle feature to the portfolio with smooth transitions and theme-aware color palettes.

## Features Implemented

### 1. Theme Context (`src/context/ThemeContext.jsx`)
- Global theme state management using React Context
- Persists theme preference in localStorage
- Automatically applies theme classes to document root

### 2. Theme Toggle Button (`src/components/ThemeToggle/ThemeToggle.jsx`)
- Sun icon for dark mode (click to switch to light)
- Moon icon for light mode (click to switch to dark)
- Smooth animations and hover effects
- Located in the navbar next to social icons

### 3. Color Schemes

#### Dark Theme (Default)
- **Background**: Deep black with dark gray gradients
- **Particle Colors**: Vibrant neon colors
  - Purple (#9333ea)
  - Blue (#3b82f6)
  - Pink (#ec4899)
  - Cyan (#22d3ee)
  - Green (#34d399)
  - Orange (#fb923c)

#### Light Theme
- **Background**: Soft gradient from blue-50 → purple-50 → pink-50
- **Particle Colors**: Soft pastel colors
  - Lavender (#9370db)
  - Sky Blue (#87ceeb)
  - Light Pink (#ffb6c1)
  - Mint Green (#98fb98)
  - Peach (#ffdab9)
  - Coral (#ff7f50)

### 4. Theme-Aware Components
- **App.jsx**: Main container with dynamic background gradients
- **BackgroundAnimation.jsx**: Particles change colors based on theme
- **Navbar**: Includes theme toggle button
- **All components**: Smooth color transitions

## How to Use
1. Click the sun/moon icon in the navbar to toggle themes
2. Theme preference is automatically saved
3. On page reload, your last selected theme will be restored

## Technical Details
- Uses React Context API for global state
- localStorage for persistence
- CSS custom properties for theme variables
- Smooth transitions (500ms duration)
- Responsive and mobile-friendly

## Color Palette Philosophy
- **Light Theme**: Soft, pastel colors for a gentle, professional look
- **Dark Theme**: Vibrant, neon colors for a modern, energetic feel
- Both themes maintain excellent readability and visual appeal
