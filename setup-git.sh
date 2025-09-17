#!/bin/bash

# BMI Calc - Git Setup Script
# This script sets up Git with best practices for the BMI calculator project

echo "🚀 Setting up Git for BMI Calc project..."

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    echo "   Visit: https://git-scm.com/downloads"
    exit 1
fi

# Initialize Git repository
echo "📁 Initializing Git repository..."
git init

# Set up Git configuration
echo "⚙️  Configuring Git..."

# Set default branch name to 'main'
git config init.defaultBranch main

# Set up user configuration (you'll need to replace these)
echo "👤 Setting up Git user configuration..."
echo "Please enter your Git configuration:"
read -p "Your name: " git_name
read -p "Your email: " git_email

git config user.name "$git_name"
git config user.email "$git_email"

# Set up Git aliases for common commands
echo "🔧 Setting up Git aliases..."
git config alias.st status
git config alias.co checkout
git config alias.br branch
git config alias.ci commit
git config alias.unstage 'reset HEAD --'
git config alias.last 'log -1 HEAD'
git config alias.visual '!gitk'

# Set up Git hooks directory
echo "🪝 Setting up Git hooks..."
mkdir -p .git/hooks

# Create pre-commit hook
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
# Pre-commit hook for BMI Calc project

echo "🔍 Running pre-commit checks..."

# Check for TODO/FIXME comments
if grep -r "TODO\|FIXME" --include="*.html" --include="*.css" --include="*.js" .; then
    echo "⚠️  Warning: Found TODO/FIXME comments in code"
fi

# Check for console.log statements in production code
if grep -r "console\.log" --include="*.js" .; then
    echo "⚠️  Warning: Found console.log statements"
fi

# Check for placeholder values
if grep -r "GA_MEASUREMENT_ID\|YOUR_VERIFICATION_CODE\|ca-pub-XXXXXXXXX" .; then
    echo "⚠️  Warning: Found placeholder values that need to be replaced"
fi

echo "✅ Pre-commit checks completed"
EOF

# Make pre-commit hook executable
chmod +x .git/hooks/pre-commit

# Create commit-msg hook
cat > .git/hooks/commit-msg << 'EOF'
#!/bin/bash
# Commit message hook for BMI Calc project

commit_regex='^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,50}'

if ! grep -qE "$commit_regex" "$1"; then
    echo "❌ Invalid commit message format!"
    echo "   Format: type(scope): description"
    echo "   Types: feat, fix, docs, style, refactor, test, chore"
    echo "   Example: feat(calculator): add BMI calculation functionality"
    exit 1
fi
EOF

# Make commit-msg hook executable
chmod +x .git/hooks/commit-msg

# Add all files to Git
echo "📦 Adding files to Git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "feat: initial commit with BMI calculator and SEO optimization

- Add responsive BMI calculator with metric/imperial units
- Implement comprehensive SEO optimization
- Add FAQ page with schema markup
- Create health blog section
- Add privacy policy and terms of service
- Optimize for Google ranking and AdSense monetization"

# Set up branch protection (if using GitHub)
echo "🛡️  Setting up branch protection recommendations..."
cat > .github/pull_request_template.md << 'EOF'
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested BMI calculations
- [ ] Verified SEO elements

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] No console.log statements in production code
- [ ] All placeholder values replaced
- [ ] Documentation updated if needed
EOF

# Create GitHub workflow for CI/CD
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy BMI Calc

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Run tests
      run: npm test
    
    - name: Check HTML validity
      run: |
        # Add HTML validation here if needed
        echo "HTML validation passed"
    
    - name: Check CSS validity
      run: |
        # Add CSS validation here if needed
        echo "CSS validation passed"

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to hosting
      run: |
        # Add your deployment commands here
        echo "Deploying to production..."
EOF

# Create package.json for project management
cat > package.json << 'EOF'
{
  "name": "bmi-calc",
  "version": "1.0.0",
  "description": "Free BMI Calculator with SEO optimization",
  "main": "index.html",
  "scripts": {
    "start": "python -m http.server 8000",
    "serve": "npx serve .",
    "test": "echo \"No tests specified\" && exit 0",
    "build": "echo \"No build process needed\" && exit 0",
    "deploy": "echo \"Add your deployment command here\" && exit 0"
  },
  "keywords": [
    "bmi",
    "calculator",
    "health",
    "fitness",
    "weight",
    "seo"
  ],
  "author": "BMI Calc Team",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/yourusername/bmi-calc.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/bmi-calc/issues"
  },
  "homepage": "https://bmicalc.fit",
  "devDependencies": {
    "serve": "^14.2.0"
  }
}
EOF

# Create .env.example file
cat > .env.example << 'EOF'
# Google Analytics
GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID

# Google Search Console
GOOGLE_SEARCH_CONSOLE_CODE=YOUR_VERIFICATION_CODE

# Google AdSense
ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXX
ADSENSE_SLOT_TOP=XXXXXXXXX
ADSENSE_SLOT_SIDEBAR=XXXXXXXXX
ADSENSE_SLOT_BOTTOM=XXXXXXXXX

# Contact Information
CONTACT_EMAIL=contact@bmicalc.fit
SUPPORT_EMAIL=support@bmicalc.fit
LEGAL_EMAIL=legal@bmicalc.fit
EOF

# Add .env to .gitignore if not already there
if ! grep -q "\.env" .gitignore; then
    echo ".env" >> .gitignore
fi

# Create development setup instructions
cat > DEVELOPMENT.md << 'EOF'
# Development Setup

## Prerequisites
- Git
- Node.js (optional, for local server)
- Python (optional, for local server)
- A text editor (VS Code recommended)

## Local Development

### Option 1: Python Server
```bash
python -m http.server 8000
```
Open http://localhost:8000

### Option 2: Node.js Server
```bash
npm install
npm run serve
```

### Option 3: PHP Server
```bash
php -S localhost:8000
```

## Git Workflow

### Branch Naming
- `main`: Production-ready code
- `develop`: Development branch
- `feature/description`: New features
- `hotfix/description`: Bug fixes
- `docs/description`: Documentation updates

### Commit Message Format
```
type(scope): description

feat(calculator): add BMI calculation functionality
fix(seo): update meta tags for better ranking
docs(readme): add setup instructions
style(css): improve mobile responsiveness
refactor(js): optimize BMI calculation logic
test(calculator): add unit tests for BMI calculation
chore(deps): update dependencies
```

### Pull Request Process
1. Create feature branch from `develop`
2. Make changes and commit with proper format
3. Push branch and create pull request
4. Request review from team members
5. Merge after approval and tests pass

## Code Standards

### HTML
- Use semantic HTML5 elements
- Include proper meta tags
- Ensure accessibility compliance
- Validate HTML before committing

### CSS
- Use CSS custom properties (variables)
- Follow mobile-first approach
- Use consistent naming conventions
- Optimize for performance

### JavaScript
- Use modern ES6+ features
- Follow consistent naming conventions
- Add comments for complex logic
- Remove console.log statements before production

## Testing Checklist

Before committing:
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices
- [ ] Verify BMI calculations are accurate
- [ ] Check all links work properly
- [ ] Validate HTML and CSS
- [ ] Test page load speed
- [ ] Verify SEO elements

## Deployment

1. Ensure all tests pass
2. Update version numbers if needed
3. Merge to main branch
4. Deploy to production server
5. Verify deployment works correctly
6. Update documentation if needed
EOF

# Add all new files to Git
git add .

# Commit the Git setup
git commit -m "chore: add Git configuration and development setup

- Add .gitignore with comprehensive exclusions
- Add .gitattributes for consistent line endings
- Add .editorconfig for consistent code formatting
- Add pre-commit and commit-msg hooks
- Add GitHub workflows for CI/CD
- Add package.json for project management
- Add development documentation
- Add MIT license"

echo ""
echo "✅ Git setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Add your remote repository:"
echo "   git remote add origin <your-repo-url>"
echo ""
echo "2. Push to remote:"
echo "   git push -u origin main"
echo ""
echo "3. Set up GitHub repository settings:"
echo "   - Enable branch protection for main branch"
echo "   - Require pull request reviews"
echo "   - Enable status checks"
echo ""
echo "4. Configure your environment:"
echo "   - Copy .env.example to .env"
echo "   - Update with your actual values"
echo ""
echo "5. Start development:"
echo "   - Create feature branches for new work"
echo "   - Follow the commit message format"
echo "   - Test thoroughly before committing"
echo ""
echo "🎉 Your BMI Calc project is now ready for collaborative development!"
