// Smoothly show content when clicking sidebar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Identify the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Find the currently active section
        const currentActive = document.querySelector('.content section.active');
        
        if (currentActive) {
            // Add fade-out effect
            currentActive.classList.remove('active');
            
            // Wait for the fade-out effect to complete before fading in
            setTimeout(() => {
                currentActive.style.display = 'none'; // Hide previous section
                targetSection.style.display = 'block'; // Show target section
                targetSection.classList.add('active'); // Add fade-in effect
            }, 500); // Match the CSS transition duration
        } else {
            // If no active section, directly show the target
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
        }
    });
});

// Show the first section by default
document.querySelector('.content section').classList.add('active');
document.querySelector('.content section').style.display = 'block';
