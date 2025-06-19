#!/usr/bin/env node

import { execSync } from 'child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'

// Get widget name from command line arguments
const widgetName = process.argv[2]

if (!widgetName) {
  console.error('❌ Please provide a widget name')
  console.log('Usage: npm run widget:new <widget-name>')
  console.log('Example: npm run widget:new my-awesome-widget')
  process.exit(1)
}

// Convert kebab-case to PascalCase
const componentName = widgetName
  .split('-')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join('')

// Convert kebab-case to readable title
const title = widgetName
  .split('-')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ')

const paths = {
  component: `src/pages/${componentName}.tsx`,
  test: `src/pages/__tests__/${componentName}.test.tsx`,
  constants: 'src/constants/widgets.ts',
  app: 'src/App.tsx',
}

console.log(`🚀 Creating widget: ${widgetName}`)
console.log(`📁 Component: ${componentName}`)

// 1. Create component file
const componentTemplate = `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Cube, Sparkle } from '@phosphor-icons/react'

export default function ${componentName}() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Cube size={32} weight="fill" className="text-primary" />
            <h1 className="text-3xl font-bold">${title}</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Description of what this widget does. Replace this with your widget's functionality.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="secondary">
              <Sparkle className="w-3 h-3 mr-1" />
              Custom Widget
            </Badge>
          </div>
        </div>

        {/* Main Content */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cube className="w-5 h-5" />
              Widget Content
            </CardTitle>
            <CardDescription>
              This is where your widget functionality goes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-medium">Feature 1</h3>
                <p className="text-sm text-muted-foreground">
                  Description of feature 1
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">Feature 2</h3>
                <p className="text-sm text-muted-foreground">
                  Description of feature 2
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 pt-4">
              <Button size="sm">
                <Sparkle className="w-4 h-4 mr-2" />
                Primary Action
              </Button>
              <Button size="sm" variant="outline">
                Secondary Action
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
`

// 2. Create test file
const testTemplate = `import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ${componentName} from '../${componentName}'

describe('${componentName}', () => {
  it('renders widget title', () => {
    render(<${componentName} />)
    expect(screen.getByText('${title}')).toBeInTheDocument()
  })

  it('renders widget description', () => {
    render(<${componentName} />)
    expect(screen.getByText(/Description of what this widget does/)).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<${componentName} />)
    expect(screen.getByText('Primary Action')).toBeInTheDocument()
    expect(screen.getByText('Secondary Action')).toBeInTheDocument()
  })
})
`

// Create directories if they don't exist
const testDir = 'src/pages/__tests__'
if (!existsSync(testDir)) {
  mkdirSync(testDir, { recursive: true })
}

// Write component file
writeFileSync(paths.component, componentTemplate)
console.log(`✅ Created component: ${paths.component}`)

// Write test file
writeFileSync(paths.test, testTemplate)
console.log(`✅ Created test: ${paths.test}`)

// 3. Add to widgets constants
const widgetsFile = readFileSync(paths.constants, 'utf8')
const widgetEntry = `  {
    id: '${widgetName}',
    title: '${title}',
    description: 'Description of what this widget does. Replace this with your widget\\'s functionality.',
    path: '/widgets/${widgetName}',
    category: WIDGET_CATEGORIES.UTILITIES,
    tags: ['custom', 'new'],
  },`

// Find the end of the WIDGETS array and add the new widget
const widgetsUpdated = widgetsFile.replace(
  /(\s+\/\/ Add your widgets here[\s\S]*?)(\s+]\s*$)/,
  `$1
${widgetEntry}
$2`
)

writeFileSync(paths.constants, widgetsUpdated)
console.log(`✅ Added to widgets constants`)

// 4. Add route to App.tsx
const appFile = readFileSync(paths.app, 'utf8')
const importLine = `import ${componentName} from './pages/${componentName}'`
const routeLine = `        <Route path="/widgets/${widgetName}" element={<${componentName} />} />`

// Add import after existing imports
const appWithImport = appFile.replace(
  /(import.*from '\.\/pages\/.*')/g,
  (match, lastImport) => lastImport + `\n${importLine}`
)

// Add route before the NotFound route
const appWithRoute = appWithImport.replace(
  /(\s+<Route path="\/widgets\/example"[\s\S]*?\/>)(\s+<Route path="\*")/,
  `$1\n${routeLine}$2`
)

writeFileSync(paths.app, appWithRoute)
console.log(`✅ Added route to App.tsx`)

// 5. Format the files
try {
  execSync('npm run format', { stdio: 'inherit' })
  console.log(`✅ Formatted files`)
} catch (error) {
  console.log(`⚠️  Could not format files automatically`)
}

console.log(`\n🎉 Widget '${widgetName}' created successfully!`)
console.log(`\n📋 Next steps:`)
console.log(`   1. Edit ${paths.component} to implement your widget`)
console.log(`   2. Update the description in ${paths.constants}`)
console.log(`   3. Add more tests in ${paths.test}`)
console.log(`   4. Run 'npm run dev' to see your widget at /widgets/${widgetName}`)
console.log(`\n🔧 Available commands:`)
console.log(`   npm run dev          - Start development server`)
console.log(`   npm run test         - Run tests`)
console.log(`   npm run lint:fix     - Fix linting issues`)
