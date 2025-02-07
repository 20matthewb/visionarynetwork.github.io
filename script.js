// Add Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .stat-item').forEach((el) => {
    observer.observe(el);
});

// Sticky Navigation
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const body = document.body;

// Check local storage for theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
    themeLabel.textContent = 'Light Mode';
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeLabel.textContent = 'Light Mode';
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeLabel.textContent = 'Dark Mode';
    }
});

// Back to top button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

document.getElementById("backToTop").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Form submission
document.getElementById("subscribeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for subscribing!");
    this.reset();
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect to blog posts
document.querySelectorAll('.blog-post').forEach(post => {
    post.addEventListener('mouseover', () => {
        post.style.transform = 'translateY(-5px)';
        post.style.transition = 'transform 0.3s ease';
    });
    
    post.addEventListener('mouseout', () => {
        post.style.transform = 'translateY(0)';
    });
});