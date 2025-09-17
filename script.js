// BMI Calculator JavaScript
class BMICalculator {
    constructor() {
        this.form = document.getElementById('bmi-form');
        this.weightInput = document.getElementById('weight');
        this.heightInput = document.getElementById('height');
        this.inchesInput = document.getElementById('inches');
        this.weightUnit = document.getElementById('weight-unit');
        this.heightUnit = document.getElementById('height-unit');
        this.heightInchesGroup = document.getElementById('height-inches');
        this.resultDiv = document.getElementById('result');
        this.calculateBtn = this.form.querySelector('.calculate-btn');
        
        this.init();
    }
    
    init() {
        this.resetInputs();
        this.attachEventListeners();
        this.setupAnalytics();
        this.trackPageView();
    }
    
    attachEventListeners() {
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Height unit change
        this.heightUnit.addEventListener('change', () => this.toggleInchesInput());
        
        // Real-time validation
        this.weightInput.addEventListener('input', () => this.validateInputs());
        this.heightInput.addEventListener('input', () => this.validateInputs());
        this.inchesInput.addEventListener('input', () => this.validateInputs());
        
        // Prevent negative sign input
        [this.weightInput, this.heightInput, this.inchesInput].forEach(input => {
            input.addEventListener('keydown', (e) => this.preventNegativeInput(e));
            input.addEventListener('paste', (e) => this.handlePaste(e));
        });
        
        // Enter key support for quick calculation
        [this.weightInput, this.heightInput, this.inchesInput].forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleSubmit(e);
                }
            });
        });
    }
    
    toggleInchesInput() {
        const isFeetInches = this.heightUnit.value === 'ft';
        this.heightInchesGroup.style.display = isFeetInches ? 'flex' : 'none';
        
        if (isFeetInches) {
            this.heightInput.placeholder = 'Feet';
            this.heightInput.setAttribute('max', '10');
            this.heightInput.setAttribute('min', '1');
        } else {
            this.heightInput.placeholder = 'Height in cm';
            this.heightInput.removeAttribute('max');
            this.heightInput.setAttribute('min', '50');
        }
        
        this.validateInputs();
    }
    
    resetInputs() {
        // Reset all inputs to empty on page load/refresh
        this.weightInput.value = '';
        this.heightInput.value = '';
        this.inchesInput.value = '';
        
        // Clear any existing errors
        this.clearError();
        this.clearInputErrors();
        
        // Disable calculate button initially
        this.calculateBtn.disabled = true;
    }
    
    preventNegativeInput(e) {
        // Prevent minus sign (-) from being typed
        if (e.key === '-' || e.key === 'Minus') {
            e.preventDefault();
            this.showInstantError('Please enter positive numbers only');
            return false;
        }
        
        // Prevent multiple decimal points
        if (e.key === '.' && e.target.value.includes('.')) {
            e.preventDefault();
            return false;
        }
        
        // Allow only numbers, decimal point, backspace, delete, arrow keys, etc.
        const allowedKeys = [
            'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
            'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
            'Home', 'End', 'PageUp', 'PageDown'
        ];
        
        if (allowedKeys.includes(e.key)) {
            return true;
        }
        
        // Allow numbers and decimal point
        if (/^[0-9.]$/.test(e.key)) {
            return true;
        }
        
        // Prevent all other characters
        e.preventDefault();
        this.showInstantError('Please enter numbers only');
        return false;
    }
    
    handlePaste(e) {
        // Allow the paste event to complete first
        setTimeout(() => {
            const value = e.target.value;
            
            // Check if pasted content contains negative sign or invalid characters
            if (value.includes('-') || !/^[0-9.]*$/.test(value)) {
                e.target.value = value.replace(/[^0-9.]/g, '');
                this.showInstantError('Please enter positive numbers only');
            }
            
            // Validate the input after paste
            this.validateInputs();
        }, 0);
    }
    
    showInstantError(message) {
        // Show error message that disappears quickly
        const errorDiv = this.form.querySelector('.instant-error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        
        const instantError = document.createElement('div');
        instantError.className = 'instant-error-message';
        instantError.textContent = message;
        instantError.style.cssText = `
            color: #cc0000;
            background: #ffe6e6;
            padding: 0.5rem 1rem;
            border-radius: 6px;
            margin-top: 0.5rem;
            border: 1px solid #ffcccc;
            font-size: 0.875rem;
            animation: fadeIn 0.2s ease;
            position: absolute;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        `;
        
        // Position the error message
        const formRect = this.form.getBoundingClientRect();
        instantError.style.left = '0';
        instantError.style.top = '100%';
        instantError.style.width = '100%';
        
        this.form.style.position = 'relative';
        this.form.appendChild(instantError);
        
        // Remove error after 2 seconds
        setTimeout(() => {
            if (instantError.parentNode) {
                instantError.remove();
            }
        }, 2000);
    }
    
    validateInputs() {
        const weight = parseFloat(this.weightInput.value);
        const height = parseFloat(this.heightInput.value);
        const inches = this.heightUnit.value === 'ft' ? parseFloat(this.inchesInput.value) || 0 : 0;
        
        let isValid = true;
        let errorMessage = '';
        
        // Clear previous error styling
        this.clearInputErrors();
        
        // Weight validation
        if (!this.weightInput.value.trim() || isNaN(weight) || weight <= 0) {
            isValid = false;
            if (!this.weightInput.value.trim()) {
                this.showInputError(this.weightInput, 'Please enter your weight');
                errorMessage = 'Please enter your weight';
            } else {
                this.showInputError(this.weightInput, 'Weight must be a positive number');
                errorMessage = 'Weight must be a positive number';
            }
        } else if (weight > 1000) {
            isValid = false;
            this.showInputError(this.weightInput, 'Weight cannot exceed 1000 kg/lbs');
            errorMessage = 'Weight cannot exceed 1000 kg/lbs';
        }
        
        // Height validation
        if (this.heightUnit.value === 'cm') {
            if (!this.heightInput.value.trim() || isNaN(height) || height <= 0) {
                isValid = false;
                if (!this.heightInput.value.trim()) {
                    this.showInputError(this.heightInput, 'Please enter your height');
                    errorMessage = 'Please enter your height';
                } else {
                    this.showInputError(this.heightInput, 'Height must be a positive number');
                    errorMessage = 'Height must be a positive number';
                }
            } else if (height < 50) {
                isValid = false;
                this.showInputError(this.heightInput, 'Height must be at least 50 cm');
                errorMessage = 'Height must be at least 50 cm';
            } else if (height > 300) {
                isValid = false;
                this.showInputError(this.heightInput, 'Height cannot exceed 300 cm');
                errorMessage = 'Height cannot exceed 300 cm';
            }
        } else {
            if (!this.heightInput.value.trim() || isNaN(height) || height <= 0) {
                isValid = false;
                if (!this.heightInput.value.trim()) {
                    this.showInputError(this.heightInput, 'Please enter your height');
                    errorMessage = 'Please enter your height';
                } else {
                    this.showInputError(this.heightInput, 'Height must be a positive number');
                    errorMessage = 'Height must be a positive number';
                }
            } else if (height < 1 || height > 10) {
                isValid = false;
                this.showInputError(this.heightInput, 'Height must be between 1 and 10 feet');
                errorMessage = 'Height must be between 1 and 10 feet';
            }
            
            if (this.heightUnit.value === 'ft') {
                if (isNaN(inches) || inches < 0) {
                    isValid = false;
                    this.showInputError(this.inchesInput, 'Inches must be 0 or greater');
                    errorMessage = 'Inches must be 0 or greater';
                } else if (inches > 11) {
                    isValid = false;
                    this.showInputError(this.inchesInput, 'Inches cannot exceed 11');
                    errorMessage = 'Inches cannot exceed 11';
                }
            }
        }
        
        this.calculateBtn.disabled = !isValid;
        
        // Show error message if validation fails
        if (!isValid && errorMessage) {
            this.showError(errorMessage);
        } else {
            this.clearError();
        }
        
        return isValid;
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateInputs()) {
            this.showError('Please enter valid weight and height values.');
            return;
        }
        
        this.showLoading();
        
        // Simulate calculation delay for better UX
        setTimeout(() => {
            try {
                const result = this.calculateBMI();
                this.displayResult(result);
                this.trackCalculation(result);
            } catch (error) {
                this.showError('An error occurred during calculation. Please try again.');
                console.error('BMI Calculation Error:', error);
            }
        }, 500);
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
                color: '#0066cc',
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
                color: '#2d8630',
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
                color: '#cc7a00',
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
                color: '#cc0000',
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
        const bmiNumber = this.resultDiv.querySelector('.bmi-number');
        const bmiCategory = this.resultDiv.querySelector('.bmi-category');
        const bmiDescription = this.resultDiv.querySelector('.bmi-description');
        const healthRange = this.resultDiv.querySelector('.health-range');
        
        bmiNumber.textContent = bmi.toFixed(1);
        bmiCategory.textContent = details.label;
        bmiCategory.className = `bmi-category ${category}`;
        bmiDescription.textContent = details.description;
        healthRange.textContent = details.healthRange;
        
        // Show result with animation
        this.resultDiv.style.display = 'block';
        this.resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide loading state
        this.hideLoading();
        
        // Generate insights
        setTimeout(() => {
            this.showHealthInsights(result);
        }, 1000);
    }
    
    showHealthInsights(result) {
        const { category, details } = result;
        
        // Create insights element if it doesn't exist
        let insightsDiv = this.resultDiv.querySelector('.health-insights');
        if (!insightsDiv) {
            insightsDiv = document.createElement('div');
            insightsDiv.className = 'health-insights';
            this.resultDiv.querySelector('.result-content').appendChild(insightsDiv);
        }
        
        insightsDiv.innerHTML = `
            <h4>Health Tips for You</h4>
            <ul class="tips-list">
                ${details.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
            <div class="disclaimer">
                <small><strong>Disclaimer:</strong> BMI is a screening tool and doesn't diagnose body fatness or health. Consult healthcare professionals for personalized advice.</small>
            </div>
        `;
        
        // Add CSS for insights if not already present
        if (!document.querySelector('#insights-styles')) {
            const style = document.createElement('style');
            style.id = 'insights-styles';
            style.textContent = `
                .health-insights {
                    margin-top: 1.5rem;
                    padding: 1.5rem;
                    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                    border-radius: 12px;
                    border-left: 4px solid var(--primary-color);
                    animation: fadeIn 0.5s ease;
                }
                
                .health-insights h4 {
                    color: var(--text-primary);
                    margin-bottom: 1rem;
                    font-size: 1.1rem;
                }
                
                .tips-list {
                    list-style: none;
                    margin-bottom: 1rem;
                }
                
                .tips-list li {
                    padding: 0.5rem 0;
                    position: relative;
                    padding-left: 1.5rem;
                    color: var(--text-secondary);
                }
                
                .tips-list li::before {
                    content: '💡';
                    position: absolute;
                    left: 0;
                }
                
                .disclaimer {
                    padding-top: 1rem;
                    border-top: 1px solid var(--border-color);
                }
                
                .disclaimer small {
                    color: var(--text-light);
                    line-height: 1.4;
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    showLoading() {
        const originalText = this.calculateBtn.textContent;
        this.calculateBtn.innerHTML = '<span class="loading"></span> Calculating...';
        this.calculateBtn.disabled = true;
        
        // Store original text for restoration
        this.calculateBtn.dataset.originalText = originalText;
    }
    
    hideLoading() {
        const originalText = this.calculateBtn.dataset.originalText || 'Calculate BMI';
        this.calculateBtn.textContent = originalText;
        this.calculateBtn.disabled = false;
    }
    
    showError(message) {
        this.hideLoading();
        
        // Create or update error element
        let errorDiv = this.form.querySelector('.error-message');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            this.form.appendChild(errorDiv);
        }
        
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #cc0000;
            background: #ffe6e6;
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            border: 1px solid #ffcccc;
            animation: fadeIn 0.3s ease;
        `;
        
        // Remove error after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }
    
    clearError() {
        const errorDiv = this.form.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
    }
    
    showInputError(input, message) {
        // Remove existing error styling
        input.classList.remove('error');
        
        // Add error styling
        input.classList.add('error');
        input.style.borderColor = '#cc0000';
        input.style.backgroundColor = '#ffe6e6';
        
        // Add error message tooltip
        let tooltip = input.parentNode.querySelector('.input-error-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.className = 'input-error-tooltip';
            tooltip.style.cssText = `
                color: #cc0000;
                font-size: 0.875rem;
                margin-top: 0.25rem;
                animation: fadeIn 0.3s ease;
            `;
            input.parentNode.appendChild(tooltip);
        }
        tooltip.textContent = message;
    }
    
    clearInputErrors() {
        // Clear error styling from all inputs
        [this.weightInput, this.heightInput, this.inchesInput].forEach(input => {
            input.classList.remove('error');
            input.style.borderColor = '';
            input.style.backgroundColor = '';
            
            // Remove tooltips
            const tooltip = input.parentNode.querySelector('.input-error-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
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
        
        // Facebook Pixel tracking
        if (typeof fbq !== 'undefined') {
            fbq('track', 'BMI_Calculated', {
                bmi_category: result.category,
                bmi_value: result.bmi.toFixed(1)
            });
        }
        
        // Vercel Speed Insights tracking
        this.trackAnalytics('bmi_calculation', {
            bmi: result.bmi.toFixed(1),
            category: result.category,
            weight: result.weight,
            height: result.height,
            weight_unit: this.weightUnit.value,
            height_unit: this.heightUnit.value
        });
        
        // Console log for debugging
        console.log('BMI Calculation:', {
            bmi: result.bmi.toFixed(1),
            category: result.category,
            timestamp: new Date().toISOString()
        });
    }
    
    trackAnalytics(event, data) {
        // Send analytics data to our API endpoint
        if (typeof fetch !== 'undefined') {
            fetch('/api/analytics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    event: event,
                    data: data,
                    timestamp: new Date().toISOString(),
                    url: window.location.href,
                    referrer: document.referrer
                })
            }).catch(error => {
                console.log('Analytics tracking error:', error);
            });
        }
    }
    
    trackPageView() {
        // Track page view
        this.trackAnalytics('page_view', {
            page: window.location.pathname,
            title: document.title,
            referrer: document.referrer
        });
    }
    
    setupAnalytics() {
        // Page view tracking
        if (typeof gtag !== 'undefined') {
            gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'BMI Calculator',
                page_location: window.location.href
            });
        }
        
        // Handle AdSense errors gracefully
        this.setupAdSenseErrorHandling();
    }
    
    setupAdSenseErrorHandling() {
        // Wait for DOM to be fully loaded before initializing ads
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeAdSense();
            });
        } else {
            this.initializeAdSense();
        }
    }
    
    initializeAdSense() {
        // Wait a bit more to ensure containers are rendered
        setTimeout(() => {
            try {
                // Initialize all AdSense ads
                const adElements = document.querySelectorAll('.adsbygoogle');
                adElements.forEach(adElement => {
                    // Ensure the ad element has proper dimensions
                    const rect = adElement.getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) {
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    } else {
                        console.log('AdSense: Skipping ad with no dimensions');
                    }
                });
            } catch (error) {
                console.log('AdSense initialization error:', error.message);
            }
        }, 100);
    }
}

// Utility Functions
function addSmoothScrolling() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupLazyLoading() {
    // Lazy load AdSense ads for better performance
    const adContainers = document.querySelectorAll('.ad-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load ads when they come into view
                const adScript = entry.target.querySelector('script');
                if (adScript && !entry.target.dataset.loaded) {
                    entry.target.dataset.loaded = 'true';
                    // Trigger AdSense loading
                    if (typeof (adsbygoogle) !== 'undefined') {
                        try {
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        } catch (e) {
                            console.log('AdSense loading error:', e);
                        }
                    }
                }
            }
        });
    }, {
        rootMargin: '50px'
    });
    
    adContainers.forEach(container => {
        observer.observe(container);
    });
}

function setupFormPersistence() {
    // Save form data to localStorage
    const form = document.getElementById('bmi-form');
    const inputs = form.querySelectorAll('input, select');
    
    // Load saved data
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(`bmi_${input.id}`);
        if (savedValue && input.type !== 'submit') {
            input.value = savedValue;
        }
    });
    
    // Save data on change
    inputs.forEach(input => {
        input.addEventListener('change', () => {
            localStorage.setItem(`bmi_${input.id}`, input.value);
        });
    });
}

function setupKeyboardAccessibility() {
    // Enhanced keyboard navigation
    const calculatorCard = document.querySelector('.calculator-card');
    
    calculatorCard.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.tagName === 'BUTTON') {
            e.target.click();
        }
    });
    
    // Focus management
    const inputs = calculatorCard.querySelectorAll('input, select, button');
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                // Custom tab handling if needed
            }
        });
    });
}

function setupPerformanceOptimizations() {
    // Preload critical resources
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = 'styles.css';
    link.as = 'style';
    document.head.appendChild(link);
    
    // Service worker registration for caching
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
    
    // Critical CSS inlining detection
    const criticalCSS = document.querySelector('style[data-critical]');
    if (!criticalCSS) {
        console.log('Consider inlining critical CSS for better performance');
    }
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize BMI Calculator
    const calculator = new BMICalculator();
    
    // Setup additional features
    addSmoothScrolling();
    setupLazyLoading();
    setupFormPersistence();
    setupKeyboardAccessibility();
    setupPerformanceOptimizations();
    
    // Setup print functionality
    window.addEventListener('beforeprint', () => {
        document.body.classList.add('printing');
    });
    
    window.addEventListener('afterprint', () => {
        document.body.classList.remove('printing');
    });
    
    // Setup responsive behavior
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Handle responsive adjustments
            const sidebar = document.querySelector('.sidebar');
            const contentWrapper = document.querySelector('.content-wrapper');
            
            if (window.innerWidth <= 1024) {
                contentWrapper.style.gridTemplateColumns = '1fr';
            } else {
                contentWrapper.style.gridTemplateColumns = '1fr 300px';
            }
        }, 250);
    });
    
    console.log('BMI Calculator initialized successfully!');
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BMICalculator };
}
