#!/usr/bin/env node

import { readdirSync, readFileSync, statSync, writeFileSync } from 'fs'
import { extname, join } from 'path'

/**
 * Icon Migration Script
 *
 * Helps migrate from Lucide React or other icon libraries to Phosphor Icons
 */

const ICON_MAPPINGS = {
  // Lucide to Phosphor mappings
  ChevronDown: 'CaretDown',
  ChevronUp: 'CaretUp',
  ChevronLeft: 'CaretLeft',
  ChevronRight: 'CaretRight',
  Search: 'MagnifyingGlass',
  Settings: 'Gear',
  Home: 'House',
  Mail: 'Envelope',
  Edit: 'PencilSimple',
  Refresh: 'ArrowClockwise',
  RotateCcw: 'ArrowCounterclockwise',
  RotateCw: 'ArrowClockwise',
  Text: 'TextAa',
  FileText: 'FileText',
  Calendar: 'Calendar',
  Clock: 'Clock',
  Users: 'Users',
  User: 'User',
  Star: 'Star',
  Heart: 'Heart',
  Eye: 'Eye',
  EyeOff: 'EyeSlash',
  Plus: 'Plus',
  Minus: 'Minus',
  X: 'X',
  Check: 'Check',
  Trash: 'Trash',
  Download: 'Download',
  Upload: 'Upload',
  Copy: 'Copy',
  Share: 'Share',
  ExternalLink: 'ArrowSquareOut',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
}

const TARGET_DIRS = ['src/components', 'src/pages', 'src/utils']

function findTsxFiles(dir) {
  const files = []

  function walk(currentDir) {
    const items = readdirSync(currentDir)

    for (const item of items) {
      const fullPath = join(currentDir, item)
      const stat = statSync(fullPath)

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walk(fullPath)
      } else if (stat.isFile() && (extname(item) === '.tsx' || extname(item) === '.ts')) {
        files.push(fullPath)
      }
    }
  }

  walk(dir)
  return files
}

function migrateFile(filePath) {
  const content = readFileSync(filePath, 'utf8')
  let newContent = content
  let hasChanges = false

  // Check if file uses lucide-react
  if (content.includes('lucide-react')) {
    console.log(`📝 Migrating ${filePath}`)

    // Replace lucide-react imports
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/g
    let match

    while ((match = lucideImportRegex.exec(content)) !== null) {
      const imports = match[1].split(',').map((imp) => imp.trim())
      const phosphorImports = []

      for (const imp of imports) {
        const iconName = imp.trim()
        const phosphorName = ICON_MAPPINGS[iconName] || iconName

        if (phosphorName !== iconName) {
          phosphorImports.push(`${phosphorName} as ${iconName}`)
          console.log(`  ✓ ${iconName} → ${phosphorName}`)
        } else {
          phosphorImports.push(iconName)
        }
      }

      const newImport = `import { ${phosphorImports.join(', ')} } from '@phosphor-icons/react'`
      newContent = newContent.replace(match[0], newImport)
      hasChanges = true
    }

    // Update any direct icon name usage in JSX
    for (const [lucide, phosphor] of Object.entries(ICON_MAPPINGS)) {
      if (phosphor !== lucide && content.includes(`<${lucide}`)) {
        // Don't replace if it's already aliased
        if (!content.includes(`${phosphor} as ${lucide}`)) {
          newContent = newContent.replace(new RegExp(`<${lucide}([^>]*)>`, 'g'), `<${phosphor}$1>`)
          newContent = newContent.replace(new RegExp(`</${lucide}>`, 'g'), `</${phosphor}>`)
          hasChanges = true
          console.log(`  ✓ Updated JSX: ${lucide} → ${phosphor}`)
        }
      }
    }
  }

  if (hasChanges) {
    writeFileSync(filePath, newContent)
    console.log(`✅ Updated ${filePath}`)
    return true
  }

  return false
}

function main() {
  console.log('🎯 Phosphor Icons Migration Tool')
  console.log('================================')

  let totalFiles = 0
  let migratedFiles = 0

  for (const dir of TARGET_DIRS) {
    try {
      const files = findTsxFiles(dir)
      totalFiles += files.length

      for (const file of files) {
        if (migrateFile(file)) {
          migratedFiles++
        }
      }
    } catch (error) {
      console.log(`⚠️  Could not process directory: ${dir}`)
    }
  }

  console.log('\n📊 Migration Summary:')
  console.log(`   Total files scanned: ${totalFiles}`)
  console.log(`   Files migrated: ${migratedFiles}`)

  if (migratedFiles > 0) {
    console.log('\n🎉 Migration complete!')
    console.log('\n📋 Next steps:')
    console.log('   1. Review the changes')
    console.log('   2. Test your application')
    console.log('   3. Remove lucide-react dependency if no longer needed')
    console.log('   4. Run: npm run format')
  } else {
    console.log('\n✨ No files needed migration!')
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
