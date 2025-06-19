import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Lego, Code, Palette, CheckCircle } from '@phosphor-icons/react'

export default function ExampleWidget() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Lego size={32} weight="fill" className="text-primary" />
            <h1 className="text-3xl font-bold">Example Widget</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This is a sample widget to demonstrate the platform structure and capabilities. Replace
            this with your own widget implementation.
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="secondary">
              <Code className="w-3 h-3 mr-1" />
              Example
            </Badge>
            <Badge variant="secondary">
              <Palette className="w-3 h-3 mr-1" />
              Template
            </Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Template Features
              </CardTitle>
              <CardDescription>What's included in this widget platform template</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">React 19 + TypeScript</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">shadcn/ui Components</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">Tailwind CSS Styling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">Vitest Testing Suite</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">ESLint + Prettier</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-sm">Vercel Deployment</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>How to replace this example with your own widget</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 text-sm">
                <div>
                  <strong>1. Update Widget Definition</strong>
                  <p className="text-muted-foreground">
                    Edit <code className="bg-muted px-1 rounded">src/constants/widgets.ts</code>
                  </p>
                </div>
                <div>
                  <strong>2. Create Your Component</strong>
                  <p className="text-muted-foreground">Replace this file with your widget logic</p>
                </div>
                <div>
                  <strong>3. Add Route</strong>
                  <p className="text-muted-foreground">
                    Update <code className="bg-muted px-1 rounded">src/App.tsx</code>
                  </p>
                </div>
                <div>
                  <strong>4. Write Tests</strong>
                  <p className="text-muted-foreground">
                    Add tests in <code className="bg-muted px-1 rounded">__tests__/</code>
                  </p>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                View Documentation
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Demo</CardTitle>
            <CardDescription>
              A simple interactive example to test the component system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <Button variant="default" size="sm">
                  Primary
                </Button>
                <Button variant="secondary" size="sm">
                  Secondary
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
                <Button variant="ghost" size="sm">
                  Ghost
                </Button>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  This widget is fully functional and demonstrates the component system. Replace
                  this content with your own widget functionality.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
