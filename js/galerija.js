
// LOADING SCREEN - sve stranice

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
}); 




// scroll to top


var scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
}

scrollTopBtn.onclick = function() {
    scrollToTop();
}

function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}










// galerija before after



document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.before-after-slider');

    sliders.forEach(slider => {
        const beforeImage = slider.querySelector('.before-image');
        const afterImage = slider.querySelector('.after-image');
        const sliderHandle = slider.querySelector('.slider-handle');

        let isResizing = false;

        const resize = (e) => {
            if (!isResizing) return;
            
            const sliderRect = slider.getBoundingClientRect();
            const x = (e.clientX || e.touches[0].clientX) - sliderRect.left;
            const percent = (x / sliderRect.width) * 100;
            
            if (percent > 0 && percent < 100) {
                afterImage.style.width = `${percent}%`;
                sliderHandle.style.left = `${percent}%`;
            }
        };

        sliderHandle.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isResizing = true;
        });

        sliderHandle.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isResizing = true;
        });

        document.addEventListener('mousemove', resize);
        document.addEventListener('touchmove', resize);

        document.addEventListener('mouseup', () => {
            isResizing = false;
        });

        document.addEventListener('touchend', () => {
            isResizing = false;
        });
    });
});








// Galerija


const galleryItems = [
    { type: 'kuhinja', image: 'https://s3.emmezeta.hr/media/catalog/product/6/6/664140-smart-blok-kuhinja-260x60x212cm-hrast-bijela_1.jpg', title: 'Kuhinja 1', description: 'Lorem ipsum dolor...' },
    { type: 'kuhinja', image: 'https://vitorogpromet.rs/wp-content/uploads/2023/05/dalia-kuhinja.png', title: 'Kuhinja 2', description: 'Lorem ipsum dolor...' },
    { type: 'kuhinja', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOKacoSze0iCA06U_k2I077KLS81N2utp0Q&s', title: 'Kuhinja 3', description: 'Lorem ipsum dolor...' },
    { type: 'kuhinja', image: 'https://vitorogpromet.rs/wp-content/uploads/2022/12/Kuhinja-Norma-14.png', title: 'Kuhinja 4', description: 'Lorem ipsum dolor...' },
    
    { type: 'kupatilo', image: 'https://zadovoljna.nova.rs/wp-content/uploads/2023/12/28/1703765587-profimedia-0832052610-750x500.jpg', title: 'Kupatilo 1', description: 'Lorem ipsum dolor...' },
    { type: 'kupatilo', image: 'https://www.keramikajovanovic.rs/wp-content/uploads/2015/12/malo-kupatilo_small.jpg.webp', title: 'Kupatilo 2', description: 'Lorem ipsum dolor...' },
    { type: 'kupatilo', image: 'https://neml.ba/wp-content/uploads/2023/02/mejtas-kupatilo-1.jpg', title: 'Kupatilo 3', description: 'Lorem ipsum dolor...' },
    { type: 'kupatilo', image: 'https://www.diplon.net/files/images/2020/3/10/malo-kupatilo.jpg', title: 'Kupatilo 4', description: 'Lorem ipsum dolor...' },
    
    { type: 'terasa', image: 'https://provansadekor.rs/wp-content/uploads/2023/07/uredjenje-terasa-6.jpg', title: 'Terasa 1', description: 'Lorem ipsum dolor...' },
    { type: 'terasa', image: 'https://provansadekor.rs/wp-content/uploads/2023/07/uredjenje-terase-provansa-green-centar-1.jpg', title: 'Terasa  2', description: 'Lorem ipsum dolor...' },
    { type: 'terasa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_hndufnhu_abRNxnAtZzl8cKyNrSQcJE6Q&s', title: 'Terasa  3', description: 'Lorem ipsum dolor...' },
    { type: 'terasa', image: 'https://portoflife.rs/wp-content/uploads/2018/06/terasa-balkon-velika.jpg', title: 'Terasa  4', description: 'Lorem ipsum dolor...' },

    { type: 'dvoriste', image: 'https://provansadekor.rs/wp-content/uploads/2023/07/uredjenje-terasa-6.jpg', title: 'Terasa 1', description: 'Lorem ipsum dolor...' },
    { type: 'dvoriste', image: 'https://provansadekor.rs/wp-content/uploads/2023/07/uredjenje-terase-provansa-green-centar-1.jpg', title: 'Terasa  2', description: 'Lorem ipsum dolor...' },
    { type: 'dvoriste', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_hndufnhu_abRNxnAtZzl8cKyNrSQcJE6Q&s', title: 'Terasa  3', description: 'Lorem ipsum dolor...' },
    { type: 'dvoriste', image: 'https://portoflife.rs/wp-content/uploads/2018/06/terasa-balkon-velika.jpg', title: 'Terasa  4', description: 'Lorem ipsum dolor...' },

    { type: 'projekti', image: 'https://provansadekor.rs/wp-content/uploads/2023/07/uredjenje-terasa-6.jpg', title: 'Terasa 1', description: 'Lorem ipsum dolor...' },
    { type: 'projekti', image: 'https://provansadekor.rs/wp-content/uploads/2023/07/uredjenje-terase-provansa-green-centar-1.jpg', title: 'Terasa  2', description: 'Lorem ipsum dolor...' },
    { type: 'projekti', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_hndufnhu_abRNxnAtZzl8cKyNrSQcJE6Q&s', title: 'Terasa  3', description: 'Lorem ipsum dolor...' },
    { type: 'projekti', image: 'https://portoflife.rs/wp-content/uploads/2018/06/terasa-balkon-velika.jpg', title: 'Terasa  4', description: 'Lorem ipsum dolor...' },
];


const gallery = document.querySelector('.gallery');
const filterButtons = document.querySelectorAll('.filter-button');

// Populate gallery
function populateGallery(items) {
    gallery.innerHTML = ''; // Clear existing items
    items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = `gallery-item ${item.type}`;
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-item-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        galleryItem.querySelector('img').addEventListener('click', () => openFullscreen(item.image));
        gallery.appendChild(galleryItem);
    });
}

// Initial population
populateGallery(galleryItems);

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        let filteredItems;
        if (filter === 'all') {
            filteredItems = galleryItems;
        } else {
            filteredItems = galleryItems.filter(item => item.type === filter);
        }
        
        populateGallery(filteredItems);
    });
});

// Full-screen view functionality
function openFullscreen(imageSrc) {
    const fullscreenView = document.createElement('div');
    fullscreenView.className = 'fullscreen-view';
    fullscreenView.innerHTML = `
        <img src="${imageSrc}" alt="Full-screen image">
        <button class="close-fullscreen">&times;</button>
    `;
    document.body.appendChild(fullscreenView);

    fullscreenView.querySelector('.close-fullscreen').addEventListener('click', () => {
        document.body.removeChild(fullscreenView);
    });

    fullscreenView.addEventListener('click', (e) => {
        if (e.target === fullscreenView) {
            document.body.removeChild(fullscreenView);
        }
    });
}
