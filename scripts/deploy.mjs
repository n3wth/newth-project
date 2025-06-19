#!/usr/bin/env node

import chalk from 'chalk'
import { execSync } from 'child_process'
import { readFileSync } from 'fs'

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'))
const projectName = packageJson.name

console.log(chalk.blue.bold(`🚀 Deployment Manager for ${projectName}\n`))

const command = process.argv[2]
const environment = process.argv[3] || 'staging'

const environments = {
  staging: {
    branch: 'staging',
    url: 'https://template-staging.vercel.app',
    description: 'Staging environment for testing',
  },
  production: {
    branch: 'main',
    url: 'https://template.vercel.app',
    description: 'Production environment',
  },
}

function showHelp() {
  console.log(chalk.yellow('Available commands:'))
  console.log('')
  console.log(chalk.cyan('  status') + '          Show deployment status')
  console.log(chalk.cyan('  preview') + '         Create a preview deployment')
  console.log(chalk.cyan('  promote') + '         Promote staging to production')
  console.log(chalk.cyan('  rollback') + '        Rollback to previous deployment')
  console.log(chalk.cyan('  logs') + '            Show deployment logs')
  console.log(chalk.cyan('  env') + '             Manage environment variables')
  console.log('')
  console.log(chalk.yellow('Examples:'))
  console.log(chalk.gray('  npm run deploy status'))
  console.log(chalk.gray('  npm run deploy preview'))
  console.log(chalk.gray('  npm run deploy promote'))
  console.log('')
}

function getCurrentBranch() {
  try {
    return execSync('git branch --show-current', { encoding: 'utf8' }).trim()
  } catch (error) {
    console.error(chalk.red('❌ Error getting current branch'), error.message)
    process.exit(1)
  }
}

function showStatus() {
  console.log(chalk.blue('📊 Deployment Status\n'))

  Object.entries(environments).forEach(([env, config]) => {
    console.log(chalk.yellow(`${env.toUpperCase()}:`))
    console.log(`  Branch: ${config.branch}`)
    console.log(`  URL: ${chalk.cyan(config.url)}`)
    console.log(`  Description: ${config.description}`)
    console.log('')
  })

  const currentBranch = getCurrentBranch()
  console.log(chalk.blue(`Current branch: ${chalk.yellow(currentBranch)}`))

  // Check if we have uncommitted changes
  try {
    const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' })
    if (gitStatus.trim()) {
      console.log(chalk.red('⚠️  You have uncommitted changes'))
    } else {
      console.log(chalk.green('✅ Working directory clean'))
    }
  } catch (error) {
    console.log(chalk.yellow('⚠️  Could not check git status'))
  }
}

function createPreview() {
  console.log(chalk.blue('🔍 Creating preview deployment...\n'))

  const currentBranch = getCurrentBranch()

  console.log(chalk.gray('1. Running tests and build checks...'))
  try {
    execSync('npm run test:all', { stdio: 'inherit' })
    console.log(chalk.green('✅ All checks passed'))
  } catch (error) {
    console.error(chalk.red('❌ Tests failed. Fix issues before deploying.'))
    process.exit(1)
  }

  console.log(chalk.gray('\n2. Creating preview deployment...'))
  try {
    // This would typically integrate with Vercel CLI
    console.log(
      chalk.yellow('💡 Push your branch to GitHub to automatically create a preview deployment')
    )
    console.log(chalk.gray(`   git push origin ${currentBranch}`))
    console.log(chalk.gray('   Then create a PR to get a preview URL'))
  } catch (error) {
    console.error(chalk.red('❌ Preview deployment failed'), error.message)
    process.exit(1)
  }
}

function promoteToProduction() {
  console.log(chalk.blue('🌟 Promoting staging to production...\n'))

  const currentBranch = getCurrentBranch()

  if (currentBranch !== 'staging') {
    console.error(chalk.red('❌ You must be on the staging branch to promote to production'))
    console.log(chalk.yellow('💡 Switch to staging: git checkout staging'))
    process.exit(1)
  }

  console.log(chalk.gray('1. Checking staging deployment...'))
  console.log(chalk.cyan(`   Staging URL: ${environments.staging.url}`))

  console.log(chalk.gray('\n2. Creating pull request to main...'))
  console.log(chalk.yellow('💡 Manual step required:'))
  console.log(chalk.gray('   1. Create a PR from staging to main'))
  console.log(chalk.gray('   2. Review and approve the PR'))
  console.log(chalk.gray('   3. Merge the PR to trigger production deployment'))
  console.log(
    chalk.gray('   4. Production will be available at:'),
    chalk.cyan(environments.production.url)
  )
}

function showLogs() {
  console.log(chalk.blue('📄 Deployment Logs\n'))
  console.log(chalk.yellow('💡 To view deployment logs:'))
  console.log(chalk.gray('   1. Visit your Vercel dashboard'))
  console.log(chalk.gray('   2. Or use: npx vercel logs'))
  console.log(chalk.gray('   3. Or check GitHub Actions for build logs'))
}

function manageEnv() {
  console.log(chalk.blue('🔧 Environment Variables\n'))
  console.log(chalk.yellow('💡 To manage environment variables:'))
  console.log(chalk.gray('   1. Visit Vercel dashboard > Settings > Environment Variables'))
  console.log(chalk.gray('   2. Or use: npx vercel env'))
  console.log(chalk.gray('   3. Remember to redeploy after changes'))
}

// Main command router
switch (command) {
  case 'status':
    showStatus()
    break
  case 'preview':
    createPreview()
    break
  case 'promote':
    promoteToProduction()
    break
  case 'logs':
    showLogs()
    break
  case 'env':
    manageEnv()
    break
  case 'help':
  case '--help':
  case '-h':
  default:
    showHelp()
    break
}
