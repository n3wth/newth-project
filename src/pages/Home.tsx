import { AnimatedGradientText } from '@/components/magicui/animated-gradient-text'
import { Marquee } from '@/components/magicui/marquee'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { WidgetGrid } from '@/components/WidgetGrid'
import { WIDGETS } from '@/constants/widgets'
import {
  ArrowRight,
  CheckCircle,
  Code,
  DeviceMobile,
  Download,
  Eye,
  GitBranch,
  Lego,
  Lightning,
  Palette,
  Rocket,
  Shield,
  Sparkle,
  User,
  Wrench,
} from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate shrinking values based on scroll
  const maxScroll = 50
  const scrollProgress = Math.min(scrollY / maxScroll, 1)
  const logoSize = 32 - scrollProgress * 16
  const headerPadding = 6 - scrollProgress * 3
  const titleSize = 2 - scrollProgress * 0.75

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Modern Stack',
      description: 'Built with React 19, TypeScript, and Vite for lightning-fast development.',
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Beautiful UI',
      description: 'Pre-configured with shadcn/ui and Tailwind CSS for stunning interfaces.',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Type Safe',
      description: 'Full TypeScript support with strict type checking and IntelliSense.',
    },
    {
      icon: <DeviceMobile className="w-6 h-6" />,
      title: 'Responsive',
      description: 'Mobile-first design that works perfectly on all device sizes.',
    },
    {
      icon: <Lightning className="w-6 h-6" />,
      title: 'Fast Build',
      description: 'Optimized Vite configuration for rapid development and production builds.',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Deploy Ready',
      description: 'Pre-configured for Vercel deployment with PWA support included.',
    },
  ]

  const benefits = [
    'Embeddable widget architecture',
    'Comprehensive testing setup',
    'Accessibility-first design',
    'SEO optimized structure',
    'Hot reload development',
    'Production-ready builds',
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200">
        <div
          className="container mx-auto px-4"
          style={{
            paddingTop: `${headerPadding * 0.25}rem`,
            paddingBottom: `${headerPadding * 0.25}rem`,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2" data-testid="logo">
              <Lego
                size={logoSize}
                weight="fill"
                className="text-primary transition-all duration-200"
              />
              <h1
                className="font-bold tracking-tight transition-all duration-200"
                style={{ fontSize: `${titleSize}rem` }}
              >
                Widget Template
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm hover:text-primary transition-colors">
                Features
              </a>
              <a href="#widgets" className="text-sm hover:text-primary transition-colors">
                Widgets
              </a>
              <a href="#getting-started" className="text-sm hover:text-primary transition-colors">
                Get Started
              </a>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <GitBranch className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4">
              <Sparkle className="w-3 h-3 mr-1" />
              Open Source Template
            </Badge>
            <AnimatedGradientText
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl block"
              colorFrom="#f59e0b"
              colorTo="#ef4444"
            >
              Build Amazing Widget Collections
            </AnimatedGradientText>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A modern React + TypeScript template for creating embeddable widget collections.
              Perfect for building libraries of interactive components that can be embedded
              anywhere.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="min-w-[150px]" asChild>
              <a href="#getting-started">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="min-w-[150px]" asChild>
              <a href="#widgets">
                <Eye className="w-4 h-4 mr-2" />
                View Demo
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground pt-8">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>TypeScript</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              <span>shadcn/ui</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Lightning className="w-4 h-4" />
              <span>Vite</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              <span>Vercel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-4 border-y bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
        <Marquee className="[--duration:30s]" pauseOnHover>
          <div className="flex items-center gap-8 mx-4">
            <Badge
              variant="secondary"
              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
            >
              <Lightning className="w-3 h-3 mr-1" weight="fill" />
              Fast Development
            </Badge>
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
            >
              <Wrench className="w-3 h-3 mr-1" weight="fill" />
              Easy Customization
            </Badge>
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
            >
              <User className="w-3 h-3 mr-1" weight="fill" />
              Developer Friendly
            </Badge>
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              <Code className="w-3 h-3 mr-1" weight="fill" />
              Production Ready
            </Badge>
          </div>
        </Marquee>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary">
            <Lightning className="w-3 h-3 mr-1" />
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Build
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete toolkit for building modern widget collections with best practices built-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-muted hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary">
                <CheckCircle className="w-3 h-3 mr-1" />
                Benefits
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose This Template?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Save weeks of development time with a battle-tested foundation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Widget Demo Section */}
      <section id="widgets" className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary">
            <Lego className="w-3 h-3 mr-1" />
            Demo
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See It In Action</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the example widget and see how easy it is to build your own.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <WidgetGrid widgets={WIDGETS} />
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <Badge variant="secondary">
                <Rocket className="w-3 h-3 mr-1" />
                Get Started
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Quick Start Guide</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get up and running in minutes with these simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-muted">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <CardTitle className="text-lg">Clone & Install</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <code className="block bg-muted p-2 rounded text-xs">
                      git clone &lt;your-repo&gt;
                    </code>
                    <code className="block bg-muted p-2 rounded text-xs">npm install</code>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <CardTitle className="text-lg">Customize</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>• Update branding & colors</p>
                    <p>• Add your widgets</p>
                    <p>• Configure categories</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-muted">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <CardTitle className="text-lg">Deploy</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <code className="block bg-muted p-2 rounded text-xs">npm run build</code>
                    <p className="text-xs text-muted-foreground">
                      Deploy to Vercel with zero config
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download Template
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Lego className="w-6 h-6 text-primary" weight="fill" />
                <span className="font-bold">Widget Template</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Modern template for building embeddable widget collections.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Templates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    GitHub Issues
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contributing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>Built with</span>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  React
                </Badge>
                <Badge variant="outline" className="text-xs">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="text-xs">
                  shadcn/ui
                </Badge>
              </div>
            </div>
            <p>MIT License - Free to use for any project</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
