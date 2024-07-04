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




// before after galerija

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.before-after-slider');
    const beforeImage = slider.querySelector('.before-image');
    const afterImage = slider.querySelector('.after-image');
    const sliderHandle = slider.querySelector('.slider-handle');

    let isResizing = false;

    sliderHandle.addEventListener('mousedown', function(e) {
        e.preventDefault();
        isResizing = true;
    });

    document.addEventListener('mousemove', function(e) {
        if (!isResizing) return;
        
        const sliderRect = slider.getBoundingClientRect();
        const x = e.clientX - sliderRect.left;
        const percent = (x / sliderRect.width) * 100;
        
        if (percent > 0 && percent < 100) {
            afterImage.style.width = `${percent}%`;
            sliderHandle.style.left = `${percent}%`;
        }
    });

    document.addEventListener('mouseup', function() {
        isResizing = false;
    });

    // Touch events for mobile
    sliderHandle.addEventListener('touchstart', function(e) {
        e.preventDefault();
        isResizing = true;
    });

    document.addEventListener('touchmove', function(e) {
        if (!isResizing) return;
        
        const touch = e.touches[0];
        const sliderRect = slider.getBoundingClientRect();
        const x = touch.clientX - sliderRect.left;
        const percent = (x / sliderRect.width) * 100;
        
        if (percent > 0 && percent < 100) {
            afterImage.style.width = `${percent}%`;
            sliderHandle.style.left = `${percent}%`;
        }
    });

    document.addEventListener('touchend', function() {
        isResizing = false;
    });
});
