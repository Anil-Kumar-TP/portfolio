document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const formGroups = form.querySelectorAll('.form-group');

    // Function to remove error message when user starts typing
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        input.addEventListener('input', function() {
            const error = group.querySelector('.error-message');
            if (error) {
                group.removeChild(error);
            }
        });
    });

    // Form submission event listener
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let valid = true;
        feedbackMessage.textContent = '';
        feedbackMessage.style.color = 'red';

        // Remove existing error messages before re-validating the form
        formGroups.forEach(group => {
            const existingError = group.querySelector('.error-message');
            if (existingError) {
                group.removeChild(existingError);
            }
        });

        // Validate each form input field
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            const error = document.createElement('p');
            error.classList.add('error-message');
            if (!input.value.trim()) {
                valid = false;
                error.textContent = 'This field is required';
                group.appendChild(error);
            }
        });

        if (valid) {
            submitBtn.disabled = true;
            form.reset();
            feedbackMessage.textContent = 'Thank you for your message. We will get back to you shortly!';
            feedbackMessage.style.color = 'green';
            feedbackMessage.style.marginTop = '15px';

            setTimeout(() => {
                submitBtn.disabled = false;
                feedbackMessage.textContent = '';
            }, 5000);
        }
    });
});
