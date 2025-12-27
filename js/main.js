// Auto-update year
document.getElementById('year').textContent = new Date().getFullYear();

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if(hamburger){
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });
}

// Contact form
const form = document.getElementById('contactForm');
if(form){
    const formMsg = document.getElementById('formMsg');
    form.addEventListener('submit', function(e){
        e.preventDefault();
        formMsg.textContent = "Thank you! Your message has been sent.";
        form.reset();
    });
}
