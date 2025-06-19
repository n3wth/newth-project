# Widget Template

A modern React + TypeScript template for building embeddable widget collections. Perfect for creating libraries of interactive components that can be embedded anywhere.

🚀 **Features**: Modern tooling, responsive design, accessibility-first, comprehensive testing, and seamless deployment.

## About

This template provides a solid foundation for building widget collections with:

- **Modern Stack**: React 19 + TypeScript + Vite
- **UI Framework**: shadcn/ui with Tailwind CSS + **Phosphor Icons**
- **Testing**: Comprehensive test suite with Vitest
- **Development**: Hot reload, linting, formatting, and type checking
- **Deployment**: Optimized for Vercel with PWA support
- **Embeddable**: Clean widget URLs perfect for iframe embedding

## Quick Start

```bash
# Clone and install
git clone <your-repo> my-widget-template
cd my-widget-template
npm install

# Start development
npm run dev

# Create a new widget (recommended)
npm run widget:new my-awesome-widget

# Run tests
npm run test

# Build for production
npm run build
```

## 🚀 Advanced Deployment Strategy

This template includes a **multi-environment CI/CD pipeline** that's perfect for team collaboration and LLM-assisted development.

### Quick Setup

1. **Follow the detailed guide**: See [DEPLOYMENT_SETUP.md](./DEPLOYMENT_SETUP.md) for complete instructions
2. **Add GitHub Secrets**: Your Vercel credentials (provided separately)
   > 🔒 **Security**: Never commit secrets! See [SECURITY.md](./SECURITY.md) for best practices
3. **Create branches**: `staging` and `develop` for proper workflow

### Deployment Flow

- **🔄 Preview**: Every PR gets a preview deployment with automated testing
- **🧪 Staging**: `staging` branch auto-deploys for testing
- **🌟 Production**: `main` branch requires manual approval before deployment

### For LLMs/AI Assistants

This setup allows AI assistants to:

- Create preview deployments for testing changes
- Run comprehensive quality checks automatically
- Provide safe staging environment for experimentation
- Require human approval before production changes

```bash
# Check deployment status
npm run deploy:status

# Create preview deployment
npm run deploy:preview

# Promote to production (guided)
npm run deploy:promote
```

## 🎯 Icon System - Phosphor Icons

This template uses **Phosphor Icons** as the standard icon library for consistency and quality.

### Why Phosphor Icons?

- **6000+ icons** with consistent design system
- **Multiple weights**: thin, light, regular, bold, fill, duotone
- **Excellent React support** with `@phosphor-icons/react`
- **Optimized for web** with tree-shaking support

### Usage Examples

```tsx
// Import the icons you need
import { House, Gear, Plus, MagnifyingGlass, Heart } from '@phosphor-icons/react'

// Basic usage
<House size={24} />

// With weight (thin, light, regular, bold, fill, duotone)
<Heart size={32} weight="fill" className="text-red-500" />

// In buttons and components
<Button>
  <Plus size={16} weight="bold" />
  Add Widget
</Button>
```

### Icon Replacement Guide

- `ChevronDown` → `CaretDown`
- `Search` → `MagnifyingGlass`
- `Settings` → `Gear`
- `Home` → `House`
- Most other icons have the same name

## Creating Your First Widget

### Option 1: Use the Widget Generator (Recommended)

```bash
npm run widget:new my-awesome-widget
```

This automatically creates:

- ✅ Component file with Phosphor Icons
- ✅ Test file with proper test cases
- ✅ Route in App.tsx
- ✅ Entry in widgets constants
- ✅ Formatted code

### Option 2: Manual Creation

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
import { Cube, Sparkle } from '@phosphor-icons/react'

export default function MyWidget() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Cube size={32} weight="fill" className="text-primary" />
          <h1 className="text-3xl font-bold">My Widget</h1>
        </div>
        {/* Your widget content */}
      </div>
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
├── test/               # Test configuration
└── scripts/            # Development utilities
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
- **Phosphor Icons** - Consistent, high-quality icon system
- **Vitest** - Fast unit testing with great DX
- **ESLint + Prettier** - Code quality and formatting
- **Vercel** - Zero-config deployment

## Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run dev:api          # Start API server separately

# Widget Creation
npm run widget:new       # Create new widget with scaffold

# Testing
npm run test             # Run tests in watch mode
npm run test:run         # Run tests once
npm run test:coverage    # Run tests with coverage
npm run test:all         # Run full test suite (build + lint + test)

# Code Quality
npm run lint             # Lint code
npm run lint:fix         # Fix linting issues
npm run format           # Format code with Prettier
npm run type-check       # TypeScript type checking

# Build & Deploy
npm run build            # Build for production
npm run preview          # Preview production build

# Maintenance
npm run clean            # Clean build artifacts
npm run clean:deps       # Clean dependencies and reinstall
npm run deps:check       # Check for outdated dependencies
npm run deps:update      # Update dependencies
```

## Phosphor Icons Reference

### Common Icons for Widgets

```tsx
// Navigation & Actions
import { House, ArrowLeft, ArrowRight, Plus, X } from '@phosphor-icons/react'

// Content & Media
import { Image, Video, File, Link, Download } from '@phosphor-icons/react'

// User Interface
import { Gear, Bell, User, Heart, Star } from '@phosphor-icons/react'

// Data & Analytics
import { Chart, Graph, TrendUp, Calculator } from '@phosphor-icons/react'

// Communication
import { Chat, Mail, Phone, Share } from '@phosphor-icons/react'
```

### Icon Weights

```tsx
<Icon size={24} weight="thin" />     // Thinnest
<Icon size={24} weight="light" />    // Light
<Icon size={24} />                   // Regular (default)
<Icon size={24} weight="bold" />     // Bold
<Icon size={24} weight="fill" />     // Filled (recommended for primary actions)
<Icon size={24} weight="duotone" />  // Two-tone
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

---

**🎨 Built with Phosphor Icons** - Browse the full library at [phosphoricons.com](https://phosphoricons.com/)
