// Ultra-Modern BMI Calculator JavaScript
class ModernBMICalculator {
    constructor() {
        this.form = document.getElementById('bmiForm');
        this.weightInput = document.getElementById('weight');
        this.heightInput = document.getElementById('height');
        this.inchesInput = document.getElementById('inches');
        this.weightUnit = document.getElementById('weightUnit');
        this.heightUnit = document.getElementById('heightUnit');
        this.inchesGroup = document.getElementById('inchesGroup');
        this.resultDiv = document.getElementById('result');
        this.themeToggle = document.getElementById('themeToggle');
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupThemeToggle();
        this.setupAnimations();
        this.setupAccessibility();
        this.loadTheme();
    }
    
    setupEventListeners() {
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Height unit change
        this.heightUnit.addEventListener('change', () => this.toggleInchesInput());
        
        // Real-time validation
        this.weightInput.addEventListener('input', () => this.validateInputs());
        this.heightInput.addEventListener('input', () => this.validateInputs());
        this.inchesInput.addEventListener('input', () => this.validateInputs());
        
        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Input focus effects
        const inputs = document.querySelectorAll('.form-input, .form-select');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('focused');
            });
        });
    }
    
    setupThemeToggle() {
        this.themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Add transition effect
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
        });
    }
    
    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }
    
    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        document.querySelectorAll('.info-card-modern').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }
    
    setupAccessibility() {
        // Keyboard navigation for custom elements
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });
        
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
        
        // Screen reader announcements
        this.announcer = document.createElement('div');
        this.announcer.setAttribute('aria-live', 'polite');
        this.announcer.setAttribute('aria-atomic', 'true');
        this.announcer.style.position = 'absolute';
        this.announcer.style.left = '-10000px';
        this.announcer.style.width = '1px';
        this.announcer.style.height = '1px';
        this.announcer.style.overflow = 'hidden';
        document.body.appendChild(this.announcer);
    }
    
    announce(message) {
        this.announcer.textContent = message;
    }
    
    toggleInchesInput() {
        const isFeetInches = this.heightUnit.value === 'ft';
        
        if (isFeetInches) {
            this.inchesGroup.style.display = 'block';
            this.inchesGroup.style.animation = 'slideInUp 0.3s ease-out';
            this.heightInput.placeholder = 'Feet';
            this.heightInput.setAttribute('max', '10');
            this.heightInput.setAttribute('min', '1');
        } else {
            this.inchesGroup.style.display = 'none';
            this.heightInput.placeholder = 'Height in cm';
            this.heightInput.removeAttribute('max');
            this.heightInput.setAttribute('min', '50');
        }
        
        this.validateInputs();
    }
    
    validateInputs() {
        const weight = parseFloat(this.weightInput.value);
        const height = parseFloat(this.heightInput.value);
        const inches = this.heightUnit.value === 'ft' ? parseFloat(this.inchesInput.value) || 0 : 0;
        
        let isValid = true;
        
        // Clear previous validation states
        this.clearValidationStates();
        
        // Weight validation
        if (!this.weightInput.value.trim() || isNaN(weight) || weight <= 0) {
            isValid = false;
            this.showValidationError(this.weightInput, 'Please enter a valid weight');
        } else if (weight > 1000) {
            isValid = false;
            this.showValidationError(this.weightInput, 'Weight cannot exceed 1000 kg/lbs');
        } else {
            this.showValidationSuccess(this.weightInput);
        }
        
        // Height validation
        if (this.heightUnit.value === 'cm') {
            if (!this.heightInput.value.trim() || isNaN(height) || height <= 0) {
                isValid = false;
                this.showValidationError(this.heightInput, 'Please enter a valid height');
            } else if (height < 50 || height > 300) {
                isValid = false;
                this.showValidationError(this.heightInput, 'Height must be between 50-300 cm');
            } else {
                this.showValidationSuccess(this.heightInput);
            }
        } else {
            if (!this.heightInput.value.trim() || isNaN(height) || height <= 0) {
                isValid = false;
                this.showValidationError(this.heightInput, 'Please enter valid feet');
            } else if (height < 1 || height > 10) {
                isValid = false;
                this.showValidationError(this.heightInput, 'Height must be between 1-10 feet');
            } else {
                this.showValidationSuccess(this.heightInput);
            }
            
            if (isNaN(inches) || inches < 0 || inches > 11) {
                isValid = false;
                this.showValidationError(this.inchesInput, 'Inches must be between 0-11');
            } else {
                this.showValidationSuccess(this.inchesInput);
            }
        }
        
        // Update submit button state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        submitBtn.disabled = !isValid;
        
        if (isValid) {
            submitBtn.classList.remove('loading');
        }
        
        return isValid;
    }
    
    showValidationError(input, message) {
        input.style.borderColor = 'var(--error-500)';
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', `${input.id}-error`);
        
        // Remove existing error message
        const existingError = input.parentElement.querySelector('.validation-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'validation-error';
        errorDiv.id = `${input.id}-error`;
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: var(--error-500);
            font-size: var(--font-size-xs);
            margin-top: var(--space-1);
            animation: fadeInUp 0.2s ease-out;
        `;
        
        input.parentElement.appendChild(errorDiv);
    }
    
    showValidationSuccess(input) {
        input.style.borderColor = 'var(--success-500)';
        input.setAttribute('aria-invalid', 'false');
        input.removeAttribute('aria-describedby');
        
        // Remove error message
        const existingError = input.parentElement.querySelector('.validation-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    clearValidationStates() {
        const inputs = [this.weightInput, this.heightInput, this.inchesInput];
        inputs.forEach(input => {
            input.style.borderColor = '';
            input.removeAttribute('aria-invalid');
            input.removeAttribute('aria-describedby');
            
            const errorDiv = input.parentElement.querySelector('.validation-error');
            if (errorDiv) {
                errorDiv.remove();
            }
        });
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateInputs()) {
            this.announce('Please correct the errors in the form');
            return;
        }
        
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="loading">
                <path d="M10 2V6M10 14V18M18 10H14M6 10H2M15.364 4.636L12.828 7.172M7.172 12.828L4.636 15.364M15.364 15.364L12.828 12.828M7.172 7.172L4.636 4.636"/>
            </svg>
            Calculating...
        `;
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Add loading animation to the button
        const loadingIcon = submitBtn.querySelector('.loading');
        if (loadingIcon) {
            loadingIcon.style.animation = 'spin 1s linear infinite';
        }
        
        // Simulate calculation delay for better UX
        await new Promise(resolve => setTimeout(resolve, 800));
        
        try {
            const result = this.calculateBMI();
            this.displayResult(result);
            this.trackCalculation(result);
            this.announce(`Your BMI is ${result.bmi.toFixed(1)}, which is ${result.category}`);
        } catch (error) {
            this.showError('An error occurred during calculation. Please try again.');
            console.error('BMI Calculation Error:', error);
        } finally {
            // Restore button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
    }
    
    calculateBMI() {
        let weight = parseFloat(this.weightInput.value);
        let height = parseFloat(this.heightInput.value);
        const weightUnit = this.weightUnit.value;
        const heightUnit = this.heightUnit.value;
        
        // Convert weight to kg if needed
        if (weightUnit === 'lbs') {
            weight = weight * 0.453592;
        }
        
        // Convert height to meters
        if (heightUnit === 'cm') {
            height = height / 100;
        } else {
            // Convert feet and inches to meters
            const inches = parseFloat(this.inchesInput.value) || 0;
            height = (height * 12 + inches) * 0.0254;
        }
        
        // Calculate BMI
        const bmi = weight / (height * height);
        
        // Determine category and details
        const category = this.getBMICategory(bmi);
        const details = this.getBMIDetails(category);
        
        return {
            bmi: bmi,
            category: category,
            details: details,
            weight: weight,
            height: height
        };
    }
    
    getBMICategory(bmi) {
        if (bmi < 18.5) return 'underweight';
        if (bmi < 25) return 'normal';
        if (bmi < 30) return 'overweight';
        return 'obese';
    }
    
    getBMIDetails(category) {
        const details = {
            underweight: {
                label: 'Underweight',
                description: 'Your BMI suggests you may be underweight. Consider consulting with a healthcare professional about healthy weight gain strategies.',
                healthRange: 'Healthy BMI range: 18.5 - 24.9',
                color: 'underweight',
                tips: [
                    'Eat nutrient-dense foods',
                    'Include healthy fats in your diet',
                    'Consider strength training',
                    'Consult a nutritionist'
                ]
            },
            normal: {
                label: 'Normal Weight',
                description: 'Congratulations! Your BMI is within the healthy weight range. Maintain your current lifestyle with regular exercise and balanced nutrition.',
                healthRange: 'You are in the healthy BMI range: 18.5 - 24.9',
                color: 'normal',
                tips: [
                    'Maintain current healthy habits',
                    'Stay physically active',
                    'Eat a balanced diet',
                    'Regular health check-ups'
                ]
            },
            overweight: {
                label: 'Overweight',
                description: 'Your BMI indicates you may be overweight. Consider adopting healthy lifestyle changes including regular exercise and balanced nutrition.',
                healthRange: 'Healthy BMI range: 18.5 - 24.9',
                color: 'overweight',
                tips: [
                    'Increase physical activity',
                    'Focus on portion control',
                    'Choose whole foods',
                    'Stay hydrated'
                ]
            },
            obese: {
                label: 'Obese',
                description: 'Your BMI suggests obesity. It\'s recommended to consult with healthcare professionals for personalized advice on healthy weight management.',
                healthRange: 'Healthy BMI range: 18.5 - 24.9',
                color: 'obese',
                tips: [
                    'Consult healthcare professionals',
                    'Start with gradual lifestyle changes',
                    'Focus on sustainable habits',
                    'Consider professional support'
                ]
            }
        };
        
        return details[category];
    }
    
    displayResult(result) {
        const { bmi, category, details } = result;
        
        // Update result content
        document.getElementById('bmiValue').textContent = bmi.toFixed(1);
        document.getElementById('bmiCategory').textContent = details.label;
        document.getElementById('bmiCategory').className = `result-category ${details.color}`;
        document.getElementById('bmiDescription').textContent = details.description;
        document.getElementById('bmiRange').textContent = details.healthRange;
        
        // Show result with animation
        this.resultDiv.style.display = 'block';
        this.resultDiv.style.animation = 'scaleIn 0.5s ease-out';
        
        // Scroll to result
        setTimeout(() => {
            this.resultDiv.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 300);
        
        // Add confetti effect for normal BMI
        if (category === 'normal') {
            this.showConfetti();
        }
    }
    
    showConfetti() {
        // Simple confetti effect
        const colors = ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}vw;
                top: -10px;
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
            `;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    showError(message) {
        // Create error notification
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-notification';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: var(--space-6);
            background: var(--error-500);
            color: white;
            padding: var(--space-4) var(--space-6);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            z-index: var(--z-toast);
            animation: slideInRight 0.3s ease-out;
        `;
        
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => errorDiv.remove(), 300);
        }, 5000);
    }
    
    trackCalculation(result) {
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'bmi_calculation', {
                'bmi_value': result.bmi.toFixed(1),
                'bmi_category': result.category,
                'weight_unit': this.weightUnit.value,
                'height_unit': this.heightUnit.value
            });
        }
        
        console.log('BMI Calculation:', {
            bmi: result.bmi.toFixed(1),
            category: result.category,
            timestamp: new Date().toISOString()
        });
    }
}

// Additional animations and utilities
function addCustomAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
        
        .keyboard-navigation *:focus-visible {
            outline: 2px solid var(--primary-500);
            outline-offset: 2px;
        }
        
        .form-input-group.focused {
            transform: scale(1.02);
            transition: transform var(--transition-fast);
        }
    `;
    document.head.appendChild(style);
}

// Smooth scroll polyfill for older browsers
function smoothScrollPolyfill() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
        document.head.appendChild(script);
    }
}

// Performance optimizations
function optimizePerformance() {
    // Lazy load non-critical resources
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the modern BMI calculator
    const calculator = new ModernBMICalculator();
    
    // Add custom animations
    addCustomAnimations();
    
    // Add smooth scroll polyfill
    smoothScrollPolyfill();
    
    // Optimize performance
    optimizePerformance();
    
    // Add service worker for PWA capabilities
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
    
    console.log('🚀 Ultra-Modern BMI Calculator initialized successfully!');
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ModernBMICalculator };
}