# Widget Embed Platform for embed.newth.ai

A modern, embeddable widget platform built with React + Vite + TypeScript. Create, preview, and embed beautiful, responsive widgets for any project—weather, stats, dashboards, and more.

Published using Vercel - manage deployments at https://vercel.com/dashboard

## Features

- 🧩 **Widget Platform** - Easily add and manage multiple types of widgets (weather, stats, dashboards, etc.)
- 🔗 **Embeddable Design** - Clean, responsive widgets perfect for embedding in Notion, websites, dashboards, and more
- 🎨 **Beautiful UI** - Modern, minimal design with shadcn/ui and Tailwind CSS
- ⚡ **Easy Extensibility** - Add new widgets by creating a new page/component and route
- 📱 **Responsive** - Works perfectly on all device sizes

## Available Embeddable Widgets (Examples)

### Weather Vietnam (`/weather-vietnam`)
A 10-day weather forecast widget for three major Vietnamese cities:
- **Hanoi**
- **Ho Chi Minh City**
- **Ha Long Bay**

### More Widgets
You can add any kind of widget—stats, charts, dashboards, or custom data displays—by following the same pattern.

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

1. Create a new component in `src/pages/` (e.g., `StatsWidget.tsx`)
2. Add a route in `src/App.tsx` (e.g., `/stats`)
3. Add a card/link for your widget in `src/pages/Home.tsx`
4. Follow the existing design patterns for consistency

## Embedding

To embed any widget:

```html
<iframe 
  src="https://embed.newth.ai/[your-widget-path]" 
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
- **shadcn/ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first styling

## Extending and Linting

- Follow the existing component and routing patterns to add new widgets.
- For advanced linting, see the ESLint configuration section in this README.
