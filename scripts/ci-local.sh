#!/bin/bash

# Local CI Script
# This script runs the same checks locally that the GitHub Actions CI pipeline runs

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js 18 or later."
        exit 1
    fi
    
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm."
        exit 1
    fi
    
    # Check Node.js version
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 18 ]; then
        print_warning "Node.js version $NODE_VERSION detected. Recommended version is 18 or later."
    fi
    
    print_success "Prerequisites check passed"
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    
    # Install root dependencies
    if [ -f "package.json" ]; then
        print_status "Installing root dependencies..."
        npm install
    fi
    
    # Install Next.js dependencies
    if [ -d "bmi-calc-nextjs" ] && [ -f "bmi-calc-nextjs/package.json" ]; then
        print_status "Installing Next.js dependencies..."
        cd bmi-calc-nextjs
        npm ci
        cd ..
    fi
    
    print_success "Dependencies installed"
}

# Validate vanilla HTML/JS project
validate_vanilla() {
    print_status "Validating vanilla HTML/JS project..."
    
    # Validate HTML files
    print_status "Validating HTML files..."
    for file in *.html; do
        if [ -f "$file" ]; then
            print_status "Checking $file"
            if ! grep -q "<!DOCTYPE html>" "$file"; then
                print_warning "$file missing DOCTYPE declaration"
            fi
            if ! grep -q "<html" "$file"; then
                print_error "$file missing html tag"
                exit 1
            fi
            if ! grep -q "</html>" "$file"; then
                print_error "$file missing closing html tag"
                exit 1
            fi
        fi
    done
    print_success "HTML validation passed"
    
    # Validate CSS
    print_status "Validating CSS files..."
    if [ -f "styles.css" ]; then
        if ! grep -q "{" styles.css || ! grep -q "}" styles.css; then
            print_error "CSS file appears to be malformed"
            exit 1
        fi
        print_success "CSS validation passed"
    fi
    
    # Validate JavaScript
    print_status "Validating JavaScript files..."
    if [ -f "script.js" ]; then
        node -c script.js
        print_success "JavaScript syntax validation passed"
    fi
    
    # Check for console statements
    print_status "Checking for console statements..."
    if grep -q "console\." script.js 2>/dev/null; then
        print_warning "Console statements found - consider removing for production"
    fi
    
    print_success "Vanilla project validation completed"
}

# Validate Next.js project
validate_nextjs() {
    if [ ! -d "bmi-calc-nextjs" ]; then
        print_warning "Next.js project not found, skipping..."
        return
    fi
    
    print_status "Validating Next.js project..."
    cd bmi-calc-nextjs
    
    # Run ESLint
    print_status "Running ESLint..."
    npm run lint
    
    # Run TypeScript type check
    print_status "Running TypeScript type check..."
    npm run type-check
    
    # Check code formatting
    print_status "Checking code formatting..."
    npm run format:check
    
    # Build the application
    print_status "Building Next.js application..."
    npm run build
    
    # Test the build
    print_status "Testing build..."
    if [ -d ".next" ]; then
        print_success "Build successful - .next directory created"
    else
        print_error "Build failed - .next directory not found"
        exit 1
    fi
    
    cd ..
    print_success "Next.js project validation completed"
}

# Security checks
security_checks() {
    print_status "Running security checks..."
    
    # Audit dependencies
    print_status "Auditing root dependencies..."
    npm audit --audit-level=moderate || print_warning "Vulnerabilities found in root dependencies"
    
    if [ -d "bmi-calc-nextjs" ]; then
        print_status "Auditing Next.js dependencies..."
        cd bmi-calc-nextjs
        npm audit --audit-level=moderate || print_warning "Vulnerabilities found in Next.js dependencies"
        cd ..
    fi
    
    # Check for secrets
    print_status "Checking for potential secrets..."
    if grep -r -i "password\|secret\|key\|token" . --exclude-dir=node_modules --exclude-dir=.git --exclude="*.md" | grep -v "// " | grep -v "console.log" | grep -v "password.*input"; then
        print_warning "Potential secrets found in code"
    else
        print_success "No secrets found"
    fi
    
    print_success "Security checks completed"
}

# Performance checks
performance_checks() {
    print_status "Running performance checks..."
    
    if [ -d "bmi-calc-nextjs/.next" ]; then
        print_status "Checking bundle sizes..."
        if [ -d "bmi-calc-nextjs/.next/static/chunks" ]; then
            echo "Bundle sizes:"
            find bmi-calc-nextjs/.next/static/chunks -name "*.js" -exec ls -lh {} \; | sort -k5 -hr | head -10
        fi
    fi
    
    # Check for large images
    print_status "Checking for large images..."
    large_images=$(find . -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" -o -name "*.svg" | xargs ls -lh 2>/dev/null | awk '$5 > "1M" {print $0}' || true)
    if [ -n "$large_images" ]; then
        print_warning "Large images found:"
        echo "$large_images"
    else
        print_success "No large images found"
    fi
    
    print_success "Performance checks completed"
}

# Integration test
integration_test() {
    print_status "Running integration tests..."
    
    # Test vanilla HTML files
    print_status "Testing vanilla HTML files..."
    if command_exists python3; then
        python3 -m http.server 8000 &
        SERVER_PID=$!
        sleep 5
        
        if curl -f http://localhost:8000 >/dev/null 2>&1; then
            print_success "Vanilla application accessible"
        else
            print_error "Vanilla application not accessible"
            kill $SERVER_PID 2>/dev/null || true
            exit 1
        fi
        
        kill $SERVER_PID 2>/dev/null || true
    else
        print_warning "Python3 not available, skipping vanilla integration test"
    fi
    
    # Test Next.js application
    if [ -d "bmi-calc-nextjs" ]; then
        print_status "Testing Next.js application..."
        cd bmi-calc-nextjs
        npm start &
        NEXTJS_PID=$!
        sleep 10
        
        if curl -f http://localhost:3000 >/dev/null 2>&1; then
            print_success "Next.js application accessible"
        else
            print_error "Next.js application not accessible"
            kill $NEXTJS_PID 2>/dev/null || true
            exit 1
        fi
        
        kill $NEXTJS_PID 2>/dev/null || true
        cd ..
    fi
    
    print_success "Integration tests completed"
}

# Generate report
generate_report() {
    print_status "Generating local CI report..."
    
    REPORT_FILE="ci-local-report.md"
    
    cat > "$REPORT_FILE" << EOF
# Local CI Report

Generated on: $(date)
Node.js version: $(node --version)
npm version: $(npm --version)

## Checks Performed

- ✅ Prerequisites check
- ✅ Dependencies installation
- ✅ Vanilla project validation
- ✅ Next.js project validation
- ✅ Security checks
- ✅ Performance checks
- ✅ Integration tests

## Summary

All local CI checks have been completed successfully!

## Next Steps

1. If all checks passed, you can safely push your changes
2. If any warnings appeared, consider addressing them before pushing
3. If any errors occurred, fix them before pushing

## Running Individual Checks

You can run individual checks by calling specific functions:

\`\`\`bash
# Validate vanilla project only
validate_vanilla

# Validate Next.js project only
validate_nextjs

# Run security checks only
security_checks

# Run performance checks only
performance_checks
\`\`\`
EOF
    
    print_success "Report generated: $REPORT_FILE"
}

# Main execution
main() {
    echo "🚀 Starting Local CI Pipeline"
    echo "=============================="
    
    check_prerequisites
    install_dependencies
    validate_vanilla
    validate_nextjs
    security_checks
    performance_checks
    integration_test
    generate_report
    
    echo ""
    echo "🎉 Local CI Pipeline Completed Successfully!"
    echo "All checks passed. You can safely push your changes."
}

# Handle script arguments
case "${1:-}" in
    --help|-h)
        echo "Usage: $0 [options]"
        echo ""
        echo "Options:"
        echo "  --help, -h     Show this help message"
        echo "  --vanilla      Run only vanilla project validation"
        echo "  --nextjs       Run only Next.js project validation"
        echo "  --security     Run only security checks"
        echo "  --performance  Run only performance checks"
        echo "  --integration  Run only integration tests"
        echo ""
        echo "Examples:"
        echo "  $0                    # Run all checks"
        echo "  $0 --vanilla         # Run only vanilla validation"
        echo "  $0 --security        # Run only security checks"
        exit 0
        ;;
    --vanilla)
        check_prerequisites
        install_dependencies
        validate_vanilla
        ;;
    --nextjs)
        check_prerequisites
        install_dependencies
        validate_nextjs
        ;;
    --security)
        check_prerequisites
        install_dependencies
        security_checks
        ;;
    --performance)
        check_prerequisites
        install_dependencies
        performance_checks
        ;;
    --integration)
        check_prerequisites
        install_dependencies
        integration_test
        ;;
    "")
        main
        ;;
    *)
        print_error "Unknown option: $1"
        echo "Use --help for usage information"
        exit 1
        ;;
esac
