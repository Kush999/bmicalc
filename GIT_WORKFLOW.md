# Git Workflow Guide for BMI Calc

## 🎯 Overview

This guide outlines the Git workflow and best practices for the BMI Calc project to ensure clean, organized, and collaborative development.

## 📋 Branch Strategy

### Main Branches

#### `main` Branch
- **Purpose**: Production-ready code
- **Protection**: Requires pull request reviews
- **Deployment**: Automatically deploys to production
- **Rules**: 
  - No direct commits allowed
  - Must pass all tests
  - Requires code review approval

#### `develop` Branch
- **Purpose**: Integration branch for features
- **Protection**: Requires pull request reviews
- **Deployment**: Deploys to staging environment
- **Rules**:
  - No direct commits allowed
  - Must pass all tests
  - Requires code review approval

### Feature Branches

#### Naming Convention
```
feature/description-of-feature
hotfix/description-of-bug
docs/description-of-docs
style/description-of-styling
refactor/description-of-refactoring
test/description-of-tests
```

#### Examples
```
feature/bmi-calculator
feature/seo-optimization
hotfix/mobile-responsive-bug
docs/api-documentation
style/color-scheme-update
refactor/javascript-modules
test/unit-tests
```

## 🔄 Workflow Process

### 1. Starting New Work

```bash
# Ensure you're on develop branch
git checkout develop
git pull origin develop

# Create new feature branch
git checkout -b feature/your-feature-name

# Start working on your feature
# ... make changes ...
```

### 2. Committing Changes

#### Commit Message Format
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

#### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

#### Scopes
- **calculator**: BMI calculator functionality
- **seo**: SEO optimization
- **ui**: User interface
- **mobile**: Mobile responsiveness
- **performance**: Performance optimization
- **security**: Security improvements
- **deps**: Dependencies

### 3. Pushing Changes

```bash
# Add changes
git add .

# Commit with proper message
git commit -m "feat(calculator): add BMI calculation functionality"

# Push to remote
git push origin feature/your-feature-name
```

### 4. Creating Pull Request

1. Go to GitHub repository
2. Click "New Pull Request"
3. Select your feature branch
4. Fill out PR template
5. Request review from team members
6. Wait for approval and tests to pass

### 5. Merging

```bash
# After PR is approved and merged
git checkout develop
git pull origin develop
git branch -d feature/your-feature-name
```

## 🛡️ Branch Protection Rules

### Main Branch Protection
- Require pull request reviews (2 reviewers)
- Require status checks to pass
- Require branches to be up to date
- Restrict pushes to matching branches
- Allow force pushes: No
- Allow deletions: No

### Develop Branch Protection
- Require pull request reviews (1 reviewer)
- Require status checks to pass
- Require branches to be up to date
- Restrict pushes to matching branches
- Allow force pushes: No
- Allow deletions: No

## 🔍 Code Review Process

### For Reviewers
1. **Check the PR description**
   - Is the purpose clear?
   - Are there any breaking changes?
   - Is testing information provided?

2. **Review the code**
   - Does it follow project conventions?
   - Is the code readable and maintainable?
   - Are there any security concerns?
   - Is performance considered?

3. **Test the changes**
   - Does it work as expected?
   - Are there any edge cases?
   - Is the UI responsive?

4. **Provide feedback**
   - Be constructive and specific
   - Suggest improvements
   - Approve or request changes

### For Authors
1. **Prepare your PR**
   - Write clear description
   - Add screenshots if UI changes
   - Reference related issues
   - Ensure all tests pass

2. **Respond to feedback**
   - Address all comments
   - Ask questions if unclear
   - Update code as needed
   - Re-request review when ready

## 🚨 Emergency Hotfix Process

### For Critical Bugs
```bash
# Create hotfix branch from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug-fix

# Make minimal fix
# ... fix the bug ...

# Commit and push
git add .
git commit -m "fix(critical): resolve critical security vulnerability"
git push origin hotfix/critical-bug-fix

# Create PR to main
# After approval and merge, also merge to develop
```

## 📊 Git Hooks

### Pre-commit Hook
Automatically runs before each commit:
- Checks for TODO/FIXME comments
- Warns about console.log statements
- Warns about placeholder values
- Validates file formats

### Commit-msg Hook
Validates commit message format:
- Ensures proper type and scope
- Checks message length
- Validates format

## 🔧 Git Configuration

### Global Configuration
```bash
# Set up your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set up default branch
git config --global init.defaultBranch main

# Set up useful aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
```

### Project-specific Configuration
```bash
# Set up project-specific settings
git config user.name "BMI Calc Developer"
git config user.email "dev@bmicalc.fit"
```

## 📝 Best Practices

### Do's
- ✅ Use descriptive commit messages
- ✅ Keep commits small and focused
- ✅ Test before committing
- ✅ Review your own code before pushing
- ✅ Use meaningful branch names
- ✅ Keep feature branches up to date
- ✅ Delete merged branches
- ✅ Use pull requests for all changes

### Don'ts
- ❌ Commit directly to main or develop
- ❌ Commit broken code
- ❌ Use vague commit messages
- ❌ Mix unrelated changes in one commit
- ❌ Force push to shared branches
- ❌ Ignore code review feedback
- ❌ Leave branches unmerged for too long

## 🚀 Deployment Process

### Automatic Deployment
- **Main branch**: Deploys to production automatically
- **Develop branch**: Deploys to staging automatically
- **Feature branches**: Can be deployed to preview environments

### Manual Deployment
```bash
# Deploy to production
git checkout main
git pull origin main
# Run deployment script
npm run deploy:production

# Deploy to staging
git checkout develop
git pull origin develop
# Run deployment script
npm run deploy:staging
```

## 🔍 Troubleshooting

### Common Issues

#### Merge Conflicts
```bash
# Resolve conflicts
git status
# Edit conflicted files
git add .
git commit -m "resolve merge conflicts"
```

#### Accidentally Committed to Wrong Branch
```bash
# Create new branch from current state
git checkout -b feature/correct-branch
# Reset original branch
git checkout original-branch
git reset --hard HEAD~1
```

#### Lost Commits
```bash
# Find lost commits
git reflog
# Recover commit
git checkout <commit-hash>
git checkout -b recovery-branch
```

## 📚 Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)

---

**Remember: Good Git practices lead to better code quality and smoother collaboration! 🎉**
