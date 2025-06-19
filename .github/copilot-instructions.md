<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This project is a Vite + React + TypeScript platform designed for embeddable widgets. It includes a serverless API (api/weather.js) that uses OpenWeatherMap API for weather data. The main routes are:

- `/` - Home page with widget gallery
- `/widgets/example` - Example embeddable widget
- `/api/weather` - Weather API endpoint

**ICON LIBRARY: Use PHOSPHOR ICONS ONLY**

- Primary icon library: `@phosphor-icons/react`
- Import pattern: `import { IconName } from '@phosphor-icons/react'`
- Common icons: House, Gear, Plus, X, MagnifyingGlass, CaretDown, Heart, Star
- Use weights: regular (default), bold, fill (for primary actions)
- Example: `<House size={24} weight="fill" className="text-primary" />`

**DEVELOPMENT WORKFLOW:**

- Use `npm run widget:new <widget-name>` to create new widgets
- All widgets must use Phosphor Icons consistently
- Follow the established component structure with proper TypeScript
- Always include tests for new components

**COMPONENT STRUCTURE:**
Use clean, minimal, and embeddable React components with TypeScript. Components should be designed for easy embedding in external sites. Follow the established structure with shadcn/ui components and Tailwind CSS for styling.

**WIDGET TEMPLATE:**

```tsx
import { Cube, Sparkle } from '@phosphor-icons/react'

export default function MyWidget() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Cube size={32} weight="fill" className="text-primary" />
          <h1 className="text-3xl font-bold">Widget Title</h1>
        </div>
        {/* Widget content */}
      </div>
    </div>
  )
}
```
