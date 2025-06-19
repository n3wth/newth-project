import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ExampleWidget from '../ExampleWidget'

describe('ExampleWidget', () => {
  it('renders the widget title', () => {
    render(<ExampleWidget />)
    expect(screen.getByText('Example Widget')).toBeInTheDocument()
  })

  it('displays template features', () => {
    render(<ExampleWidget />)
    expect(screen.getByText('Template Features')).toBeInTheDocument()
    expect(screen.getByText('React 19 + TypeScript')).toBeInTheDocument()
    expect(screen.getByText('shadcn/ui Components')).toBeInTheDocument()
  })

  it('shows getting started section', () => {
    render(<ExampleWidget />)
    expect(screen.getByText('Getting Started')).toBeInTheDocument()
    expect(screen.getByText('1. Update Widget Definition')).toBeInTheDocument()
  })

  it('renders interactive demo buttons', () => {
    render(<ExampleWidget />)
    expect(screen.getByText('Primary')).toBeInTheDocument()
    expect(screen.getByText('Secondary')).toBeInTheDocument()
    expect(screen.getByText('Outline')).toBeInTheDocument()
    expect(screen.getByText('Ghost')).toBeInTheDocument()
  })

  it('has proper structure for embedding', () => {
    const { container } = render(<ExampleWidget />)
    const mainContainer = container.querySelector('.container')
    expect(mainContainer).toBeInTheDocument()
    expect(mainContainer).toHaveClass('container', 'mx-auto')
  })
})
