# Weather Embed Site for embed.newth.ai

A modern, embeddable weather widget site built with React + Vite + TypeScript that displays beautiful 10-day weather forecasts for Vietnamese cities.

Published using Vercel - manage deployments at https://vercel.com/dashboard

## Features

- 🌤️ **Weather Vietnam Widget** (`/weather-vietnam`) - 10-day forecast for Hanoi, Ho Chi Minh City, and Ha Long Bay
- 🔗 **Embeddable Design** - Clean, responsive widgets perfect for embedding in Notion, websites, etc.
- ⚡ **Google API Integration** - Uses Google Geocoding API for accurate location data
- 🎨 **Beautiful UI** - Modern gradient design with glassmorphism effects
- 📱 **Responsive** - Works perfectly on all device sizes

## Google API Integration

The weather service uses your Google API key (`AIzaSyD7WCApkLtI-PJA7169MnnItGXRRpZ2kRY`) for:
- Google Geocoding API to get precise coordinates for Vietnamese cities
- Location-based weather data fetching
- Fallback to realistic mock data for development

## Available Embeddable Widgets

### Weather Vietnam (`/weather-vietnam`)
A beautiful 10-day weather forecast widget for three major Vietnamese cities:
- **Hanoi** - Northern Vietnam capital
- **Ho Chi Minh City** - Southern Vietnam metropolis  
- **Ha Long Bay** - Famous coastal destination

Perfect for embedding in:
- Notion pages
- Websites and blogs
- Travel planning applications
- Dashboard applications

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

To deploy to `embed.newth.ai`:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Vercel (auto-deploys on git push)
3. Routing and static asset handling are managed by `vercel.json`

## Adding New Widgets

The project is structured for easy addition of new embeddable widgets:

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Follow the existing design patterns for consistency

## API Keys

- **Google API Key**: Already configured for Geocoding API
- **Weather Data**: Currently using mock data; can be extended with OpenWeatherMap or other weather APIs

## Embedding

To embed the weather widget:

```html
<iframe 
  src="https://embed.newth.ai/weather-vietnam" 
  width="100%" 
  height="600"
  style="border: none; border-radius: 8px;">
</iframe>
```

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Google APIs** - Geocoding for location accuracy

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
