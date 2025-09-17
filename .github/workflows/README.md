# GitHub Actions CI/CD Pipeline

This repository includes a comprehensive CI/CD pipeline to ensure code quality, security, and safe deployments.

## Workflows Overview

### 1. CI Pipeline (`ci.yml`)
**Triggers:** Push to main/develop branches, Pull Requests
**Purpose:** Main continuous integration pipeline

**Jobs:**
- **Lint Vanilla Project**: Validates HTML, CSS, and JavaScript files
- **Test Next.js Project**: Runs ESLint, TypeScript checks, formatting, and builds
- **Security Audit**: Scans for vulnerabilities in dependencies
- **Performance Check**: Analyzes bundle sizes and asset optimization
- **Integration Test**: Tests both vanilla and Next.js applications
- **Deploy Preview**: Creates preview builds for pull requests

### 2. Security Scan (`security.yml`)
**Triggers:** Push to main/develop, Pull Requests, Daily schedule (2 AM UTC)
**Purpose:** Comprehensive security analysis

**Jobs:**
- **CodeQL Analysis**: Static code analysis for security vulnerabilities
- **Dependency Scan**: Audits npm packages for known vulnerabilities
- **Secret Scan**: Detects hardcoded secrets and credentials
- **License Check**: Ensures license compliance
- **Container Security**: Scans Docker images (if applicable)
- **Security Headers**: Validates HTTP security headers
- **Security Report**: Generates comprehensive security summary

### 3. Deploy to Production (`deploy.yml`)
**Triggers:** Push to main branch, Manual dispatch
**Purpose:** Production deployment pipeline

**Jobs:**
- **Pre-deployment Checks**: Final validation before deployment
- **Deploy Vanilla Project**: Deploys HTML/JS static files
- **Deploy Next.js Application**: Builds and deploys Next.js app
- **Post-deployment Verification**: Validates deployment success
- **Notify Deployment Status**: Sends deployment notifications

### 4. Pull Request Validation (`pr-validation.yml`)
**Triggers:** Pull Request events (opened, synchronized, reopened)
**Purpose:** Comprehensive PR validation

**Jobs:**
- **Validate Changes**: Analyzes changed files for breaking changes
- **Code Quality**: Checks formatting, linting, and code standards
- **Build Validation**: Ensures both projects build successfully
- **Security Check**: Scans PR for security issues
- **Performance Check**: Analyzes bundle sizes and performance
- **Accessibility Check**: Validates accessibility compliance
- **PR Report**: Generates detailed validation report

## Features

### ✅ Code Quality
- ESLint and TypeScript type checking
- Code formatting validation with Prettier
- Console statement detection
- TODO/FIXME comment tracking

### 🔒 Security
- Dependency vulnerability scanning
- Secret detection and prevention
- CodeQL static analysis
- License compliance checking
- Security headers validation

### 🚀 Performance
- Bundle size analysis
- Large asset detection
- Build optimization validation
- Performance monitoring

### ♿ Accessibility
- Alt text validation for images
- Heading structure checks
- Form label verification
- Basic accessibility compliance

### 🧪 Testing
- HTML structure validation
- CSS syntax checking
- JavaScript syntax validation
- Integration testing
- Build verification

## Configuration

### Environment Variables
The workflows use the following environment variables:
- `NODE_VERSION`: Set to '18' for consistent Node.js version
- `PYTHON_VERSION`: Set to '3.11' for Python-based tools

### Secrets Required
For full functionality, configure these secrets in your repository:
- `VERCEL_TOKEN`: For Vercel deployment (if using Vercel)
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions

### Customization

#### Adding New Checks
1. Create a new job in the appropriate workflow file
2. Add the necessary steps for your check
3. Update the reporting jobs to include your new check

#### Modifying Triggers
Edit the `on:` section in each workflow file to change when workflows run:
```yaml
on:
  push:
    branches: [ main, develop, feature/* ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM UTC
```

#### Adding Deployment Targets
To add new deployment targets (e.g., AWS, Netlify):
1. Add new jobs in `deploy.yml`
2. Configure the appropriate deployment actions
3. Update the notification jobs

## Monitoring and Alerts

### Success Notifications
- PR validation reports are automatically posted as comments
- Deployment status is logged and can be configured for notifications
- Security reports are generated and uploaded as artifacts

### Failure Handling
- Failed builds block PR merges
- Security issues are flagged and reported
- Performance regressions are detected and reported

## Best Practices

### For Developers
1. **Always run local checks** before pushing:
   ```bash
   # For Next.js project
   cd bmi-calc-nextjs
   npm run lint
   npm run type-check
   npm run format:check
   npm run build
   ```

2. **Review PR validation reports** before requesting reviews

3. **Address security warnings** immediately

4. **Keep dependencies updated** to avoid vulnerabilities

### For Maintainers
1. **Monitor security reports** regularly
2. **Review failed builds** and help developers fix issues
3. **Update workflow configurations** as needed
4. **Keep GitHub Actions up to date**

## Troubleshooting

### Common Issues

#### Build Failures
- Check TypeScript errors: `npm run type-check`
- Verify ESLint issues: `npm run lint`
- Ensure all dependencies are installed: `npm ci`

#### Security Warnings
- Update vulnerable dependencies: `npm audit fix`
- Review and remove hardcoded secrets
- Check license compatibility

#### Performance Issues
- Optimize large images
- Review bundle sizes
- Check for unnecessary dependencies

### Getting Help
1. Check the workflow logs in the Actions tab
2. Review the generated reports
3. Consult the troubleshooting section in individual workflow files

## Contributing

When modifying the CI/CD pipeline:
1. Test changes in a feature branch first
2. Update this README if adding new features
3. Ensure all existing checks still pass
4. Consider backward compatibility

## License

This CI/CD configuration is part of the BMI Calculator project and follows the same MIT license.
