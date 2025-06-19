# Widget Platform Template

A modern React + TypeScript template for building embeddable widget platforms. Perfect for creating collections of interactive components that can be embedded anywhere.

🚀 **Features**: Modern tooling, responsive design, accessibility-first, comprehensive testing, and seamless deployment.

## About

This template provides a solid foundation for building widget platforms with:

- **Modern Stack**: React 19 + TypeScript + Vite
- **UI Framework**: shadcn/ui with Tailwind CSS
- **Testing**: Comprehensive test suite with Vitest
- **Development**: Hot reload, linting, formatting, and type checking
- **Deployment**: Optimized for Vercel with PWA support
- **Embeddable**: Clean widget URLs perfect for iframe embedding

## Quick Start

```bash
# Clone and install
git clone <your-repo> my-widget-platform
cd my-widget-platform
npm install

# Start development
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

## Creating Your First Widget

1. **Define your widget** in `src/constants/widgets.ts`:

```typescript
{
  id: 'my-widget',
  title: 'My Widget',
  description: 'Description of what this widget does',
  path: '/widgets/my-widget',
  category: WIDGET_CATEGORIES.UTILITIES,
  tags: ['utility', 'tool'],
}
```

2. **Create the component** in `src/pages/MyWidget.tsx`:

```typescript
export default function MyWidget() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">My Widget</h2>
      {/* Your widget content */}
    </div>
  )
}
```

3. **Add the route** in `src/App.tsx`:

```typescript
import MyWidget from './pages/MyWidget'
// ...
<Route path="/widgets/my-widget" element={<MyWidget />} />
```

4. **Write tests** in `src/pages/__tests__/MyWidget.test.tsx`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── WidgetCard.tsx  # Widget display component
│   └── WidgetGrid.tsx  # Grid layout component
├── pages/              # Page components (widgets)
├── constants/          # Widget definitions and categories
├── services/           # API services and external integrations
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and helpers
└── test/               # Test configuration
```

## Widget Categories

Organize your widgets using built-in categories:

- **Productivity** - Tools for getting things done
- **Utilities** - Helpful everyday tools
- **Personal** - Personal tracking and management
- **Custom** - Add your own categories

## Embedding Widgets

Each widget can be embedded individually:

```html
<iframe src="https://your-domain.com/widgets/my-widget" width="100%" height="500"></iframe>
```

## Tech Stack

- **React 19** + **TypeScript** - Modern React with latest features
- **Vite** - Lightning fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library
- **Vitest** - Fast unit testing with great DX
- **ESLint + Prettier** - Code quality and formatting
- **Vercel** - Zero-config deployment

## Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:coverage # Run tests with coverage
npm run test:all     # Run full test suite (build + lint + test)
npm run lint         # Lint code
npm run lint:fix     # Fix linting issues
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
```

## Deployment

This template is optimized for Vercel deployment:

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically on every push

The template includes:

- PWA support with web manifest
- Static asset optimization
- SPA routing configuration
- Favicon generation

## License

MIT License - feel free to use for any project!

## Contributing

This is a template project. Fork it and make it your own!
