document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        submitBtn.disabled = true; 
        form.reset();
        alert('Thank you for your message. We will get back to you shortly!');
    });
});


