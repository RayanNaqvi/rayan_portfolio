document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS
    emailjs.init("Fd0fUHVeMCFLHFwhc"); // Replace with your EmailJS user ID

    const welcomeMessage = new Typed('.welcome-message', {
        strings: ["Rayan Naqvi", "Welcome to my IT Portfolio", "Exploring the depths of technology", "Hacking my way through challenges"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-skill') + '%';
    });

    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs.send('service_kf3ntij', 'template_rzy6b1u', templateParams) //services and template id of emailjs
            .then(function(response) {
                alert('Message sent! Thank you for reaching out.');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again later.');
            });
    });

    // Scroll down functionality
    document.getElementById('scroll-down').addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    // Scroll up functionality
    document.getElementById('scroll-up').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});