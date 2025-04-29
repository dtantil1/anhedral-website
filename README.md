# Anhedral.io - Futuristic Aviation Technology Website

A modern, dark-themed SvelteKit website for Anhedral.io, built with Tailwind CSS and designed for deployment on Vercel.

## Features

- 🌙 Futuristic dark theme design
- 🎨 Custom cyberpunk-inspired UI components
- 📱 Fully responsive layout for all devices
- ⚡ Fast, optimized performance
- 🔄 Interactive animations and transitions
- 🚀 Easy deployment to Vercel

## Getting Started

### Prerequisites

- Node.js (v16.x or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/anhedral-io.git
   cd anhedral-io
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
anhedral-io/
├── src/
│   ├── app.css               # Global styles and Tailwind configuration
│   ├── routes/               # SvelteKit routes/pages
│   │   ├── +layout.svelte    # Main layout with navigation and footer
│   │   ├── +page.svelte      # Home page
│   │   ├── about/            # About page
│   │   ├── services/         # Services page
│   │   ├── projects/         # Projects page
│   │   └── contact/          # Contact page
│   └── lib/                  # Shared components and utilities
├── static/                   # Static assets (images, favicons, etc.)
├── svelte.config.js          # SvelteKit configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## Deployment to Vercel

### Method 1: Connect to GitHub Repository

1. Push your project to a GitHub repository
2. Log in to your Vercel account
3. Click "New Project" and import your GitHub repository
4. Select "SvelteKit" as the framework preset
5. Click "Deploy"

### Method 2: Using Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. Follow the prompts to complete the deployment

## Customization

### Changing Colors

Edit the `tailwind.config.js` file to modify the color palette:

```js
theme: {
  extend: {
    colors: {
      'space-black': '#050505',
      'deep-space': '#0f111a',
      'night': '#1a1b26',
      'cyber-blue': '#5eead4',
      'neon-purple': '#bd93f9',
      // Add or modify colors here
    }
  }
}
```

### Adding New Pages

Create a new folder in the `src/routes` directory with a `+page.svelte` file:

```
src/routes/new-page/+page.svelte
```

## Credits

- Design and Development: Your Name
- Icons: Heroicons (https://heroicons.com)
- Fonts: Inter, JetBrains Mono from Google Fonts

## License

This project is licensed under the MIT License - see the LICENSE file for details.
