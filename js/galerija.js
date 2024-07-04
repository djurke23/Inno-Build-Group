document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const galleryItems = document.querySelectorAll('.gallery-item');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items with animation
            galleryItems.forEach(galleryItem => {
                if (filter === 'all' || galleryItem.getAttribute('data-type') === filter) {
                    galleryItem.style.display = 'block';
                    galleryItem.style.animation = 'fadeIn 0.5s ease';
                } else {
                    galleryItem.style.display = 'none';
                }
            });
        });
    });

    // Add click animation to nav items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.animation = 'none';
            this.offsetHeight; // Trigger reflow
            this.style.animation = 'pulse 0.3s ease';
        });
    });
});