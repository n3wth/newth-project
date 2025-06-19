# 🔒 Security Guide

This document outlines security best practices for the Widget Template.

## 📋 Secret Management

### ✅ DO: GitHub Repository Secrets

Use GitHub's built-in secret management for CI/CD:

1. Go to your repo → Settings → Secrets and variables → Actions
2. Add secrets with these exact names:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
3. Reference them in workflows: `${{ secrets.VERCEL_TOKEN }}`

### ✅ DO: Local Environment Variables

For local development, create `.env.local` (never commit this file):

```bash
# .env.local (this file is gitignored)
VERCEL_TOKEN=your_actual_token
VITE_PUBLIC_API_URL=https://api.example.com
```

### ❌ DON'T: Commit Secrets

**NEVER commit these to your repository:**

- API keys, tokens, passwords
- Database connection strings
- Private keys or certificates
- `.env` files with real values
- Configuration files with hardcoded secrets

### ❌ DON'T: Expose Secrets in Client Code

Client-side code is public. Only use `VITE_PUBLIC_*` variables for non-sensitive data:

```typescript
// ❌ BAD - exposes secret to client
const apiKey = process.env.VITE_SECRET_API_KEY

// ✅ GOOD - public data only
const publicApiUrl = process.env.VITE_PUBLIC_API_URL
```

## 🛡️ Security Checklist

### Repository Security

- [ ] All secrets are in GitHub repository secrets (not code)
- [ ] `.gitignore` excludes `.env*` files
- [ ] No hardcoded credentials in source code
- [ ] Branch protection rules are enabled
- [ ] Required reviews for production deployments

### Deployment Security

- [ ] Staging and production environments are isolated
- [ ] Environment-specific configurations
- [ ] Secure headers in production builds
- [ ] HTTPS enforced for all deployments

### Code Security

- [ ] Dependencies are regularly updated (`npm audit`)
- [ ] No eval() or dangerous dynamic code execution
- [ ] Input validation for all user data
- [ ] CSP headers configured if needed

## 🚨 If Secrets Are Exposed

If secrets are accidentally committed:

1. **Immediate Actions:**

   ```bash
   # Remove the commit (if not pushed yet)
   git reset --hard HEAD~1

   # Or remove from history (if already pushed)
   git filter-branch --force --index-filter \
   'git rm --cached --ignore-unmatch path/to/secret/file' \
   --prune-empty --tag-name-filter cat -- --all
   ```

2. **Revoke Compromised Secrets:**

   - Regenerate Vercel tokens
   - Rotate any exposed API keys
   - Update GitHub repository secrets

3. **Prevention:**
   - Review `.gitignore` configuration
   - Set up pre-commit hooks to scan for secrets
   - Train team members on security practices

## 🔧 Security Tools

### Pre-commit Secret Scanning

```bash
# Install pre-commit hooks
npm install --save-dev @commitlint/cli @commitlint/config-conventional

# Add to package.json scripts
"prepare": "husky install",
"pre-commit": "lint-staged && git-secrets --pre_commit_hook -- \"$@\""
```

### Environment Variable Validation

```typescript
// src/utils/env.ts
function requireEnv(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Required environment variable ${key} is not set`)
  }
  return value
}

// Usage
const apiKey = requireEnv('API_KEY')
```

## 📞 Reporting Security Issues

If you find a security vulnerability:

1. **Do NOT** create a public GitHub issue
2. Email the repository maintainer directly
3. Include steps to reproduce the issue
4. Wait for confirmation before public disclosure

## 📚 Additional Resources

- [GitHub Secret Scanning](https://docs.github.com/en/code-security/secret-scanning)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [OWASP Security Guidelines](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

---

**Remember: Security is everyone's responsibility! 🛡️**
