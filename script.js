// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Basic validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            alert('Por favor, ingresa un email válido.');
            return;
        }

        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');

        // Reset form
        this.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    section.animate-in {
        opacity: 1;
        transform: translateY(0);
    }

    .project-card, .skill-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .project-card.animate-in, .skill-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Animate project cards and skill items on scroll
const cardObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, index * 100);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-item').forEach(card => {
    cardObserver.observe(card);
});

// Typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Apply typing effect to hero subtitle
const heroSubtitle = document.querySelector('.hero h2');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    setTimeout(() => {
        typeWriter(heroSubtitle, originalText, 50);
    }, 1000);
}

// Mobile menu toggle (if needed in the future)
function createMobileMenu() {
    const nav = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');

    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.display = 'none';
    hamburger.style.background = 'none';
    hamburger.style.border = 'none';
    hamburger.style.fontSize = '1.5rem';
    hamburger.style.cursor = 'pointer';
    hamburger.style.color = '#2c3e50';

    nav.querySelector('.nav-container').appendChild(hamburger);

    // Toggle menu on mobile
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Show/hide hamburger based on screen size
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
            navMenu.classList.add('mobile-menu');
        } else {
            hamburger.style.display = 'none';
            navMenu.classList.remove('mobile-menu', 'active');
        }
    }

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Initialize mobile menu
createMobileMenu();

// Add some CSS for mobile menu
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
    .nav-menu.mobile-menu {
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        padding: 1rem 0;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        display: none;
    }

    .nav-menu.mobile-menu.active {
        display: flex;
    }

    .nav-menu.mobile-menu li {
        margin: 0.5rem 0;
        text-align: center;
    }
`;
document.head.appendChild(mobileStyle);