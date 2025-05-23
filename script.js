// Scroll animation for sections
const sections = document.querySelectorAll('.section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initial styles for sections
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
});

// Add scroll event listener
window.addEventListener('scroll', checkScroll);
checkScroll(); // Check initial state

// TODO 1: Create a function to toggle dark/light theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Update navigation and footer colors dynamically
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    if (body.classList.contains('dark-theme')) {
        nav.style.backgroundColor = '#222';
        footer.style.backgroundColor = '#222';
        document.documentElement.style.setProperty('--text-color', '#f4f4f9');
    } else {
        nav.style.backgroundColor = 'var(--nav-bg)';
        footer.style.backgroundColor = 'var(--footer-bg)';
        document.documentElement.style.setProperty('--text-color', '#333');
    }
}

// Add toggle theme functionality
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Theme';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '20px';
themeToggle.style.right = '20px';
themeToggle.style.padding = '10px';
themeToggle.style.background = 'var(--primary-color)';
themeToggle.style.color = '#fff';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '5px';
themeToggle.style.cursor = 'pointer';
themeToggle.addEventListener('click', toggleTheme);
document.body.appendChild(themeToggle);

// TODO 2: Create a function to validate the contact form
function validateForm(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        event.preventDefault();
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        alert('Please enter a valid email address!');
        event.preventDefault();
    }
}

// Add event listener to the form
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
}

// TODO 3: Add a scroll animation for sections
function animateSections() {
    sections.forEach(section => {
        section.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    });
}
animateSections();

// TODO 4: Create a typing effect for the header
function createTypingEffect() {
    const header = document.querySelector('header h1');
    if (!header) return;

    const text = "Mustapha Lawal Daura";
    header.textContent = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            header.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
}
createTypingEffect();
