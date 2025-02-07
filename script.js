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