/**
 * Phosphor Icons Utility and Reference
 *
 * This file provides commonly used Phosphor Icons and utilities
 * for consistent icon usage across the widget template.
 *
 * Browse all icons at: https://phosphoricons.com/
 */

// Common Widget Icons - Import what you need
export {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bell,
  Calculator,
  CaretDown,
  CaretLeft,
  CaretRight,
  CaretUp,
  // Data & Analytics
  ChartBar,
  ChartLine,
  // Communication
  Chat,
  Check,
  // Status
  CheckCircle,
  Code,
  Copy,
  // Widget Specific
  Cube,
  DeviceMobile,
  Download,
  PencilSimple as Edit,
  Eye,
  EyeSlash,
  // Content
  File,
  Folder,
  // Interface
  Gear,
  GitBranch,
  Heart,
  // Navigation & Layout
  House,
  Image,
  Info,
  Lego,
  Lightning,
  Link,
  Lock,
  MagnifyingGlass,
  Envelope as Mail,
  Palette,
  Phone,
  // Actions
  Plus,
  ArrowClockwise as Refresh,
  Rocket,
  Share,
  Shield,
  Sparkle,
  Star,
  TextAa as Text,
  Trash,
  TrendDown,
  TrendUp,
  Upload,
  User,
  Users,
  Video,
  Warning,
  Wrench,
  X,
  XCircle,
} from '@phosphor-icons/react'

/**
 * Icon size constants for consistent sizing
 */
export const ICON_SIZES = {
  xs: 12, // Extra small
  sm: 16, // Small
  md: 20, // Medium (default)
  lg: 24, // Large
  xl: 32, // Extra large
  '2xl': 48, // 2X Large
} as const

/**
 * Icon weight options for Phosphor Icons
 */
export const ICON_WEIGHTS = {
  thin: 'thin',
  light: 'light',
  regular: 'regular',
  bold: 'bold',
  fill: 'fill',
  duotone: 'duotone',
} as const

/**
 * Common icon combinations for different widget contexts
 */
export const WIDGET_ICONS = {
  // Widget categories
  productivity: { icon: 'Lightning', weight: 'fill' },
  utilities: { icon: 'Wrench', weight: 'fill' },
  personal: { icon: 'User', weight: 'fill' },

  // Actions
  create: { icon: 'Plus', weight: 'bold' },
  edit: { icon: 'Edit', weight: 'regular' },
  delete: { icon: 'Trash', weight: 'regular' },
  save: { icon: 'Check', weight: 'bold' },

  // Status
  success: { icon: 'CheckCircle', weight: 'fill' },
  error: { icon: 'XCircle', weight: 'fill' },
  warning: { icon: 'Warning', weight: 'fill' },
  info: { icon: 'Info', weight: 'fill' },

  // Navigation
  home: { icon: 'House', weight: 'fill' },
  back: { icon: 'ArrowLeft', weight: 'regular' },
  forward: { icon: 'ArrowRight', weight: 'regular' },
  external: { icon: 'ArrowSquareOut', weight: 'regular' },

  // Content types
  text: { icon: 'Text', weight: 'regular' },
  code: { icon: 'Code', weight: 'regular' },
  image: { icon: 'Image', weight: 'regular' },
  video: { icon: 'Video', weight: 'regular' },
  file: { icon: 'File', weight: 'regular' },
} as const

/**
 * Type definitions for icon utilities
 */
export type IconSize = keyof typeof ICON_SIZES
export type IconWeight = keyof typeof ICON_WEIGHTS
export type WidgetIconKey = keyof typeof WIDGET_ICONS

/**
 * Helper function to get icon size value
 */
export const getIconSize = (size: IconSize = 'md'): number => {
  return ICON_SIZES[size]
}

/**
 * Helper function to get icon configuration for widgets
 */
export const getWidgetIcon = (key: WidgetIconKey) => {
  return WIDGET_ICONS[key]
}

/**
 * Common icon class combinations for Tailwind
 */
export const ICON_CLASSES = {
  primary: 'text-primary',
  secondary: 'text-secondary-foreground',
  muted: 'text-muted-foreground',
  destructive: 'text-destructive',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  info: 'text-blue-600',

  // Interactive states
  interactive: 'text-muted-foreground hover:text-foreground transition-colors',
  button: 'text-current', // Inherits button text color

  // Sizes with classes
  'xs-icon': 'w-3 h-3',
  'sm-icon': 'w-4 h-4',
  'md-icon': 'w-5 h-5',
  'lg-icon': 'w-6 h-6',
  'xl-icon': 'w-8 h-8',
} as const

/**
 * Usage examples and documentation
 *
 * Basic usage:
 * import { House, ICON_SIZES } from '@/utils/icons'
 * <House size={ICON_SIZES.lg} weight="fill" className="text-primary" />
 *
 * With utilities:
 * import { getIconSize, ICON_CLASSES } from '@/utils/icons'
 * <House size={getIconSize('lg')} className={ICON_CLASSES.primary} />
 *
 * Widget icons:
 * import { getWidgetIcon } from '@/utils/icons'
 * const iconConfig = getWidgetIcon('success')
 * // Use iconConfig.icon and iconConfig.weight
 */
