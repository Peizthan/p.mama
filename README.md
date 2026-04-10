# P Mama 🌿

> **Eco-consciente · Arte · Vida**

P Mama is an eco-conscious brand focused on sustainability, artistic expression, and mindful living — producing biodegradable handcrafted products while promoting environmental awareness and local culture.

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** — page animations & parallax
- **Bilingual** — Spanish (default) / English toggle

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Sticky nav with language toggle
│   ├── Hero.jsx             # Animated hero with parallax logo
│   ├── FloatingElements.jsx # Animated leaves & dots
│   ├── AboutSection.jsx     # Brand story + stats
│   ├── SustainabilitySection.jsx  # Philosophy cards
│   ├── ManifestoSection.jsx # Animated quote section
│   ├── CTASection.jsx       # Call-to-action + feature cards
│   └── Footer.jsx           # Footer with social links
├── pages/
│   └── Home.jsx             # Home page composition
├── context/
│   └── LanguageContext.jsx  # ES/EN language context
├── i18n/
│   ├── es.js                # Spanish translations
│   └── en.js                # English translations
└── index.css                # Tailwind + global styles
```

## Getting Started

```bash
npm install
npm run dev       # Development server
npm run build     # Production build
npm run lint      # ESLint check
```

## Deploy on Vercel

This project is configured for Vercel with `vercel.json` — just connect the repo and deploy. The `dist/` folder is excluded from git; Vercel builds it automatically.

## Brand Colors

| Role | Color |
|------|-------|
| Primary Green | `#2D6B47` |
| Deep Forest | `#1C3A2B` |
| Teal Accent | `#4A9B6F` |
| Warm Orange | `#E85D26` |
| Golden Yellow | `#F9C74F` |
| Cream BG | `#FAFAF5` |
