document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const feedbackMessage = document.getElementById('feedbackMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formGroups = form.querySelectorAll('.form-group');
        let valid = true;


        feedbackMessage.textContent = '';
        feedbackMessage.style.color = 'red';

        
        formGroups.forEach(group => {
            const existingError = group.querySelector('.error-message');
            if (existingError) {
                group.removeChild(existingError);
            }
        });

    
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
