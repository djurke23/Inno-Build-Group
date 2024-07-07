


// ikonice za nav bar fon
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.getElementById("navLinks");
    var openMenuBtn = document.getElementById("openMenu");
    var closeMenuBtn = document.getElementById("closeMenu");
    
    function showMenu() {
        navLinks.style.right = "0";
        openMenuBtn.style.display = "none"; // Hide the burger icon
    }
    
    function hideMenu() {
        navLinks.style.right = "-200px";
        openMenuBtn.style.display = "block"; // Show the burger icon again
    }

    if(openMenuBtn) openMenuBtn.addEventListener('click', showMenu);
    if(closeMenuBtn) closeMenuBtn.addEventListener('click', hideMenu);
});

// saznaj vise smooth 

document.getElementById('saznajViseBtn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#usluge').scrollIntoView({
        behavior: 'smooth'
    });
});


// faq

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');
        
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            arrow.classList.remove('active');
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            arrow.classList.add('active');
        }
    });
});



// loading screen

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


// Galerija


const galleryItems = [
    { type: 'kuhinja', image: 'slike/galerija/kuhinja.png', title: 'Kuhinja ', description: '' },
    { type: 'kuhinja', image: 'slike/galerija/trpezarija.png', title: 'Trpezarija', description: '' },
    { type: 'kuhinja', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYOKacoSze0iCA06U_k2I077KLS81N2utp0Q&s', title: 'Kuhinja 3', description: '' },
    { type: 'kuhinja', image: 'https://vitorogpromet.rs/wp-content/uploads/2022/12/Kuhinja-Norma-14.png', title: 'Kuhinja 4', description: '' },
    
    { type: 'kupatilo', image: 'slike/galerija/kupatilo 1.png', title: 'Kupatilo 1', description: '' },
    { type: 'kupatilo', image: 'slike/galerija/kupatilo4.png', title: 'Kupatilo 2', description: '' },
    { type: 'kupatilo', image: 'slike/galerija/kupatilo2.png', title: 'Kupatilo 3', description: '' },
    { type: 'kupatilo', image: 'https://th.bing.com/th/id/OIP.t5pYjkPcCtcdWUyTQtyWXgHaEo?w=283&h=180&c=7&r=0&o=5&pid=1.7', title: 'Kupatilo 4', description: '' },
    
    
    
    { type: 'terasa', image: 'slike/galerija/stepenice.png', title: 'Stepenice', description: '' },
    { type: 'terasa', image: 'slike/galerija/terasa.png', title: 'Terasa  ', description: '' },
    { type: 'terasa', image: 'slike/galerija/jakuzi.png', title: 'Balkon', description: '' },
    { type: 'terasa', image: 'https://portoflife.rs/wp-content/uploads/2018/06/terasa-balkon-velika.jpg', title: 'Terasa  2', description: '' },

 //    { type: 'dvoriste', image: 'slike/galerija/soba1.png', title: 'Spavaća Soba', description: '' },
 //    { type: 'dvoriste', image: 'https://provansadekor.rs/wp-content/uploads/2023/07/uredjenje-terase-provansa-green-centar-1.jpg', title: 'Terasa  2', description: '' },
 //   { type: 'dvoriste', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_hndufnhu_abRNxnAtZzl8cKyNrSQcJE6Q&s', title: 'Terasa  3', description: '' },
 //   { type: 'dvoriste', image: 'https://portoflife.rs/wp-content/uploads/2018/06/terasa-balkon-velika.jpg', title: 'Terasa  4', description: '' },

    { type: 'projekti', image: 'slike/galerija/soba.jpg', title: 'Dnevna Soba ', description: '' },
    { type: 'projekti', image: 'slike/galerija/decijasoba.png', title: 'Dečija Soba', description: '' },
    { type: 'projekti', image: 'slike/galerija/soba1.png', title: 'Spavaća Soba', description: '' },
    { type: 'projekti', image: 'slike/galerija/soba2.png', title: 'Spavaća Soba 2', description: '' },
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






// recenzije


const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const dotsContainer = document.querySelector('.dots');

        let currentIndex = 0;

        // Kreiranje tačkica
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            goToSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            goToSlide(currentIndex);
        }

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Automatsko pomeranje svakih 5 sekundi
        setInterval(nextSlide, 5000);
















        //inf slajder

 
        //       const track = document.querySelector('.logo-slide-track');
        
 
        //       track.addEventListener('animationiteration', () => {
 
        //           track.style.animation = 'none';
 
        //           track.offsetHeight; // Trigger reflow
 
        //           track.style.animation = null;
  
        //      });


        //newsletter

        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Hvala na pretplati!');
        });




//STATISTIKA
    
        const stats = [
            { id: 'projectsCompleted', end: 132 },
            { id: 'yearsExperience', end: 15 },
            { id: 'satisfiedClients', end: 132 },
            { id: 'workHours', end: 30000 }
        ];

        function animateStats(duration = 2000) {
            const steps = 60;
            const interval = duration / steps;
            let step = 0;

            const timer = setInterval(() => {
                if (step <= steps) {
                    stats.forEach(stat => {
                        const value = Math.round((stat.end / steps) * step);
                        const element = document.getElementById(stat.id);
                        element.textContent = value;
                        if (step === steps && stat.end >= 1000) {
                            element.textContent += '+';
                        }
                    });
                    step++;
                } else {
                    clearInterval(timer);
                }
            }, interval);
        }

        function checkVisibility() {
            const section = document.getElementById('statsSection');
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
            if (isVisible) {
                animateStats();
                window.removeEventListener('scroll', checkVisibility);
            }
        }

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('load', checkVisibility);