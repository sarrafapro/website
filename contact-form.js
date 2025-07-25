// Static contact form handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-button');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                business: formData.get('business'),
                city: formData.get('city'),
                message: formData.get('message')
            };
            
            // Validate required fields
            if (!data.name || !data.email || !data.phone) {
                showMessage('Please fill in all required fields (Name, Email, Phone)', 'error');
                return;
            }
            
            // Show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            // For static deployment, you can:
            // 1. Use Formspree: Replace with your Formspree endpoint
            // 2. Use EmailJS: Replace with EmailJS configuration
            // 3. Use Netlify Forms: Add netlify attribute to form
            
            // Example with Formspree (replace YOUR_FORM_ID)
            fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    showMessage('Thank you for your interest! Our team will contact you soon within 24 hours.', 'success');
                    contactForm.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showMessage('Unable to send your message. Please try again or call us directly at +91 3800401110.', 'error');
            })
            .finally(() => {
                submitButton.disabled = false;
                submitButton.textContent = 'Request Demo';
            });
        });
    }
});

function showMessage(message, type) {
    // Create and show a simple toast message
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    // Style the toast
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 9999;
        max-width: 400px;
        word-wrap: break-word;
        ${type === 'success' ? 'background-color: #10b981;' : 'background-color: #ef4444;'}
    `;
    
    document.body.appendChild(toast);
    
    // Remove toast after 5 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 5000);
}