// Smoothly show content when clicking sidebar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Hide all sections
        document.querySelectorAll('.content section').forEach(section => {
            section.classList.remove('active');
        });
        // Show the clicked section
        const target = this.getAttribute('href').substring(1);
        document.getElementById(target).classList.add('active');
        
    });
});

// Show the first section by default
document.querySelector('.content section').classList.add('active');
