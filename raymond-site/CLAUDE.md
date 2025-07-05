# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React TypeScript landing page for Ray Jones, a software engineer and YouTuber. The site is designed to build trust and promote his coaching programs using Google Material Design philosophy with a black and gold color scheme.

## Development Commands

- `npm start` - Runs the development server at http://localhost:3000
- `npm run build` - Builds the app for production to the `build` folder
- `npm test` - Launches the test runner in interactive watch mode
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technology Stack

- **Frontend Framework**: React 19.1.0 with TypeScript
- **UI Library**: Material-UI 7.2.0 with custom black/gold theme
- **Routing**: React Router DOM 7.6.3
- **Styling**: Material-UI's emotion-based styling system
- **Build System**: Create React App 5.0.1

## Architecture & Structure

### Project Structure
```
src/
├── components/
│   └── Navigation.tsx      # Main navigation component
├── pages/
│   ├── LandingPage.tsx     # Home page with hero, videos, programs
│   ├── ContactPage.tsx     # Contact information page
│   └── CoachingPage.tsx    # Coaching program sales page
└── App.tsx                 # Main app with routing and theme
```

### Routing Structure
- `/` - Landing page (main page)
- `/contact` - Contact page with email information
- `/coaching` - Coaching program sales page with VSL and testimonials
- YouTube navigation redirects to external URL

### Component Architecture
- **Navigation**: Responsive nav with mobile menu, external YouTube link
- **LandingPage**: Hero section, YouTube videos, programs showcase, newsletter signup
- **ContactPage**: Simple contact form with email information
- **CoachingPage**: Sales-focused page with VSL, testimonials, multiple CTAs

## Design System

### Color Scheme
- **Primary**: Black (#000000)
- **Secondary**: Gold (#FFD700)
- **Background**: Black (#000000)
- **Paper**: Dark gray (#1a1a1a)
- **Text**: White primary, Gold secondary

### Material Design Implementation
- Custom Material-UI theme with black/gold colors
- Elevated cards with hover effects
- Consistent spacing and typography
- Responsive breakpoints (xs, sm, md, lg)
- Material icons throughout

### Key Features
- **Trust Building**: Social proof, testimonials, specific salary figures
- **Lead Generation**: Multiple CTAs, newsletter signup, application flow
- **Mobile Responsive**: Works on all device sizes
- **Professional Branding**: Consistent color scheme and typography
- **Clear Value Proposition**: Specific benefits and outcomes

## Content Strategy

### Landing Page Sections
1. **Hero**: Professional introduction with key credentials
2. **YouTube Videos**: Featured content to build authority
3. **Programs**: Two-tier coaching structure ($7/month and $4,999/year)
4. **Newsletter**: Email capture for lead nurturing

### Coaching Page Strategy
- **Urgency**: Limited spots available
- **Social Proof**: Specific success stories with names and salaries
- **Value Stacking**: Core program + annual bonuses
- **Multiple CTAs**: Apply buttons throughout the page
- **VSL Integration**: Video sales letter placeholder

### Technical Implementation
- TypeScript for type safety
- Material-UI components for consistency
- Responsive design patterns
- Professional email integration
- External link handling for YouTube

## Development Guidelines

### Component Patterns
- Functional components with React hooks
- TypeScript interfaces for props
- Material-UI sx prop for styling
- Responsive design with theme breakpoints

### Styling Conventions
- Material-UI theme customization
- Consistent spacing using theme.spacing
- Hover effects and transitions
- Color consistency using theme palette

### Business Logic
- Newsletter signup with success state
- Application modal for coaching program
- External link handling for YouTube
- Responsive navigation with mobile menu