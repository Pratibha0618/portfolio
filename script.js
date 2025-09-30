// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// Scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // Active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // If want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

// Typing animation simulation
const typingElement = document.querySelector('.typing');
if (typingElement) {
    const roles = ['Frontend Developer', 'Web Designer', 'UI/UX Designer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeRole() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
        
        setTimeout(typeRole, typeSpeed);
    }

    // Start typing animation
    typeRole();
}



// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill in all fields.');
            return;
        }
    });
}

// Dynamic footer year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
    const navbar = document.querySelector('.navbar');
    
    // Navbar scroll effect
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Element animations
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
    

}

// Smooth scroll for navigation links
function initSmoothScroll() {
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

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('year').textContent = getCurrentYear();
    initSmoothScroll();
    handleScrollAnimations();
});

// Handle scroll events
window.addEventListener('scroll', handleScrollAnimations);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});