# Newth.ai Widgets

A collection of beautifully-designed, embeddable widgets powered by AI. Easy to integrate, customize, and deploy for modern web applications.

**Live Site**: [widgets.newth.ai](https://widgets.newth.ai)

## 🚀 Features

- **Clean Architecture**: Well-organized, modular codebase with TypeScript
- **Embeddable Widgets**: Individual widgets can be embedded without navigation
- **Responsive Design**: Works seamlessly across all device sizes
- **Accessibility First**: WCAG compliant with proper ARIA attributes
- **Comprehensive Testing**: High-level UX tests ensuring quality user experience
- **Modern Stack**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **PWA Support**: Web app manifest and comprehensive favicon support

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── WidgetCard.tsx   # Individual widget display
│   ├── WidgetGrid.tsx   # Grid layout for widgets
│   └── Layout.tsx       # App layout wrapper
├── pages/               # Page components
│   ├── Home.tsx         # Main widget gallery
│   ├── WeatherVietnam.tsx # Weather widget pages
│   └── NotFound.tsx     # 404 page
├── types/               # TypeScript type definitions
│   └── widget.ts        # Widget-related types
├── constants/           # App constants and configuration
│   └── widgets.ts       # Widget data and categories
├── utils/               # Utility functions
│   └── widgets.ts       # Widget filtering and management
├── services/            # API services
│   └── weatherService.ts # Weather data service
└── test/                # Test configuration
    └── setup.ts         # Test environment setup
```

## 🧪 Testing

The project includes comprehensive UX tests covering:

- **Unit Tests**: Utility functions and individual components
- **Component Tests**: React component behavior and rendering
- **Integration Tests**: User interactions and workflows
- **Accessibility Tests**: ARIA attributes and keyboard navigation
- **Performance Tests**: Layout stability and rendering efficiency

### Running Tests

```bash
# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 🎨 Available Widgets

### Vietnam Weather Widgets
- **Vietnam 10-Day Weather Forecast**: Combined view of major cities
- **Hanoi Weather Widget**: Individual city forecast
- **Ho Chi Minh City Weather Widget**: Individual city forecast  
- **Ha Long Bay Weather Widget**: Individual city forecast

## 🔗 Widget URLs

### Main Gallery
- `/` - Widget gallery with All/Vietnam tabs

### Embeddable Widgets
- `/weather-vietnam` - Combined Vietnam weather view
- `/vietnam/hanoi` - Hanoi weather widget (embeddable)
- `/vietnam/hochiminh` - Ho Chi Minh City weather widget (embeddable)
- `/vietnam/halongbay` - Ha Long Bay weather widget (embeddable)

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
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

### Adding New Widgets

1. **Define Widget Type**: Add to `src/types/widget.ts`
2. **Add Widget Data**: Update `src/constants/widgets.ts`
3. **Create Widget Component**: Add to `src/pages/`
4. **Add Route**: Update `src/App.tsx`
5. **Write Tests**: Add tests in `__tests__` directories

Example widget definition:
```typescript
{
  id: 'my-new-widget',
  title: 'My New Widget',
  description: 'Widget description',
  path: '/my-widget',
  category: 'custom',
  tags: ['example', 'demo'],
}
```

## 🎯 UX Testing Coverage

### Test Categories
- **Initial Page Load**: Logo, navigation, default state
- **Tab Navigation**: Switching between All/Vietnam tabs
- **Widget Display**: Content rendering and links
- **Responsive Design**: Grid layouts and spacing
- **Accessibility**: ARIA attributes, keyboard navigation
- **Performance**: Rendering efficiency, layout stability

### Test Commands
```bash
# Run specific test file
npm run test src/pages/__tests__/Home.test.tsx

# Run tests matching pattern
npm run test --grep "UX"

# Run tests in specific directory
npm run test src/components
```

## 🚀 Deployment

The project is configured for Vercel deployment with:
- SPA routing via `vercel.json`
- Automatic builds on git push
- Environment-specific configurations
- Custom domain: `widgets.newth.ai`

### Build Process
```bash
npm run build
```

Outputs to `dist/` directory with:
- Optimized JavaScript bundles
- CSS with Tailwind optimizations
- Static assets and favicons

## 🔧 Configuration

### Environment Variables
- No environment variables required for basic functionality
- Weather service uses simulated data

### Customization
- **Colors**: Update `src/index.css` CSS variables
- **Fonts**: Modify `index.html` and CSS
- **Layout**: Adjust `src/components/Layout.tsx`
- **Widgets**: Add to `src/constants/widgets.ts`

## 📱 Embedding Widgets

Widgets are designed to be embedded in other applications:

```html
<!-- Embed individual widget -->
<iframe 
  src="https://widgets.newth.ai/vietnam/hanoi" 
  width="400" 
  height="500"
  frameborder="0">
</iframe>
```

### Embedding Examples

```html
<!-- Hanoi Weather Widget -->
<iframe 
  src="https://widgets.newth.ai/vietnam/hanoi" 
  width="400" 
  height="500"
  frameborder="0"
  title="Hanoi Weather Widget">
</iframe>

<!-- Ho Chi Minh City Weather Widget -->
<iframe 
  src="https://widgets.newth.ai/vietnam/hochiminh" 
  width="400" 
  height="500"
  frameborder="0"
  title="Ho Chi Minh City Weather Widget">
</iframe>

<!-- Combined Vietnam Weather View -->
<iframe 
  src="https://widgets.newth.ai/weather-vietnam" 
  width="100%" 
  height="600"
  frameborder="0"
  title="Vietnam Weather Forecast">
</iframe>
```

Embedded widgets:
- ✅ No navigation bar
- ✅ Clean, minimal styling
- ✅ Responsive design
- ✅ Proper error handling
- ✅ PWA support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details
