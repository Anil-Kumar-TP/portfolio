document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const feedbackMessage = document.getElementById('feedbackMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        submitBtn.disabled = true;
        form.reset();

        feedbackMessage.textContent = 'Thank you for your message. We will get back to you shortly!';
        feedbackMessage.style.color = 'green'; 
        feedbackMessage.style.marginTop = '15px'; 

        
        setTimeout(() => {
            submitBtn.disabled = false;
            feedbackMessage.textContent = ''; 
        }, 5000);
    });
});
